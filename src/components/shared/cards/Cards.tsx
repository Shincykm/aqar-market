import React from 'react'
import Container from '../container/Container'
import { PROPERTY_TYPES } from '@/constants/constants'

const Cards = ({children, width="w-full", propClass=''}) => {
  let classname = propClass || `border-[1px] border-primary-gray p-3 rounded-xl ${width}`;
  return (
    <Container className={classname}>
      {children}
    </Container>
  )
}

export default Cards