import React from 'react';
import './App.css';

import {Route, Switch, useHistory} from 'react-router-dom';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import News from '../News/News';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Profile from '../Profile/Profile';

import * as api from '../../utils/api';

function App() {
  const isLoggedIn = localStorage.getItem('loggedIn');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [allNews, setAllNews] = React.useState([]);

  const history = useHistory();

  function handleLogin(email, password) {

      const loginPromise = new Promise(function (resolve, reject) {
          if (email.toLowerCase() === 'admin' && password === '12345') {
              resolve('Запрос обработан успешно');
          } else {
              reject('Имя пользователя или пароль введены не верно');
          }
      });

      loginPromise
          .then(() => {
              localStorage.setItem('loggedIn', 'true');
              history.push('/profile');
          })
          .catch((err) => {
              setErrorMessage(err);
          });
  }

  function handleSignOut() {
      localStorage.removeItem('loggedIn')
      history.push('/signin');
      setErrorMessage('');
  }

  function getAllNews() {
      api.getNews()
          .then((res) => {
              setAllNews(res.data);
          })
          .catch(err => console.log(err))
  }

  React.useEffect(() => {
        getAllNews();
      }, []);

  return (
      <div className="page">
        <Header loggedIn={isLoggedIn} onSignOut={handleSignOut}/>
        <Switch>

          <Route exact path="/">
            <Main loggedIn={isLoggedIn}/>
          </Route>

          <Route exact path="/news">
            <News news={allNews}/>
          </Route>

          <ProtectedRoute exact path="/profile" loggedIn={isLoggedIn} component={Profile} />

          <Route exact path="/signin" >
            <Login onSubmit={handleLogin} errorMessage={errorMessage}/>
          </Route>

        </Switch>

      </div>

  );
}

export default App;
