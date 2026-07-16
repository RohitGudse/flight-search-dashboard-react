import React from "react";

const LoadMoreButton = ({
  onLoadMore,
  buttonText = "Load More",
  loading = false,
  disabled = false,
  className = "",
}) => {
  const handleButtonClick = () => {
    if (loading || disabled) return;

    if (typeof onLoadMore === "function") {
      onLoadMore();
    }
  };

  return (
    <div className="load-more-container">
      <button
        type="button"
        className={`load-more-btn ${className}`}
        onClick={handleButtonClick}
        disabled={loading || disabled}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>📄</span>
            <span>{buttonText}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;