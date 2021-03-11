import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFlag, faFutbol } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../Photo/Facebook.png";
import twitter from "../../Photo/Twitter.png";
import youtube from "../../Photo/YouTube.png";
import "../TeamInfo/TeamInfo.css";
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";


const TeamInfo = (props) => {
  const { strTeam, strCountry, strSport, intFormedYear, strGender, strTeamBanner } = props.de;
  let gender = strGender;
  let strgender;
  if (gender === "Male") {
    strgender = <img className="img-fluid" src={male} alt="male" />;
  } else {
    strgender = <img className="img-fluid" src={female} alt="female" />;
  }

  return (
    <div>
      <div className="team-header">
        <img className="img-fluid" src={strTeamBanner} alt="banner" />
      </div>
      <div className="team-body bg-dark py-5">
        <Container>
          <div className="info-card bg-primary p-4 rounded">
            <Row className="align-items-center">
              <Col xs={6} md={6} sm={12} xs={12}>
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
              <Col xs={6} md={6} sm={12} xs={12}>{strgender}</Col>
            </Row>
          </div>
          <p className="text-white mt-3 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore alias, minima eaque commodi aspernatur aliquam hic, eum ea debitis est
            consectetur optio provident nam animi, rerum voluptatibus. Eos voluptas, explicabo velit laudantium ipsam ullam libero iste laborum
            corporis, incidunt eius ab. Aperiam accusamus numquam eveniet earum recusandae modi quae voluptatem asperiores possimus nesciunt ut
            voluptas velit magni ad porro cumque quidem ullam, assumenda non aspernatur distinctio totam! Explicabo sapiente quaerat eos omnis nam
            aliquam maxime, unde tempora quod odio aperiam dolores quibusdam ipsam quisquam placeat, molestias magnam quia, error voluptate commodi
            debitis nisi fugiat nemo consectetur! Dolorem quidem optio eos.
          </p>
          <p className="text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, doloremque recusandae cupiditate velit accusantium culpa corrupti ab
            architecto temporibus reiciendis, deleniti quos explicabo voluptatibus odio iste repellendus animi consequuntur repellat, magnam rem ad!
            Dicta hic quas consequatur nostrum temporibus. Nam magnam nostrum dolor nemo vitae labore eligendi nulla amet maiores eum magni blanditiis
            eos pariatur veniam animi, optio similique recusandae adipisci. Ratione repellendus perspiciatis molestiae ipsa quas ut voluptate nesciunt
            delectus dolore, quae minima quis tenetur fugit porro, dolor est nemo sit hic? Aut animi expedita incidunt culpa repellendus in voluptas.
            Rem in pariatur debitis repellendus adipisci, accusamus molestiae iure?
          </p>

          <div className="social-icon text-center">
            <a href="https://twitter.com/" target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
            <a className="ml-2 mr-2" href="https://www.facebook.com/" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TeamInfo;
