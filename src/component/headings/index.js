import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledDiv = styled.div`
  h1 {
    text-align: center;
    font-weight: bold;
    margin: 24px 0px 10px;
    line-height: 1.1em;
    font-size: 36px;
    width: max-content;
  }
  @media (max-width: 767px) {
    h1 {
      text-align: center;
      font-size: 24px;
    }
  }
`;

const Heading = (props) => {
  return (
    <StyledDiv>
      <div
        style={{
          display: props.display == "none" ? "none" : "flex",
          justifyContent: "center",
          margin: "24px 0px",
        }}
      >
        <Col
          span={24}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <h1 style={{ color: props.color ? props.color : "#000" }}>
            {props.children || props.title}
            <div
              style={{
                margin: "8px 25%",
                height: 3,
                backgroundColor: props.backgroundColor
                  ? props.backgroundColor
                  : "#2A2A2A",
                borderRadius: 50,
              }}
            ></div>
          </h1>
        </Col>
      </div>
    </StyledDiv>
  );
};

export default Heading;
