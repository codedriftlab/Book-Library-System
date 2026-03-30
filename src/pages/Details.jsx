import { useParams, Link } from "react-router-dom";
import { booksData } from "../data/books";
import "./style.css";

export default function Details() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === Number(id));

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <Link to="/browse">Back</Link>
    </div>
  );
}
