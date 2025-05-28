import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Animal</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={form.name} onChange={onChange} />
          </Form.Group>

          <Form.Group controlId="formSpecies">
            <Form.Label>Species</Form.Label>
            <Form.Control
              name="species"
              value={form.species}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control name="age" value={form.age} onChange={onChange} />
          </Form.Group>
          <Form.Group controlId="formImageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="imageUrl"
              value={form.imageUrl}
              onChange={onChange}
              placeholder="optional"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kid Friendly</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Kid Friendly"
              checked={form.kidFriendly}
              onChange={onChange}
              name="kidFriendly"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Vaccinated</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Vaccinated"
              checked={form.vaccinated}
              onChange={onChange}
              name="vaccinated"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Animal
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
