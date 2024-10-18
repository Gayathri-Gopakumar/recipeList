import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error, currentPage, totalPages } = useSelector((state) => state.recipeReducer || {});
  
  const [cuisine, setCuisine] = useState(''); // State to hold the cuisine filter

  // Fetch recipes when the component is mounted or when the page or cuisine changes
  useEffect(() => {
    // Debug: log currentPage and cuisine
    console.log("Fetching recipes for page:", currentPage, "and cuisine:", cuisine);
    dispatch(fetchRecipes(currentPage, cuisine)); // Pass the cuisine to the fetchRecipes action
  }, [dispatch, currentPage, cuisine]); // Depend on currentPage and cuisine to refetch when they change

  // Handle cuisine change
  const handleCuisineChange = (event) => {
    setCuisine(event.target.value); // Update the cuisine filter
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    console.log("Page changed to:", pageNumber);
    dispatch({ type: 'SET_CURRENT_PAGE', payload: pageNumber });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipes || recipes.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div 
     
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/ingredients-cooking-food-background-with-herbs-vegetables-top-view-white-background_1040174-1580.jpg")',  // Replace with your actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',  // Ensure it covers the full height of the page
        padding: '20px',  // Add padding if needed to give content some space
      }}
    >
      {/* Cuisine Search Input */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by cuisine"
          value={cuisine}
          onChange={handleCuisineChange} // Update cuisine state on input change
        />
      </div>

      {/* Recipe Cards */}
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4" key={recipe.id}>
            <div className="d-flex justify-content-center align-items-center mb-4 ">
              <div className="border rounded shadow bg-success" style={{ height: '100px', width: '300px' }}>
                <h3>
                  <Link className='text-light' to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                </h3>
                <p className='text-light'>cuisine: {recipe.cuisine}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default RecipeList;
