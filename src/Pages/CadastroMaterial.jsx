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

export default function CadastroMaterial({ submitUrl }) {
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [IsAdmin,setIsAdmin] = useState('')
    const [formData, setFormData] = useState({
        nome: '',
        numserie: '',
        disponibilidade: ''
    });
    const [planos, setPlanos] = useState([]);
    const [aulas, setAulas] = useState([]);
    const [aulaSelecionada, setAulaSelecionada] = useState('');

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
                setFeedback({ message: 'Erro ao cadastrar Aparelho!', type: 'error' });
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

                    {/* Quantidade */}
                    <div className="form-group">
                        <label htmlFor="numserie">Numero De Serie</label>
                        <input
                            type="text"
                            id="numserie"
                            name="numserie"
                            value={formData.quantidade}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Disponibilidade */}
                    <div className="form-group">
                        <label htmlFor="Disponibilidade">Disponibilidade</label>
                        <input
                            type="text"
                            id="Disponibilidade"
                            name="Disponibilidade"
                            value={formData.Disponibilidade}
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
