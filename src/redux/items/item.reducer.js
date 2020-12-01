import ItemActionTypes from './item.types';
import { addItems } from './item.utils';

const INITIAL_STATE = {
    items: []
};

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ItemActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItems
            };
             default: 
             return state;
    }
};

export default itemReducer;