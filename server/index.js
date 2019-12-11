require('dotenv').config()

const express = require('express')
      ,app = express()
      ,gs = require('gradient-string')
      ,{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
      ,massive = require('massive')
      ,session = require('express-session')
      ,authCtrl = require('./controllers/authController')
      ,postCtrl = require('./controllers/postController')

app.use(express.json())
app.use(session({
  resave: false
  ,saveUninitialized: true
  ,cookie: {maxAge: 1000 * 60 * 60}
  ,secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log(gs.summer('all your (data)base are belong to us'))
})

//api endpoints
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.post('/api/auth/logout', authCtrl.logout)

app.get('/api/posts/:userid', postCtrl.userPosts)
app.get('/api/post/:postid', postCtrl.getPost)
app.post('/api/post/:userid', postCtrl.postPost)



app.listen(SERVER_PORT, () => console.log(gs.pastel(`For great justice, take off every port: ${SERVER_PORT}`)))