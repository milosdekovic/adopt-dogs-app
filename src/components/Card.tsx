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
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        // Start loading data
        setLoading(true);

        // Fetch data from the API
        const data = await fetchPets();

        // Update the state with the fetched data
        setPets(data);
      } catch (error: unknown) {
        // If an error occurs, convert it to a string and update the error state
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setError(errorMessage);
      } finally {
        // Whether the fetch succeeded or failed, stop loading
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 mx-auto">
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
