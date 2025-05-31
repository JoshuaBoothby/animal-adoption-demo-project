import React from "react";
import { ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Animals({
  animals,
  title,
  deleteAnimal,
  toggleAdopted,
  onEditImage,
  noPets,
}) {
  if (animals.length == 0) return <h2>{noPets}</h2>;

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
            <Button
              size="sm"
              className="me-2"
              variant="light"
              onClick={() => onEditImage(animal)}
            >
              Edit
            </Button>
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
              onClick={() => toggleAdopted(animal.id, !animal.adopted)}
            >
              {!animal.adopted && "Adopt"}
              {animal.adopted && "Make Available"}
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
