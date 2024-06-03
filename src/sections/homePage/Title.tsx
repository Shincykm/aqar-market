import React from 'react'

const Title = ({title, description, dir="flex-row"}) => {
  return (
    <div className={`flex items-center`}>
        <div className="capitalize lg:flex-1 font-medium text-2xl lg:text-40px text-primary-violet">{title}</div>
        <div className="lg:flex-1 description">
            <p className='hidden  md:block'>{description}</p>
        </div>
    </div>
  )
}

export default Title