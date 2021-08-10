import {Link} from "react-router-dom";
import './Header.css';

function Header(props) {

    function onClick() {
        props.onSignOut();
    }

    return (
        <section className="header">
            <Link className="header__link" to="/">На главную</Link>
            <Link className="header__link" to="/news">Новости</Link>
            <Link className="header__link" to="/profile">Профиль</Link>
            {props.loggedIn ? <button className="header__link" onClick={onClick}>Выйти</button> : ''}
        </section>
    )
}

export default Header;