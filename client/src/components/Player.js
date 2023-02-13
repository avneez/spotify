import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useState, useEffect } from "react"


export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)

  //whenever we change play set track state true
  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }} //if we are not playing, set state false
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}