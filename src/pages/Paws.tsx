import { Image } from "@mantine/core";
import { useEffect, useState } from "react";

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

interface Pet {
  message: string;
  status: string;
}

const Paws = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setPets([data]);
      } catch (error) {
        alert("Oops, there was an error fetching the pets! Please try again.");
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="grid container gap-5">
      <h1>Paws home page</h1>
      <ul className="gap-10">
        {pets.map((pet) => (
          <li key={pet.status}>
            <Image src={pet.message}></Image>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paws;
