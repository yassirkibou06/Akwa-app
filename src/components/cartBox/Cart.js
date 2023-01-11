import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer';
import './cart.scss';

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch()

    return (
        <div className='cart my-12'>
            {products.map((item, i) => (
                <>
                    <div className='item' key={i}>
                        <div className='details'>
                            <img src={item.img} alt="" />
                            <h1>{item.title}</h1>
                        </div>
                        <div className='price'>
                            {item.quantity} x {item.price}
                            <MdDeleteOutline className='delete' onClick={() => dispatch(removeItem(item.id))} />
                        </div>
                    </div>
                </>
            ))}
           <div className='cartBottom my-14'>
           <button>PROCEED TO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
           </div>
        </div>
    )
}

export default Cart