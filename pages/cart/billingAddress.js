import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, DatePicker, Divider, InputNumber } from "antd";
import styled from "styled-components";
import CartSteps from "src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "src/component/buttons";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShopping } from "react-icons/ai";
import {
  BsFillCreditCardFill,
  BsPaypal,
  BsCashCoin,
  BsFillCheckCircleFill,
} from "react-icons/bs";

import Link from "next/link";
import { LoadingOutlined } from "@ant-design/icons";
import { InputWrapper } from "src/component/inputs";
import { useRouter } from "next/router";
import { removeCartItem } from "src/redux/actions/cartActions";

const paymentMethods = [
  { method: "paycash", name: "PAY CASH", id: 1, icon: BsCashCoin },
  { method: "creditCard", name: "CREDIT CARD", id: 2, icon: BsFillCreditCardFill },
  { method: "paypal", name: "PAY PAL", id: 3, icon: BsPaypal },
];
const initialState = {
  cardNumber: "",
  expireDate: "",
  cardHolderName: "",
  cvv: "",
};

const BillingAddress = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectPaymentMethod, setSelectPaymentMethod] = useState(1);
  const [state, setState] = useState({ ...initialState });

  const { items } = useSelector((state) => state.cart);
  const calculateTotal = (cart) => {
    const subTotal = cart.reduce((accu, item) => (accu += item.quantity * item.price), 0);
    return subTotal.toLocaleString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onFinish = (values) => {
    dispatch(removeCartItem({}));
    router.push("/pages/order-success");
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>BILLING ADDRESS</h1>
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
          <Link href="/demo/bsg-store/products">
            <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
          </Link>
        </Row>
      ) : (
        <>
          <CartSteps step={3} />
          <div className="mt-5">
            <Row gutter={[24, 24]} className="w-100">
              <Col lg={24} xs={24} sm={24} className="d-flex justify-content-center">
                <div className="billingCard">
                  <h5 className="mb-0">PAYMENT METHOD</h5>
                  <Divider
                    style={{ background: "#dddddd", marginTop: 10, marginBottom: 15 }}
                  />
                  <p className="mb-0">CHOOSE A PAYMENT METHOD</p>
                  <div className="d-flex justify-content-center">
                    {paymentMethods.map((item, index) => {
                      let Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className={`icon-wrap`}
                          style={{
                            cursor: "pointer",
                            border:
                              selectPaymentMethod == item.id
                                ? "1px solid #1d8ece"
                                : "1px solid #dddddd",
                          }}
                          onClick={() => setSelectPaymentMethod(item.id)}
                        >
                          {selectPaymentMethod == item.id ? (
                            <BsFillCheckCircleFill
                              size={30}
                              color="#1d8ece"
                              style={{
                                position: "absolute",
                                right: -10,
                                top: -10,
                                backgroundColor: "#fff",
                                border: "2px solid #fff",
                                borderRadius: 100,
                              }}
                            />
                          ) : null}
                          <Icon size={25} color="gray" />
                          <p>{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  {selectPaymentMethod == 1 ? (
                    <PrimaryButton
                      htmlType="submit"
                      onClick={onFinish}
                      className="d-flex justify-content-center w-100 mt-4"
                    >
                      PLACE ORDER
                    </PrimaryButton>
                  ) : (
                    <Form form={form} validateTrigger="onFinish" onFinish={onFinish}>
                      <Row className="mt-4" gutter={[24, 24]}>
                        <Col xs={12} sm={12} xl={12}>
                          <p className="label">CARD NUMBER *</p>
                          <Form.Item
                            name="cardnumber"
                            rules={[
                              {
                                required: true,
                                type: "string",
                                pattern: new RegExp(
                                  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
                                ),
                                message: "Invalid Card Number",
                              },
                            ]}
                          >
                            <InputWrapper
                              name="cardnumber"
                              value={state.cardNumber}
                              onChange={(e) => setState({ ...state, cardNumber: e })}
                              placeholder="Card Number"
                            />
                          </Form.Item>
                        </Col>

                        <Col xs={12} sm={12} xl={12}>
                          <p className="label">EXPIRATION DATE *</p>
                          <Form.Item
                            name="expiredate"
                            rules={[
                              {
                                required: true,
                                // type: "string",
                                message: "Invalid Expiration Date",
                              },
                            ]}
                          >
                            <DatePicker
                              className="w-100"
                              size="large"
                              name="expiredate"
                              value={state.expireDate}
                              onChange={(e) => setState({ expireDate: e })}
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row className="mt-4" gutter={[24, 24]}>
                        <Col xs={12} sm={12} xl={12}>
                          <p className="label">CARD HOLDER NAME *</p>
                          <Form.Item
                            name="cardHolderName"
                            rules={[
                              {
                                required: true,
                                type: "string",
                                message: "Invalid Card Holder Name",
                              },
                            ]}
                          >
                            <InputWrapper
                              placeholder="CardHolder Name"
                              name="cardHolderName"
                              value={state.cardHolderName}
                              onChange={(e) => setState({ ...state, cardHolderName: e })}
                            />
                          </Form.Item>
                        </Col>

                        <Col xs={12} sm={12} xl={12}>
                          <p className="label">CVV *</p>
                          <Form.Item
                            name="cvv"
                            rules={[
                              {
                                required: true,
                                type: "number",
                                pattern: new RegExp(/\d+/g),
                                message: "Invalid cvv",
                              },
                            ]}
                          >
                            <InputNumber
                              name="cvv"
                              placeholder="CVV"
                              className="w-100"
                              maxLength={3}
                              size={"large"}
                              value={state.cvv}
                              onChange={(e) => setState({ ...state, cvv: e })}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <PrimaryButton
                        htmlType="submit"
                        className="d-flex justify-content-center w-100 mt-4"
                      >
                        PLACE ORDER
                      </PrimaryButton>
                    </Form>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </StyledPage>
  );
};

export default BillingAddress;

const StyledPage = styled.div`
  .billingCard {
    box-shadow: 0px 0px 5px 0px gray;
    /* height: 400px; */
    width: 50%;
    padding: 20px;
    border-radius: 10px;
    h5 {
      color: gray;
    }
    p {
      color: gray;
      font-size: 12px;
      font-weight: bold;
    }
    .icon-wrap {
      padding: 10px 20px;
      width: 18%;
      /* border: 1px solid #3ca2d8; */
      text-align: center;
      border-radius: 10px;
      margin: 20px 10px;
      background-color: #f6f6f6;
      position: relative;
      p {
        margin-bottom: 0px;
        font-size: 9px;
      }
    }
  }
  .label {
    font-size: 12px;
    color: #808080;
    margin-bottom: 0px;
  }
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

  @media (max-width: 1024px) {
    padding: 20px !important;
    .billingCard {
      width: 100%;
    }
  }
`;
