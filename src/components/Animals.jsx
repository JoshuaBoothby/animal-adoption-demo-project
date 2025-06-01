import React from "react";
import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";

export default function Animals({
  animals,
  title,
  deleteAnimal,
  toggleAdopted,
  onEditImage,
  noPets,
}) {
  if (animals.length === 0)
    return <h2 className="text-center text-neon-blue mb-4">{noPets}</h2>;

  return (
    <Container className="my-4">
      <h2
        className="text-center mb-4"
        style={{
          color: "var(--neon-purple)",
          textShadow: "0 0 10px var(--neon-purple)",
        }}
      >
        {title}
      </h2>
      <Row xs={1} md={2} className="g-4">
        {animals.map((animal) => (
          <Col key={animal.id}>
            <Card className="cyberpunk-card h-100">
              <Card.Img
                variant="top"
                src={animal.imageUrl}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span style={{ color: "var(--neon-blue)" }}>
                    {animal.name}
                  </span>
                  <small className="text-white-50">
                    {animal.species} ({animal.age} years)
                  </small>
                </Card.Title>
                <div className="mb-3">
                  <Badge
                    bg={animal.kidFriendly ? "success" : "danger"}
                    className="me-2"
                  >
                    {animal.kidFriendly ? "Kid Friendly" : "Not Kid Friendly"}
                  </Badge>
                  <Badge bg={animal.vaccinated ? "success" : "danger"}>
                    {animal.vaccinated ? "Vaccinated" : "Not Vaccinated"}
                  </Badge>
                </div>
                <div className="mt-auto d-flex gap-2">
                  <Button
                    className="btn-cyber flex-grow-1"
                    onClick={() => toggleAdopted(animal.id, !animal.adopted)}
                  >
                    {!animal.adopted ? "Adopt" : "Make Available"}
                  </Button>
                  <Button
                    className="btn-cyber"
                    onClick={() => onEditImage(animal)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn-cyber btn-cyber-danger"
                    onClick={() => deleteAnimal(animal.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
