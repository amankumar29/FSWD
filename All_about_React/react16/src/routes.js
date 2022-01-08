import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home.jsx';

const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )

};
export default AppRoutes;