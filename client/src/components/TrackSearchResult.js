import '../styles/TrackResult.css'
const TrackSearchResult = ({track, chooseTrack}) => {

  const handlePlay =()=>{
    chooseTrack(track)
  }

  return (
    <div className='trackResultContainer' onClick={handlePlay}>
      <img src={track.albumUrl} alt='albumArt'/>
      <div className='title'>
        <div>{track.title}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  )
}

export default TrackSearchResult