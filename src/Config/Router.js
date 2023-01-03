import React from 'react';

import { Route, Routes,Navigate } from 'react-router-dom';
import Details from '../pages/Details';

import Men from '../pages/Men';
import PageList from '../pages/PageList';
import ShopCart from '../pages/ShopCart';
import Women from '../pages/Women';

const Router = () => {
    return (
        <Routes>
            <Route path="/*" element={ <Navigate to="/men" /> } />
            <Route
                path='/men'
                element={<Men />}
            />
            <Route
                path='/women'
                element={<Women />}
            />
            <Route
                path='/detail/:id'
                element={<Details />}
            />
            <Route
                path='/:gender/:categorie'
                element={<PageList />}
            />
            <Route
                path='/shopCart'
                element={<ShopCart />}
            />
        </Routes>
    );
}

export default Router;