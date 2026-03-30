import { booksData } from "../data/books";
import BookCard from "../components/BookCard";
import "./style.css";

export default function Home() {
  return (
    <div className="container">
      <h2>Welcome to Library</h2>
      <h3>Popular Books</h3>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
{booksData.slice(0, 4).map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
</div>
      
    </div>
  );
}
