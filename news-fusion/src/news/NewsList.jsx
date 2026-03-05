import NewsCard from "./NewsCard";

function NewsList() {
  const articles = [
    {
      id: 1,
      title: "Tech News",
      description: "Latest technology update",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      title: "Sports News",
      description: "Latest sports update",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <div>
      {articles.map((a) => (
        <NewsCard key={a.id} article={a} />
      ))}
    </div>
  );
}

export default NewsList;