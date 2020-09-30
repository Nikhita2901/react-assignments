import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Helloworld from './components/Helloworld';
import Table from './components/Table';



function App() {
  return (
    <div className="App">
      <div className="back-color">
          <Helloworld className="back-color"></Helloworld>
      </div>
      <div>
         <div className="leftspace"> 
           <Table></Table>
         </div>
      </div>
    </div>
  );
} 

export default App;
