export const utils_addItems = (items, itemToAdd) => {    
    const existingItem = items.find(
        item=> item.name === itemToAdd.name
    );

    if(existingItem){        
        console.log("Item is already added")
        return items;        
    }
    return [...items, itemToAdd];

}