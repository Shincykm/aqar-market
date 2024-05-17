import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RoundLinks = ({...props}) => {
    const { link, bgcolor , img, name } = props;

  return (
    <Link href={link} target="_blank">
        <div className={`flex-center rounded-full w-10 h-10 ${bgcolor ? `bg-${bgcolor}` : 'bg-primary-green-light'}`}>
            <Image src={img} alt={name} width={20} height={20} />
        </div>
    </Link>
  )
}

export default RoundLinks