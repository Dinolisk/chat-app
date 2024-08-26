import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/Chat';
import SideNav from './components/SideNav';
import './App.css';  // Behåll denna för CSS-styling

function App() {
  return (
    <div className="App">
      {/* Sidenav kan placeras överst eller på sidan */}
      <SideNav />

      {/* Visa först Register eller Login beroende på om användaren är inloggad */}
      <Register />
      <Login />

      {/* När användaren är inloggad, visa chatten */}
      <Chat />
    </div>
  );
}

export default App;
