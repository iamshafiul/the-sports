import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Team/Team.css";
import { Link } from "react-router-dom";
const Team = (props) => {
  const { strTeam, strLeague, idTeam,strTeamBadge } = props.team;
  return (
    <div>
        <Card className="mb-3 text-center p-2">
          <Card.Img  variant="top" src={strTeamBadge} />
          <Card.Body>
            <Card.Title>{strTeam}</Card.Title>
            <Card.Text>{strLeague}</Card.Text>
            <Link to={`/team/${idTeam}`}>
              <Button variant="primary">
                explore <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  );
};

export default Team;
