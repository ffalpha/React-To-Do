import React from 'react';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import styled from 'styled-components';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const MainWarpper = styled.div`
  width: 100%;
  min-height: calc(100vh -6rem);
  margin-top: 6rem;
`;
const Layout = ({ children }) => (
  <>
    <Navbar></Navbar>
    <MainWarpper>{children}</MainWarpper>
  </>
);

export default Layout;
