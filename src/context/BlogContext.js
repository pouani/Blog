import CreateDataContext from './CreateDataContext';

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: `Blog Post #${state.length + 1}` 
                }
            ];
        default:
            return state;
    }
}; // Reducer function

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
}; // Action function

export const { Context, Provider } = CreateDataContext(
    blogReducer, { addBlogPost }, []
);