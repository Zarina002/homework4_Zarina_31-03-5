import {combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import {themeReducer} from "./themeReducer";
const rootReducer = combineReducers({
    usersReducer,
    themeReducer
})

export const store = createStore(rootReducer)