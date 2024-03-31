import { Row, Col, Form, message } from "antd";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { PrimaryButton } from "../../src/component/buttons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler, Mutations } from "../../src/api/config";
import { useFetch } from "../../src/hooks/useFetch";
import { updateUserData } from "../../src/redux/actions";

const MyAccount = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [state, setState] = useState({});
  const { data: userData } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      form.setFieldsValue({
        "First Name": userData.firstName,
        "Last Name": userData.lastName,
        "Phone number": userData.phoneNumber,
        Password: userData.password,
        Email: userData.email,
        Address: userData.address,
        City: userData.city,
        "Postal Code": userData.postalCode,
        "Display Name": userData.username,
      });
      setState(userData);
    }
  }, []);

  const [updateProfile, updateLoading] = useFetch(Mutations.updateProfile);

  const handleUpdate = async () => {
    try {
      const { data } = await updateProfile({ ...state }, { userId: userData._id });
      dispatch(updateUserData(data));
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  return (
    <StyledPage style={{ padding: "5%" }}>
      <Row>
        <Col xs={0} sm={0} md={4} lg={4}>
          <AccountSidebar />
        </Col>

        <Col xs={24} sm={24} md={20} lg={20} style={{ padding: "0 10%" }}>
          <h1
            style={{
              fontWeight: 600,
              marginBottom: 32,
              textAlign: "center",
              color: "#54595f",
            }}
          >
            My Account
          </h1>
          <Form form={form} onFinish={handleUpdate} validateTrigger="onFinish">
            <Row gutter={[40, 40]}>
              <Col xs={24} sm={24} md={12} lg={12}>
                <label>First Name *</label>
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
                  <input
                    name="firstName"
                    placeholder="First Name"
                    className="input-wrapper"
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
                      type: "string",
                      pattern: /^([A-Za-z]{3,12})+$/,
                      message: "Please enter valid Last Name",
                    },
                  ]}
                >
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.lastName}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <label>Email *</label>
                <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
                  <input
                    name="email"
                    placeholder="Email"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.email}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <label>Password *</label>
                <Form.Item name="Password" rules={[{ required: true, type: "string" }]}>
                  <input
                    name="password"
                    placeholder="password"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.password}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <label>Phone number *</label>
                <Form.Item name="Phone number" rules={[{ required: true }]}>
                  <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.phoneNumber}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <label>City *</label>
                <Form.Item name="City" rules={[{ required: true, type: "string" }]}>
                  <input
                    name="city"
                    placeholder="City"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.city}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <label>Country *</label>
                <Form.Item name="Country" rules={[{ required: true, type: "string" }]}>
                  <input
                    name="country"
                    placeholder="Country"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.country}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}>
                <label>Postal code *</label>
                <Form.Item
                  name="Postal Code"
                  rules={[{ required: true, type: "number" }]}
                >
                  <input
                    name="postalCode"
                    placeholder="Postal Code"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.postalCode}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24}>
                <label>Full Address *</label>
                <Form.Item name="Address" rules={[{ required: true, type: "string" }]}>
                  <input
                    name="address"
                    placeholder="Full Address"
                    className="input-wrapper"
                    onChange={handleChange}
                    value={state.address}
                  />
                </Form.Item>
              </Col>
            </Row>

            <PrimaryButton style={{ width: 250 }} htmlType="submit" className="mt-4">
              {updateLoading && <LoadingOutlined style={{ marginRight: 16 }} />} Save
            </PrimaryButton>
          </Form>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default MyAccount;

const StyledPage = styled.div`
  .input-wrapper {
    border: 1px solid #e5e5e5;
    font-weight: 300;
    width: 100%;
    /* max-width: 400px; */
    outline: none;
    padding: 8px;
  }

  label {
    color: #54595f;
    font-size: 12px;
    display: block;
  }

  .heading {
    position: relative;
    top: -28px;
    font-size: 16;
    padding: 2px 6px;
    background-color: #fff;
    width: fit-content;
    color: #54595f;
  }
`;
