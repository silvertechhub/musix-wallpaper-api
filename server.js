const express = require("express")
require("dotenv").config();
const cors = require("cors")
const session = require('cookie-session');
const csurf = require('csurf');
const axios = require("axios")
const jwt = require("jsonwebtoken")
const querystring = require("querystring");
const path = require("path");

const app = express();
app.use(cors())

// if(process.env.NODE_ENV === 'production'){

//   app.use(express.static(path.resolve(__dirname, "./music-wallpaper/build")))

//   app.get('*', (req,res) => {
//       res.sendFile(path.resolve(__dirname, './music-wallpaper/build', 'index.html'))
//   })
// }

const generateRandomString = length => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const statekey = 'spotify_auth_state'

app.get('/login', function(req, res) {
    const state = generateRandomString;
    res.cookie(statekey, state)
    // your application requests authorization
    var scope = 'user-read-private user-top-read user-read-email playlist-read-private';
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDRIECT_URI,
        scope: scope, 
        state: state
      })); 
     
  });

  app.get('/callback', async(req, res) => {
    const code = req.query.code || null;
    // const state = req.query.code;
    // console.log(code)
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
      
        redirect_uri:process.env.REDRIECT_URI
      }),
      headers:{
        'content_type': 'application/x-www-form-urlencoded',
        Authorization:`Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`
      }

    }).then(response => {
      if(response.status === 200){
        const {access_token, refresh_token, expires_in} = response.data

        const queryParams = querystring.stringify({
          access_token,
          refresh_token,
          expires_in
        });
        res.redirect(`${process.env.REDRIECT_PAGE}/?${queryParams}`)
       
      }else{
        res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`)
      }
    }).catch(error => {
      res.send(error)
    })
  })


  app.get("/refresh_token", (req,res) => {
    const {refresh_token} = req.query;

    axios({
      method:'post',
      url:'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }),
      headers: {
        'content_type':  'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
      }
    }).then(response => {
      res.send(response.data)
    }).catch(error => {
      res.send(error)
    })
  })

app.listen(process.env.PORT, () => {
    console.log(`app now running on port ${process.env.PORT}`)
    console.log(process.env)
}) 