import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const fetchTopNews = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
  );
  return response.data.articles;
};

export const fetchByCategory = async (category) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
  );
  return response.data.articles;
};