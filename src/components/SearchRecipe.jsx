import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../actions/recipeActions';

const SearchRecipe = () => {
  const [cuisine, setCuisine] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchRecipes(cuisine));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="d-flex align-items-center">
        {/* Input field with Bootstrap styling */}
        <input
          type="text"
          value={cuisine}
          style={{ width: '300px', marginRight: '10px' }} // Space between input and button
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Search by cuisine"
          className="form-control"
        />

        {/* Search button with Bootstrap styling */}
        <button
          onClick={handleSearch}
          className="btn btn-primary"
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchRecipe;

