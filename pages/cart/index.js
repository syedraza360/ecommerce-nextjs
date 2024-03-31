import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, message } from "antd";
import styled from "styled-components";
import CartSteps from "src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "src/component/buttons";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "src/redux/actions/cartActions";
import { BiTrash } from "react-icons/bi";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const ShoppingBag = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [loadingState, setLoadingState] = useState("");
  const calculateTotal = (cart) => {
    const subTotal = cart.reduce((accu, item) => (accu += item.quantity * item.price), 0);
    return subTotal.toLocaleString();
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>Cart</h1>
      </div>
      {items.length == 0 ? (
        <Row className="mt-3">
          <Col style={{ background: "#f9fafb" }} span={24} className="p-4">
            <div className="d-flex justify-content-start align-items-center">
              <AiOutlineShopping color={"#ced4da"} size={50} />
              <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                Your cart is currently empty.
              </p>
            </div>
          </Col>
          <Link href="/demo/bag-store/products">
            <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
          </Link>
        </Row>
      ) : (
        <>
          <CartSteps step={1} />
          <div className="mt-5">
            <Row gutter={[24, 24]}>
              {items.map((item, index) => (
                <Col key={index} xl={8} xs={24} sm={24}>
                  <div className="box d-flex align-items-center border">
                    <div>
                      <img src={item.images[0]} style={{ width: 180 }} />
                    </div>

                    <div className="ml-3 ">
                      {loadingState == item._id ? (
                        <Spin
                          style={{
                            position: "absolute",
                            right: 20,
                            top: 10,
                          }}
                          indicator={antIcon}
                        />
                      ) : (
                        <BiTrash
                          onClick={() => dispatch(removeCartItem(item))}
                          style={{
                            cursor: "pointer",
                            color: "#54595f",
                            fontSize: 16,
                            position: "absolute",
                            right: 20,
                            top: 10,
                          }}
                        />
                      )}
                      <div className="product-name">{item.title}</div>

                      <div className="">
                        <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Price: </div>
                          <div className="font-weight-light ml-2">
                            Rs. {item.price.toLocaleString()}
                          </div>
                        </div>
                        <div
                          className="d-flex align-items-center mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Quantity: </div>
                          <div className="quantity-container ml-2">
                            <div
                              onClick={() => {
                                if (item.quantity > 1) {
                                  dispatch(decreaseCartItemQuantity(item));
                                }
                              }}
                              className="decrease-button"
                            >
                              {`−`}
                            </div>
                            <div className="quantity">{item.quantity}</div>
                            <div
                              onClick={() => dispatch(increaseCartItemQuantity(item))}
                              className="increase-button"
                            >
                              +
                            </div>
                          </div>
                        </div>
                        {/* <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Ordered date: </div>
                          <div className="font-weight-light ml-2">31 Feb 2033</div>
                        </div> */}
                        <div
                          className="d-flex mb-1"
                          style={{ color: "#54595f", fontSize: 14 }}
                        >
                          <div className="">Subtotal: </div>
                          <div className="font-weight-light ml-2">
                            $. {(item.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="dropdown-divider my-5"></div>
          <Row className="d-flex justify-content-end align-items-end">
            <Col xs={24} sm={24} xl={12}>
              <h6 className="heading">CART TOTALS</h6>
              <table className="table table-bordered">
                {/* <tr>
                  <td style={{ background: "#f9fafb" }}>SUBTOTAL</td>
                  <td className="font-weight-light">£ {subtotal}</td>
                </tr> */}
                <tr>
                  <td style={{ background: "#f9fafb" }}>TOTAL</td>
                  <td className="font-weight-bold">${calculateTotal(items)}</td>
                </tr>
              </table>
              <Link href="/cart/checkout">
                <PrimaryButton className="w-100 mt-4">Proceed to checkout</PrimaryButton>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </StyledPage>
  );
};

export default ShoppingBag;

const StyledPage = styled.div`
  @media (max-width: 1024px) {
    .box img {
      width: 150px !important;
    }
  }
  .cart-header {
    padding: 30px 0px;
    h1 {
      color: #484f56;
    }
  }
  .table {
    td {
      font-size: 14px;
      padding: 16px;
    }
  }
  .heading {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 0px;
  }

  .quantity-container {
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }

  .increase-button,
  .decrease-button {
    height: 100%;
    width: 28px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
  }
`;
