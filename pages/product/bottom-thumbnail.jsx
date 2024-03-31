import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import ProductDetails from "../../src/component/products/productDetails";
import ImageCarousel from "../../src/component/carousel";
import CardStyle1 from "src/component/cards/CardStyle1";
import { shoesProducts } from "src/mock/shoesProducts";

const { Panel } = Collapse;

const Order = (props) => {
  const { productDetails } = props;

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={12} className="p-0 pr-lg-5">
          <ImageCarousel images={productDetails.images} />
        </Col>

        <Col xs={24} sm={24} lg={12} className={"p-0"}>
          <ProductDetails productDetails={productDetails} />
        </Col>
      </Row>

      <section className="mt-5" style={{ color: "#54595f", lineHeight: "28px" }}>
        <h2 style={{ color: "#54595f" }}>Description</h2>
        <p style={{ fontWeight: 300 }}>
          Compellingly grow performance based mindshare through parallel potentialities.
          Rapidiously underwhelm top-line catalysts for change before best-of-breed
          materials. Competently brand timely catalysts for change through sustainable
          systems. Completely expedite ubiquitous bandwidth after integrated action items.
          Progressively transform leading-edge supply chains whereas flexible niche
          markets.
        </p>
      </section>

      <section>
        <ProductCarousel padding={"5% 0%"} CardStyle={CardStyle1} data={shoesProducts} />
      </section>
    </StyledPage>
  );
};

export default Order;

const StyledPage = styled.div`
  .product-image {
    margin-bottom: 8px;
    vertical-align: middle;
    width: 100%;
  }
  .wish-button {
    display: flex;
    align-items: center;
    color: #212529;
    font-weight: 600;
    cursor: pointer;

    .icon {
      font-size: 24px;
      margin-right: 8px;
    }
    .text {
      position: relative;
      :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: #212529;
        transition: 0.3s;
      }

      :hover:after {
        width: 100%;
      }
    }
  }

  .shop-card-section {
    padding: 80px;
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
    .shop-card-section {
      padding: 0px !important;
    }
  }
`;

const productDetails = {
  _id: "2899669d-6987-5e2f-8812-7f6780938e58",
  images: [
    "/images/Shoes/Women/3/1.webp",
    "/images/Shoes/Women/3/2.webp",
    "/images/Shoes/Women/3/3.webp",
    "/images/Shoes/Women/3/4.webp",
  ],
  title: "Metal Decor Combat Boots",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  brandName: "Metal",
  price: 899,
  link: "#",
  quantity: 1,
};

export async function getServerSideProps(context) {
  return {
    props: { productDetails },
  };
}
