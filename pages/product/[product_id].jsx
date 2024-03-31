import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import { PrimaryButton } from "../../src/component/buttons";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import { useState } from "react";
import axios from "axios";
import { addItemToCart, openCart } from "../../src/redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../src/redux/actions";
import { Mutations, errorHandler, useFetch } from "../../src/api/config";
import CardStyle6 from "src/component/cards/CardStyle6";
import { shoesProducts } from "src/mock/shoesProducts";
import allProducts, { products } from "../../src/mock/products";
import ImageCarousel from "../../src/component/carousel";

const { Panel } = Collapse;

const Order = (props) => {
  const { productDetails, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

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

  // --------------REMOVE FROM WISHLIST-------------
  const [removeFromWishlist, removeFromWishlistLoading] = useFetch(
    Mutations.removeFromWishlist
  );
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

  let wishlistItem = wishlist?.map((item) => item._id);
  return (
    <StyledPage style={{ padding: 80 }}>
      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col xs={24} sm={24} lg={14} className={"p-0 pr-lg-5"}>
          <div style={{ position: "sticky", top: 60, display: "flex", flexWrap: "wrap" }}>
            <Row gutter={[12, 12]}>
              <Col>
                {/* <img
                  alt="card-image"
                  src={productDetails.images[0]}
                  className="product-image"
                /> */}
                <ImageCarousel
                  direction="right"
                  id={productDetails._id}
                  images={productDetails.images}
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={24} sm={24} lg={10} className={"p-0"}>
          <div
            className="order"
            style={{
              top: 90,
              position: "sticky",
              color: "#54595f",
              width: "-webkit-fill-available",
            }}
          >
            <div style={{ fontSize: 40 }}>{productDetails.title}</div>
            <div style={{ fontSize: 12, margin: "16px 0" }}>
              {productDetails.brandName}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 24 }}>
              {formatedPrice.format(productDetails.price)}
            </div>
            <div style={{ fontWeight: 300 }}>{productDetails.description}</div>

            <div className="d-flex align-items-center my-4">
              <div style={{ width: 160 }}>COLOR</div>
              {["red", "#402f2f", "#936b23", "maroon"].map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`color-palette ${state.color == color && "selected"}`}
                  onClick={() => setState({ color, size: "" })}
                />
              ))}
            </div>

            <div className="d-flex align-items-center my-4">
              <div style={{ width: 160 }}>SIZE</div>
              {["SM", "M", "L", "XL"].map((size, index) => (
                <div
                  key={index}
                  onClick={() => setState({ ...state, size })}
                  className={`size-box ${state.size == size && "selected"}`}
                >
                  {size}
                </div>
              ))}
            </div>

            <Row align="middle" className="pt-4">
              <Col>
                <PrimaryButton
                  disabled={state.color == "" || state.size == ""}
                  onClick={() => {
                    // checkIfExist();
                    dispatch(addItemToCart(productDetails));
                  }}
                  className="mr-3"
                >
                  {addToCartLoading && <LoadingOutlined />} ADD TO CART
                </PrimaryButton>
              </Col>

              <Col>
                {wishlistItem.includes(productDetails._id) ? (
                  <div
                    className="wish-buttons"
                    onClick={() => {
                      // removeItemFromWishlistFunc();
                      dispatch(removeWishlistItem(productDetails));
                    }}
                  >
                    <FaHeart className="icon" />
                    <div className="text">REMOVE FROM WISHLIST</div>
                  </div>
                ) : (
                  <div
                    className="wish-buttons"
                    onClick={() => {
                      // addItemToWishlistFunc(productDetails);
                      dispatch(addItemToWishlist(productDetails));
                    }}
                  >
                    <FaRegHeart className="icon" />
                    <div className="text">ADD TO WISHLIST</div>
                  </div>
                )}
              </Col>
            </Row>

            <Collapse className="mt-5" ghost>
              <Panel header={<div style={{ fontWeight: 600 }}>Information</div>}>
                <div className="title">Shipping</div>
                <div className="description">
                  We currently offer free shipping worldwide on all orders over $1000.
                </div>

                <div className="title">Sizing</div>
                <div className="description">
                  Fits true to size. Do you need size advice?
                </div>

                <div className="title">Return & exchange</div>
                <div className="description">
                  If you are not satisfied with your purchase you can return it to us
                  within 14 days for an exchange or refund. More info.
                </div>

                <div className="title">Assistance</div>
                <div className="description">
                  Contact us on (+44) 555 88 65, or email us at support@ixiathemes.com
                </div>
              </Panel>

              <Panel header={<div style={{ fontWeight: 600 }}>Specification</div>}>
                <Row align="middle">
                  <Col span={12}>
                    <div>BRAND</div>
                  </Col>
                  <Col span={12}>
                    <div className="description text-right m-0">
                      {productDetails.brandName}
                    </div>
                  </Col>
                  <Col span={24}>
                    <Divider style={{ margin: "16px 0" }} />
                  </Col>
                  <Col span={12}>
                    <div>MATERIAL</div>
                  </Col>
                  <Col span={12}>
                    <div className="description text-right m-0">
                      {productDetails.material}
                    </div>
                  </Col>
                  <Col span={24}>
                    <Divider style={{ margin: "16px 0" }} />
                  </Col>
                  <Col span={12}>
                    <div>SIZE</div>
                  </Col>
                  <Col span={12}>
                    <div className="description text-right m-0">L, M, S, XS, XL, XXL</div>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
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

      <section className="mt-5">
        <Collapse>
          <Panel
            header={
              <div style={{ fontSize: 20, letterSpacing: "1px", fontWeight: 600 }}>
                Reviews
              </div>
            }
            // showArrow={false}
          >
            {/* <ReviewListing productId={productDetails._id} reviews={reviews} /> */}
            <div className="review-section">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <Row key={item} className="review">
                    <Col
                      lg={2}
                      sm={24}
                      xs={24}
                      className="d-flex justify-content-sm-center justify-content-lg-start align-items-sm-end  align-items-lg-start"
                    >
                      <img
                        src="/images/clothing/Dresses/dress-3.jpg"
                        width={"60%"}
                        className="rounded-circle"
                      />
                    </Col>
                    <Col lg={22} sm={24} xs={24} className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0">MARK JECNO </h6>
                        <p className="mb-0 ml-4">( 12 Jannuary 2018 At 1:30AM )</p>
                      </div>
                      <p className="mb-0 mt-3">
                        Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est
                        sit amet felis fringilla bibendum at at leo. Proin molestie ac
                        nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor.
                        Aenean nec felis dui. Integer tristique odio mi, in volutpat metus
                        posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem
                        hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget
                        lectus sit amet diam vestibulum varius. Suspendisse dignissim
                        mattis leo, nec facilisis erat tempor quis. Vestibulum eu
                        vestibulum ex.
                      </p>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Panel>
        </Collapse>
      </section>

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
        <ProductCarousel padding={"5% 0%"} CardStyle={CardStyle6} data={shoesProducts} />
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

  .review {
    border-bottom: 1px solid #dddddd;
    padding: 60px 0px;
    :last-child {
      border-bottom: 0px;
    }
  }

  .size-box {
    border: 1px solid #ececec;
    padding: 4px 0;
    margin: 0 12px;
    cursor: pointer;
    width: 72px;
    text-align: center;

    &.selected {
      border: 1px solid #727272;
    }
  }

  .color-palette {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: relative;
    margin: 0 12px;
    cursor: pointer;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.09), -2px -2px 3px rgba(0, 0, 0, 0.09),
      -2px 2px 3px rgba(0, 0, 0, 0.09), 2px -2px 3px rgba(0, 0, 0, 0.09);

    &.selected:after {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      top: -4px;
      left: -4px;
      border: 1px solid #727272;
      border-radius: 50%;
    }
  }

  .wish-buttons {
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

  .title {
    color: #3a3d40;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .description {
    color: #3a3d40;
    font-weight: 300;
    margin-bottom: 12px;
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

export async function getServerSideProps(context) {
  const productId = context.params.product_id;
  let productDetails = allProducts.find((item) => item._id == productId);

  // Serializing Object data
  productDetails = JSON.parse(JSON.stringify(productDetails));

  if (productDetails) {
    return {
      props: { productDetails },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
