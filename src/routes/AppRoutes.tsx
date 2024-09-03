import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "../components/organisms/MainPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRoutes;