import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance 
// in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


class EventHandling extends React.Component{
/*   constructor(props){
    super(props);
  } */
  handleClick(){
    console.log("Event Accourd");
  }
  render(){
    return(
      <h1>
        <button onClick={this.handleClick}>버튼</button>
      </h1>
    )
  }
}
ReactDOM.render(<EventHandling/>,document.getElementById('root1'));