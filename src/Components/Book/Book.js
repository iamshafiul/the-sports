import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Book/Book.css";

const Book = () => {
  return (
    <Container>
      <Form className="bg-dark text-white p-5 w-50 border border-white shadow rounded">
        <Form.Group controlId="formGroupText">
          <Form.Label>Pick from</Form.Label>
          <Form.Control type="text" placeholder="Mirpur 1" />
        </Form.Group>

        <Form.Group controlId="formGroupText">
          <Form.Label>Pick to</Form.Label>
          <Form.Control type="text" placeholder="Dhanmondi" />
        </Form.Group>
        
        <Link to='/bookInfo' className="text-white text-decoration-none">
        <Button className="btn-block" variant="primary" type="submit">Submit</Button>
        </Link> 
        
      </Form>
    </Container>
  );
};

export default Book;

