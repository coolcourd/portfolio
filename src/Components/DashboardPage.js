import React from 'react'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'
import FormSubmissions from './FormSubmissions'
import { Data } from '../App'
import { baseUrl } from '../functions.js'
let data = []

class Admin extends React.Component {
  constructor(props){
    super(props)
  }

  handleDeleteRequest(ptitle) {
   const div = document.createElement("div")
   div.innerHTML = `Are you sure you want to delete "${ptitle}"? This cannot be undone.</br><div id="yes-no"> <button onclick="this.handleDelete('${ptitle}')" class="delete">Yes</button><button onclick="this.nevermind()" class="no">no</button></div>`
   div.classList.add("are-you-sure")
   document.body.appendChild(div)
  }

  handleDelete(ptitle) {
     const deleted = data.findIndex((e)=>e.title === ptitle)
     const div = document.getElementsByClassName("are-you-sure")[0]
     data.splice(deleted,1)
     firebase.database().ref("posts").set(JSON.stringify(data))
     div.parentNode.removeChild(div)
    window.location.assign(baseUrl +"/blog")
  }
   nevermind() {
     const div = document.getElementsByClassName("are-you-sure")[0]
       div.parentNode.removeChild(div)
   }


  render(){
return (
<div>
  <h1> Dashboard </h1>
  <h2>Form Submissions</h2>
    <FormSubmissions/>
  <h2>posts</h2>
   <Link to="/edit/edit" id="add-new">Add new Post</Link>
  <ul className="blog-list">
    <Data.Consumer>
      {d => d[0] &&
    d.map((p)=>{
        return (
          <li key={p.title} className="dash-post row">{p.title}
            <Link to={`/edit/${p.title}`} className="edit">Edit</Link>
            <button className="delete"
              onClick={()=>this.handleDeleteRequest(p.title)}>
              Delete
            </button>
          </li>
        )
      })}

    </Data.Consumer>
  </ul>
</div>
)

}}

export default  Admin
