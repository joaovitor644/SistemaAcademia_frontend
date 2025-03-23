import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css'
import MenuBar from "../Components/MenuBar";
import TableComponent from "../Components/TableContent";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";


export default function Aluno(){
    const navigate = useNavigate();
    const titulo = "Tabela de Alunos";
    const headers = ["Aluno", "Contato", "Status"];
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
      };

    const dados = [
        { id: 1, aluno: 'Roberto da Silva Junior', contato: '9123912398', status: 'Pago' },
        { id: 2, aluno: 'Pedro Paulo Batista Santos', contato: '1823912389', status: 'Pago' },
        { id: 3, aluno: 'Maria Oliveira', contato: '9834567890', status: 'Pendente' },
        { id: 4, aluno: 'Carlos Eduardo', contato: '9876543210', status: 'Pago' },
        { id: 5, aluno: 'Ana Carolina', contato: '9988776655', status: 'Pendente' },
        { id: 6, aluno: 'Fernanda Lima', contato: '9123456789', status: 'Pago' },
        { id: 7, aluno: 'Ricardo Almeida', contato: '9876541230', status: 'Pendente' },
        { id: 8, aluno: 'Juliana Costa', contato: '9988771234', status: 'Pago' },
        { id: 9, aluno: 'Lucas Mendes', contato: '9123451234', status: 'Pendente' },
        { id: 10, aluno: 'Patrícia Souza', contato: '9876549876', status: 'Pago' },
        { id: 11, aluno: 'Gabriel Fernandes', contato: '9988775566', status: 'Pendente' },
        { id: 12, aluno: 'Camila Rodrigues', contato: '9123455566', status: 'Pago' },
        { id: 13, aluno: 'Bruno Martins', contato: '9876545566', status: 'Pendente' },
        { id: 14, aluno: 'Amanda Ribeiro', contato: '9988771234', status: 'Pago' },
        { id: 15, aluno: 'Thiago Oliveira', contato: '9123451234', status: 'Pendente' },
        { id: 16, aluno: 'Isabela Santos', contato: '9876549876', status: 'Pago' },
        { id: 17, aluno: 'Rafael Pereira', contato: '9988775566', status: 'Pendente' },
        { id: 18, aluno: 'Larissa Costa', contato: '9123455566', status: 'Pago' },
        { id: 19, aluno: 'Diego Alves', contato: '9876545566', status: 'Pendente' },
        { id: 20, aluno: 'Carolina Mendes', contato: '9988771234', status: 'Pago' },
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