import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "../TeamDetail/TeamDetail.css";
import TeamInfo from "../TeamInfo/TeamInfo";

const TeamDetail = () => {
  const { teamId } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.teams));
  }, []);

  return (
    <div>
      {
        <Container>
          <Row>
            {detail.map((de) => (
              <Col xs={12} md={12}>
                <TeamInfo de={de}></TeamInfo>
              </Col>
            ))}
          </Row>
        </Container>
      }
    </div>
  );
};

export default TeamDetail;
