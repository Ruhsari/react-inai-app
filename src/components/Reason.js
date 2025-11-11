import React from 'react'

export default function Reason(props) {
  return (
    <div className='reason-card'>
      <div className="reason-mini-card">
        <img src={props.icon} alt={props.title} className="reason-icon" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}