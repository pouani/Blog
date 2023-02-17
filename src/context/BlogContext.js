import CreateDataContext from './CreateDataContext';

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content 
                }
            ];
        default:
            return state;
    }
}; // Reducer function

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callback) {
            callback();
        }
    }
}; // Action function

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

export const { Context, Provider } = CreateDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost }, 
    []
);