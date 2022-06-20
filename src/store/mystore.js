import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduces from "./reduces.js";

const store = createStore(reduces, applyMiddleware(thunk));

export default store;
