import { useState } from "react";
import "./style.css";

export default function AddBook() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book Added: " + title);
  };

  return (
    <div className="container">
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Book Name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
