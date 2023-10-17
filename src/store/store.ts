import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export type AppDispatch = typeof store.dispatch;
