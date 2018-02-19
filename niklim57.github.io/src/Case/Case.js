import React from 'react';
import style from './Case.css';

export default class Case extends React.Component{
  render(){
    return(
      <div className={style.Case}>
        <h2 className={style.Title}>{this.props.title}</h2>
        <div className={style.Wrap}>
          <div className={style.Block}>
           <a  className={style.link1} href="https://fidgetrussia.ru/">
            <img className={style.img} src={this.props.site1}/>
          </a> 
          <a className={style.link} href="http://www.mkr.cc/intro.php">
           <img className={style.img} src={this.props.site}/>
          </a>
  
        </div>
         <div className={style.Block}>
           <a  className={style.link1} href="#">
            <img className={style.img} src={this.props.site1}/>
          </a> 
          <a className={style.link} href="https://mermaid.cloud/eng/index.html#">
           <img className={style.img} src={this.props.site2}/>
          </a>
  
        </div>
        </div>
       
        
      </div>
    );
  }
}