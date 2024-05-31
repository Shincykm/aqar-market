import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const DeveloperCards = ({developerData}) => {
    
  return (
    <div className="flex items-center pt-4">
        <div className="flex-shrink-0">
            <div className="relative w-14 h-14 border-[1px] border-black rounded-full overflow-hidden">
                <Image
                    src={developerData?.icon}
                    fill
                    style={{ objectFit: 'cover'}}
                    alt={developerData.name_en}
                    sizes="56px" 
                />
            </div>
        </div>
        <div className="flex-1 min-w-0 ms-4 font-objective">
            <p className="text-sm text-gray-300 capitalize">
                {"Developer"}
            </p>
            <p className="text-sm uppercase">
                {developerData.name_en}
            </p>
        </div>
        <div className="inline-flex items-center text-base font-medium">
            <Link href="#" className='btn-round text-primary-green border-primary-green'>Enquire Now</Link>
        </div>
    </div>
  )
}

export default DeveloperCards