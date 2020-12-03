import ItemActionTypes from './item.types';

const addItem = item => ({
    type: ItemActionTypes.ADD_ITEM,
    payload: item
});

export default addItem;