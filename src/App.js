import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import VisGraphContainer from './containers/VisGraphContainer/VisGraphContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <VisGraphContainer/>
    </div>
  );
}

export default App;
