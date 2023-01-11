import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const item = state.products.find(item => item.id === action.payload.id)

      if(item) {
        item.quantity+=action.payload.quantity
        toast.info(`increased ${action.payload.title.slice(0,5)}... cart quantity`, {
          position: "top-center"
        })
      }else {
        state.products.push(action.payload)
        toast.success(`${action.payload.title} added`,{
          position: "top-center"
        })
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item => item.id !== action.payload)
      toast.warning(`removed`,{
        position: "top-center"
      })
    },
    resetCart: (state) => {
      state.products = []
      toast.error(`remove all is done`,{
        position: "top-center"
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer