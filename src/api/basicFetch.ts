export const basicFetch = async (url) => {
    try {
      const response = await fetch(
        url,
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
