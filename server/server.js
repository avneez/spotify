const express=require('express')
const cors =require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')
// import lyricsFinder from 'lyrics-finder'

const app = express()
app.use(cors())
app.use(bodyParser.json())

// const PORT = 3001
const client_id = '810804b9e3484f579fffb7b40fa27322'
const client_secret = '0d668aec76b147fab09aa0e22626c798'

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: `${client_id}`,
        clientSecret: `${client_secret}`
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
            })
        }).catch((e) => {
        console.log(e)
        res.sendStatus(400)
    })
})


// app.post("/refresh", async (req, res) => {
//     const { refreshToken } = req.body
//     const spotifyApi = new SpotifyWebApi({
//       redirectUri: process.env.REDIRECT_URI,
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken,
//     })

//     try {
//       const {
//         body: { access_token, expires_in },
//       } = await spotifyApi.refreshAccessToken()
//       res.json({ access_token, expires_in })
//     } catch (err) {
//       console.log(err)
//       res.sendStatus(400)
//     }
//   })

//   app.get("/lyrics", async (req, res) => {
//     const { artist, track } = req.query
//     const lyrics = (await lyricsFinder(artist, track)) || "No Lyrics Found"
//     res.json({ lyrics })
//   })

//   app.listen(PORT, err => {
//     if (err) console.log(err)
//     console.log("listening on port", PORT)
//   })
