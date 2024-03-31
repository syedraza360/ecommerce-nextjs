import React, { useRef } from "react";
import styled from "styled-components";

const StyledHamburger = styled.div`
  cursor: pointer;

  .line {
    height: 2px;
    width: 24px;
    background-color: #fff;
    // background-color: #fe8819;
    border-radius: 5px;
    transition: 0.3s ease;
  }

  .line-1 {
    transform: translateY(-6px);
  }

  .line-3 {
    transform: translateY(6px);
  }

  &.menu-close {
    .line-1 {
      transform: translateY(4px) rotateZ(-45deg);
    }
    .line-2 {
      opacity: 0;
    }
    .line-3 {
      transform: translateY(-4px) rotateZ(45deg);
    }
  }
`;

const Hamburger = ({ open }) => {
  return (
    <StyledHamburger className={open ? "menu-close" : ""}>
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
    </StyledHamburger>
  );
};

export default Hamburger;
