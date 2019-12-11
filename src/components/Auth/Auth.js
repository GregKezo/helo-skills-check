import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getUser} from '../../redux/reducer'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state ={
      username:''
      ,password:''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  login = () => {
    const {username, password} = this.state
    axios.post('/api/auth/login', {username, password})
      .then( res => {
        // console.log(res.data)
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch( err => console.log(err))
  }

  register = () => {
    const {username, password} = this.state
    axios.post('/api/auth/register', {username, password})
      .then( res => {
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch( err => console.log(err))

  }

  render(){
    return(
      <div className="Auth">
        <div className="auth_container">
          <img alt="logo" style={{height: '150px', width: '150px', backgroundColor: '#fff'}} />
          <h1 className="title">Helo</h1> 
          <div className="input-area"> 
            Username: <input 
            name="username" 
            maxLength="20"
            placeholder="Username"
            onChange={ e => this.handleChange(e)}
            /> 
          </div>
          <div className="input-area">
            Password: <input 
            name="password" 
            type="password"
            maxLength="20"
            placeholder="Username"
            onChange={ e => this.handleChange(e)}
            />
          </div>
          <div className="button-area">
            <button onClick={this.login}>Log in</button>
            <button onClick={this.register}>Register</button>
          </div>
        </div>
      </div>
    )
  }
}




export default connect(null, {getUser})(Auth)