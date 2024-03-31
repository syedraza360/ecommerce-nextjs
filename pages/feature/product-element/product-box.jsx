import { Row, Col, Collapse, Divider, message, Breadcrumb } from "antd";
import styled from "styled-components";
import ReviewListing from "src/component/reviews/reviewListing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CardStyle1 from "src/component/cards/CardStyle1";
import CardStyle2 from "src/component/cards/CardStyle2";
import CardStyle3 from "src/component/cards/CardStyle3";
import CardStyle4 from "src/component/cards/CardStyle4";
import CardStyle5 from "src/component/cards/CardStyle5";
import CardStyle6 from "src/component/cards/CardStyle6";
import CardStyle7 from "src/component/cards/CardStyle7";
import CardStyle8 from "src/component/cards/CardStyle8";
import CardStyle9 from "src/component/cards/CardStyle9";
import ProductCardWithIcons from "src/component/cards/productCardWithIcons";
import QuickviewModal from "src/component/modals/quickviewModal";

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
  productStyle10,
} from "src/mock/mockupData";

const ProductBox = (props) => {
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
            <span> PRODUCT-BOX</span>
          </Col>
        </Row>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <div className=" d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 1</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex">
            {productStyle1.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle1 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div
        className="detail-section"
        style={{ backgroundColor: " #f8f8f8", padding: 80 }}
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 2</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle2.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle2 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <div className=" d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 3</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex">
            {productStyle3.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle3 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div
        className="detail-section"
        style={{ backgroundColor: " #f8f8f8", padding: 80 }}
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 4</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle4.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle4 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <div className=" d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 5</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex">
            {productStyle5.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle5 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div
        className="detail-section"
        style={{ backgroundColor: " #f8f8f8", padding: 80 }}
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 6</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle6.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle6 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <div className=" d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 7</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex">
            {productStyle7.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle7 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div
        className="detail-section"
        style={{ backgroundColor: " #f8f8f8", padding: 80 }}
      >
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 8</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle8.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle8 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div className="detail-section" style={{ padding: 80 }}>
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 9</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle9.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <CardStyle9 productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div className="detail-section" style={{ padding: 80 }}>
        <div className="d-flex flex-column justify-content-center">
          <div className="title2">
            <h2 className="title-inner2">Product style 10</h2>
          </div>
          <Row gutter={[30, 30]} className="d-flex ">
            {productStyle10.map((item, index) => {
              return (
                <Col key={index} lg={6} sm={24} xs={24} className="">
                  <ProductCardWithIcons productDetails={item} {...item} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </StyledPage>
  );
};

export default ProductBox;

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
