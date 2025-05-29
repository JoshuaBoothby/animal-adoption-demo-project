import React, { useState } from "react";
import "./App.css";
import AnimalModal from "./components/AnimalModal";
import { Button } from "react-bootstrap";
import Animals from "./components/Animals";
import { useEffect } from "react";
import { createAnimal, deleteAnimal, scanAnimals } from "./api/animals";

import { useState as useStateHook } from "react";
import { useState } from "react";

function App() {
  const { form, setForm } = useState({
    name: "",
    species: "",
    age: "",
    kidFriendly: false,
    vaccinated: false,
    imageUrl: "",
  });

  const { animals, setAnimals } = useState([]);
  const { show, setShow } = useState(false);

  useEffect(() => {
    scanAnimals().then(setAnimals);
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function handleToggle(animal) {
    await toggleAdopted(animal.id, !animal.adopted);
    setAnimals((prev) =>
      prev.map((a) => (a.id === animal.id ? { ...a, adopted: !a.adopted } : a))
    );
  }

  async function deleteAnimal(id) {
    await deleteAnimal(id);
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
  }

  async function handleAdd() {
    if (!form.name || !form.species || !form.age) return;
    const item = {
      id: crypto.randomUUID(),
      name: form.name,
      species: form.species,
      kidFriendly: form.kidFriendly,
      vaccinated: form.vaccinated,
      age: form.age,
      adopted: false,
      imageUrl: form.imageUrl || "https://placebear.com/300/400",
    };

    await createAnimal(item);
    setAnimals((prev) => [...prev, item]);
    setShow(false);
  }

  return (
    <>
      <h1>Fur-Ever Friends Rescue</h1>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Animal
      </Button>
      <AnimalModal
        show={show}
        onHide={() => setShow(false)}
        form={form}
        onChange={handleChange}
        onSave={handleSave}
      />
      <Animals
        animals={animals}
        title="Ready For Adoption!"
        deleteAnimal={deleteAnimal}
      />
    </>
  );
}

export default App;
