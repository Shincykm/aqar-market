import React from 'react'

const Title = ({title, description, dir="flex-row"}) => {
  return (
    <div className={`flex items-center`}>
        <div className="capitalize flex-1 font-medium text-40px text-primary-violet">{title}</div>
        <div className="flex-1 description">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Title