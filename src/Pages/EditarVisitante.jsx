import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate , useParams } from "react-router-dom";
import '../Assets/HomePage.css';
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";
import "../Assets/Forms.css";
import addIcon from '../Assets/add-64px.png';  // Caminho para o ícone "mais"
import removeIcon from '../Assets/lixo.png'; // Caminho para o ícone "remover"

export default function EditarVisitante({ submitUrl }) {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        data_visita: '',
        cpf: '',
        telefone: '',
        logradouro: '',
        cep: '',
        rua: '',
        num_casa: '',
        bairro: '',
        cidade: '',
    });

    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
    };

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare the data with selected
        const dataToSubmit = {
            // implement
        };

        axios.post(submitUrl, dataToSubmit)
            .then((response) => {
                setFeedback({ message: 'Cadastro realizado com sucesso!', type: 'success' });
            })
            .catch((error) => {
                setFeedback({ message: 'Erro ao cadastrar visitante!', type: 'error' });
            });
    };

    return (
        <>
            <TopBar Titulo={"Sistema Academia"} Username={username} />
            <div className="home-page">
                <MenuBar />

                <form className="generic-form" onSubmit={handleSubmit}>

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

                    {/* Data de Visita */}
                    <div className="form-group">
                        <label htmlFor="data_visita">Data de Visita</label>
                        <input
                            type="date"
                            id="data_nascimento"
                            name="data_visita"
                            value={formData.data_visita}
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


                    <button type="submit">Cadastrar</button>
                </form>

                <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
            </div>
        </>
    );
}
