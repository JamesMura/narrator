import { useGetAuthorsQuery } from "@/graphql/generated/graphql";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AuthorList() {
  const { data, loading, error } = useGetAuthorsQuery();
  let navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let bookCards = data?.authors?.map(({ id, name, bio, avatarUrl }) => (
    <Card
      style={{ width: "18rem", cursor: "pointer" }}
      key={id}
      onClick={() => {
        console.log("ready");
        navigate(`/app/authors/${id}`);
      }}
    >
      <Card.Img variant="top" src={avatarUrl || ""} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
    </Card>
  ));
  return <div>{bookCards}</div>;
}
function Authors() {
  return (
    <Row>
      <Col>
        <AuthorList />
      </Col>
    </Row>
  );
}

export default Authors;
