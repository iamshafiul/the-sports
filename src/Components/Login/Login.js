import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from "./LoginManager";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle , faFacebook} from '@fortawesome/free-brands-svg-icons'



import "../Login/Login.css";
function Login() {
  const [newUser, setNewuser] = useState(false);
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  initializeLoginFramework();

  const history = useHistory();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      setUser(res);
      setLoggedInUser(res);
    });
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then((res) => {
        setUser(res);
        setLoggedInUser(res);
      });
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      });
    }

    e.preventDefault();
  };

  const handleBlur = (e) => {
    let isFormValid = true;

    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && isPasswordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className="form-bg">
      <Form className="bg-dark text-white p-5 w-50 m-auto border border-white shadow rounded" onSubmit={handleSubmit}>
        <Form.Group controlId="formGridName">
          {newUser && <Form.Label>name</Form.Label>}
          {newUser && <Form.Control type="text" name="name" onBlur={handleBlur} placeholder="Enter Your Name" required />}
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" required />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Sylhet</option>
              <option>Dhaka</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button className="btn-block" variant="primary" type="submit">
          Submit
        </Button>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Already have an account ? </Form.Label>
          <Link variant="primary" type="submit" onClick={() => setNewuser(!newUser)} name="newUser">
            Login
          </Link>
        </Form.Group>
      </Form>
      <h2 className="text-center line">or</h2>
      <div className="google-login-button text-center">
        {user.isSigned ? <button onClick={signOut}> <FontAwesomeIcon icon={faGoogle} /> sign out</button> : <button onClick={googleSignIn}> <FontAwesomeIcon icon={faGoogle} /> sign in</button>}
      </div>
      <p style={{ color: "red" }}>{user.error}</p>
      {user.success && <p style={{ color: "green" }}>User {newUser ? "Created" : "loged In"} Successfully</p>}
    </div>
  );
}

export default Login;
