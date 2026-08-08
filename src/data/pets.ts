// Create a type for a pet
type Pet = {
  name: string;
  species: string;
  adopted: boolean;
  age: number;
};

// Create a list of pets
export const pets: Pet[] = [
  {
    name: "Max",
    species: "Dog",
    adopted: true,
    age: 3
  },
  {
    name: "Meow",
    species: "Cat",
    adopted: false,
    age: 2
  }
];