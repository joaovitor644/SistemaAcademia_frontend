import "../Assets/TopBar.css"
import Exit from "../Assets/sair.png"
export default function TopBar(){
    return (
        <div class="top-bar">
            <h3>Menu</h3>
            <div class="title">Sistema Academia</div>

            
            <div class="user-info">
                <h3>Usuário </h3>
                <img src={Exit} />
            </div>
        </div>
    );
}