export async function fetchProperties() {
  try {
    const response = await fetch(
      `${process.env.VITE_GET_PROPERTY_LIST}?page=1&limit=10`
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
