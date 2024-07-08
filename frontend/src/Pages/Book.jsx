import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrumb/Breadcrum";
import BookDetail from "../Components/BookDetails/BookDetail";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedBook from "../Components/RelatedBook/RelatedBook";

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
      <Breadcrum book={book} />
      <BookDetail book={book} />
      <DescriptionBox />
      <RelatedBook />
    </div>
  );
};

export default Book;
