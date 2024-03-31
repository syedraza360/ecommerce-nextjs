import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import { PrimaryButton } from "../../src/component/buttons";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import { useState } from "react";
import axios from "axios";
import { addItemToCart, openCart } from "../../src/redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../src/redux/actions";
import { Mutations, errorHandler, useFetch } from "../../src/api/config";
import { products } from "../../src/mock/products";
import ProductDetails from "../../src/component/products/productDetails";
import CardStyle5 from "src/component/cards/CardStyle5";
import { shoesProducts } from "src/mock/shoesProducts";

const { Panel } = Collapse;

const Order = (props) => {
  const { productDetails, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const [addToCart, addToCartLoading] = useFetch(Mutations.addToCart);

  const checkIfExist = () => {
    const cartItem = items.filter((item) => {
      if (item.product._id == productDetails._id) {
        return true;
      } else {
        return false;
      }
    });

    if (cartItem.length) {
      // open cart
      dispatch(openCart());
    } else {
      addToCartFunc();
    }
  };
  const addToCartFunc = async () => {
    const body = {
      product: productDetails._id,
      quantity: 1,
    };
    userData._id && (body.users_permissions_user = userData._id);
    try {
      const { data } = await addToCart(body);
      dispatch(addItemToCart(data));
      setState({ color: "", size: "" });
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  // --------------ADD TO WISHLIST-------------
  const [addToWishlist, addToWishlistLoading] = useFetch(Mutations.addToWishlist);
  const addItemToWishlistFunc = async (item) => {
    const body = {
      product: productDetails._id,
      users_permissions_user: userData?._id,
    };
    try {
      const { data } = await addToWishlist(body);
      dispatch(addItemToWishlist(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  const removeItemFromWishlistFunc = async (item) => {
    const getWishlistId = wishlist.find((item) => item.product._id == productDetails._id);
    try {
      const { data } = await removeFromWishlist(getWishlistId._id);
      dispatch(removeWishlistItem(data));
      message.success("Remove from wishlist successfully");
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  return (
    <StyledPage style={{ padding: 80 }}>
      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={14} className="p-0 pr-lg-5">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridGap: 12,
              gridAutoFlow: "dense",
            }}
          >
            {productDetails.images.map((item, index) => (
              <div
                key={index}
                style={{ gridColumn: `span ${Math.ceil(item.width / item.height)}` }}
              >
                <img
                  key={index}
                  alt="card-image"
                  src={item}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={24} lg={10} className={"p-0"}>
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

      {/* <section className="mt-5">
        <Collapse>
          <Panel
            header={
              <div style={{ fontSize: 20, letterSpacing: "1px", fontWeight: 600 }}>
                Reviews
              </div>
            }
            showArrow={false}
          >
            <ReviewListing productId={productDetails._id} reviews={reviews} />
          </Panel>
        </Collapse>
      </section> */}

      {/* <section className="shop-card-section">
        <Row justify="space-between" gutter={[0, 40]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <ShopCard />
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <ShopCard />
          </Col>
        </Row>
      </section> */}

      <section className="my-5">
        <ProductCarousel CardStyle={CardStyle5} data={shoesProducts} padding={"0px"} />
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
  _id: "fa0a561a-a40c-3658-94db-9c98098c0b7d",
  title: "Allover Print Backpack With Pencil Case",
  quantity: 1,
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "travel",
  images: [
    "/images/Bags/AlloverLetterGraphicZipBackpack/AlloverLetterGraphicZipBackpack-1.webp",
    "/images/Bags/AlloverLetterGraphicZipBackpack/AlloverLetterGraphicZipBackpack-2.webp",
    "/images/Bags/AlloverLetterGraphicZipBackpack/AlloverLetterGraphicZipBackpack-3.webp",
    "/images/Bags/AlloverLetterGraphicZipBackpack/AlloverLetterGraphicZipBackpack-4.webp",
  ],
  rating: { rate: 3.9, count: 120 },
};

export async function getServerSideProps(context) {
  return {
    props: { productDetails },
  };
}
