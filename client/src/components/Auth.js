import React,{useEffect, useState} from 'react'
import axios from 'axios'

export default function Auth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {

        })
    },[code])

  return (
    <div>Auth</div>
  )
}
