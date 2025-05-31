import React, { useState } from "react";
import "./App.css";
import AnimalModal from "./components/AnimalModal";
import { Button } from "react-bootstrap";
import Animals from "./components/Animals";
import { useEffect } from "react";
import {
  createAnimal,
  deleteAnimal,
  scanAnimals,
  toggleAdopted,
  updateAnimalImage,
} from "./dynamo";

function App() {
  const [form, setForm] = useState({
    name: "",
    species: "",
    age: "",
    kidFriendly: false,
    vaccinated: false,
    imageUrl: "",
  });

  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);

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

  async function handleToggleAdopted(id, adopted) {
    await toggleAdopted(id, adopted);
    setAnimals((prev) =>
      prev.map((a) => (a.id === id ? { ...a, adopted } : a))
    );
  }

  async function handleDeleteAnimal(id) {
    await deleteAnimal(id);
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
  }

  async function handleEditImage(animal) {
    const imageUrl = window.prompt("Enter new image URL:", animal.imageUrl);
    if (!imageUrl) return;

    await updateAnimalImage(animal.id, imageUrl);
    setAnimals((prev) =>
      prev.map((a) => (a.id === animal.id ? { ...a, imageUrl } : a))
    );
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

  const available = animals.filter((animal) => !animal.adopted);
  const adopted = animals.filter((animal) => animal.adopted);

  return (
    <>
      <h1>Fur-Ever Friends Rescue</h1>
      <main className="container">
        <Button variant="primary" onClick={() => setShow(true)}>
          Add Animal
        </Button>

        <AnimalModal
          show={show}
          onHide={() => setShow(false)}
          form={form}
          onChange={handleChange}
          onSave={handleAdd}
        />
        <Animals
          animals={adopted}
          title="these animals have found a home!"
          deleteAnimal={handleDeleteAnimal}
          toggleAdopted={handleToggleAdopted}
          onEditImage={handleEditImage}
          onChange={handleChange}
        />
        <Animals
          animals={available}
          title="Ready For Adoption!"
          deleteAnimal={handleDeleteAnimal}
          toggleAdopted={handleToggleAdopted}
          onEditImage={handleEditImage}
          onChange={handleChange}
        />
      </main>
    </>
  );
}

export default App;
