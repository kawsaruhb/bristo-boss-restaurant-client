import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
  const location = useLocation();
  console.log(location);
  const withoutHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      { withoutHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      { withoutHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
