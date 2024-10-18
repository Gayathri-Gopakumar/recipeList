import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details using the 'id'
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='text-warning'>{recipe.name}</h1>
      <img style={{height:'300px',width:'300px'}} src={recipe.image} alt="" />
      <h5>INGREDIENTS</h5>
      <p>{recipe.ingredients}</p>
      <h5>COOKING INSTRUCTIONS</h5>
      <p>{recipe.instructions}</p>
      
    </div>
  );
};

export default RecipeDetail;

