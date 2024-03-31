import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import Breadcrumb from "src/component/breadcrumb";
import Banner from "src/component/collectionBanner/banner";
import styled from "styled-components";
const CollectionBanner = () => {
  return (
    <>
      {/* <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / COLLECTION BANNER"
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
            <span>COLLECTION-BANNER</span>
          </Col>
        </Row>
      </div>
      </StyledPage>
     
      <Banner
        colSize={12}
        insideData={[
          {
            image: "/images/Small-banner-1.jpg",
            // title1: "SAVE 30%",
            // title2: "MEN",
          },
          {
            image: "/images/Small-banner-2.jpg",
            // title1: "SAVE 60%",
            // title2: "WOMEN",
          },
        ]}
        cardHeight={315}
        textAlign="end"
        title2Color="#222"
      />

      <Banner
        colSize={8}
        insideData={[
          {
            image: "/images/electronics-1.png",
            title1: "10% OFF",
            title2: "SPEAKER",
          },
          {
            image: "/images/electronics-2.png",
            title1: "10% OFF",
            title2: "EARPLUG",
          },
          {
            image: "/images/electronics-3.png",
            title1: "60% OFF",
            title2: "BEST DEAL",
          },
        ]}
        cardHeight={218}
        textAlign="start"
        title2Color="#fff"
      />

      <Banner
        colSize={8}
        insideData={[
          {
            image: "/images/watch-1.png",
            title1: "10% OFF",
            title2: "NEW WATCH",
          },
          {
            image: "/images/sale_banner.jpg",
            title1: "",
            title2: "",
          },
          {
            image: "/images/watch-2.png",
            title1: "50% OFF",
            title2: "GOLD WATCH",
          },
        ]}
        cardHeight={200}
        textAlign="end"
        title2Color="#E94C89"
      />

      <Banner
        colSize={6}
        insideData={[
          {
            image: "/images/collection-2.png",
            title1: "SAVE 30%",
            title2: "SHIRTS",
          },
          {
            image: "/images/collection-1.png",
            // title1: "SAVE 50%",
            // title2: "HEADSETS",
          },
          {
            image: "/images/collection-3.png",
            title1: "SAVE 60%",
            title2: "SHOES",
          },
          {
            image: "/images/collection-4.png",
            title1: "SAVE 70%",
            title2: "JEWELLERY",
          },
        ]}
        cardHeight={180}
        textAlign="start"
        title2Color="#fff"
      />
    </>
  );
};
export default CollectionBanner;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    margin-bottom: 20px;
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