import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";

export const Store = createStore(reducer, middleware);
