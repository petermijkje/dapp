import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { logger } from "redux-logger";

const loggerMiddleware = logger;
const middleWare = [];

//redux dev tools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleWare, loggerMiddleware))
  );
}
