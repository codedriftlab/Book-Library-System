import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px"
      }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Link to="/">
        <button style={{cursor: "pointer"}}>Go to Home</button>
      </Link>
    </div>
  );
}