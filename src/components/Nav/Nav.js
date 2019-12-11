import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class Nav extends Component {


  logout = () => {
    axios.post('/api/auth/logout')
      .then( res => res)
      .catch( err => console.log(err) )
  }

  render(){
    // console.log(this.props)
    return(
      <div className="Nav">
        Nav component
        <div className="profile-pic">
          <img 
            src={`${this.props.profile_pic}.png`} 
            alt="profile pic" 
            style={{width:'80px', 
              borderRadius:'40px', 
              backgroundColor:'#f2f2f2'}}/>
        </div>
        <div className="links">
          <Link to='/dashboard'><button>Home</button></Link>
          <Link to='/new'><button>New Post</button></Link>
          <Link to='/'><button onClick={this.logout}>Log out</button></Link>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return  ({username: reduxState.username, profile_pic: reduxState.profile_pic})
}


export default connect(mapStateToProps)(Nav)