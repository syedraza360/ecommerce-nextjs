import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import { PrimaryButton } from "../../src/component/buttons";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";
import CollectionCard from "../../src/component/cards/collectionCard";
const { Panel } = Collapse;

const Collection = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const gridData = [
    {
      image: "/images/clothing/Jackets/RelaxedBlazer-3.jpg",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "/images/Shoes/featured/1.webp",
      price: "$40",
      title: "maroon women bag",
    },
    {
      image: "/images/Shoes/featured/4.webp",
      price: "$40",
      title: "man black t-shirt",
    },
    {
      image: "/images/Shoes/Women/2/5.webp",
      price: "$40",
      title: "gray sneaker",
    },
    {
      image: "/images/Shoes/Women/2/1.webp",
      price: "$40",
      title: "trending watch",
    },

    {
      image: "/images/Shoes/featured/2.webp",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "/images/Shoes/featured/3.webp",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "/images/Shoes/featured/2.webp",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "/images/Shoes/featured/4.webp",
      price: "$40",
      title: "Women sunglasses",
    },
    {
      image: "/images/Bags/ArgyleQuilted/Purse-1.webp",
      price: "$40",
      title: "Women sunglasses",
    },

    { image: "/images/Bags/ButterflyPrintPatch/Case-2.webp" },
    { image: "/images/Bags/LetterGraphicShoulder/Charm-4.webp" },
    { image: "/images/Electronics/fans/6/1.webp" },
    { image: "/images/Shoes/Women/4/2.webp" },
    { image: "/images/Shoes/Women/5/3.webp" },

    { image: "/images/Electronics/health-and-beauty/1/1.webp" },
    { image: "/images/clothing/Sweaters/CashmerePolo-1.jpg" },
    { image: "/images/clothing/Sweaters/UltimateCardigan-1.jpg" },
    { image: "/images/clothing/Jackets/EditorBlazer.jpg" },
    { image: "/images/Electronics/fans/5/1.webp" },
  ];

  return (
    <StyledPage>
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">COLLECTION</h5>
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
            <span> COLLECTION</span>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <img src={"images/Bags/banner/Others-banner.jpg"} width="100%" />
        <h5 className="my-3">FASHION</h5>
        <h5 className="my-3">
          ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED.
        </h5>

        <p>
          Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue
          id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus
          ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida,
          lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie
          ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et dapibus odio
          condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris
          luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam,
          a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin
          accumsan orci ac nunc fermentum vehicula.
        </p>
        <Row gutter={[30, 30]}>
          <Col lg={6} md={12} sm={24} xs={24}>
            {gridData.slice(0, 5).map((item, index) => {
              return <CollectionCard key={index} {...item} />;
            })}
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            {gridData.slice(5, 10).map((item, index) => {
              return <CollectionCard key={index} {...item} />;
            })}
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            {gridData.slice(10, 15).map((item, index) => {
              return <CollectionCard key={index} {...item} />;
            })}
          </Col>
          <Col lg={6} md={12} sm={24} xs={24}>
            {gridData.slice(15, 20).map((item, index) => {
              return <CollectionCard key={index} {...item} />;
            })}
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default Collection;

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
  .detail-section {
    p {
      font-size: 14px;
      color: #777777;
      line-height: 24px;
      letter-spacing: 0.03em;
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
