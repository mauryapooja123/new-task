import React from "react";

import { Modal, Button, Form } from "react-bootstrap";

export default function ModelForm(props) {
  return (
    <>
      {/* <Button variant="primary" onClick={props.handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.onShow} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.edit ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.edit ? props.onEditData : props.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                autoFocus
                name="name"
                value={props.user.name}
                onChange={props.handleChange}
              />
              <Form.Label>number</Form.Label>
              <Form.Control
                type="number"
                placeholder="number"
                autoFocus
                name="number"
                value={props.user.number}
                onChange={props.handleChange}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={props.user.email}
                onChange={props.handleChange}
                autoFocus
              />
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                name="password"
                value={props.user.password}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            addd data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
