import React from 'react';
import './App.css';
//import NodeGraph from './containers/NodeGraph/NodeGraph';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import VisGraphContainer from './containers/VisGraphContainer/VisGraphContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Search/>
        <VisGraphContainer/>
    </div>
  );
}

export default App;
