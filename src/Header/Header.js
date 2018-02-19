import React, {Component} from 'react';
import style from './Header.css';
import logo from './../img/logo.png';
import arrow from './../img/left-arrow.png';


class Header extends Component {
  render() {
    return(
        <div className={style.Header}>
          <img className={style.Logo} src={logo}/>
        
          <div className={style.Content}>
            <h1 className={style.HeaderText}>Зравствуйте!<br/>Меня зовут Ника.<br/>
            Я начинающий дизайнер и Frontend-разработчик.<br/>
            Листайте вниз, чтобы познакомиться со мной поближе!</h1>
          </div>

          <div className={style.Arrow}>
            <img src={arrow}/>
          </div>
       
        </div>
    )
  }
  
}

export default Header;