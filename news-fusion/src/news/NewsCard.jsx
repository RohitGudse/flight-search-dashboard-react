function NewsCard({ article }) {
  return (
    <div>
      <img src={article.image} alt={article.title} width="200" />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
}

export default NewsCard;