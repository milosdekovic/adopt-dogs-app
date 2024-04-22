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
          const response = await fetch(BASE_URL);
          const data = await response.json();
          petsData.push(data);
        }
        setPets(petsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Oops, there was an error fetching the pets! Please try again.");
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8 mx-auto">
      {loading ? (
        <Loader size="lg" />
      ) : (
        pets.map((pet, index) => {
          const formatBreedName = pet.message.split("/")[4];
          const breedName = formatBreedName
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
                <Text fw={500}>{breedName}</Text>
              </Group>

              <Text size="sm" c="dimmed">
                <Text size="sm" c="dimmed">
                  Woof, Woof! I'm ready for a new home and plenty of adventures.
                  Everyone needs a tail-wagging buddy!
                </Text>
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Adopt me
              </Button>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default CardPage;
