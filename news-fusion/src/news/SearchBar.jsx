import { useState } from "react";

function SearchBar() {

  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search news..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;