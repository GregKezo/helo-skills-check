import React, {Component} from 'react'

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
    //axios db call for post information
  }


  render(){
    return(
      <div>Post component</div>
    )
  }
}

export default Post