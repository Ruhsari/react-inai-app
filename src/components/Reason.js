import React from 'react'

export default function Reason(props) {
  return (
    <div className='reason-card'>
      {/* <img src={icon_1} alt="icon_1" className="icon_1"></img> */}
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p></p>
    </div>
  )
}
