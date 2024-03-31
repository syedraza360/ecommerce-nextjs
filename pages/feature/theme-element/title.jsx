import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Title1 from "src/component/titles/title1";
import Title2 from "src/component/titles/title2";
import Title3 from "src/component/titles/title3";
import Title4 from "src/component/titles/title4";
import Title5 from "src/component/titles/title5";
import styled from "styled-components";

const Title = () => {
  return (
    <>
      {/* <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / TITLE"
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
            <span>TITLE</span>
          </Col>
        </Row>
      </div>
      </StyledPage>
      <Title1 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title2 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title3 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title4 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
      <Title5 subtitle="Recent Story" maintitle="TRENDING PRODUCTS" />
    </>
  );
};
export default Title;

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
