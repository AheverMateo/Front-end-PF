import React from 'react'

const Card = ({props}) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.year}</p>
    </div>
  )
}

export default Card