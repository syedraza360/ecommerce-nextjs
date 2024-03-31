import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { CgMenuGridR, CgLoadbar } from "react-icons/cg";
import { AiOutlineBars } from "react-icons/ai";

const SortBar = (props) => {
  const { className, style, setGridColumn, count } = props;
  const [showTotalProducts, setShowTotalProducts] = useState(24);
  return (
    <StyledDiv className={className} style={style}>
      <Row className="main-div">
        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
          <div className="search-count">
            <h5>
              Showing Products 1-{showTotalProducts} Of {count} Result
            </h5>
          </div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={7} xl={7}>
          <div className="filter-div">
            <div style={{ display: "flex", marginRight: 34 }}>
              <CgMenuGridR
                style={{ fontSize: 22, cursor: "pointer", marginRight: 8 }}
                onClick={() => setGridColumn(3)}
              />

              <AiOutlineBars
                style={{ fontSize: 22, cursor: "pointer" }}
                onClick={() => setGridColumn(1)}
              />
            </div>

            <div className="d-flex">
              <div
                className="bars d-flex mx-1"
                role="button"
                onClick={() => setGridColumn(2)}
              >
                {[1, 2].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>

              <div
                className="bars d-flex mx-1"
                role="button"
                onClick={() => setGridColumn(3)}
              >
                {[1, 2, 3].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>

              <div
                className="bars d-flex mx-1"
                role="button"
                onClick={() => setGridColumn(4)}
              >
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>

              <div
                className="bars d-flex mx-1"
                role="button"
                onClick={() => setGridColumn(6)}
              >
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="grid-count"></div>
                ))}
              </div>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={5} xl={5}>
          <div className="select-wrapper">
            <select
              onChange={(e) => {
                setShowTotalProducts(e.target.value);
              }}
              className="dropdown"
            >
              <option value="24">24 Products Per Page</option>
              <option value="50">50 Products Per Page</option>
              <option value="100">100 Products Per Page</option>
            </select>
          </div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={4} xl={4}>
          <div className="select-wrapper">
            <select className="dropdown" placeholder="Sorting items">
              <option value="1">Low to high</option>
              <option value="2">High to low</option>
              <option value="3">Newest</option>
            </select>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

SortBar.defaultProps = {
  setGridColumn: () => {},
};

export default SortBar;

const StyledDiv = styled.div`
  .main-div {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .search-count {
    border-right: 1px solid #ddd;
    padding: 20px;
    h5 {
      font-size: 16px;
      font-weight: 400;
      color: #222;
      line-height: 24px;
      letter-spacing: 0.05em;
      margin: 0px;
    }
  }
  .bars {
    padding: 1px;
    border: 1px solid #e84c88;
    border-radius: 2px;
  }

  .grid-count {
    height: 18px;
    width: 4px;
    background-color: #e84c88;
    margin: 0 2px;
  }

  .filter-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid #ddd;
    padding: 20px;
  }

  .select-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    .dropdown {
      border: 0px !important;
      outline: none !important;
      padding: 20px;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
      background: url("/dropdown.png") no-repeat 91%;
    }
  }

  @media (max-width: 991px) {
    .search-count {
      border-bottom: 1px solid #ddd;
      border-right: 0px;
    }

    .filter-div {
      border-bottom: 1px solid #ddd;
      border-right: 0px;
    }

    .select-wrapper {
      border-bottom: 1px solid #ddd;
      border-right: 0px;
      text-align: center;
    }
  }

  @media (max-width: 575px) {
    .search-count {
      text-align: center;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;
    }

    .filter-div {
      justify-content: center;
      border-bottom: 1px solid #ddd;
      display: none;
    }

    .select-wrapper {
      border-bottom: 1px solid #ddd;
      text-align: center;
    }
  }
`;
