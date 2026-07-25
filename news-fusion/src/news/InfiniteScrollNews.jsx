import React, { useState, useEffect } from "react";

const InfiniteScrollNews = () => {
  // ===========================================
  // Initial News Data
  // ===========================================

  const initialNews = [
    {
      id: 1,
      title: "React 19 Released",
      category: "Technology",
      author: "John Doe",
      date: "15 July 2026",
      description:
        "React 19 introduces several new improvements including server components, faster rendering, and optimized hooks."
    },
    {
      id: 2,
      title: "Artificial Intelligence Growth",
      category: "AI",
      author: "Sarah Smith",
      date: "18 July 2026",
      description:
        "Artificial Intelligence continues transforming industries with automation and smart decision-making."
    },
    {
      id: 3,
      title: "SpaceX Successfully Launches Mission",
      category: "Science",
      author: "David Wilson",
      date: "19 July 2026",
      description:
        "SpaceX successfully launched another mission carrying satellites into orbit."
    },
    {
      id: 4,
      title: "Global Tech Conference",
      category: "Technology",
      author: "Alex Brown",
      date: "20 July 2026",
      description:
        "Developers from over 80 countries attended the annual global technology conference."
    },
    {
      id: 5,
      title: "Cyber Security Updates",
      category: "Security",
      author: "James Lee",
      date: "22 July 2026",
      description:
        "Experts recommend enabling multi-factor authentication to improve online security."
    }
  ];

  // ===========================================
  // States
  // ===========================================

  const [news, setNews] = useState(initialNews);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // ===========================================
  // Load More News
  // ===========================================

  const loadMoreNews = () => {
    setLoading(true);

    setTimeout(() => {
      const newNews = Array.from({ length: 5 }, (_, index) => ({
        id: news.length + index + 1,
        title: `Breaking News ${news.length + index + 1}`,
        category: "Latest",
        author: "News Reporter",
        date: "25 July 2026",
        description:
          "This is dynamically loaded news content using infinite scrolling in React."
      }));

      setNews((previousNews) => [...previousNews, ...newNews]);
      setPage((previousPage) => previousPage + 1);
      setLoading(false);
    }, 1500);
  };

  // ===========================================
  // Infinite Scroll
  // ===========================================

  useEffect(() => {
    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150;

      if (reachedBottom && !loading) {
        loadMoreNews();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, news]);

  // ===========================================
  // JSX
  // ===========================================

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <header>
        <h1>📰 Infinite Scroll News Portal</h1>

        <p>
          Read the latest technology, science, business, and AI news with an
          infinite scrolling experience.
        </p>

        <hr />
      </header>

      <h3>Total Articles : {news.length}</h3>

      {news.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "20px",
            padding: "20px",
            background: "#fafafa"
          }}
        >
          <h2>{item.title}</h2>

          <p>
            <strong>Category :</strong> {item.category}
          </p>

          <p>
            <strong>Author :</strong> {item.author}
          </p>

          <p>
            <strong>Date :</strong> {item.date}
          </p>

          <p>{item.description}</p>

          <button>Read Full News</button>
        </div>
      ))}

      {loading && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h3>Loading More News...</h3>
        </div>
      )}

      <footer
        style={{
          marginTop: "40px",
          textAlign: "center"
        }}
      >
        <hr />
        <p>Current Page : {page}</p>
        <p>Infinite Scroll React Demo Project</p>
      </footer>
    </div>
  );
};

export default InfiniteScrollNews;