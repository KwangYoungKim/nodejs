import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello React Project!
        </p>

      </header>
    </div>
  );
} */
/*   render(){
    return(
      <div className="gray-background">
          <img src={logo} alt="logo"/>
          <p><h2>
            Let's develop management system!</h2>
          </p>
      </div>
    )
  }
 */
const customer ={
  'name':'김광용',
  'birthday':'650426',
  'gender':'남자',
  'job':'회사원'


}
class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    )
  }
}

export default App;
