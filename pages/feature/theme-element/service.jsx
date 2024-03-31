import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Service1 from "src/component/services/service1";
import Service2 from "src/component/services/service2";
import Service3 from "src/component/services/service3";
import styled from "styled-components";

const HomeSlider = () => {
  return (
    <>
      {/* <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / SERVICE"
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
            <span>SERIVCE</span>
          </Col>
        </Row>
      </div>
      </StyledPage>
      <div style={{ padding: "5%" }}>
        <Service1 />
        <Service2 />
        <Service3 />
      </div>
    </>
  );
};
export default HomeSlider;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    margin-bottom: 0.5rem;
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