import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  storage
};

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
// const store = createStore(rootReducer, enhancer);






const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  enhancer
);

let persistor = persistStore(store);



export { store, persistor };