import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css';
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";
import "../Assets/Forms.css";
import addIcon from '../Assets/add-64px.png';  // Caminho para o ícone "mais"
import removeIcon from '../Assets/lixo.png'; // Caminho para o ícone "remover"

export default function CadastroTreino({ submitUrl }) {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [formData, setFormData] = useState({
        objetivo: '',
        dificuldade: '',
        exercicio_id: '',
        aluno_id:''
    });
    const [exercicios, setExercicios] = useState([{id:'1',nome:"base"},{id:'2',nome:"base2"}]);
    const [alunos, setAlunos] = useState([{id:'1',nome:"base"},{id:'2',nome:"base2"}]);

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
        // Prepare the data with selected aulas
        const dataToSubmit = {
            ...formData
        };

        /*axios.post(submitUrl, dataToSubmit)
            .then((response) => {
                setFeedback({ message: 'Cadastro realizado com sucesso!', type: 'success' });
            })
            .catch((error) => {
                setFeedback({ message: 'Erro ao cadastrar aluno!', type: 'error' });
            });*/

            console.log(dataToSubmit)
    };

    return (
        <>
            <TopBar Titulo={"Sistema Academia"} Username={username} />
            <div className="home-page">
                <MenuBar />

                <form className="generic-form" onSubmit={handleSubmit}>
                    {/* Matrícula */}
                    <div className="form-group">
                        <label htmlFor="objetivo">Objetivo</label>
                        <input
                            type="text"
                            id="objetivo"
                            name="objetivo"
                            value={formData.objetivo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Nome */}
                    <div className="form-group">
                        <label htmlFor="dificuldade">Dificuldade</label>
                        <input
                            type="text"
                            id="dificuldade"
                            name="dificuldade"
                            value={formData.dificuldade}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Plano Selection */}
                    <div className="form-group">
                        <label htmlFor="exercicio_id">Exercicio</label>
                        <select
                            id="exercicio_id"
                            name="exercicio_id"
                            value={formData.exercicio_id}
                            onChange={handleChange}
                            required
                        >
                            {exercicios.length > 0 ? (
                                exercicios.map((exercicio) => (
                                    <option key={exercicio.id} value={exercicio.id}>
                                        {exercicio.nome}
                                    </option>
                                ))
                            ) : (
                                <option value="">Carregando...</option>
                                
                            )}
                        </select>
                    </div>

                    {/* Plano Selection */}
                    <div className="form-group">
                        <label htmlFor="aluno_id">aluno</label>
                        <select
                            id="aluno_id"
                            name="aluno_id"
                            value={formData.plano_id}
                            onChange={handleChange}
                            required
                        >
                            {alunos.length > 0 ? (
                                alunos.map((aluno) => (
                                    <option key={aluno.id} value={aluno.id}>
                                        {aluno.nome}
                                    </option>
                                ))
                            ) : (
                                <option value="">Carregando...</option>
                                
                            )}
                        </select>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>

                <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
            </div>
        </>
    );
}
