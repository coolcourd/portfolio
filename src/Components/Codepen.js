import React from 'react'

const Codepen = (props) =>(
<iframe height={props.height}
  scrolling='no'
  title='Pig Latin'
  src={`//codepen.io/coolcourd/embed/${props.urlid}/?height=${props.height}&theme-id=0&default-tab=result&embed-version=2`}
   frameBorder='no' allowTransparency='true' allowFullScreen='true' className='codepen'>
   See the Pen
   <a href={`https://codepen.io/coolcourd/pen/${props.urlid}/`}>Pig Latin</a>
   by courd headman
 (<a href='https://codepen.io/coolcourd'>@coolcourd</a>)
  on <a href='https://codepen.io'>CodePen</a>.
</iframe>
)

export default Codepen
