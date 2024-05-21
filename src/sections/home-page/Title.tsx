import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className="flex items-center">
        <div className="flex-1 font-medium text-40px text-primary-violet">{title}</div>
        <div className="flex-1 font-satoshi tracking-wider leading-6 text-base font-normal text-primary-blue">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Title