import React from 'react';
import style from './Contact.css';
import foto from './../img/foto.png';

export default class Contact extends React.Component{
  render(){
    return(
      <div className={style.Contact}>
        <h2 className={style.Title}>{this.props.title}</h2>
        <div className={style.Wrap}>
          <div className={style.Block}>
            <a className={style.link} href="tel:+79990957577">+79990957577</a>
            <a className={style.link}  href="mailto:niklim57@yandex.ru">niklim57@yandex.ru</a>
            <a className={style.link}  href="https://github.com/niklim57">https://github.com/niklim57</a>
            <a className={style.link}  href="https://www.facebook.com/nika.ruleva">https://www.facebook.com/nika.ruleva</a>
          </div>
          <div className={style.foto}>
            <img src={foto}/>
          </div>
        </div>
        
       
      </div>
    )
  }
}