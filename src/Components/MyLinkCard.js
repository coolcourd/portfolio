import React from 'react'

const MyLinkCard = (props) => (
  <div className="col">
    <h3>{props.title}</h3>
<a href={props.href} target="_blank">
  <img src={props.src}/>
  </a>
  </div>
)

export default MyLinkCard
