import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const value = searchText.trim();

    if (value === "") {
      alert("Please enter something to search.");
      return;
    }

    if (onSearch) {
      onSearch(value);
    }

    console.log("Searching for:", value);
  };

  // Clear input
  const handleClear = () => {
    setSearchText("");
  };

  // Search on Enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <span style={{ fontSize: "22px" }}>🔍</span>

      <input
        type="text"
        placeholder="Search latest news..."
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          flex: 1,
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          outline: "none",
        }}
      />

      {searchText && (
        <button
          onClick={handleClear}
          style={{
            padding: "10px 14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#ff4d4f",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Clear
        </button>
      )}

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: "#007bff",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;