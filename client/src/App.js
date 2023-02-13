import React,{useEffect, useState} from 'react'
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {

  const [code,setCode] = useState('')


  useEffect(() => {
    const hash = window.location.hash

    if(hash){
      const token = hash.substring(1).split('&')[0].split('=')[1];
      setCode(token)
      console.log(token)
      localStorage.setItem('accessToken', token)
    }
  }, [])


  // const code= new URLSearchParams(window.location.search).get('access_token')
  // console.log(code)

//   useEffect(()=>{
//     setMyCode(code.current)
// },[])

  return (
    code ? <Dashboard code={code}/> : <Login/>
    // <>
    // <Login/>
    // </>
  )
}

export default App;
