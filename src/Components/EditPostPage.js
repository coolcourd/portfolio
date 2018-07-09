import React from 'react'
import moment from 'moment'
import * as firebase from 'firebase'
import { baseUrl } from '../functions.js'

let data

class EditPost extends React.Component {
  constructor(props){
    super(props)
    this.handleSave = this.handleSave.bind(this)
    this.state = {
      postData: {}
    }
  }


  handleSave(e){
  e.preventDefault()
  data = this.props.data
  const post = {}
  const postIndex = data.findIndex((e)=>e.title === this.state.postData.title)
  post.title = document.getElementById("title").value
  post.author = document.getElementById("author").value
  post.content = document.getElementById("body").value
  post.featured = document.getElementById("featured").value
  post.publishedDate = this.state.postData.publishedDate ? this.state.postData.publishedDate : new moment().format('MMMM Do YYYY, h:mm:ss a')
  this.state.postData.title ? data.splice(postIndex, 1, post) : data.unshift(post)
  firebase.database().ref("posts").set(JSON.stringify(data))
  window.location.assign(baseUrl)
}

  componentDidMount(){
    const postData = this.props.data.find((e)=>e.title === this.props.match.params.post)
    if (postData) {this.setState({postData})}
    if(postData){
    document.getElementById("title").value = postData.title
    document.getElementById("author").value = postData.author
    document.getElementById("body").value = postData.content
    document.getElementById("featured").value = postData.featured
  }
  console.log(this.props)
  }

  render(){
  return(
<div>
  <h1>Add Blog Post</h1>
<form onSubmit={this.handleSave}><br/>
<input type="text" id="title" placeholder="Title"/>
<input type="text" id="author" placeholder="Author Name"/>
<textarea id="body" cols="30" rows="10" placeholder="Blog body"/>
  <input type="text" id="featured" placeholder="Featured Image URL"/>
  <input type="submit"/>
</form>
</div>
)}
}

export default EditPost
