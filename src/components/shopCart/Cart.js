import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector,useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import './cart.scss';

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {total += item.quantity * item.price?.slice(1)});
        return total.toFixed(2)
    }

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products.map((item,i) => (
            <div className='item' key={i}>
            <img src={item.img} alt=""/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <div className='price'>{item.quantity} x {item.price}
                    <MdDeleteOutline className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                    </div>
                    
                </div>
        </div>
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart