const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
    selectedProduct: null,
  }

const productsSlice = createSlice({
    initialState,
    name:'productsStore',
    reducers:{
       setProducts: (state,action)=>{              // this function will store all the data coming from 'store api' in products array with additional properties that we have added
        state.products = action.payload;
       },

    }
})

export const {setProducts,setSelectedProduct} = productsSlice.actions
export default productsSlice.reducer
