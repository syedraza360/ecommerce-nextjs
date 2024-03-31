import { Row, Col, Collapse, Divider, message } from "antd";
import styled from "styled-components";
import ReviewListing from "../../../src/component/reviews/reviewListing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import CardStyle1 from "../../../src/component/cards/CardStyle1";
import CardStyle2 from "../../../src/component/cards/CardStyle2";
import CardStyle3 from "../../../src/component/cards/CardStyle3";
import CardStyle4 from "../../../src/component/cards/CardStyle4";
import CardStyle5 from "../../../src/component/cards/CardStyle5";
import CardStyle6 from "../../../src/component/cards/CardStyle6";
import CardStyle7 from "../../../src/component/cards/CardStyle7";
import CardStyle8 from "../../../src/component/cards/CardStyle8";
import CardStyle9 from "../../../src/component/cards/CardStyle9";
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

const { Panel } = Collapse;

const MultiSlider = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.products);

  const [state, setState] = useState({ color: "", size: "" });

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
              <p className="m-0 mx-1"> HOME / </p>
            </Link>{" "}
            <Link href="/">
              <p className="m-0 mx-1"> THEME ELEMENTS / </p>
            </Link>{" "}
            <span>MULTI-SlIDER</span>
          </Col>
        </Row>
      </div>

      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="d-flex">
          <Col lg={6} sm={24} xs={24} className="">
            <ProductVerticalCarousel headerTitle="NEW PRODUCTS" data={productStyle1} />
          </Col>
          <Col lg={6} sm={24} xs={24} className="">
            <ProductVerticalCarousel headerTitle="FEATURE PRODUCT" data={productStyle2} />
          </Col>
          <Col lg={6} sm={24} xs={24} className="">
            <ProductVerticalCarousel headerTitle="BEST SELLER" data={productStyle3} />
          </Col>
          <Col lg={6} sm={24} xs={24} className="">
            <ProductVerticalCarousel headerTitle="ON SELL" data={productStyle6} />
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="d-flex">
          <Col lg={8} sm={24} xs={24} className="">
            <ProductVerticalCarousel
              style={{ border: "1px solid #ddd", padding: 20 }}
              headerTitle="NEW PRODUCTS"
              data={productStyle4}
            />
          </Col>

          <Col lg={8} sm={24} xs={24} className="">
            <div className="title2">
              <h2 className="title-inner2">Product style</h2>
            </div>
            <CardStyle7
              images={[
                "/images/Bags/MiniNeon/MIniBag-1.webp",
                "/images/Bags/MiniNeon/MIniBag-2.webp",
                "/images/Bags/MiniNeon/MIniBag-3.webp",
                "/images/Bags/MiniNeon/MIniBag-4.webp",
                "/images/Bags/MiniNeon/MIniBag-5.webp",
                "/images/Bags/MiniNeon/MIniBag-6.webp",
                "/images/Bags/MiniNeon/MIniBag-7.webp",
              ]}
              price={400}
              title="Product 4"
              _id="b5e65e22-316c-4254-aab6-6fd2e1cb7bd0"
              productDetails={{
                _id: "b5e65e22-316c-4254-aab6-6fd2e1cb7bd0",
                title: "Mini Neon Lime Clear Trolley Design Box Bag",
                quantity: 1,
                para: (
                  <>
                    Best Leather Quality
                    <br />
                    Comfortable Bag
                    <br />
                    Trending Fashion
                    <br />
                    Affordable
                  </>
                ),
                price: 39.99,
                description: "",
                category: "travel",
                images: [
                  "/images/Bags/MiniNeon/MIniBag-2.webp",
                  "/images/Bags/MiniNeon/MIniBag-1.webp",
                  "/images/Bags/MiniNeon/MIniBag-3.webp",
                  "/images/Bags/MiniNeon/MIniBag-4.webp",
                  "/images/Bags/MiniNeon/MIniBag-5.webp",
                  "/images/Bags/MiniNeon/MIniBag-6.webp",
                  "/images/Bags/MiniNeon/MIniBag-7.webp",
                ],
                rating: { rate: 3.8, count: 679 },
              }}
            />
          </Col>
          <Col lg={8} sm={24} xs={24} className="">
            <ProductVerticalCarousel
              style={{ border: "1px solid #ddd", padding: 20 }}
              headerTitle="NEW PRODUCTS"
              data={productStyle7}
            />
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default MultiSlider;

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
