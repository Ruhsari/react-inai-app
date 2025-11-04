import React from 'react'
import { ways } from '../data'
import Reason from './Reason'

export default function Reasons() {
  return (
    <div>
      <Reason 
        title={ways[0].title} 
        description={ways[0].description}
      />

      <Reason 
        title={ways[1].title} 
        description={ways[1].description} 
      />

      <Reason 
        title={ways[2].title} 
        description={ways[2].description}
      />

    </div>
  )
}
