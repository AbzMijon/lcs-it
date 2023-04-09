import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import MainPage from '../Pages/MainPage/MainPage';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.homePage} element={<MainPage />} />
            <Route path='*' element={<Navigate to={ROUTES.homePage}/>} />
        </Routes>
    )
}

export default RootRoute;