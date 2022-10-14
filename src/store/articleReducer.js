import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};
// add article action creator
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article,
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      // update state via spread (create aspread out the entries and add on the payload of the article
      return { ...state, entries: [...state.entries, action.payload] };
    default:
      return state;
  }
};

export default articleReducer;
