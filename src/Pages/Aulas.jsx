import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css'
import MenuBar from "../Components/MenuBar";
import TableComponent from "../Components/TableContent";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";


export default function Aulas(){
    const navigate = useNavigate();
    const titulo = "Tabela de Aulas";
    const headers = ["Tipo", "Horario", "Sala"];
    const [planos,setPlanos] = useState('')
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [IsAdmin,setIsAdmin] = useState('')
    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
      };
    
      const aulas = [
        { tipo: "Musculação", horario: "06:00 - 07:00", sala: "A" },
        { tipo: "Yoga", horario: "07:30 - 08:30", sala: "B" },
        { tipo: "Pilates", horario: "09:00 - 10:00", sala: "C" },
        { tipo: "Zumba", horario: "10:30 - 11:30", sala: "A" },
        { tipo: "Spinning", horario: "12:00 - 13:00", sala: "B" }
      ];
    
    /*useEffect(() => {
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
    }, [navigate]);*/

    /*
    useEffect(() => {
        axios.get('http://localhost:5000/ListarPlano', { withCredentials: true })
            .then(response => {
                if (response.data.planos) {
                    setPlanos(response.data.planos)
                    console.log(response.data.planos)
                } else {
                    setPlanos([])
                }
            })
            .catch(() => {
                setPlanos([])
            });
    }, []);  // Lista de dependências vazia, a requisição será feita apenas uma vez
    */
    return (
        <>
        <TopBar Titulo={"Sistema Academia"} Username={username} IsAdmin={IsAdmin}/>
        <div class="home-page">
            <MenuBar />
            <TableComponent titulo={titulo} dados={aulas} headers={headers} AddPath={"/aulas/cadastro"} urlEdit={"/aulas/edit/"} urlView={"/aulas/view"} keyUnique={"id"} />
            <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
        </div>
        </>
    );
}