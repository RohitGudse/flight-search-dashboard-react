import axios from "axios";

export const fetchNews = async () => {
  const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY");
  return response.data.articles;
};