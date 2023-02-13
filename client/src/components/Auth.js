import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Auth(code) {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios.post('http://localhost:3001/login', {
      code,
    }).then(res => {
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
      window.history.pushState({}, null, '/')
    }).catch(() => {
      window.location = '/'
    })
  }, [code])

  useEffect(() => {
    if(!refreshToken || !expiresIn) return;

    //using setInterval to refresh it automatically right before the access token expires
    const interval = setInterval(()=>{

      axios.post('http://localhost:3001/refresh', {
        refreshToken,
      }).then(res => {
        setAccessToken(res.data.accessToken)
        setExpiresIn(res.data.expiresIn)
      }).catch(() => {
        window.location = '/'
      })
    }, (expiresIn-60)*1000)

//if our refresh token expires and changes before an actual refresh, we just clear the timeout so we don't use an incorrect refresh token
    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}
