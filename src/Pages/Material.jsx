import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css'
import MenuBar from "../Components/MenuBar";
import TableComponent from "../Components/TableContent";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";


export default function Material({AddPath, urlView , urlEdit, deleteUrl}){
    const navigate = useNavigate();
    const titulo = "Tabela de Materiais";
    const headers = ["Nome", "Serial", "Disponibilidade"];
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [IsAdmin,setIsAdmin] = useState('')
    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
      };

      const dados = [
        { nome: "Halteres 5kg", serial: 10, disponibilidade: "Disponível" },
        { nome: "Bicicleta Ergométrica", quantidade: 4, disponibilidade: "Indisponível" },
        { nome: "Corda de Pular", quantidade: 15, disponibilidade: "Disponível" },
        { nome: "Kettlebell 8kg", quantidade: 6, disponibilidade: "Disponível" },
        { nome: "Colchonete", quantidade: 12, disponibilidade: "Disponível" }
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
            <TableComponent dados={dados} headers={headers} titulo={"Tabela de Materiais"} AddPath={AddPath} urlView={"material/view/"} keyUnique={"id"} urlEdit={"material/edit/"}/>
            <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
        </div>
        </>
    );
}