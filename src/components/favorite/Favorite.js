import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { resetFavCart, removeFavItem } from '../../redux/favoriteReducer'
import './favorite.scss';


const Favorite = () => {
  const productsFav = useSelector(state => state.favoriteCart.productsFav);
  const dispatch = useDispatch()

  return (
    <div className='favCart'>
      <h1>Products in your cart</h1>
      {productsFav.map((item, i) => (
        <div className='item' key={i}>
          <img src={item.img} alt="" />
          <div className='details'>
            <h1>{item.title}</h1>
            <MdDeleteOutline className='delete' onClick={() => dispatch(removeFavItem(item.id))} />
          </div>
        </div>
      ))}
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetFavCart())}>Reset Cart</span>
    </div>
  )
}

export default Favorite;