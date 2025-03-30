import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Assets/HomePage.css'
import MenuBar from "../Components/MenuBar";
import TableComponent from "../Components/TableContent";
import TopBar from "../Components/TopBar";
import FeedbackPopup from "../Components/FeedbackPopup";



export default function Funcionario({AddPath , urlView , urlEdit , deleteUrl}){
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState({ message: '', type: '' });
    const [username, setUsername] = useState('');
    const [funcionarios,setFuncionario] = useState('')
    const [IsAdmin,setIsAdmin] = useState('')

    const dados = [
        {id:3, nome: "João Silva", nit: "123456789", cargo: "Instrutor" },
        {id:4, nome: "Maria Oliveira", nit: "987654321", cargo: "Administrador" },
        {id:5,nome: "Carlos Santos", nit: "456789123", cargo: "Instrutor" },
        {id:6, nome: "Ana Pereira", nit: "321654987", cargo: "Administrador" }
      ];

    const [alunos,setAlunos] = useState('')

    const closeFeedback = () => {
        setFeedback({ message: '', type: '' });
      };

    
    
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

    const headers = ["Nome", "NIT", IsAdmin? "Cargo" : "Grau_Instrutor"];

    useEffect(() => {
        axios.get('http://localhost:5000/ListarFuncionarios', { withCredentials: true })
            .then(response => {
                if (response.data.funcionarios) {
                    setFuncionario(response.data.funcionarios);
                }
            })
            .catch(() => {
                // Tratar erro (se necessário)
            });
    }, []);  // Lista de dependências vazia, a requisição será feita apenas uma vez
    
    return (
        <>
        <TopBar Titulo={"Sistema Academia"} Username={username} IsAdmin={IsAdmin}/>
        <div class="home-page">
            <MenuBar />
            <TableComponent dados={funcionarios} headers={headers} titulo={"Tabela de Funcionários"} AddPath={AddPath} urlView={"/funcionario/view"} keyUnique={"nit"} urlEdit={"/funcionario/edit"} deleteUrl={"http://localhost:5000/ExcluirFuncionario"}/>
            <FeedbackPopup message={feedback.message} type={feedback.type} onClose={closeFeedback} />
        </div>
        </>
    );
}