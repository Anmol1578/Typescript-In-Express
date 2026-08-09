// Create a type for a pet
type Pet = {
  name: string;
  species: string;
  adopted: boolean;
  age: number;
  intakeDate: Date,
  medicalRecord: {
    vaccinations: string[],
    weightKg: number ,
    microchipId: null | String,
  },
};

// Create a list of pets
export const pets: Pet[] = [
  {
    name: "Max",
    species: "Dog",
    adopted: true,
    age: 3,
    intakeDate: new Date("2024-06-04"),
    medicalRecord: {
      vaccinations: ["Rabies" , "Distemper"],
      weightKg : 13.6,
      microchipId : null,
    }
  },
  {
    name: "Meow",
    species: "Cat",
    adopted: false,
    age: 2,
     intakeDate: new Date("2024-02-12"),
    medicalRecord: {
      vaccinations: ["Rabies"],
      weightKg : 5.8,
      microchipId : "AVC231",
    }
  }
];