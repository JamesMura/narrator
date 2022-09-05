import { useGetNarratorsQuery } from "@/graphql/generated/graphql";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

function NarratorsList() {
  let navigate = useNavigate();
  const { data, loading, error } = useGetNarratorsQuery();
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;
  let cards = data?.narrators?.map(({ id, name, bio, avatarUrl }) => (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      key={id}
      onClick={() => {
        console.log("ready");
        navigate(`/app/narrators/${id}`);
      }}
    >
      <Card.Img variant="top" src={avatarUrl || ""} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </Card>
  ));
  return <div>{cards}</div>;
}
function Narrators() {
  return (
    <Row>
      <Col>
        <NarratorsList />
      </Col>
    </Row>
  );
}

export default Narrators;
