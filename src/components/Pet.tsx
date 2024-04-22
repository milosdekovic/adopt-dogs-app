import { Card, Image, Text, Button, Group } from "@mantine/core";

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
        Woof, Woof! I'm ready for a new home and plenty of adventures. Everyone
        needs a tail-wagging buddy!
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Adopt me
      </Button>
    </Card>
  );
};

export default PetCard;
