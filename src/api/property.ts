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
      console.log(error);
    }
  };

export {
    fetchProperties,
}