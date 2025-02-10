// Define your Redux state interface
interface RootState {
    bag: {
      bagProducts: Array<any>; // Replace `any` with the actual type of your products
    };
    productsStore: {
      products: Array<any>; // Replace `any` with the actual type of your products
    };
  }
  
  // Now use the RootState type in your selectors
  export const selectBagProducts = (state: RootState) => state.bag.bagProducts;
  
  export const selectProducts = (state: RootState) => state.productsStore.products;
  