// Create a type for a pet
export type Pet = {
  id: number;
  name: string;
  species: string;
  adopted: boolean;
  age: number;
  intakeDate: Date;
  medicalRecord: {
    vaccinations: string[];
    weightKg: number;
    microchipId: null | string;
  };
};

// Create a list of pets
export const pets: Pet[] = [
  {
    id: 1,
    name: "Max",
    species: "Dog",
    adopted: true,
    age: 3,
    intakeDate: new Date("2024-06-04"),
    medicalRecord: {
      vaccinations: ["Rabies", "Distemper"],
      weightKg: 13.6,
      microchipId: null,
    },
  },

  {
    id: 2,
    name: "Meow",
    species: "Cat",
    adopted: false,
    age: 2,
    intakeDate: new Date("2024-02-12"),
    medicalRecord: {
      vaccinations: ["Rabies"],
      weightKg: 5.8,
      microchipId: "AVC231",
    },
  },

  {
    id: 3,
    name: "Bella",
    species: "Dog",
    adopted: false,
    age: 5,
    intakeDate: new Date("2023-11-18"),
    medicalRecord: {
      vaccinations: ["Rabies", "Distemper", "Parvovirus"],
      weightKg: 21.4,
      microchipId: "DOG892",
    },
  },

  {
    id: 4,
    name: "Luna",
    species: "Cat",
    adopted: true,
    age: 4,
    intakeDate: new Date("2023-08-25"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP"],
      weightKg: 4.7,
      microchipId: "CAT451",
    },
  },

  {
    id: 5,
    name: "Charlie",
    species: "Dog",
    adopted: false,
    age: 1,
    intakeDate: new Date("2025-01-10"),
    medicalRecord: {
      vaccinations: ["Rabies", "Distemper"],
      weightKg: 8.3,
      microchipId: null,
    },
  },

  {
    id: 6,
    name: "Oliver",
    species: "Rabbit",
    adopted: false,
    age: 2,
    intakeDate: new Date("2024-04-15"),
    medicalRecord: {
      vaccinations: ["RHDV"],
      weightKg: 2.1,
      microchipId: "RBT723",
    },
  },

  {
    id: 7,
    name: "Daisy",
    species: "Dog",
    adopted: true,
    age: 7,
    intakeDate: new Date("2022-05-21"),
    medicalRecord: {
      vaccinations: ["Rabies", "Distemper", "Parvovirus"],
      weightKg: 18.9,
      microchipId: "DOG347",
    },
  },

  {
    id: 8,
    name: "Milo",
    species: "Cat",
    adopted: false,
    age: 6,
    intakeDate: new Date("2023-03-09"),
    medicalRecord: {
      vaccinations: ["Rabies", "FVRCP"],
      weightKg: 6.2,
      microchipId: null,
    },
  },
];