import { useState } from "react";
import { booksData } from "../data/books";
import BookCard from "../components/BookCard";
import "./style.css";

export default function Browse() {
  const [search, setSearch] = useState("");

  const filtered = booksData.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Browse Books</h2>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
 {filtered.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
</div>
     
    </div>
  );
}
