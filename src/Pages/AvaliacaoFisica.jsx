import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css'
import MenuBar from "../Components/MenuBar";
import TableComponent from "../Components/TableContent";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";


export default function Avaliacao(){
    const navigate = useNavigate();
    const titulo = "Tabela de Avaliação Física";
    const headers = ["Nome", "CPF", "Data"];
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
      };

      const dados = [
        { nome: "João Silva", cpf: "123.456.789-00", data: "01/01/2025" },
        { nome: "Maria Oliveira", cpf: "987.654.321-00", data: "02/01/2025" },
        { nome: "Carlos Souza", cpf: "555.666.777-88", data: "03/01/2025" }
      ];
    
    
    /*
    useEffect(() => {
        axios.get('http://localhost:5000/session', { withCredentials: true })
            .then(response => {
                if (response.data.permission === 'OK') {
                    setUsername(response.data.user);
                } else {
                    navigate('/');
                }
            })
            .catch(() => navigate('/'));
    }, [navigate]);
    */
    return (
        <>
        <TopBar Titulo={"Sistema Academia"} Username={username}/>
        <div class="home-page">
            <MenuBar />
            <TableComponent titulo={titulo} dados={dados} headers={headers}/>
            <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
        </div>
        </>
    );
}