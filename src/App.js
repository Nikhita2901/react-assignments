import React from 'react';
import logo from './logo.svg';
import './App.css';
import Helloworld from './components/Helloworld';
import Table from './components/Table';



function App() {
  return (
    <div className="App">
      <div className="back-color">
          <Helloworld className="back-color"></Helloworld>
      </div>
      <br></br>
      <div className="leftspace"> 
         <Table></Table>
      </div>
    </div>
  );
}

export default App;
