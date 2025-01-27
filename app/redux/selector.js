// as redux states are manage globally thats how i am accessing them here

export const selectBagProducts = (state) => state.bag.bagProducts;

export const selectProducts = (state) => state.productsStore.products;
