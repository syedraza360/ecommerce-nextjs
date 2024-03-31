import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledDiv = styled.div`
  padding: 30px 0px;
  h4 {
    color: #e84c88;
    text-align: center;
    font-size: 18px;
    margin: 0px;
  }
  h2 {
    padding: 0 25px;
    text-align: center;
    font-weight: bold;
    margin: 8px 0px 10px;
    line-height: 1.1em;
    font-size: 36px;
    width: max-content;
    position: relative;
    ::after {
      position: absolute;
      height: 5px;
      width: 100%;
      background-color: #e84c88;
      opacity: 0.4;
      content: "";
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 6px;
      z-index: -1;
    }
  }
  @media (max-width: 767px) {
    h2 {
      text-align: center;
      font-size: 24px;
    }
  }
`;

const Title2 = (props) => {
  return (
    <StyledDiv>
      <div
        style={{
          display: props.display == "none" ? "none" : "flex",
          justifyContent: "center",
          margin: "8px 0px",
        }}
      >
        <div>
          <h4>{props.subtitle}</h4>
          <h2>{props.maintitle}</h2>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Title2;
