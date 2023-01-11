import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingBag,MdFavoriteBorder } from 'react-icons/md'
import './header.scss';
import Cart from '../shopCart/Cart';
import Favorite from '../favorite/Favorite';
import { useSelector } from 'react-redux';



const Header = () => {
    const [openCart,setOpenCart] = useState(false);
    const [openFav,setOpenFav] = useState(false);
    const products = useSelector(state => state.cart.products);
    const productsFav = useSelector(state => state.favoriteCart.productsFav);

    return (
        <div className='mx' >
            <div className='first-section py-2 md:py-3 font-bold text-[9px] md:text-xs'>
                <h3>welcom to our store shop</h3>
                <h3>call us: +212 0 00 00 00 00</h3>
            </div>
            <div className='navbar relative shadow-xt'>
            <div className='logo text-regal-borown'>
                    <NavLink to='/men' activeClassName='active'>AKwa</NavLink>
                    </div>
                    <ul className='navbar__content'>
                        <li>
                            <NavLink to='/men'>Men</NavLink>
                        </li>
                        <li>
                            <NavLink to='/women'>Women</NavLink>
                        </li>
                        <div className='shopCart flex items-center absolute right-0'>
                            <div className="CartNav pr-4 md:pr-6" onClick={() => setOpenFav(!openFav)} ><MdFavoriteBorder size={22} /><span className='absolute -top-2 right-7 md:right-9'>{productsFav.length}</span></div>
                            <div className='CartNav' onClick={() => setOpenCart(!openCart)}><MdOutlineShoppingBag size={22}/><span className='absolute -top-2 -right-2'>{products.length}</span></div>
                        </div>
                    </ul>
            </div>
            {openCart && <Cart />}
            {openFav && <Favorite />}
        </div>
    )
}

export default Header;
