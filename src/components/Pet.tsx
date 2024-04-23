import { Card, Image, Text, Button, Group } from "@mantine/core";
import { useAdoptation } from "../context/AdoptationContext";
import { IconMinus } from "@tabler/icons-react";

export interface Pet {
  message: string;
  status: string;
}

interface PetCardProps {
  pet: Pet;
  index: number;
}

const PetCard = ({ pet, index }: PetCardProps) => {
  const formatBreedName = pet.message.split("/")[4];
  const breedName = formatBreedName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const { getQuantity, increaseQuantity, decreaseQuantity } = useAdoptation();
  const quantity = getQuantity(index);
  return (
    <Card
      className="transition bg-[#242424] ease-in-out delay-350 hover:scale-105 duration-500"
      key={index}
      shadow="sm"
      padding="lg"
      radius="md"
    >
      <Card.Section>
        <Image
          className="w-full h-[300px] object-cover"
          width={300}
          height={250}
          src={pet.message}
          alt="doggo"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text className="text-white text-2xl" fw={600}>
          {breedName}
        </Text>
      </Group>

      <Text size="sm" c="dimmed">
        Woof, Woof! I'm ready for a new home and plenty of adventures. Everyone
        needs a tail-wagging buddy!
      </Text>

      {quantity === 0 ? (
        <div className="flex justify-start">
          <Button
            className="text-black"
            onClick={() => increaseQuantity(index, pet)}
            variant="white"
            color="black"
            mt="md"
            radius="md"
          >
            Adopt me
          </Button>
        </div>
      ) : (
        <div className="flex justify-start mt-5">
          <Button
            className="w-[45px]"
            onClick={() => decreaseQuantity(index)}
            variant="filled"
            color="red"
            size="xs"
            radius="lg"
          >
            <IconMinus />
          </Button>
        </div>
      )}
    </Card>
  );
};

export default PetCard;
