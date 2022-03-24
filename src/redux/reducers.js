
const initialstate = {
  games: {},
};

export const GameReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "calldata":
        return {
            ...state,
            games:action.payload
        };

    default:
      return state;
  }
};
