import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: ''
      ,img: ''
      ,content: ''
    }
  }

  handleChange = (e) => {
    //input field changes
  }

  submitPost = () => {
    //axios post request with state as body
  }


  render(){
    return(
      <div>Form component</div>
    )
  }
}

export default Form