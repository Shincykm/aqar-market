import { PROPERTY_CATEGORIES } from '@/constants/constants';
import React from 'react'

const PropertyDetailsSection = (propertyId) => {
  console.log(propertyId);
  
  return (
    <div className="flex flex-col">
      <div className="flex-2">
          <h1>{}</h1>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}

export default PropertyDetailsSection