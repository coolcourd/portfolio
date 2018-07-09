import React from 'react'
import * as firebase from 'firebase'
import { Link } from 'react-router-dom'



class Contact extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const formInfo= {}
    formInfo.name = document.getElementById("contact-name").value
    formInfo.email = document.getElementById("contact-email").value
    formInfo.phone = document.getElementById("contact-telnum").value
    formInfo.message = document.getElementById("contact-message").value
    firebase.database().ref("formSubs").once('value').then((x) => {
      const formSubs = JSON.parse(x.val())
      formSubs.unshift(formInfo)
      firebase.database().ref("formSubs").set(JSON.stringify(formSubs))
      document.getElementById("contact-name").value = ''
      formInfo.email = document.getElementById("contact-email").value = ''
      formInfo.phone = document.getElementById("contact-telnum").value = ''
      formInfo.message = document.getElementById("contact-message").value = ''
      const div = document.createElement("div")
  div.innerHTML = `<center><h2>Got it, thanks. I will get back to you as soon as I can</h2></center>`
  div.classList.add("are-you-sure")
  document.body.appendChild(div)
  setTimeout(()=> div.parentNode.removeChild(div), 6000)
    })

  }

  render(){
    return(
  <div>
    <h1>Contact Me</h1>
    <main className="row" id="contact-form">
      <article>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
          <input type="text" placeholder="Name" id="contact-name"/>
          </div>
          <br/>
          <div className="row">
          <input type="email" placeholder="Email" id="contact-email"/>
          </div>
          <br/>
          <div className="row">
          <input type="tel" placeholder="Phone Number" id="contact-telnum"/>
          </div>
          <br/>
          <textarea placeholder="Your Message" id="contact-message"/>
          <br/>
          <input type="submit"/>
          <br/>
        </form>
      </article>
      <sidebar id="contact-side">
        <p>Feel free to contact me via one of my social media platforms listed on my <Link to="/projects">Projects Page</Link> or use this form to send me a text.</p><br/>
        <ul id="contact-info">
        <li>email: <a href="mailto:courdheadman@gmail.com">courdheadman@gmail.com</a></li>
          <li>phone: <a href="tel:4803381830">(480) 338 1830 </a></li>
        </ul>
      </sidebar>
    </main>
  </div>
)}}

export default Contact
