import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "../Book/Book.css";

const Book = (props) => {
  const { name, id,image } = props.transfort;

  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Container>
      <Form className="bg-dark text-white p-5 w-50 border border-white shadow rounded" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formGroupText">
          <Form.Label>Pick from</Form.Label>
          <Form.Control type="text" placeholder="Mirpur 1" />
        </Form.Group>

        <Form.Group controlId="formGroupText">
          <Form.Label>Pick to</Form.Label>
          <Form.Control type="text" placeholder="Dhanmondi" />
        </Form.Group>
        <Button className="btn-block" variant="primary" type="submit">
        <Link to={`/book/${id}`} className="text-white text-decoration-none">Submit</Link> 
        </Button>
      </Form>
    </Container>
  );
};

export default Book;

