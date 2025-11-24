import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
                <img src={logo} alt="Logo Passoia" />
           
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADES</li>
            </ul>
        </header>
    );
}

export default Header;