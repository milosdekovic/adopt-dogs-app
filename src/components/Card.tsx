// CardPage.tsx

import { useEffect, useState } from "react";
import PetCard from "./Pet";
import ErrorComponent from "./Error";
import { Loader } from "@mantine/core";
import { Pet } from "./Pet";
import { fetchPets } from "../services/api/api";

const CardPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
        setLoading(false);
      } catch (error: unknown) {
        setLoading(false);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8 mx-auto">
      {loading ? (
        <Loader size="lg" />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : (
        pets.map((pet, index) => (
          <PetCard key={index} pet={pet} index={index} />
        ))
      )}
    </div>
  );
};

export default CardPage;
