import React from 'react'

const Card = ({props}) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.duration}</h3>
    </div>
  )
}

export default Card