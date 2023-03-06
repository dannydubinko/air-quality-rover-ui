import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Centered>
        <Outlet />
      </Centered>
    </>
  );
};

export default Layout;

const Centered = styled.a`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
