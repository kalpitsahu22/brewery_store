export async function getBreweryById(id) {
  try {
    const response = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
