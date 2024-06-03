import Image from 'next/image';
import React from 'react'

const RoundLinks = ({...props}) => {
    const { link, bgcolor , img, name } = props;

  return (
    <a href={link} className='cursor-pointer z-50'>
        <div className={`flex-center rounded-full w-10 h-10 ${bgcolor ? `${bgcolor}` : 'bg-primary-green-light'}`}>
            <Image src={img} alt={name} width={20} height={20} className='w-[20px] h-[20px]'/>
        </div>
    </a>
  )
}

export default RoundLinks