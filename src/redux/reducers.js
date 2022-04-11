
const initialstate = {
  games: [],
  selectedgames:[],
  searchedgames : []
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
          selectedgames:action.payload
        }
        case "searchdataset":
          return{
            ...state,
            searchedgames:action.payload
          }
        case "clearsearch":
          return{
            ...state,
            searchedgames:[]
          }
    default:
      return state;
  }
};
