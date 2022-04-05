
const initialstate = {
  games: [],
  searchedgame:[]
};

export const GameReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "calldata":
        return {
            ...state,
            games:action.payload
        };
      case "searchdata":
        return{
          ...state,
          searchedgame:action.payload
        }
    default:
      return state;
  }
};
