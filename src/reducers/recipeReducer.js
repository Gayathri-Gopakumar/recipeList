
const initialState = {
    recipes: [],        // Initialize as an empty array
    singleRecipe: null,
    loading: false,
    error: null,
    currentPage: 1,     // Default current page
    totalPages: 0,      // Initialize total pages
  };
  
  export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES_REQUEST':
      case 'SEARCH_RECIPES_REQUEST':
      case 'FETCH_SINGLE_RECIPE_REQUEST':
        return { ...state, loading: true };
  
      case 'FETCH_RECIPES_SUCCESS':
        return { 
          ...state, 
          recipes: action.payload.recipes,  // Assuming the payload is an object with 'recipes' and 'totalPages'
          totalPages: action.payload.totalPages,
          loading: false 
        };
  
      case 'SEARCH_RECIPES_SUCCESS':
        return { ...state, recipes: action.payload, loading: false };
  
      case 'FETCH_SINGLE_RECIPE_SUCCESS':
        return { ...state, singleRecipe: action.payload, loading: false };
  
      case 'FETCH_RECIPES_FAIL':
      case 'SEARCH_RECIPES_FAIL':
      case 'FETCH_SINGLE_RECIPE_FAIL':
        return { ...state, error: action.payload, loading: false };
  
      default:
        return state;
    }
  };
  
  
  
  
  
  