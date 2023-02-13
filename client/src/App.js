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
      window.location.hash = ''
      setCode(token)
      // console.log(token)
      localStorage.setItem('accessToken', token)
    }
  }, [])

  const logout = () => {
    setCode('')
    localStorage.removeItem("accessToken")
}
  // const code= new URLSearchParams(window.location.search).get('access_token')
  // console.log(code)

//   useEffect(()=>{
//     setMyCode(code.current)
// },[])

  return (
    <div className='App'>
      <header className='App-header'>
    {code ? <Dashboard code={code}/> : <Login logout={logout}/>}
    </header>
    </div>
  )
}

export default App;
