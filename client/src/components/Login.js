import { Container, LoginButton, LoginLink } from "../styles/Login.styles"

const CLIENT_ID = '810804b9e3484f579fffb7b40fa27322'
const CLIENT_SECRET = '0d668aec76b147fab09aa0e22626c798'

const REDIRECT_URI = 'http://localhost:3000'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&responde_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&response_type=token&show_dialog=true`

export default function Login(){

    return (
      <Container>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify' />
      <LoginButton>
        <LoginLink href={AUTH_URL}>Login with Spotify</LoginLink>
      </LoginButton>
      </Container>
    )
  }
