import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingBag } from 'react-icons/md'
import './header.scss';



const Header = () => {
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
                        <div className='shopCart absolute right-0'>
                            <NavLink to='/shopCart'><MdOutlineShoppingBag size={22}/><span className='absolute -top-2 -right-2'>0</span></NavLink>
                        </div>
                    </ul>
            </div>
        </div>
    )
}

export default Header;
