import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
        </div>
    )
}

export default Header;