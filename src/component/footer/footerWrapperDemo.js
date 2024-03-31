import React from "react";
import { Row, Col, Input, Divider, Button } from "antd";
import styled from "styled-components";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MailOutlined } from "@ant-design/icons";
import { MdPhoneAndroid, MdLocationPin } from "react-icons/md";
import { ModalConstant } from "src/redux/constants";
import { useDispatch, useSelector } from "react-redux";

const StyledFooter = styled.footer`
  display: block;
  position: relative;

  :before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 5px;
    background-image: url(/images/footerBeforeImage.png);
  }

  .footer-item-wrapper {
    text-align: center;
  }

  .footer-item-container {
    margin: 20px;
    text-align: left;
    width: 80%;
  }

  .link-header {
    font-weight: 600;
    margin-bottom: 24px;
  }

  .link {
    color: #545d6e;
    text-decoration: none;
    :hover {
      color: #000;
    }
  }

  .footer-item {
    color: #545d6e;
    font-weight: 400;
  }

  //-------------------------------//
  //         Narrow Footer         //
  //-------------------------------//
  .narrow-footer {
    padding: 16px 0;
  }
  .section-title {
    margin: 12px 0;
    font-weight: 600;
  }

  @media only screen and (max-width: 576px) {
    .footer-item-container {
      text-align: center;
    }
    .footerLogo {
      margin-left: -1rem !important;
    }
  }
`;

const FooterContentDemo = () => {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <Row
        className="col-7 col-md-11 col-lg-11 col-xl-10 m-auto"
        justify="space-between"
        gutter={[32, 32]}
      >
        <Col
          md={{ span: 12, order: 2 }}
          xs={24}
          sm={24}
          lg={{ span: 6, order: 1 }}
          xl={6}
        >
          <div className="text-center text-lg-left">
            <p className="section-title">Connect with us</p>
            <FaFacebookF /> <FaInstagram /> <FaTwitter className="ml-1" />
          </div>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={{ span: 24, order: 1 }}
          lg={{ span: 1, order: 2 }}
          xl={12}
        >
          <div className="text-center text-lg-left">
            <p className="section-title">Sign up for savings</p>
            <Input.Group style={{ height: 40, marginTop: 24 }} compact>
              <Input
                style={{
                  width: "calc(100% - 120px)",
                  height: "100%",
                  textAlign: "left",
                }}
                placeholder="Your email address..."
              />
              <Button style={{ height: "100%" }} type="primary">
                SUBSCRIBE
              </Button>
            </Input.Group>
          </div>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={{ span: 12, order: 3 }}
          lg={{ span: 6, order: 3 }}
          xl={6}
        >
          {/* <div className="text-center text-lg-left">
            <p className="section-title">Absolutely guaranteed</p>
            <p className="footer-item m-0">
              Every time. Any reason. Or we’ll make it right.
            </p>
          </div> */}
        </Col>
      </Row>

      <div className="container">
        <Divider />
      </div>

      <Row className="col-7 col-md-11 col-lg-11 col-xl-10 m-auto" justify="space-between">
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="footer-item-wrapper">
          <div className="footer-item-container">
            <img
              src="/images/iXiaThemes.svg"
              alt="app_logo"
              className="mb-3 footerLogo"
              height={32}
            />

            <address className="d-flex align-items-center">
              <MdPhoneAndroid
                style={{ fontSize: 16, color: "#9DA4B1", marginRight: 8 }}
              />

              <div style={{ fontSize: 14 }}>
                +123456789 <br />
                <small>(9:00 am to 6:00 pm Pacific Time)</small>
              </div>
            </address>

            <address className="d-flex align-items-center">
              <MdLocationPin style={{ fontSize: 30, color: "#9DA4B1", marginRight: 8 }} />

              <div style={{ fontSize: 14 }}>
                Lorem Ipsum is simply dummy text of the printing industry.{" "}
              </div>
            </address>
          </div>
        </Col>

        <Col xs={24} sm={24} md={4} lg={4} xl={4} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Let us help</div>
            <div
              onClick={() => {
                dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
              }}
              className="footer-item"
            >
              <a className="link">Sign in</a>
            </div>

            <Link href="/contact-us">
              <a className="link">Contact us</a>
            </Link>
          </div>
        </Col>

        <Col xs={24} sm={24} md={4} lg={4} xl={4} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">What we offer</div>
            <div className="footer-item">
              <Link href="/my-account/compare">
                <a className="link">Compare products</a>
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/pages/collection">
                <a className="link">Collection</a>
              </Link>
            </div>
            {/* <div className="footer-item">
              <Link href="/demo/shoes-store">
                <a className="link">Shoes</a>
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/demo/electronics-store">
                <a className="link">Electronics</a>
              </Link>
            </div> */}
          </div>
        </Col>

        <Col xs={24} sm={24} md={4} lg={4} xl={4} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Our company</div>
            <div className="footer-item">
              <Link href="/about-us">
                <a className="link">About us</a>
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/faqs">
                <a className="link">FAQs</a>
              </Link>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={4} lg={4} xl={4} className="footer-item-wrapper">
          <div className="footer-item-container">
            <div className="link-header">Our policies</div>
            <div className="footer-item">
              <Link href="/terms-of-use">
                <a className="link">Terms of use</a>
              </Link>
            </div>
            <div className="footer-item">
              <Link href="/privacy-policy">
                <a className="link">Privacy policy</a>
              </Link>
            </div>
            {/* <div className="footer-item">Copyright matters</div> */}
          </div>
        </Col>
      </Row>

      <section style={{ padding: "8px 2%", backgroundColor: "#263238" }}>
        <Row
          className="col-7 col-md-11 col-lg-11 col-xl-10 m-auto"
          align="middle"
          justify="space-between"
        >
          <Col>
            <div className="text-white py-2">
              © iXiaThemes {new Date().getFullYear()}. All rights reserved.
            </div>
          </Col>

          <Col>
            <div className="d-flex align-items-center my-2">
              <img src="/images/credit_card/visa.png" alt="visa" />
              <img
                src="/images/credit_card/master_card.png"
                alt="master card"
                className="mx-3"
              />
              <img src="/images/credit_card/paypal.png" alt="paypal" />
            </div>
          </Col>
        </Row>
      </section>
    </StyledFooter>
  );
};

export default FooterContentDemo;
