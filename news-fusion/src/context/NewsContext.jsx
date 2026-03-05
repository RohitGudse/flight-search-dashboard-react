import { createContext, useState, useEffect } from "react";
import { fetchTopNews } from "../services/api";
import { normalizeArticle } from "../services/normalizeNews";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    const data = await fetchTopNews();
    const normalized = data.map(normalizeArticle);
    setArticles(normalized);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <NewsContext.Provider value={{ articles, loading }}>
      {children}
    </NewsContext.Provider>
  );
};