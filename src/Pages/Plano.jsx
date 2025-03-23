import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css'
import MenuBar from "../Components/MenuBar";
import TableComponent from "../Components/TableContent";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";


export default function Planos(){
    const navigate = useNavigate();
    const titulo = "Tabela de Planos";
    const headers = ["Nome", "Custo", "Descrição"];
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
      };

      const dados = [
        { nome: "Plano Básico", custo: "R$ 99,99", descrição: "Acesso à academia durante o horário comercial" },
        { nome: "Plano Premium", custo: "R$ 149,99", descrição: "Acesso 24h, aulas de grupo e descontos em produtos" },
        { nome: "Plano VIP", custo: "R$ 199,99", descrição: "Acesso 24h, aulas de grupo, personal trainer e estacionamento grátis" }
      ];
    
    
    
    
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