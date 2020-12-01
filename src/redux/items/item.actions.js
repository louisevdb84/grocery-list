import ItemActionTypes from './item.types';

export const addItem = item => ({
    type: ItemActionTypes.ADD_ITEM,
    payload: item
});