import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Form from './Form';

function App() {
  const url = "https://reqres.in/api/users?page=2";


  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then(data => console.log(data))
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
    </div>
  );
}

export default App;
