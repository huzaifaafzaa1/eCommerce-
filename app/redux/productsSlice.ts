import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./type";

// Define the initial state type
interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
}

// Initial State
const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: "productsStore",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;








// previous JavaScript Code 

// const { createSlice } = require("@reduxjs/toolkit");

// const initialState = {
//     products: [],
//     selectedProduct: null,
//   }

// const productsSlice = createSlice({
//     initialState,
//     name:'productsStore',
//     reducers:{
//        setProducts: (state,action)=>{              // this function will store all the data coming from 'store api' in products array with additional properties that we have added
//         state.products = action.payload;
//        },

//     }
// })

// export const {setProducts,setSelectedProduct} = productsSlice.actions
// export default productsSlice.reducer
