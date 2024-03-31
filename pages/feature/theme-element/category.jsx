import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Category1 from "src/component/category/category1";
import Category2 from "src/component/category/category2";
import Category3 from "src/component/category/category3";
import Category4 from "src/component/category/category4";
import { bagsProducts } from "src/mock/bagsProducts";
import styled from "styled-components";
const Category = () => {
  return (
    <>
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
            <span>CATEGORY</span>
          </Col>
        </Row>
      </div>
      </StyledPage>
      <Category1
        insideData={[
          {
            image: "/images/Shoes/category/women-shoes.png",
            title: "Women Shoes",
            link: "#",
          },
          {
            image: "/images/Shoes/category/men-shoes.webp",
            title: "Men Shoes",
            link: "#",
          },
          {
            image: "/images/Shoes/category/formal.webp",
            title: "Formal",
            link: "#",
          },
          {
            image: "/images/Shoes/category/slippers.webp",
            title: "Slippers",
            link: "#",
          },
          {
            image: "/images/Shoes/category/heels.webp",
            title: "Heels",
            link: "#",
          },
          {
            image: "/images/Shoes/category/boots.png",
            title: "Boots",
            link: "#",
          },
        ]}
      />

      <Category2 />

      <Category3 />

      <Category4 insideData={bagsProducts} />
    </>
  );
};
export default Category;

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
  }`