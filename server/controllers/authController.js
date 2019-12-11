const bcrypt = require('bcryptjs')

module.exports = {

  register: async (req, res) => {
    const {username, password} = req.body
    const {session} = req
    const db = req.app.get('db')
    const result = await db.check_user(username)
    const user = result[0]

    if(user){ return res.status(400).send('Username is taken') }

    const salt = bcrypt.genSaltSync(10)
    const rando = (Math.floor(Math.random()*10000000))
    const hash = bcrypt.hashSync(password, salt)
    const profile_pic = `https://robohash.org/${rando}`
    const result2 = await db.register_user({username, hash, profile_pic})
    const newUser = result2[0]
    session.user = newUser
    res.status(201).send(session.user)
  },

  login: async (req, res) => {
    const {username, password} = req.body
    const {session} = req
    const db = req.app.get('db')

    const result = await db.check_user(username)
    const user  = result[0]
    if (!user) { return res.status(400).send('Username not found') }

    const authenticated = bcrypt.compareSync(password, user.password)
    if(authenticated) {
      delete user.password
      session.user = user
      res.status(202).send(session.user)
    } else {
      res.status(401).send('Incorrect Password')
    }

  },

  logout: (req, res) => {
      req.session.destroy()
      res.sendStatus(200)
    },

    // getUser: (req, res) => {
    //   if(req.session.user) {
    //     res.status(200).send(req.session.user)
    //   } else {
    //     res.status(200).send('')
    //   }
    // }


  }
