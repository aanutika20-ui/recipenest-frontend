import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const RecipeDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold">Recipe Details: {id}</h1>
        <p>Display full recipe, ingredients, and steps.</p>
      </div>
    </>
  );
};

export default RecipeDetail;
