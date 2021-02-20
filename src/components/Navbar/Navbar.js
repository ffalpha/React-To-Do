import React from "react";
import styled from "styled-components";

const Warpper = styled.div`
  position: fixed;
  background-color: var(--color-main);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`;
const Navbar = () => {
  return (
    <Warpper>
      <div>Logo</div>
    </Warpper>
  );
};

export default Navbar;
