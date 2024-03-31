import Head from "next/head";
import styled from "styled-components";
import { Row, Col, Form, message } from "antd";
import { InputWrapper, TextAreaWrapper } from "src/component/inputs";
import { AntBtnLoading, ButtonWrapper, PrimaryButton } from "src/component/buttons";
import SelectWrapper from "src/component/inputs/selectWrapper";
import { useState } from "react";
const StyledSection = styled.div`
  .map-section {
    padding: 0% 5% 5% 5%;
  }

  label {
    position: relative;
    top: 10px;
    z-index: 1;
    font-size: 12px;
    background-color: rgb(255, 255, 255);
    left: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding-left: 7px;
    padding-right: 7px;
    user-select: none;
    margin: 0px;
  }

  .usa-pakistan-div {
    height: 430px;
    .pakistan-div {
      float: right;
    }
    h4 {
      color: #2a2a2a;
      font-weight: 700;
    }
    a {
      color: #2a2a2a;
      font-weight: 600;
    }
    p {
      color: #2a2a2a;
      font-weight: 600;
    }
  }

  .behind-u {
    font-size: 300px;
    font-weight: 800;
    color: #f4f4f4;
    position: absolute;
    z-index: -1;
    top: 0;
    line-height: 0.5;
    left: -80px;
  }
  .behind-p {
    font-size: 300px;
    font-weight: 800;
    color: #f4f4f4;
    position: absolute;
    z-index: -1;
    top: 50px;
    line-height: 0.5;
    left: -80px;
  }
  .usa-div {
    position: absolute;
    z-index: 2;
  }
  .pakistan-div {
    float: right;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .img-section {
    padding: 5%;
    text-align: center;
    img {
      width: 500px;
    }
  }

  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
    width: -moz-available;
    /* height: 80vh; */
    margin-top: 54px;
    background-color: #fff;
    img {
      width: 800px;
    }
  }
  .support-heading {
    text-align: center;
    font-weight: bold;
    margin: 24px 0px 24px;
    line-height: 1.6em;
    font-size: 36px;
  }
  .highlight {
    color: #1d8ece;
  }

  @media (max-width: 991px) {
    .hero-section {
      img {
        width: 600px;
      }
    }
  }

  @media (max-width: 767px) {
    .hero-section {
      img {
        width: 450px;
      }
    }
    .support-heading {
      font-size: 24px;
    }
    .usa-pakistan-div {
      margin-top: 6%;
      h4 {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 550px) {
    .hero-section {
      img {
        width: 100%;
      }
    }
    .img-section {
      img {
        width: 350px;
      }
    }
  }

  @media (max-width: 450px) {
    .img-section {
      img {
        width: 275px;
      }
    }
  }
`;

const initialState = {
  name: "",
  phoneNumber: null,
  email: "",
  description: "",
};

const Contact = () => {
  const [form] = Form.useForm();
  const [state, setState] = useState({ ...initialState });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log("console", loading);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => {
        console.log("Response received > ", res);
        if (res.status === 200) {
          setLoading(false);
          console.log("Response succeeded > ", res);
          form.resetFields();
          setState(initialState);
          message.success("Form Submitted Successfully");
        } else {
          message.error("Something went wrong, Please try again");
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us </title>
      </Head>
      <StyledSection>
        <section className="hero-section">
          <img alt="support-staff" src="/images/support.webp" />
          <h1 className="support-heading">
            Have an inquiry or some <span className="highlight">feedback for us?</span>{" "}
            <br /> Fill out the form below to contact our team.
          </h1>
        </section>

        <section className="map-section">
          <Form
            form={form}
            autoComplete="new-password"
            validateTrigger="onFinish"
            onFinish={handleSubmit}
            className="text-left col-xl-6 col-sm-8 col-12 mx-auto"
          >
            <Row gutter={[24]} style={{ margin: "64px 0 0 0" }}>
              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Name</label>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      type: "string",
                      // pattern: /^([A-Za-z]{3,12})+$/,
                      message: "Please enter valid Name",
                    },
                  ]}
                >
                  <InputWrapper
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </Form.Item>
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Phone</label>
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
                  />
                </Form.Item>
              </Col>

              <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                <label>Email</label>
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter valid email",
                    },
                  ]}
                >
                  <InputWrapper
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="someone@example.com"
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <label>Description</label>
                <Form.Item
                  name="description"
                  rules={[{ required: true, type: "string" }]}
                >
                  <TextAreaWrapper
                    maxLength={500}
                    rows={6}
                    name="description"
                    value={state.description}
                    onChange={handleChange}
                    placeholder="Please describe your query"
                  />
                </Form.Item>
              </Col>

              <Col
                span={24}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <AntBtnLoading htmlType="submit" loading={loading} color="#fff">
                    Send Message
                  </AntBtnLoading>
                </div>
              </Col>
            </Row>
          </Form>
        </section>
      </StyledSection>
    </>
  );
};

export default Contact;
