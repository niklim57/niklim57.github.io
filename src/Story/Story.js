import React from 'react';
import style from './Story.css';

class Story extends React.Component {
  render(){
    return(
    <div className={style.Story}>
      <h2 className={style.Title}>{this.props.title}</h2>
      <p className={style.Text}>{this.props.text}</p>
    </div>
  );
}  
}

export default Story;