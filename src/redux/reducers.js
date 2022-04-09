
const initialstate = {
  games: [],
  selectedgames:[],
  searchinput:"",
  searcheditems:[]
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
        case "searchinputchange":
          return{
            ...state,
            searchinput:action.payload
          }
    default:
      return state;
  }
};
