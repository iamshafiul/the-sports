import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "../TeamDetail/TeamDetail.css";
// import TeamInfo from "../TeamInfo/TeamInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "../../Photo/Facebook.png";
import twitter from "../../Photo/Twitter.png";
import youtube from "../../Photo/YouTube.png";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";
import { faClock, faFlag, faFutbol } from "@fortawesome/free-solid-svg-icons";

const TeamDetail = () => {
  const { teamId } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.teams[0]));
  }, [teamId]);
  //changed
  const { strTeam, strCountry, strSport, intFormedYear, strGender, strTeamBanner,strDescriptionEN} = detail;
  let gender = strGender;
  let strgender;
  if (gender === "Male") {
    strgender = <img className="img-fluid" src={male} alt="male" />;
  } else {
    strgender = <img className="img-fluid" src={female} alt="female" />;
  }

  return (
    <div>
      {
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <div>
                <div className="team-header">
                  <img className="img-fluid" src={strTeamBanner} alt="banner" />
                </div>
                <div className="team-body bg-dark py-5">
                  <Container>
                    <div className="info-card bg-primary p-4 rounded">
                      <Row className="align-items-center">
                        <Col md={6} sm={12} xs={12}>
                          <h1 className="text-white">{strTeam}</h1>
                          <ul className="list-unstyled text-white">
                            <li>
                              {" "}
                              <FontAwesomeIcon icon={faClock} />
                              <h5 className="d-inline ml-2">Founded: {intFormedYear}</h5>
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faFlag} />
                              <h5 className="d-inline ml-2">Country: {strCountry}</h5>
                            </li>
                            <li>
                              {" "}
                              <FontAwesomeIcon icon={faFlag} />
                              <h5 className="d-inline ml-2">Sport type: {strSport}</h5>
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faFutbol} />
                              <h5 className="d-inline ml-2">Gender :{strGender}</h5>
                            </li>
                          </ul>
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                          {strgender}
                        </Col>
                      </Row>
                    </div>
                    <p className="text-white mt-3 text-justify">
                      {strDescriptionEN}
                    </p>
                    <div className="social-icon text-center">
                      <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                        <img src={twitter} alt="twitter" />
                      </a>
                      <a className="ml-2 mr-2" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                        <img src={facebook} alt="facebook" />
                      </a>
                      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
                        <img src={youtube} alt="youtube" />
                      </a>
                    </div>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
};

export default TeamDetail;
