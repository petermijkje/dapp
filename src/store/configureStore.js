import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger;
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
