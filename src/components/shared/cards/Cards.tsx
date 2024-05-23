import React from 'react'
import Container from '../container/Container'
import { PROPERTY_TYPES } from '@/constants/constants'

const Cards = ({children, width}) => {
  return (
    <Container className={`border-[1px] border-primary-gray p-3 rounded-md ${width}`}>
      {children}
    </Container>
  )
}

export default Cards