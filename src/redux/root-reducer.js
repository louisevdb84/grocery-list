import {combineReducers} from 'redux';
import itemReducer from './items/item.reducer';

const rootReducer = combineReducers({
    item: itemReducer
});

export default rootReducer;