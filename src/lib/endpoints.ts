export const baseUrl = process.env.VITE_BASE_URL;

export const endpoints ={ 
    properties : {
        list : `${baseUrl}/admin/property/getPropertyList`,
        details : `${baseUrl}/admin/property/getPropertyById`,
    }
}