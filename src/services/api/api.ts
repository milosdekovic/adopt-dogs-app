// services/api/api.ts

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

export const fetchPets = async () => {
  try {
    const petsData = [];
    for (let i = 0; i < 10; i++) {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      petsData.push(data);
    }
    return petsData;
  } catch (error) {
    throw new Error(
      "Oops, there was an error fetching the pets! Please try again.",
    );
  }
};
