import ItemActionTypes from './item.types';
import { utils_addItems } from '../../graphql/item.utils';

const INITIAL_STATE = {
    items: []
};

const itemReducer = (state = INITIAL_STATE, action) => {    
    switch (action.type){
        case ItemActionTypes.ADD_ITEM:
            return {
                ...state,
                items: utils_addItems(state.items, action.payload)
            };
             default: 
             return state;
    }
};

export default itemReducer;