import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Details = () => {
  const { store } = useContext(Context);
  const params = useParams();
  return (
    <>
      <Container>
      { store[params.view][params.id] && (
        <>
          <div className="media">
            <img className="mr-4" width="800" height="600" src={`https://loremflickr.com/600/400/${store[params.view][params.id].name}`} alt={`${store[params.view][params.id].name} `}/>
            <div className="media-body">
              <h1 className="mt-0">{store[params.view][params.id].name}</h1>
              <p>
              Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. ... In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise.
              </p>
            </div>
          </div>
          <hr width="100%" className="divider" / >

          <div className="details">
            {params.view === 'characters' && (
              <Row>
                <Col md={2}>
                  <p>
                    <b>Name</b> <br/>
                    {store[params.view][params.id].name}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Birth Year</b> <br/>
                    {store[params.view][params.id].birth_year}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Gender</b> <br/>
                    {store[params.view][params.id].gender}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Height</b> <br/>
                    {store[params.view][params.id].height}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Skin Color</b> <br/>
                    {store[params.view][params.id].skin_color}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Eye Color</b> <br/>
                    {store[params.view][params.id].eye_color}
                  </p>
                </Col>
              </Row>
            )}

            {params.view === 'planets' && (
              <Row>
                <Col md={2}>
                  <p>
                    <b>Rotation Period</b> <br/>
                    {store[params.view][params.id].rotation_period}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Orbital Period</b> <br/>
                    {store[params.view][params.id].orbital_period}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Diameter</b> <br/>
                    {store[params.view][params.id].diameter}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Climate</b> <br/>
                    {store[params.view][params.id].climate}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Terrain</b> <br/>
                    {store[params.view][params.id].terrain}
                  </p>
                </Col>
                <Col md={2}>
                  <p>
                    <b>Population</b> <br/>
                    {store[params.view][params.id].population}
                  </p>
                </Col>
              </Row>
            )}
          </div>
        </>
      )}
      </Container>
    </>
  )
}

export {Details as default}