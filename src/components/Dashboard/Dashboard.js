import React, {Component} from 'react'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state={
      posts: []
      ,search: ''
      ,userposts: true
    }
  }


  getAllPosts = () => {
    //get all posts from db. axios call.
  }

  resetSearch = () => {
    //search input and state cleared?
  }

  render(){
    return(
      <div>Dashboard component</div>
    )
  }
}

export default Dashboard