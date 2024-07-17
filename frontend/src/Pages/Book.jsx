import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrum from "../Components/Breadcrumb/Breadcrum";
import BookDetail from "../Components/BookDetails/BookDetail";
import RelatedBook from "../Components/RelatedBook/RelatedBook";
import DescriptionBox from "../Components/BookDetails/DescriptionBox";

const Book = () => {
  const { allBooks } = useContext(ShopContext);
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const foundBook = allBooks.find((e) => e.id === Number(bookId));
    setBook(foundBook);
  }, [allBooks, bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Breadcrum book={book} />
        <BookDetail book={book} />
        <Row>
          <Col md="7">
            <DescriptionBox book={book} />
          </Col>
          <Col md="5">
            <RelatedBook />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Book;
