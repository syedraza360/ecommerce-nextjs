import { useState } from "react";
import { Row, Col, Collapse, Divider } from "antd";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PrimaryButton } from "../buttons";
import styled from "styled-components";
import { removeWishlistItem, addItemToWishlist } from "../../redux/actions";
import { addItemToCart } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const { Panel } = Collapse;

const ProductDetails = (props) => {
  const { productDetails } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({ color: "", size: "" });
  const { items: wishlist } = useSelector((state) => state.wishlist);

  let wishlistItem = wishlist?.map((item) => item._id);

  return (
    <StyledWrapper
      className="order"
      style={{
        top: 90,
        position: "sticky",
        color: "#54595f",
        width: "-webkit-fill-available",
      }}
    >
      <div style={{ fontSize: 40 }}>{productDetails.title}</div>
      <div style={{ fontSize: 12, margin: "16px 0" }}>{productDetails.brandName}</div>
      <div style={{ fontSize: 20, fontWeight: 600 }}>${productDetails.price}</div>
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

      <Row align="middle" className="pt-4" wrap={false}>
        <Col>
          <PrimaryButton
            disabled={state.color == "" || state.size == ""}
            onClick={() => {
              dispatch(addItemToCart(productDetails));
            }}
            className="mr-3"
          >
            ADD TO CART
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
          <div className="description">Fits true to size. Do you need size advice?</div>

          <div className="title">Return & exchange</div>
          <div className="description">
            If you are not satisfied with your purchase you can return it to us within 14
            days for an exchange or refund. More info.
          </div>

          <div className="title">Assistance</div>
          <div className="description">
            Contact us on (+44) 555 88 65, or email us at support@ixiathemes.com
          </div>
        </Panel>

        <Panel header={<div style={{ fontWeight: 600 }}>Specification</div>}>
          <Row align="middle">
            <Col span={24} className="d-flex justify-content-between">
              <div>BRAND</div>
              <div className="description text-right m-0">GUCCI</div>
            </Col>
            <Divider style={{ margin: "16px 0" }} />
            <Col span={24} className="d-flex justify-content-between">
              <div>MATERIAL</div>
              <div className="description text-right m-0">LEATHER</div>
            </Col>
            <Divider style={{ margin: "16px 0" }} />
            <Col span={24} className="d-flex justify-content-between">
              <div>SIZE</div>
              <div className="description text-right m-0">L, M, S, XS, XL, XXL</div>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </StyledWrapper>
  );
};

export default ProductDetails;

const StyledWrapper = styled.div`
  .title {
    color: #3a3d40;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
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

  .description {
    color: #3a3d40;
    font-weight: 300;
    margin-bottom: 12px;
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
`;
