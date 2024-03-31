import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 12px;
  }

  .ant-modal-close-x {
    color: #fff;
  }

  .text-portion {
    position: absolute;
    top: 0px;
    width: 100%;
    left: 0;
    padding: 5%;
    h1 {
      text-align: center;
      -webkit-text-fill-color: #000;
      -webkit-text-stroke-color: currentColor;
      -webkit-text-stroke-width: 0.5px;
      color: #fff;
      font-size: 50px;
      font-weight: 700;
      line-height: 0.9em;
      letter-spacing: -2.7px;
      margin-bottom: 0px;
    }

    h3 {
      text-align: center;
      text-shadow: 2px 2px #000;
      color: #fff;
    }
    h2 {
      text-shadow: 0px 0px 10px #000;
      color: #fff;
    }
    p {
      text-shadow: 0px 0px 10px #000;
      color: #fff;
      text-align: center;
    }
  }
  .ant-btn-primary {
    background: rgb(0, 0, 0, 0.5);
    border-color: transparent;
  }

  .ant-input:hover {
    border-color: #000;
  }

  .ant-input:active {
    border-color: #000;
  }

  .ant-checkbox .ant-checkbox-checked:hover {
    border-color: #000;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #000;
    border-color: #000;
  }

  .ant-btn > span {
    line-height: 32px;
  }

  .social-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;

    .social-icons {
      margin-left: 4px;
      margin-right: 4px;
      margin-bottom: 22px;
      cursor: pointer;
      border: 1px solid #e4e4e4;
      height: 32px;
      width: 32px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s ease;
      background-color: rgb(0, 0, 0, 0.5);

      svg {
        color: #fff;
      }
      &:hover {
        transition: 0.2s ease;
        background-color: #fff;
        svg {
          transition: 0.2s ease;
          color: #000;
        }
      }
    }
  }
`;

const SubscriptionModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    let checkCookie = Cookies.get("subscriptionModal");
    if (checkCookie == "false" || checkCookie == undefined || checkCookie == null) {
      setTimeout(() => {
        setIsModalVisible(true);
      }, 5000);
    }
  }, []);

  return (
    <StyledModal
      visible={isModalVisible}
      onCancel={handleCancel}
      centered
      footer={null}
      width={900}
    >
      <div
        style={{
          backgroundImage: `url(/images/bagsubscriptionModalBg.png)`,
          minHeight: 450,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      ></div>
      <div className="text-portion">
        <h1>Life & Work</h1>
        <h3>Together in one bag</h3>

        <h2 style={{ marginTop: 64, marginBottom: -38 }}>Ingeniously designed</h2>
        <h2 style={{ textAlign: "end" }}>Adventure Companion</h2>
        <p>
          Subscribe to the mailing list to receive updates on new arrivals
          <br />
          special offers and other discount information.
        </p>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div>
            <Input.Group style={{ height: 40, maxWidth: 400, minWidth: 350 }} compact>
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
            <Checkbox
              style={{ marginTop: 24, color: "#fff" }}
              onChange={(e) => {
                Cookies.set("subscriptionModal", e.target.checked.toString());
              }}
            >{`Don't show this popup again`}</Checkbox>
            <div className="social-div">
              <div className="social-icons">
                <Link href="https://facebook.com">
                  <a target="_blank">
                    <FaFacebookF />
                  </a>
                </Link>
              </div>

              <div className="social-icons">
                <Link href="https://twitter.com">
                  <a target="_blank">
                    <FaTwitter />
                  </a>
                </Link>
              </div>

              <div className="social-icons">
                <Link href="https://google.com">
                  <a target="_blank">
                    <FaGooglePlusG style={{ fontSize: 18 }} />
                  </a>
                </Link>
              </div>

              <div className="social-icons">
                <Link href="https://pinterest.com">
                  <a target="_blank">
                    <FaPinterestP />
                  </a>
                </Link>
              </div>

              <div className="social-icons">
                <Link href="https://youtube.com">
                  <a target="_blank">
                    <FaYoutube />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="left-section">
            <div>
              <h1>Newsletter</h1>
              <p style={{ padding: "24px 0" }}>
                Subscribe to the mailing list to receive updates on new arrivals, special
                offers and other discount information.
              </p>
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
              <Checkbox
                style={{ marginTop: 24 }}
                onChange={(e) => {
                  Cookies.set("subscriptionModal", e.target.checked.toString());
                }}
              >{`Don't show this popup again`}</Checkbox>

              <div className="social-div">
                <div className="social-icons">
                  <Link href="https://facebook.com">
                    <a target="_blank">
                      <FaFacebookF />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://twitter.com">
                    <a target="_blank">
                      <FaTwitter />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://google.com">
                    <a target="_blank">
                      <FaGooglePlusG style={{ fontSize: 18 }} />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://pinterest.com">
                    <a target="_blank">
                      <FaPinterestP />
                    </a>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link href="https://youtube.com">
                    <a target="_blank">
                      <FaYoutube />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
    </StyledModal>
  );
};
export default SubscriptionModal;
