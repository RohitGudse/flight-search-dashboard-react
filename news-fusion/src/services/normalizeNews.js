export const normalizeArticle = (article, index) => {
  return {
    id: index,
    title: article.title,
    description: article.description,
    image: article.urlToImage,
    source: article.source.name,
    date: article.publishedAt,
    url: article.url,
  };
};