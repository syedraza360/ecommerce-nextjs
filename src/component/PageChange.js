import React from "react";
import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { mainLoader } from "../../images";

const StyledLoader = styled.section`
  .main-div {
    position: fixed;
    z-index: 1000;
    top: 50%;
    height: 100vh;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    width: 100%;
    background-color: #fff;
    opacity: 0.5;
  }

  .inside-div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .showbox {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5%;
  }

  .loader {
    position: relative;
    margin: 0 auto;
    width: 100px;
    right: 30px;
    bottom: 70px;
  }

  .loader::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 899, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100% {
    }
    0% {
      stroke: red;
    }
    40% {
      stroke: blue;
    }
    66% {
      stroke: green;
    }
    80% {
    }
    90% {
      stroke: yellow;
    }
  }
`;

const PageChange = (props) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

  return (
    <StyledLoader>
      <div className="main-div">
        <div className="inside-div">
          {/* <Spin indicator={antIcon} /> */}
          {/* <img src={mainLoader} /> */}

          <div className="showbox">
            <div className="loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle
                  className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledLoader>
  );
};
export default PageChange;
