import { Card, Image, Text, Button, Group, Loader } from "@mantine/core";
import { useEffect, useState } from "react";

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

interface Pet {
  message: string;
  status: string;
}

const CardPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = [];
        for (let i = 0; i < 10; i++) {
          // Change this number to fetch the number of pets you want
          const response = await fetch(BASE_URL);
          const data = await response.json();
          petsData.push(data);
        }
        setPets(petsData);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setLoading(false); // Set loading to false if there's an error
        alert("Oops, there was an error fetching the pets! Please try again.");
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8 mx-auto">
      {loading ? ( // If loading is true, display the spinner
        <Loader size="lg" />
      ) : (
        pets.map((pet, index) => {
          const breedName = pet.message.split("/")[4]; // Extract breed name from image URL
          const formatBreedName = breedName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <Card
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
              key={index}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  className="w-full h-[250px] object-cover"
                  width={250}
                  height={250}
                  src={pet.message}
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{formatBreedName}</Text>
                {/* Display the breed name */}
              </Group>

              <Text size="sm" c="dimmed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
                itaque.
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Adopt
              </Button>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default CardPage;
