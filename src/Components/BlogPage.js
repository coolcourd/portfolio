import React from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../App'


class FullBlog extends React.Component {
  constructor(props){
    super(props)
  }

  // componentDidMount() {
  //    document.querySelectorAll(".post-content-r").forEach((e, i)=>{
  //      e.innerHTML= e.value
  //    })
  //  }

  render(){
  return (
  <div>
    <h1> Blog</h1>
    <ul className="blog-list">
      <Data.Consumer>
        {d => d[0] &&
      d.map(p => (
          <li key={p.title}>
            <Link to={`/post/${p.title}`} className="post-link">
              <h2>{p.title}</h2>
              <i>published on {p.publishedDate} by {p.author}</i>
              <img src={p.featured} className="featured-image"/></Link>
          <p className="post-content-r">{p.content.substring(0, 500)}...</p>
          <Link to={`/post/${p.title}`}><span className="read-more">Read post</span></Link>
          </li>))}

      </Data.Consumer>
    </ul>
  </div>
)}
}

export default FullBlog
