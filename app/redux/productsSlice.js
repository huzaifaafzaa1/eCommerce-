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
       setSelectedProduct: (state,action)=>{       // this function is used when we click on product based on its id we see its description
        // console.log("selected prod", action.payload)
        state.selectedProduct = action.payload;
       }
    }
})

export const {setProducts,setSelectedProduct} = productsSlice.actions
export default productsSlice.reducer
