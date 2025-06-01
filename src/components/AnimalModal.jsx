import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React from "react";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide} className="cyberpunk-modal">
      <Modal.Header closeButton className="border-neon">
        <Modal.Title className="text-neon-blue">Add New Animal</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark">
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label className="text-neon-pink">Name</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={onChange}
              className="cyber-input"
            />
          </Form.Group>

          <Form.Group controlId="formSpecies" className="mb-3">
            <Form.Label className="text-neon-pink">Species</Form.Label>
            <Form.Control
              name="species"
              value={form.species}
              onChange={onChange}
              className="cyber-input"
            />
          </Form.Group>

          <Form.Group controlId="formAge" className="mb-3">
            <Form.Label className="text-neon-pink">Age</Form.Label>
            <Form.Control
              name="age"
              value={form.age}
              onChange={onChange}
              className="cyber-input"
            />
          </Form.Group>

          <Form.Group controlId="formImageUrl" className="mb-3">
            <Form.Label className="text-neon-pink">Image URL</Form.Label>
            <Form.Control
              name="imageUrl"
              value={form.imageUrl}
              onChange={onChange}
              placeholder="optional"
              className="cyber-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-neon-purple">Kid Friendly</Form.Label>
            <Form.Check
              type="checkbox"
              label="Kid Friendly"
              checked={form.kidFriendly}
              onChange={onChange}
              name="kidFriendly"
              className="cyber-checkbox"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-neon-purple">Vaccinated</Form.Label>
            <Form.Check
              type="checkbox"
              label="Vaccinated"
              checked={form.vaccinated}
              onChange={onChange}
              name="vaccinated"
              className="cyber-checkbox"
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-neon">
        <Button
          variant="secondary"
          onClick={onHide}
          className="btn-cyber btn-cyber-danger"
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={onSave} className="btn-cyber">
          Save Animal
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
