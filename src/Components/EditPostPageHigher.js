import React from 'react'
import { Data } from '../App'
import EditPost from "./EditPostPage"


const HigherEdit = (props) => (
  <Data.Consumer>
    {d => <EditPost {...props} data={d}/>}
  </Data.Consumer>
)

export default HigherEdit
