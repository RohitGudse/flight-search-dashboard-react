import React from "react";

function BookmarkButton() {
    // Function to handle button click
    const handleBookmarkClick = () => {
        alert("Article bookmarked successfully!");
    };

    return (
        <div className="bookmark-container">
            <button
                className="bookmark-button"
                onClick={handleBookmarkClick}
                type="button"
            >
                📑 Bookmark
            </button>
        </div>
    );
}

export default BookmarkButton;