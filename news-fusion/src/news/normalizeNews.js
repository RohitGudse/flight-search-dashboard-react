export function normalizeNews(article) {
  return {
    title: article.title,
    description: article.description,
    image: article.urlToImage,
    url: article.url
  };
}