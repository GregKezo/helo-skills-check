import React, {Component} from 'react'
import {connect} from 'react-redux'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state ={
      username:''
      ,password:''
    }
  }

  handleChange = (e) => {
    //handle changes
  }

  login = () => {
    //login
  }

  register = () => {
    //register
  }

  render(){
    return(
      <div>Auth component</div>
    )
  }
}




export default Auth