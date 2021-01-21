import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp22194957Reducer from '../features/SignUp22194957/redux/reducers'
import SignUp23194956Reducer from '../features/SignUp23194956/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp22194957: SignUp22194957Reducer,
SignUp23194956: SignUp23194956Reducer,

});