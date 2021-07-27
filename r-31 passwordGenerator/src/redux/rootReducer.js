import { passwordReducer, PASS_KEY } from "./passwordRedux/pass.reducer";
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [PASS_KEY]: passwordReducer
})

export {rootReducer}