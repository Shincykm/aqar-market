import React from 'react'

const HeroTitle = ({ title="", fontSize="" }) => {
  return (
    <div className={`font-medium ${fontSize} leading-10`} >{title}</div>
  )
}

export default HeroTitle