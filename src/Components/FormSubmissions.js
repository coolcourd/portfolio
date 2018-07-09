import React from 'react'
import * as firebase from 'firebase'
import { deleteAllContactFormEnteries } from '../functions.js'

class FormSubmissions extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      formarr: [{name: '',email:'', phone:'', message:''}],
      count: 0
    }
  }

  componentDidMount(){
    firebase.database().ref("formSubs").once('value').then((x) => {
      const info = JSON.parse(x.val())
      this.setState({formarr: info})
      })

  }

  render(){
  return(
  <div>Submission {this.state.count + 1}
        <div className="single-message">
          <div>name: {this.state.formarr[this.state.count].name}</div>
          <div>email: {this.state.formarr[this.state.count].email}</div>
          <div>phone: {this.state.formarr[this.state.count].phone}</div>
          <div>message: {this.state.formarr[this.state.count].message}</div>
        </div>
      <button onClick={() => this.setState({count: this.state.count === 0 ? this.state.formarr.length -1: this.state.count - 1})}>prev</button>
      <button onClick={() => this.setState({count: this.state.count === this.state.formarr.length - 1 ? 0 : this.state.count + 1})}>next</button>
      <button onClick={deleteAllContactFormEnteries}>Delete All</button>
  </div>
)}}

export default FormSubmissions
