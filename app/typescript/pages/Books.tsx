import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import {
  useGetBooksQuery,
  useGetFeaturedBooksQuery,
} from "@/graphql/generated/graphql";
import { useNavigate } from "react-router";
function FeaturedBooks() {
  const { data, loading, error } = useGetFeaturedBooksQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let featuredBookItems = data?.featuredBooks?.map(
    ({ id, title, avatarUrl, description }) => (
      <Carousel.Item key={id}>
        <img
          className="d-block w-100"
          src={avatarUrl || ""}
          alt={title || ""}
        />
        <Carousel.Caption>
          <h5>{title}</h5>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  );
  return <Carousel>{featuredBookItems}</Carousel>;
}

function BookList() {
  let navigate = useNavigate();
  const { data, loading, error } = useGetBooksQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let bookCards = data?.books?.map(({ id, title, avatarUrl, description }) => (
    <Card
      style={{ width: "18rem" }}
      key={id}
      onClick={() => {
        console.log("ready");
        navigate(`/app/books/${id}`);
      }}
    >
      <Card.Img variant="top" src={avatarUrl || ""} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  ));
  return <div>{bookCards}</div>;
}
function Books() {
  return (
    <div>
      <Row>
        <Col />
        <Col>
          <FeaturedBooks />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <BookList />
        </Col>
      </Row>
    </div>
  );
}

export default Books;
