import Head from "next/head";
import styled from "styled-components";
import { Row, Col, Form, message } from "antd";
import { InputWrapper, TextAreaWrapper } from "src/component/inputs";
import { ButtonWrapper, PrimaryButton } from "src/component/buttons";

const StyledSection = styled.div`
  .map-section {
    padding: 0% 5% 5% 5%;
  }

  label {
    position: relative;
    top: 10px;
    z-index: 2;
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

const Contact = () => {
  const [form] = Form.useForm();

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
            className="text-left col-xl-6 col-sm-8 col-12 mx-auto"
          >
            <Row gutter={[24]} style={{ margin: "64px 0 0 0" }}>
              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Name</label>
                <InputWrapper
                  name="name"
                  placeholder="Name"
                  maxLength={30}
                  autoComplete="new-password"
                />
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <label>Phone</label>

                <InputWrapper
                  name="phone"
                  placeholder="Phone"
                  autoComplete="new-password"
                />
              </Col>

              <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                <label>Email</label>
                <InputWrapper
                  name="email"
                  placeholder="Email"
                  autoComplete="new-password"
                />
              </Col>

              <Col span={24}>
                <label>Description</label>
                <TextAreaWrapper
                  name="message"
                  maxLength={500}
                  rows={6}
                  style={{ resize: "none" }}
                  placeholder="Briefly explain your project"
                />
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
                  <PrimaryButton style={{ marginTop: 25 }} color="#fff">
                    Send Message
                  </PrimaryButton>
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
