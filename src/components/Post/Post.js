import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
      ,img: ''
      ,content: ''
      ,author:''
      ,authorPicture:''
    }
  }

  getPostInfo = () => {
    axios.get(`/api/post/${this.props.match.params.postid}`)
      .then( res => {
        const {title, img, content} = res.data
        this.setState({
          title
          ,img
          ,content
          ,author: res.data.author_id
          ,authorPicture: res.data.profile_pic
      })
    })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getPostInfo()
  }


  render(){
    console.log(this.props)
    return(
      <div>
         <div className="post-summary">
              <h1>{this.state.title}</h1>
              <p>{this.state.content}</p>
              <div className="info">
                <p>By: {this.state.author_id}</p>
                <img 
                  src={`${this.state.authorPicture}.png`} 
                  alt="profile pic" 
                  style={{width:'60px', 
                    borderRadius:'30px', 
                    backgroundColor:'#f2f2f2'}}/>
              </div>
          </div>
      </div>
    )
  }
}

export default Post