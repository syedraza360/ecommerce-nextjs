import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Carousel1 from "src/component/carousel/carousel1";
import styled from "styled-components";
const HomeSlider = () => {
  return (
    <>
      {/* <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / HOME SLIDER"
      /> */}
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
              <p className="m-0 mx-1"> THEME ELEMENT / </p>
            </Link>{" "}
            <span>HOME-SLIDER</span>
          </Col>
        </Row>
      </div>
      </StyledPage>
      <Carousel1 />
    </>
  );
};
export default HomeSlider;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    margin-bottom: 3rem;
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
  }`