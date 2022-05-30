import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TableData(props) {
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th> Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Password</th>
            <th>edit/delete</th>
          </tr>
        </thead>
        {props.data.map((data, i) => (
          <tbody key={i}>
            <tr>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => props.handleUpdate(data.id)}
                >
                  Edit
                </Button>
                <Button variant="primary" onClick={props.handleAdd}>
                  Add
                </Button>
                <button> delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
