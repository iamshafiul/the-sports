import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Team/Team.css";
import {useHistory } from "react-router-dom";
const Team = (props) => {
  const { name, id,image } = props.transfort;
  const history = useHistory()
  const handleBookingTicket = () => {
    history.push('/booking')
  }
  return (
    <div>
        <Card className="mb-3 text-center p-2">
          <Card.Img  variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{id}</Card.Title>
              <Button onClick={handleBookingTicket} variant="primary">
                book now <FontAwesomeIcon icon={faArrowRight} />
              </Button>
          </Card.Body>
        </Card>
    </div>
  );
};

export default Team;
