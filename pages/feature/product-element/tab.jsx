import { Row, Col, Collapse, Divider, message, Breadcrumb } from "antd";
import styled from "styled-components";
import ReviewListing from "../../../src/component/reviews/reviewListing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  productStyle1,
  productStyle2,
  productStyle3,
  productStyle4,
  productStyle5,
  productStyle6,
  productStyle7,
  productStyle8,
  productStyle9,
} from "src/mock/mockupData";
import ProductVerticalCarousel from "src/component/productListing/productVerticalCarousel";
import FilterByTab from "src/component/sortItems/filterByTab";
import { useEffect } from "react";
import allProducts from "src/mock/products";
const { Panel } = Collapse;

const Tab = (props) => {
  const dispatch = useDispatch();

  let data = [
    ...productStyle1,
    ...productStyle2,
    ...productStyle3,
    ...productStyle4,
    ...productStyle5,
    ...productStyle6,
  ];

  return (
    <StyledPage>
     
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">FEATURE</h5>
          </Col>
          <Col
            lg={18}
            sm={24}
            xs={24}
            className="d-flex justify-content-sm-start justify-content-lg-end"
          >
            <Link href="/">
              <p className="m-0 mx-1"> FEATURE / </p>
            </Link>{" "}
            <Link href="/">
              <p className="m-0 mx-1"> THEME ELEMENTS / </p>
            </Link>{" "}
            <span>TAB</span>
            
          </Col>
        </Row>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <FilterByTab
          headerTitle="SPECIAL PRODUCTS"
          // setItemCategory={setItemCategory}
          data={allProducts}
          tabBarData={[
            { title: "New Arrival", id: 1, category: "fridge" },
            { title: "Featured", id: 2, category: "women" },
            { title: "Special", id: 3, category: "dress" },
          ]}
        />
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <FilterByTab
          headerTitle="TRENDING PRODUCTS"
          // setItemCategory={setItemCategory}
          data={allProducts}
          tabBarData={[
            { title: "Women", id: 2, category: "women" },
            { title: "Beauty", id: 3, category: "health-and-beauty" },
            { title: "Fans", id: 4, category: "fan" },
            { title: "School bag", id: 5, category: "travel" },
          ]}
        />
      </div>
    </StyledPage>
  );
};

export default Tab;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    p {
      color: #555555;
      font-weight: 600;
    }
    p:hover {
      cursor: pointer;
      color: #000;
    }
    span {
      color: #6c757d;
    }
  }

  .title2 {
    text-align: center;
    .title-inner2 {
      margin-bottom: 50px;
      position: relative;
      display: inline-block;
      padding: 0 25px;
      font-size: 36px;
      color: #222;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.02em;
      ::after {
        position: absolute;
        height: 5px;
        width: 100%;
        background-color: #f9b7b1;
        opacity: 0.4;
        content: "";
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 3px;
        z-index: -1;
      }
    }
  }

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
