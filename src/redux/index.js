import { createStore } from 'redux'
import { GameReducer } from "./reducers";


export let GameStore = createStore(GameReducer);