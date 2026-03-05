import { Link } from "react-router-dom";

function CategoryTabs() {
  return (
    <div>
      <Link to="/category/business">Business</Link>
      <Link to="/category/technology">Technology</Link>
      <Link to="/category/health">Health</Link>
      <Link to="/category/sports">Sports</Link>
    </div>
  );
}

export default CategoryTabs;