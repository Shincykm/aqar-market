export const baseUrl = process.env.VITE_BASE_URL;

export const endpoints ={ 
    properties : {
        list : `${baseUrl}/mob_app/public/property/getPropertyList`,
        details : `${baseUrl}/mob_app/public/property/getPropertyById`,
    },
    propertyTypes : {
        list : `${baseUrl}/mob_app/public/propertyType/getPropertyTypeList`,
        details : `${baseUrl}/mob_app/public/propertyType/getPropertyTypeById`,
    }
}