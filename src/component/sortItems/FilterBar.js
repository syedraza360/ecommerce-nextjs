import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Input, Select, Checkbox } from "antd";
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
import { InputWrapper } from "../inputs";
import { SearchOutlined } from "@ant-design/icons";
import { bagsBlogs } from "src/mock/bagsProducts";
import { clothProducts } from "src/mock/clothProducts";

const FilterBar = (props) => {
  const { className, style, setGridColumn, count } = props;
  const [searchText, setSearchText] = useState("");
  const [showTotalProducts, setShowTotalProducts] = useState(24);

  useEffect(() => {
    const filteredData = [...clothProducts, ...bagsBlogs].filter((item) => {
      if (item.title.toLowerCase().includes(searchText.toLocaleLowerCase())) {
        return item;
      }
    });
    props.setData(filteredData);
  }, [searchText]);

  return (
    <StyledDiv className={className} style={style}>
      <Row className="main-div">
        <Col xs={24} sm={12} md={12} lg={8}>
          <div className="search-count">
            <h3>Filter By</h3>
            <div className="filter-div">
            <InputWrapper
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter keywords to search..."
              size="large"
              addonAfter={<SearchOutlined />}
              className="search-box"
              style={{ outline: "none" }}
            />
            </div>
          </div>
        </Col>

        {/* <Col xs={24} sm={12} md={12} lg={8} className="d-flex justify-content-end"> */}
        {/* <div className="select-wrapper">
            <Select size="large" defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </div> */}
        {/* </Col> */}

        {/* <Col xs={24} sm={12} md={12} lg={8}>
          
        </Col> */}
      </Row>
    </StyledDiv>
  );
};

FilterBar.defaultProps = {
  setGridColumn: () => {},
};

export default FilterBar;

const StyledDiv = styled.div`
  .main-div {
    /* border-top: 1px solid #ddd; */
    /* border-bottom: 1px solid #ddd; */
    // display: flex;
  }

  .search-count {
    /* border-right: 1px solid #ddd; */
    // padding: 20px;
    h5 {
      font-size: 16px;
      font-weight: 400;
      color: #222;
      line-height: 24px;
      letter-spacing: 0.05em;
      margin: 0px;
    }
    display: flex;
    align-items: center;
  }
  .bars {
    padding: 1px;
    /* border: 1px solid red; */
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
    /* border-right: 1px solid #ddd; */
    padding: 20px;
  }

  .select-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    /* .dropdown {
      border: 0px !important;
      outline: none !important;
      padding: 20px;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
        no-repeat 91%;
    } */
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
