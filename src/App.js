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
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/32/32/1',
  'name': '김선수',
  'birthday': '750426',
  'gender': '남자',
  'job': '실업코치'
},
{
  'id': 2,
  'image': 'https://placeimg.com/32/32/2',
  'name': '김운동',
  'birthday': '850426',
  'gender': '남자',
  'job': '프로선수'
},
{
  'id': 3,
  'image': 'https://placeimg.com/32/32/3',
  'name': '김체력',
  'birthday': '950426',
  'gender': '남자',
  'job': '국가대표'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }        
      </div>
    )
  }
}

export default App;
