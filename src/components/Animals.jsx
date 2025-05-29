import React from "react";
import { ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Animals({
  animals,
  title,
  deleteAnimal,
  toggleAdopted,
}) {
  if (animals.length == 0) return <h2> All Pets have found a home!</h2>;

  // TODO Add button to edit image

  return (
    <div>
      <h2>{title}</h2>

      <ListGroup>
        {animals.map((animal) => (
          <ListGroup.Item key={animal.id}>
            <Image
              src={animal.imageUrl}
              alt={animal.name}
              rounded
              fluid
              width={100}
            />
            <div>
              <strong>{animal.name}</strong> - {animal.species} ({animal.age}{" "}
              years old)
            </div>
            <div>
              {animal.kidFriendly && "Kid Friendly"}
              {!animal.kidFriendly && "Not Kid Friendly"}
            </div>
            <div>
              {animal.vaccinated && "Vaccinated"}
              {!animal.vaccinated && "Not Vaccinated"}
            </div>
            <Button
              size="sm"
              className="me-2"
              variant="primary"
              disabled={animal.adopted}
              onClick={() => toggleAdopted(animal.id, !animal.adopted)}
            >
              {animal.adopted && "Make Available"}
              {!animal.adopted && "Adopt"}
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteAnimal(animal.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
