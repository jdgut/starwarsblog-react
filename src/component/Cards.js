import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  const { store, actions } = useContext(Context);

  console.log(store[props.type]);

  const cardsData = props.type in store ? store[props.type] : [];
  const layout = cardsData.map( (data, i )=> {
    return (
      <Col lg={4} className="mb-4" key={i}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={`https://loremflickr.com/320/240/${data.name}`} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {props.type == 'characters' && <div>Gender: {data.gender}<br/>Hair-color: {data.hair_color}<br/>Eye-color: {data.eye_color}</div>}
            {props.type == 'planets' && <div>Population: {data.population}<br/>Terrains: {data.terrain}</div>}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    );
  });

  return (
    <>
    <Row>
      {layout}
    </Row>
    </>
  )
}

export {Cards as default}