import { legacy_createStore  ,combineReducers} from "redux";
import { reducer } from "./reducer";

const rootReducer=combineReducers({
    auth:reducer
})

export const store = legacy_createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
