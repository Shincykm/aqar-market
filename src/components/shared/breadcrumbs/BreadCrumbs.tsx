'use client'

import React, { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaAngleLeft } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { Button, RoundLinks } from '@/components/shared'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const BreadCrumbs = ({homeElement, separator, containerClasses, listClasses, activeClasses}: TBreadCrumbProps) => {
    
    const router = useRouter();
    const paths = usePathname();
    const pathNames = paths.split('/').filter( path => path );   

    return (
        <div className='flex items-center justify-end md:justify-between gap-1 px-2 md:px-11 mb-3 lg:mb-20'>
            <div className='items-center gap-6 md:mt-6 hidden md:flex'>
                <Button onClick={() => router.back()}>
                    <div className="flex items-center gap-4 text-primary-green hover:opacity-65">
                        <p ><FaAngleLeft className='w-4 md:w-5'/></p>
                        <p className='font-medium'>
                            <span className='hidden md:block'>Back to search</span>
                            <span className='block md:hidden'>Back</span>
                        </p>
                        <p className='text-gray-400'>|</p>
                    </div>
                </Button>

                <ul className={containerClasses}>
                    <li className={`${listClasses} hover:opacity-65`}>
                        <Link href={'/'}>{homeElement}</Link>
                    </li>
                    {pathNames.length > 0 && separator}
                {
                    pathNames.map( (link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : `${listClasses} hover:opacity-65`
                        let itemLink = link.split("-").join(" ");
                        if(index !== pathNames.length - 2)
                        return (
                            <React.Fragment key={index}>
                                {<li key ={index} className={`${itemClasses} capitalize`} >
                                    {(pathNames.length !== index+1)
                                        ? <Link href={href}>{itemLink}</Link>
                                        : itemLink
                                    }
                                </li>}
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        )
                    })
                }
            </ul>

            </div>
            <div className="mt-2 md:mt-0">
            <RoundLinks 
                link = {"#"}
                img = {"/icons/ic_mail.svg"}
                name ={"share"}
            />
            </div>
        </div>
    )
}

export default BreadCrumbs