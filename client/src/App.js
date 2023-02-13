import React,{useEffect} from 'react'
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {

  // useEffect(() => {
  //   const hash = window.location.hash
  //   if(hash){
  //     const token = hash.substring(1).split('&')[0].split('=')[1];
  //     console.log(token)
  //   }
  // }, [])

  const code = new URLSearchParams(window.location.search).get('token')
  console.log(code)
  return (
    code ? <Dashboard code={code}/> : <Login/>
    // <>
    // <Login/>
    // </>
  )
}

export default App;
