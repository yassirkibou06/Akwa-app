import React from 'react';

import { Route, Routes,Navigate } from 'react-router-dom';
import Detail from '../pages/Detail';
import Men from '../pages/Men';
import PageList from '../pages/PageList';
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
                element={<Detail />}
            />
            <Route
                path='/:gender/:categorie'
                element={<PageList />}
            />
        </Routes>
    );
}

export default Router;