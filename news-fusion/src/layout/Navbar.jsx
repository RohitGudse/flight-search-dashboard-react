import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/category/business">Business</Link>
      <Link to="/category/sports">Sports</Link>
      <Link to="/category/technology">Tech</Link>
      <Link to="/bookmarks">Bookmarks</Link>
    </nav>
  );
}

export default Navbar;