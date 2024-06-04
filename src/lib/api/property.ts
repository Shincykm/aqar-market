const fetchProperties = async () => {
    try {
      const response = await fetch(
        `${process.env.VITE_GET_PROPERTY_LIST}?page=1&limit=10`,
        {next:{revalidate:3600}}
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  };

// --------------------------------------------------------------------

const fetchPropertyById = async (propertyId : number | string) => {
  try {
    console.log(`${process.env.VITE_GET_PROPERTY_BY_ID}/${propertyId}`);
    
    const response = await fetch(
      `${process.env.VITE_GET_PROPERTY_BY_ID}/${propertyId}`,
      {next:{revalidate:3600}}
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

export {
    fetchProperties,
    fetchPropertyById
}