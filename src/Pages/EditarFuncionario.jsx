import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import '../Assets/HomePage.css';
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";
import "../Assets/Forms.css";
import addIcon from '../Assets/add-64px.png';  // Caminho para o ícone "mais"
import removeIcon from '../Assets/lixo.png'; // Caminho para o ícone "remover"

function formatarData(dataString) {
    const data = new Date(dataString);

    const ano = data.getUTCFullYear();
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Janeiro = 0
    const dia = String(data.getUTCDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
}


export default function EditarFuncionario({ submitUrl}) {
    const navigate = useNavigate();
    const {id} = useParams()
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [IsAdm, setIsAdmin] = useState('');
    const [formData, setFormData] = useState({
        matricula: '',
        nome: '',
        data_nascimento: '',
        cpf: '',
        email: '',
        telefone: '',
        logradouro: '',
        cep: '',
        rua: '',
        num_casa: '',
        bairro: '',
        cidade: '',
        username: '',
        password:'',
        salario:'',
        data_contratacao:'',
        data_final:'',
        is_admin: false,  // Inicializando como false
        nivel_graduacao: '',
        cargo: '' // Adicionando o campo 'cargo'
    });
    //const [formData, setFormData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/session', { withCredentials: true })
            .then(response => {
                if (response.data.permission === 'OK') {
                    setUsername(response.data.user);
                    setIsAdmin(response.data.isAdm);
                } else {
                    navigate('/');
                }
            })
            .catch(() => navigate('/'));
    }, [navigate]);

    useEffect(() => {
        axios.get('http://localhost:5000/FormAtualizarFuncionario/' + id, { withCredentials: true })
            .then(response => {
                if (response.data.funcionario) {
                    console.log(response.data.funcionario)
                    setFormData({
                        nit: response.data.funcionario.funcionario.nit ,
                        nome:  response.data.funcionario.funcionario.nome,
                        data_nascimento: formatarData(response.data.funcionario.funcionario.data_nascimento),
                        cpf: response.data.funcionario.funcionario.cpf,
                        email: response.data.funcionario.funcionario.email,
                        telefone: response.data.funcionario.funcionario.telefone,
                        logradouro: response.data.funcionario.endereco.logradouro,
                        cep: response.data.funcionario.endereco.cep,
                        rua: response.data.funcionario.endereco.rua,
                        num_casa: response.data.funcionario.endereco.num_casa,
                        bairro: response.data.funcionario.endereco.bairro,
                        cidade: response.data.funcionario.endereco.cidade,
                        username:response.data.funcionario.usuario.username,
                        password:'',
                        salario:parseInt(response.data.funcionario.contrato.salario,10),
                        data_contratacao:formatarData(response.data.funcionario.contrato.data_contratacao),
                        data_final: formatarData(response.data.funcionario.contrato.data_final),
                        is_admin:  response.data.funcionario.usuario.is_adm, 
                        nivel_graduacao: response.data.funcionario.usuario.is_adm? null :  response.data.funcionario.instrutor.grau_instrutuor ,
                        cargo: response.data.funcionario.usuario.is_adm? response.data.funcionario.administrador.cargo_administrador : null,
                    });
                } else {

                }
            })
            .catch();
    }, [navigate]);

    console.log(formData)
    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
    };

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value // Verificando se é checkbox
        }));
    };


    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare the data with selected aulas
        const dataToSubmit = {
            ...formData,
        };

        axios.put(submitUrl + '/' + id, dataToSubmit)
            .then((response) => {
                setFeedback({ message: 'Cadastro realizado com sucesso!', type: 'success' });
            })
            .catch((error) => {
                setFeedback({ message: 'Erro ao cadastrar aluno!', type: 'error' });
            });
    };

    return (
        <>
            <TopBar Titulo={"Sistema Academia"} Username={username} IsAdmin={IsAdm} />
            <div className="home-page">
                <MenuBar />

                <form className="generic-form" onSubmit={handleSubmit}>
                    {/* Matrícula */}
                    <div className="form-group">
                        <label htmlFor="nit">NIT</label>
                        <input
                            type="text"
                            id="nit"
                            name="nit"
                            value={formData.nit}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Nome */}
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Data de Nascimento */}
                    <div className="form-group">
                        <label htmlFor="data_nascimento">Data de Nascimento</label>
                        <input
                            type="date"
                            id="data_nascimento"
                            name="data_nascimento"
                            value={formData.data_nascimento}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* CPF */}
                    <div className="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Telefone */}
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Logradouro */}
                    <div className="form-group">
                        <label htmlFor="logradouro">Logradouro</label>
                        <input
                            type="text"
                            id="logradouro"
                            name="logradouro"
                            value={formData.logradouro}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* CEP */}
                    <div className="form-group">
                        <label htmlFor="cep">CEP</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            value={formData.cep}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Rua */}
                    <div className="form-group">
                        <label htmlFor="rua">Rua</label>
                        <input
                            type="text"
                            id="rua"
                            name="rua"
                            value={formData.rua}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Número da Casa */}
                    <div className="form-group">
                        <label htmlFor="num_casa">Número da Casa</label>
                        <input
                            type="text"
                            id="num_casa"
                            name="num_casa"
                            value={formData.num_casa}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Bairro */}
                    <div className="form-group">
                        <label htmlFor="bairro">Bairro</label>
                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            value={formData.bairro}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Cidade */}
                    <div className="form-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Usuario */}
                    <div className="form-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Senha */}
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Salário */}
                    <div className="form-group">
                        <label htmlFor="salario">Salário</label>
                        <input
                            type="number"
                            id="salario"
                            name="salario"
                            value={formData.salario}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Data de Contratação */}
                    <div className="form-group">
                        <label htmlFor="data_contratacao">Data de Contratação</label>
                        <input
                            type="date"
                            id="data_contratacao"
                            name="data_contratacao"
                            value={formData.data_contratacao}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data_final">Data de Final de Contrato</label>
                        <input
                            type="date"
                            id="data_final"
                            name="data_final"
                            value={formData.data_final}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Checkbox is_admin */}
                    <div className="form-group">
                        <label htmlFor="is_admin">
                            <input
                                type="checkbox"
                                id="is_admin"
                                name="is_admin"
                                checked={formData.is_admin}
                                onChange={handleChange}
                            />
                            Administrador
                        </label>
                    </div>

                    {/* Cargo ou Grau de Graduação */}
                    {formData.is_admin ? (
                        <div className="form-group">
                            <label htmlFor="cargo">Cargo</label>
                            <input
                                type="text"
                                id="cargo"
                                name="cargo"
                                value={formData.cargo}
                                onChange={handleChange}
                            />
                        </div>
                    ) : (
                        <div className="form-group">
                            <label htmlFor="nivel_graduacao">Grau de Graduação</label>
                            <input
                                type="text"
                                id="nivel_graduacao"
                                name="nivel_graduacao"
                                value={formData.nivel_graduacao}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <button type="submit">Cadastrar</button>
                </form>

                <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
            </div>
        </>
    );
}
