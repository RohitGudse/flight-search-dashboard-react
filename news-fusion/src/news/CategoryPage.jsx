import { useParams } from "react-router-dom";

function CategoryPage() {

  const { name } = useParams();

  return (
    <div>
      <h2>{name} News</h2>
    </div>
  );
}

export default CategoryPage;