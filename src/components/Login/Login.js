import React from "react";
import './Login.css';

function Login(props) {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLoginChange(e) {

        setLogin(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(login, password);
    }

    return (
        <section className="login">
            <form className="login__form auth__form" onSubmit={handleSubmit}>
                <fieldset className="login__fields auth__fields">
                    <p className="login__input-name auth__input-name">Логин</p>
                    <input type="text" name="login" className="login__input auth__input"
                            value={login || ''} onChange={handleLoginChange}
                           required />
                    <span className="login__error auth__error"></span>
                    <p className="login__input-name auth__input-name">Пароль</p>
                    <input type="password" name="password" className="login__input auth__input"
                            value={password || ''} onChange={handlePasswordChange}
                           required />
                    <span className="login__error auth__error"></span>
                </fieldset>
                <span className="login__submit-error auth__submit-error">{props.errorMessage}</span>
                <button type="submit"
                        className="login__submit-button auth__submit-button">
                    Войти</button>
            </form>
        </section>
    )
}

export default Login;