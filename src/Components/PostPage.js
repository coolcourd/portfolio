import React from "react"
import { Link } from 'react-router-dom'
import { Data } from '../App'
import Loader from './Loader'

class Post extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {postData: data.find((e)=>e.title === this.props.match.params.post)}
//   }

  // componentDidMount(){
  //   document.getElementById("post-content").innerHTML = this.state.postData.content
  // }


render(){
  const postTitle = this.props.match.params.post
return (
<div>
  <h1> Blog</h1>
  <ul className="blog-list">
    <Data.Consumer>
      {d => d[0] ?
        <div>
        {d.find((e)=>e.title === postTitle).title}
        <img src={d.find((e)=>e.title === postTitle).featured} className="featured-image"/>
        <div id="post-content">{d.find((e)=>e.title === postTitle).content}</div>
      </div>: <Loader/>}
    </Data.Consumer>
<Link to='/blog'><span className="back-to">Back to all Posts</span></Link>
  </ul>
</div>
)}

}

export default Post
