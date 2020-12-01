import {combineReducers} from 'redux';
import itemReducer from './items/item.reducer';

const rootReducer = combineReducers({
    items: itemReducer
});

export default rootReducer;