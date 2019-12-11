import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state={
      posts: []
      ,search: ''
      ,userposts: true
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSearch = () => {
    this.getAllPosts()
  }



  togglePosts = async () => {
    await this.setState({
      userposts: !this.state.userposts
    })
    
    this.getAllPosts()
    
    
  }

  getAllPosts = () => {
    axios.get(`/api/posts/${this.props.id}?search=${this.state.search}&userposts=${this.state.userposts}`)
      .then(res => {
        this.setState({
          posts: [...res.data]
        })
      })
  }

  resetSearch = async () => {
    await this.setState({
      search: ''
    })
    this.refs.searchBar.value=''
    this.getAllPosts()
  }



  componentDidMount() {
    this.getAllPosts()
  }

  // componentDidUpdate(prevState, prevProps) {
  //   if(prevState.search !== this.state.search) {
  //     this.getAllPosts()
  //   }
  //   if(prevState.userposts !== this.state.userposts) {
  //     this.getAllPosts()
  //   }
  // }

  render(){
    const mappedPosts = this.state.posts.map( (ele, i) => {
     return (
        <div className="post-summary" key={i} id={ele.post_id}>
          {/* <Link to={`/post/${ele.post_id}`} style={{textDecoration:'none'}}> */}
            <h1>{ele.title}</h1>
            <div className="info">
              <p>By: {ele.author_id}</p>
              <img 
                src={`${ele.profile_pic}.png`} 
                alt="profile pic" 
                style={{width:'60px', 
                  borderRadius:'30px', 
                  backgroundColor:'#f2f2f2'}}/>
            </div>
          {/* </Link> */}
        </div>
     )
    })
    return(
      <div>Dashboard component
        <div>
          <input name='search' onChange={ e => this.handleChange(e)} ref='searchBar'/> 
          <button onClick={this.handleSearch}>Search</button>
          <button onClick={this.resetSearch}>Clear</button> 
          My Posts:<input type='checkbox' name='userposts' defaultChecked onClick={this.togglePosts}/>
        </div>  
        <div className="content_box">
          {mappedPosts}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return reduxState
}


export default connect(mapStateToProps)(Dashboard)