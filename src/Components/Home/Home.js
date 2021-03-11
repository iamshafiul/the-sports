import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import "../Home/Home.css";
import Team from "../Team/Team";
import banner from '../../Photo/banner.jpg';

const Home = () => {
  const [teams, setTeam] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams));
  }, []);
  return (
    <div>
      <div className="home-header">
        <img src={banner} alt="banner"/>
      </div>
      <div className="home-body bg-dark pt-5">
      {
        <Container>
          <Row>
            {teams.map((team) => (
              <Col xs={4} md={4} sm={12} xs={12}>
                <Team team={team}></Team>
              </Col>
            ))}
          </Row>
        </Container>
      }
      </div>
      
    </div>
  );
};

export default Home;
