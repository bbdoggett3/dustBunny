import React from 'react';
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import routes from './routes';

function App() {
  return (
    <div className="App">
        {routes}
        <Nav/>
        <Home/>
    </div>
  );
}

export default App;
