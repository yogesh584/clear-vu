import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/reducer";
import settingReducer from "./setting/reducer";

const persistConfig = {
  key: 'root',
  storage
};


const rootReducer = combineReducers({
  auth: authReducer,
  setting: settingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);