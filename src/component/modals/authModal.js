import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Form, message } from "antd";
import { InputWrapper } from "../inputs/index";
import { LoadingOutlined } from "@ant-design/icons";
import { ModalConstant } from "../../redux/constants";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../buttons";
import { errorHandler, Mutations } from "../../api/config";
import ProductCard from "../cards/productCard";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
// import Router from "next/router";
// import Link from "next/link";
import { loginUserAction } from "../../redux/actions";

const initialState = { email: "", password: "" };
const getRandomPassword = () => {
  const randomPassword = Math.random().toString(36).substr(2, 6);
  return randomPassword;
};

const AuthModal = () => {
  const dispatch = useDispatch();
  const signUpModal = useSelector((state) => state.modal.signUpModal);

  const [form] = Form.useForm();
  const [updatePasswordForm] = Form.useForm();

  const [state, setState] = useState(initialState);
  const [authStatus, setAuthStatus] = useState(0); // signup = 0, signin = 1, Forgot Password = 2, Update Password = 3

  const closeModal = () => {
    dispatch({ type: ModalConstant.CLOSE_SIGN_UP_MODAL });
  };

  useEffect(() => {
    setAuthStatus(signUpModal.authStatus);
  }, [signUpModal.authStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Signup handler and Mutation
   */
  const [signUpAPI, signUpLoading] = useFetch(Mutations.createAccount);

  /**
   * Login Mutation and handler
   */
  const [mutate, loading] = useFetch(Mutations.login);

  /**
   * Forgot Password Mutation and handler
   */
  // const [forgotPasswordMutation, { loading: forgotPasswordLoading }] = useMutation(
  //   Mutation.FORGOT_PASSWORD
  // );

  return (
    <Modal
      bodyStyle={{ padding: 0 }}
      width={900}
      centered
      closable={false}
      maskClosable={true}
      visible={signUpModal.visible}
      onCancel={closeModal}
      footer={null}
    >
      <Row>
        <Col
          span={12}
          xxl={12}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={0}
          style={{
            backgroundImage: `url(/images/shop_card_image.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            zIndex: 999,
          }}
        ></Col>

        {authStatus === 0 && (
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ padding: 24, height: "100%" }}
          >
            <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
              Create account
            </h2>
            <Form form={form} validateTrigger="onFinish">
              <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <label>First Name *</label>
                  <Form.Item
                    name="First Name"
                    rules={[
                      {
                        required: true,
                        pattern: /^([A-Za-z]{3,12})+$/,
                        message: "Please enter valid first name",
                      },
                    ]}
                  >
                    <InputWrapper
                      name="firstName"
                      onChange={handleChange}
                      value={state.firstName}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12}>
                  <label>Last Name *</label>
                  <Form.Item
                    name="Last Name"
                    rules={[
                      {
                        required: true,
                        pattern: /^([A-Za-z]{3,12})+$/,
                        message: "Please enter valid last name",
                      },
                    ]}
                  >
                    <InputWrapper
                      name="lastName"
                      onChange={handleChange}
                      value={state.lastName}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <label>Email *</label>
                  <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                    <InputWrapper
                      name="email"
                      onChange={handleChange}
                      value={state.email}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <label>Phone number *</label>
                  <Form.Item name="Phone number" rules={[{ required: true }]}>
                    <InputWrapper
                      name="phoneNumber"
                      onChange={handleChange}
                      value={state.phoneNumber}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <label>Address *</label>
                  <Form.Item name="Address" rules={[{ required: true, type: "string" }]}>
                    <InputWrapper
                      name="address"
                      onChange={handleChange}
                      value={state.address}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <label>City *</label>
                  <Form.Item name="City" rules={[{ required: true, type: "string" }]}>
                    <InputWrapper
                      name="city"
                      onChange={handleChange}
                      value={state.city}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <label>Postal code </label>
                  <Form.Item name="Postal Code">
                    <InputWrapper
                      name="postalCode"
                      onChange={handleChange}
                      value={state.postalCode}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <div className="d-flex justify-content-center align-items-center">
                    <PrimaryButton
                      htmlType="submit"
                      style={{ width: "80%", margin: "auto" }}
                    >
                      {signUpLoading && <LoadingOutlined style={{ marginRight: 16 }} />}{" "}
                      Create account
                    </PrimaryButton>
                  </div>
                </Col>
              </Row>
            </Form>

            <Row justify="center" className="mt-4">
              <Col>
                <p
                  className="hoverable dark"
                  style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                  onClick={() => setAuthStatus(1)}
                >
                  Already have an account?
                </p>
              </Col>
              {/* <Col>
                <p
                  className="hoverable dark"
                  style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                  onClick={() => setAuthStatus(2)}
                >
                  Forgot Password?
                </p>
              </Col> */}
            </Row>
          </Col>
        )}

        {authStatus === 1 && (
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ padding: 24, height: "100%" }}
          >
            <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
              Sign In
            </h2>

            <Form validateTrigger="onFinish">
              <Row gutter={[0, 0]}>
                <Col span={24}>
                  <label>Email</label>
                  <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                    <InputWrapper
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="abc@xyz.com"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <label>Password</label>
                  <Form.Item name="Password" rules={[{ required: true, type: "string" }]}>
                    <InputWrapper.Password
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      placeholder="Passowrd"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="space-between">
                <Col>
                  <p
                    className="hoverable dark"
                    style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                    onClick={() => setAuthStatus(0)}
                  >
                    Create account
                  </p>
                </Col>
                <Col>
                  <p
                    className="hoverable dark"
                    style={{ color: "#0c0c0c", fontWeight: 700, cursor: "pointer" }}
                    onClick={() => setAuthStatus(2)}
                  >
                    Forgot Password?
                  </p>
                </Col>
              </Row>

              <div className="d-flex justify-content-center align-items-center">
                <PrimaryButton htmlType="submit" style={{ width: "80%" }}>
                  Sign in
                </PrimaryButton>
              </div>
            </Form>
          </Col>
        )}

        {authStatus === 2 && (
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={24}
            style={{ padding: 24, height: "100%" }}
          >
            <h2 style={{ color: "#0025ff", fontWeight: 700, marginBottom: 24 }}>
              Forgot Password?
            </h2>

            <Form validateTrigger="onFinish">
              <Row gutter={[0, 0]}>
                <Col span={24}>
                  <label>Email</label>
                  <Form.Item
                    name="Email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <InputWrapper
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="abc@xyz.com"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="space-between">
                <Col>
                  <p>
                    Back to{" "}
                    <span
                      style={{
                        color: "#0c0c0c",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                      onClick={() => setAuthStatus(1)}
                    >
                      Sign In
                    </span>
                  </p>
                </Col>
              </Row>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PrimaryButton
                  htmlType="submit"
                  // loading={forgotPasswordLoading}
                >
                  {false && <LoadingOutlined style={{ marginRight: 16 }} />} Send Code
                </PrimaryButton>
              </div>
            </Form>
          </Col>
        )}
      </Row>
    </Modal>
  );
};

export default AuthModal;
