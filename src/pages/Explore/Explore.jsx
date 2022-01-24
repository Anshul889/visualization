import React  from 'react'
import { emaillist } from './features'

const Explore = () => {
  return (
    <div>
      {emaillist.map((feature) => {
        return <div key={feature.id}>{feature.name}</div>
      })}
    </div>
  )
}
export default Explore
