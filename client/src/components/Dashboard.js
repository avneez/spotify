// import Auth from "./Auth.js"
import React, { useState, useEffect } from "react"
import '../styles/Dashboard.css'
import SpotifyWebApi from "spotify-web-api-node"
import TrackSearchResult from "./TrackSearchResult"
import axios from "axios"
import Player from "./Player"


const spotifyApi = new SpotifyWebApi({
  clientId: '810804b9e3484f579fffb7b40fa27322'
})

const Dashboard = ({ code }) => {

  //saving accessToken so that it can be used in future calls
  //const accessToken = Auth(code)
  const accessToken = code;
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  // const [lyrics, setLyrics] = useState("")

  const chooseTrack=(track)=> {
    setPlayingTrack(track)
    setSearch("")
    // setLyrics("")
  }

  // useEffect(() => {
  //   if (!playingTrack) return

  //   axios
  //     .get("http://localhost:3001/lyrics", {
  //       params: {
  //         track: playingTrack.title,
  //         artist: playingTrack.artist,
  //       },
  //     })
  //     .then(res => {
  //       setLyrics(res.data.lyrics)
  //     })
  // }, [playingTrack])


  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancelR = false
    spotifyApi.searchTracks(search).then(res => {
      console.log(res.body.tracks)
      if(cancelR) return
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
          if (image.height < smallest.height) return image
          return smallest
        }, track.album.images[0])
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      }))
    })

    return ()=>{cancelR=true}
  }, [search, accessToken])


  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }


  return (
    <div className="container">Search Songs
      <form className="form" >
        <input type='text'
          placeholder="Search Songs/Artists"
          value={search}
          onChange={handleSearch} />
        {/* <button type="submit">Search</button> */}
      </form>
      <div className='songs'>
        {searchResults.map(track => (
          <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
        ))}
      </div>
      <div className='bottom'>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
      </div>

    </div>
  )
}

export default Dashboard