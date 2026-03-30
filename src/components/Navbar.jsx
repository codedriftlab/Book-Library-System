import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px", margin: "0 15px" }}>Home</Link>
      <Link to="/browse" style={{ color: "white", textDecoration: "none", fontSize: "18px", margin: "0 15px" }}>Browse Books</Link>
      <Link to="/add" style={{ color: "white", textDecoration: "none", fontSize: "18px", margin: "0 15px" }}>Add Book</Link>
    </div>
  );
}

export default Navbar;
