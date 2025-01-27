const { createSlice, current } = require("@reduxjs/toolkit");

const initialState = {
    bagProducts: [],
  }

  const bagSlice = createSlice({
    initialState,
    name:'bag',
    reducers:{
       addToBag: (state,action)=>{   // this function is used to add products to bag section initial bagProducts is empty but when we click on bag it store product properties inside that array     
        const existingProduct = state.bagProducts.find((product) => {  
            return product.id === action.payload.id;     // if condition becomes true the product will now store to exisitingProducts and through existing product we can access that product and its properties 
          }
        );
        if(!existingProduct) {
          // Add product with initial count of 1
          state.bagProducts.push({ ...action.payload, count: 1 });
        }
        // Do nothing if the product already exists
      },

      increaseCount: (state, action) => {
        const product = state.bagProducts.find(
          (item) => item.id === action.payload
        );
        if (product) {
          product.count += 1;
        }
      },

      decreaseCount: (state, action) => {
        const product = state.bagProducts.find(
          (item) => item.id === action.payload
        );
        if (product && product.count > 1) {
          product.count -= 1;
        }
        else {
          // Remove the product if count is 0
          state.bagProducts = state.bagProducts.filter(
            (item) => item.id !== action.payload
          );
        }
      },

      removeFromBag: (state, action) => {
        state.bagProducts = state.bagProducts.filter(    //state.bagProducts is the array of all products currently in the bag
          (item) => item.id !== action.payload          //action.payload holds the id of the product to be removed.
        );                                             // Checks if the id of the current product (item.id) is not equal to the id provided in the action.payload. If true, the product is kept in the array; otherwise, it is excluded (removed).
      },

    }
})

export const {addToBag, increaseCount, decreaseCount,removeFromBag} = bagSlice.actions
export default bagSlice.reducer