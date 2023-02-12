import React from 'react'
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {
  const code = new URLSearchParams(window.location.search).get('code')
  return (
    code ? <Dashboard code={code}/> : <Login/>

  )
}

export default App;