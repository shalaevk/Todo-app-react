import  {createStore, combineReducers, compose} from "redux";
import TaskInputReducer from "./TaskInputReducer";



let reducers = combineReducers({
TaskInput: TaskInputReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers);
export default store;