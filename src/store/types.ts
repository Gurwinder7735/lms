import store from "src/store";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
