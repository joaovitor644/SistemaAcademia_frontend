import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate , useParams} from "react-router-dom";
import '../Assets/HomePage.css';
import MenuBar from "../Components/MenuBar";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";
import "../Assets/Forms.css";
import addIcon from '../Assets/add-64px.png';  // Caminho para o ícone "mais"
import removeIcon from '../Assets/lixo.png'; // Caminho para o ícone "remover"

export default function EditarExercicio({ submitUrl }) {
    const {id} = useParams()
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    /*const [formData, setFormData] = useState({
        objetivo: '',
        dificuldade: '',
        exercicio_id: '',
        aluno_id:''
    });*/
    const [formData, setFormData] = useState('');
    const [materiais, setMateriais] = useState([{id:'1',nome:"base"},{id:'2',nome:"base2"}]);
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

                    {/* Nome */}
                    <div className="form-group">
                        <label htmlFor="musculo">Musculo</label>
                        <input
                            type="text"
                            id="musculo"
                            name="musculo"
                            value={formData.musculo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="series">Series</label>
                        <input
                            type="text"
                            id="series"
                            name="series"
                            value={formData.series}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="repeticoes">Repetições</label>
                        <input
                            type="text"
                            id="repeticoes"
                            name="repeticoes"
                            value={formData.repeticoes}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Plano Selection */}
                    <div className="form-group">
                        <label htmlFor="material_id">Material</label>
                        <select
                            id="material_id"
                            name="material_id"
                            value={formData.material_id}
                            onChange={handleChange}
                            required
                        >
                            {materiais.length > 0 ? (
                                materiais.map((material) => (
                                    <option key={material.id} value={material.id}>
                                        {material.nome}
                                    </option>
                                ))
                            ) : (
                                <option value="">Carregando...</option>
                                
                            )}
                        </select>
                    </div>

                    <button type="submit">Editar</button>
                </form>

                <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
            </div>
        </>
    );
}
