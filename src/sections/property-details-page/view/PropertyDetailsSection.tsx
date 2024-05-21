import { PROPERTY_CATEGORIES } from '@/constants/constants';
import React from 'react'

const PropertyDetailsSection = (propertyId) => {
  const propertiesData = PROPERTY_CATEGORIES.filter(item => (item.id === propertyId));
  console.log(PROPERTY_CATEGORIES);
  
  
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