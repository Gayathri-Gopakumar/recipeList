
export const fetchRecipes = (page = 1, cuisine = '') => async (dispatch) => {
    const limit = 10; // Number of items per page
    const skip = (page - 1) * limit; // Skip based on the current page
  
    dispatch({ type: 'FETCH_RECIPES_REQUEST' });
  
    try {
      let url = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`;
  
      // Add cuisine filter if provided
      if (cuisine) {
        url += `&cuisine=${cuisine}`; // Adding cuisine to the API query
      }
  
      const response = await fetch(url);
      const data = await response.json();
  
      if (data && data.recipes) {
        dispatch({
          type: 'FETCH_RECIPES_SUCCESS',
          payload: {
            recipes: data.recipes,
            totalPages: Math.ceil(data.total / limit),
            currentPage: page,
          },
        });
      } else {
        throw new Error('Failed to fetch recipes');
      }
    } catch (error) {
      dispatch({
        type: 'FETCH_RECIPES_FAIL',
        payload: error.message,
      });
    }
  };
  
  
  