import React from 'react';
import style from './Show.css';



class Show extends React.Component{
  render(){
    return(
      <div className={style.Show}>
        <h2 className={style.Title}>{this.props.title}</h2>
        <div className={style.Case}>
          <img className={style.Img1} src={this.props.img1}/>
          <img className={style.Img} src={this.props.img2}/>
        </div>
      </div>
  
      
      
    )
  }
}

export default Show;