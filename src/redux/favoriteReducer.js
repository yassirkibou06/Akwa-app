import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  productsFav: [],
}

export const favoriteCartSlice = createSlice({
  name: 'favoriteCart',
  initialState,
  reducers: {
    addToFavCart: (state,action) => {
      const item = state.productsFav.find(item => item.id === action.payload.id)

      if(item) {
        item.quantity=action.payload.quantity
        toast.info(`already in favorite`, {
          position: "top-center"
        })
      }else {
        state.productsFav.push(action.payload)
        toast.success(`${action.payload.title} added to favorite`,{
          position: "top-center"
        })
      }
    },
    removeFavItem: (state,action) => {
      state.productsFav=state.productsFav.filter(item => item.id !== action.payload)
      toast.warning(`removed from fovrite`,{
        position: "top-center"
      })
    },
    resetFavCart: (state) => {
      state.productsFav = []
      toast.error(`remove all is done`,{
        position: "top-center"
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToFavCart, removeFavItem, resetFavCart } = favoriteCartSlice.actions

export default favoriteCartSlice.reducer