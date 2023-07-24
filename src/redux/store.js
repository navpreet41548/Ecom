import { reducers } from "./reducer";
import  {createStore} from "redux";
const store = createStore(
    reducers,
    {},
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
    );

export default store;