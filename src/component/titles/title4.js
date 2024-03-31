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
    position: relative;
    text-align: center;
    font-weight: bold;
    margin: 8px 0px 10px;
    line-height: 1.1em;
    font-size: 36px;
    width: max-content;
    padding-bottom: 0px;
  }
  .line {
    position: relative;
    height: 1px;
    width: 180px;
    background-color: #e84c88;
    margin: 0 auto 14px;
    bottom: 0;
    top: 0;
    ::before {
      position: absolute;
      height: 10px;
      width: 10px;
      content: "";
      background-color: #e84c88;
      top: -4px;
      left: 64px;
    }
    ::after {
      position: absolute;
      height: 10px;
      width: 10px;
      content: "";
      background-color: #e84c88;
      top: -4px;
      left: 78px;
    }
    span {
      ::before {
        position: absolute;
        height: 10px;
        width: 10px;
        content: "";
        background-color: #e84c88;
        top: -4px;
        right: 64px;
      }
      ::after {
        position: absolute;
        height: 10px;
        width: 10px;
        content: "";
        background-color: #e84c88;
        top: -4px;
        right: 78px;
      }
    }
  }
  @media (max-width: 767px) {
    h2 {
      text-align: center;
      font-size: 24px;
    }
  }
`;

const Title4 = (props) => {
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
          <div className="line">
            <span></span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Title4;
