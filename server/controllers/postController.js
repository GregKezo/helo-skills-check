module.exports = {

  userPosts: async (req, res) => {
    const db = req.app.get('db')
    let posts = await db.get_posts()

    if(req.query.search) { 
      posts = posts.filter( post => { return post.title.toLowerCase().includes(req.query.search.toLowerCase()) })
     }
    if(req.query.userposts === 'false') {
      posts = posts.filter( post => { return +post.author_id !== +req.params.userid } )
    }
    res.status(200).send(posts)
  },

  getPost: async (req, res) => {
    const{postid} = req.params
   const db = req.app.get('db')
   const result = await db.get_one_post(postid)
   const post = result[0]
    
   res.status(200).send(post)
  
  },

  postPost: (req, res) => {
    
  }


}