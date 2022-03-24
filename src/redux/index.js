import { createStore } from 'redux'
import { GameReducer } from "./reducers";


export  const GameStore = createStore(
    GameReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );