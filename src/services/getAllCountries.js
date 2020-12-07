import { HOST } from './uris';

export const getAllCountries = async() => {
  try {
    const response = await fetch(`${HOST}all`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}