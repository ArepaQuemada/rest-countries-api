import { HOST } from './uris';

export const getSingleCountry = async(name) => {
  try {
    const response = await fetch(`${HOST}alpha?codes=${name}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}