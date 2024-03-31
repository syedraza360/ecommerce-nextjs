import React, { useEffect, useState } from "react";
import { Row, Col, Form, message, Checkbox, Divider, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CartSteps from "src/component/cartSteps";
import { PrimaryButton } from "src/component/buttons";
import { InputWrapper } from "src/component/inputs";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "src/redux/actions/cartActions";
import { BiTrash } from "react-icons/bi";
import { Spin } from "antd";
import Router, { useRouter } from "next/router";
import { BsCashCoin } from "react-icons/bs";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: null,
  email: "",
  address: "",
  city: "",
  county: "",
  postalCode: "",
};
const getRandomPassword = () => {
  const randomPassword = Math.random().toString(36).substr(2, 6);
  return randomPassword;
};
const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loadingState, setLoadingState] = useState("");
  const [state, setState] = useState({ ...initialState });
  const [shippingAddress, setShippingAddress] = useState({ new: false, address: "" });
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { items: cartItems } = useSelector((state) => state.cart);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = (cart) => {
    const subTotal = cart.reduce((accu, item) => (accu += item.quantity * item.price), 0);
    return subTotal.toLocaleString();
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const onFinish = (values) => {
    dispatch(removeCartItem([]));
    router.push("/pages/order-success");
  };

  return (
    <StyledPage style={{ padding: 80 }}>
      <div className="cart-header">
        <h1>Checkout</h1>
      </div>

      <CartSteps step={2} />

      {isLoggedIn == false ? (
        <Row style={{ background: "#f9fafb" }} className="mt-5">
          <Col span={24} className="p-4">
            <div className="d-flex justify-content-start align-items-center">
              <AiOutlineShopping color={"#ced4da"} size={50} />
              <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                Returning customer?
                <Link href={"/"}>
                  <a className={"font-weight-light dark"}> Click here to login</a>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      ) : null}

      <Form form={form} validateTrigger="onFinish" onFinish={onFinish}>
        <Row className="mt-5">
          <Col style={{ padding: "0px 2% 4% 0px" }} xs={24} xl={12}>
            <h6 className="heading">SHIPPING DETAILS</h6>
            <Row gutter={[24, 24]}>
              <Col xs={12} sm={12} xl={12}>
                <p className="label">FIRST NAME *</p>
                <Form.Item
                  name="First Name"
                  rules={[
                    {
                      required: true,
                      type: "string",
                      pattern: /^([A-Za-z]{3,12})+$/,
                      message: "Please enter valid First Name",
                    },
                  ]}
                >
                  <InputWrapper
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    disabled={isLoggedIn}
                  />
                </Form.Item>
              </Col>

              <Col xs={12} sm={12} xl={12}>
                <p className="label">LAST NAME *</p>
                <Form.Item
                  name="Last Name"
                  rules={[
                    {
                      required: true,
                      type: "string",
                      pattern: /^([A-Za-z]{3,12})+$/,
                      message: "Please enter valid Last Name",
                    },
                  ]}
                >
                  <InputWrapper
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    disabled={isLoggedIn}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">STREET ADDRESS *</p>
              <Form.Item name="Address" rules={[{ required: true, type: "string" }]}>
                <InputWrapper
                  name="address"
                  value={state.address}
                  onChange={handleChange}
                  placeholder="House number and street name"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <Checkbox
                checked={shippingAddress.new}
                onChange={(e) => {
                  setShippingAddress({ ...shippingAddress, new: e.target.checked });
                }}
              >
                Ship to another address
              </Checkbox>
              {shippingAddress.new ? (
                <div className="mt-4">
                  <p className="label">SHIPPING ADDRESS *</p>
                  <Form.Item
                    name="Shipping Address"
                    rules={[{ required: true, type: "string" }]}
                  >
                    <InputWrapper
                      value={shippingAddress.address}
                      onChange={(e) => {
                        setShippingAddress({
                          ...shippingAddress,
                          address: e.target.value,
                        });
                      }}
                      placeholder="House number and street name"
                    />
                  </Form.Item>
                </div>
              ) : null}
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">TOWN / CITY *</p>
              <Form.Item name="City" rules={[{ required: true, type: "string" }]}>
                <InputWrapper
                  name="city"
                  value={state.city}
                  onChange={handleChange}
                  placeholder="Your city name"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">POSTAL CODE</p>
              <Form.Item
                name="Postal Code"
                rules={[
                  {
                    type: "string",
                    pattern: new RegExp(/\d+/g),
                    message: "Invalid postal code",
                  },
                ]}
              >
                <InputWrapper
                  name="postalCode"
                  value={state.postalCode}
                  onChange={handleChange}
                  placeholder="xxxxx"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">PHONE *</p>
              <Form.Item
                name="Phone"
                rules={[
                  {
                    type: "string",
                    pattern: new RegExp(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/),
                    message: "Invalid phone number",
                    required: true,
                  },
                ]}
              >
                <InputWrapper
                  name="phoneNumber"
                  value={state.phoneNumber}
                  onChange={handleChange}
                  placeholder="0300xxxxxxx"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>

            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">EMAIL ADDRESS *</p>
              <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                <InputWrapper
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="someone@example.com"
                  disabled={isLoggedIn}
                />
              </Form.Item>
            </Col>
          </Col>

          <Col xs={24} xl={12}>
            <h6 className="heading">YOUR ORDER</h6>
            <div>
              <Row className="order-card-header">
                <Col className="p-3" span={16}>
                  <p className="title">PRODUCT</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="title">SUBTOTAL</p>
                </Col>
              </Row>

              <div style={{ border: "1px solid #eaedf0" }}>
                {cartItems.map((item, index) => (
                  <Row key={index} className="product">
                    <Col span={16}>
                      <div className="box d-flex">
                        <div>
                          <img src={item.images[0]} style={{ width: 50 }} />
                        </div>

                        <div className="ml-3">
                          <p className="font-weight-light">{item.title}</p>
                          <p>1 x {item.quantity}</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="p-3 d-flex" span={8}>
                      <p className="font-weight-light title">
                        ${item.price?.toLocaleString()}
                      </p>
                      {loadingState == item._id ? (
                        <Spin
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                          }}
                          indicator={antIcon}
                        />
                      ) : (
                        <BiTrash
                          onClick={() => {
                            if (cartItems.length <= 1) {
                              dispatch(removeCartItem(item));
                              router.push("/cart");
                            } else {
                              dispatch(removeCartItem(item));
                            }
                          }}
                          style={{
                            cursor: "pointer",
                            color: "#54595f",
                            fontSize: 16,
                            position: "absolute",
                            right: 0,
                            top: 0,
                          }}
                        />
                      )}
                    </Col>
                  </Row>
                ))}
              </div>

              <Row className="order-card-header">
                <Col className="p-3" span={16}>
                  <p className="title">TOTAL</p>
                </Col>
                <Col className="p-3" span={8}>
                  <p className="font-weight-bold title">${calculateTotal(cartItems)}</p>
                </Col>
              </Row>
            </div>

            <div className="payment-method-card mt-5">
              <div
                className="d-flex justify-content-start align-items-center"
                style={{ color: "#808080" }}
              >
                <BsCashCoin color={"#9d9d9d"} size={50} />
                <div>
                  <div className="title p-0">Payment method</div>
                  <div className="p-0" style={{ fontWeight: 600, fontSize: 24 }}>
                    Cash on delivery
                  </div>

                  <Link href="/cart/billingAddress">
                    <a>
                      <div className="title p-0">Click here to change payment method</div>
                    </a>
                  </Link>
                </div>
              </div>
              <PrimaryButton htmlType="submit" className="w-100 mt-5">
                CONFIRM ORDER
              </PrimaryButton>
            </div>
          </Col>
        </Row>
      </Form>
    </StyledPage>
  );
};

export default Checkout;

const StyledPage = styled.div`
  .cart-header {
    padding: 30px 0px;
    h1 {
      color: #484f56;
    }
  }
  .product {
    padding: 10px 20px;
  }
  .label {
    font-size: 12px;
    color: #808080;
    margin-bottom: 0px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 0px;
  }
  .order-card-header {
    background: #eaedf0;
  }
  .heading {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .payment-method-card {
    background: #eaedf0;
    padding: 30px;
    p {
      font-size: 14px;
    }
    div {
      background: #fff;
      padding: 20px;
    }
  }

  @media (max-width: 1024px) {
    padding: 20px !important;
  }
`;
