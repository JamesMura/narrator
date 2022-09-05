import { useGetBookQuery } from "@/graphql/generated/graphql";
import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { useParams } from "react-router";
function BookDetails() {
  let { id } = useParams();

  const { data, loading, error } = useGetBookQuery({
    variables: { id: Number(id) },
  });
  return (
    <div>
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              alt={data?.book?.title || ""}
              src={data?.book?.avatarUrl || ""}
            />
          </Figure>
        </Col>
        <Col className="text-center">
          <h2 className="display-2">{data?.book?.title}</h2>
          <h4>By</h4>
          <h3 className="display-4">{data?.book?.author.name}</h3>
        </Col>
      </Row>
    </div>
  );
}

export default BookDetails;
