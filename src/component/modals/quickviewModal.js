import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Collapse, Divider } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import Slider from "react-slick";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { PrimaryButton } from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, openCart } from "src/redux/actions/cartActions";
import { QuickviewModalConstant } from "src/redux/constants";

const StyledModal = styled(Modal)`
  .ant-modal-close-x {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-section {
    height: 100%;
    padding: 5%;
    h3 {
      font-weight: 600;
    }

    .description {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title {
      color: #3a3d40;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 1px;
      margin-top: 12px;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .ant-btn > span {
    line-height: 32px;
  }

  .social-div {
    display: flex;
    /* margin-top: 32px; */
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;

    .social-icons {
      margin-left: 4px;
      margin-right: 4px;
      cursor: pointer;
      border: 1px solid #e4e4e4;
      height: 32px;
      width: 32px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s ease;
      &:hover {
        transition: 0.2s ease;
        background-color: #000;
        svg {
          transition: 0.2s ease;
          color: #fff;
        }
      }
    }
  }
`;
const { Panel } = Collapse;
const QuickviewModal = (props) => {
  const dispatch = useDispatch();
  const { visible, data } = useSelector((state) => state.quickviewModal.quickViewModal);
  const handleCancel = () => {
    dispatch({
      type: QuickviewModalConstant.CLOSE_QUICKVIEW_MODAL,
      payload: {},
    });
  };

  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const modalData = [
    {
      _id: data?._id,
      images: data?.images,
      title: data?.title,
      brandName: data?.brandName,
      price: data?.price,
      link: data?.link,
      quantity: data?.quantity,
    },
  ];

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledModal
      visible={visible}
      onCancel={handleCancel}
      centered
      footer={null}
      width={900}
    >
      <Row>
        {modalData.map((data, index) => (
          <>
            <Col xxl={11} xl={11} lg={11} md={11} sm={0}>
              <Slider {...settings}>
                {visible &&
                  data.images.map((data2, index2) => (
                    <div
                      key={index2}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <img src={data2} width="100%" />
                    </div>
                  ))}
              </Slider>
            </Col>
            <Col xxl={13} xl={13} lg={13} md={13} sm={24}>
              <div className="left-section">
                <div>
                  <h3 style={{ margin: 0 }}>{data.title}</h3>
                  <p style={{ fontSize: 12 }}>{data?.brandName}</p>
                  <p style={{ color: "red" }}>{formatedPrice.format(data.price)}</p>
                  <p className="description">
                    {data?.description
                      ? data.description
                      : `Compellingly grow performance based mindshare through parallel potentialities. 
                      Rapidiously underwhelm top-line catalysts for change before best-of-breed materials. 
                      Competently brand timely catalysts for change through sustainable systems. Completely 
                      expedite ubiquitous bandwidth after integrated action items. Progressively transform 
                      leading-edge supply chains whereas flexible niche markets.`}
                  </p>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PrimaryButton
                      onClick={() => {
                        // checkIfExist();
                        dispatch(addItemToCart(data));
                      }}
                      style={{ width: "30%", marginRight: 10 }}
                    >
                      Add to Cart
                    </PrimaryButton>

                    <div style={{ width: "30%", marginLeft: 10 }}>
                      <Link href={`/product/${data._id}`}>
                        <a>
                          <PrimaryButton
                            onClick={() => {
                              dispatch({
                                type: QuickviewModalConstant.CLOSE_QUICKVIEW_MODAL,
                                payload: {},
                              });
                            }}
                            style={{ width: "100%" }}
                          >
                            Details
                          </PrimaryButton>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <Collapse accordion defaultActiveKey={["2"]} className="mt-3" ghost>
                    <Panel
                      key="1"
                      header={<div style={{ fontWeight: 600 }}>Information</div>}
                    >
                      <div style={{ maxHeight: 100, overflow: "auto" }}>
                        <div className="title">Shipping</div>
                        <div className="description">
                          We currently offer free shipping worldwide on all orders over
                          $599.
                        </div>

                        <div className="title">Sizing</div>
                        <div className="description">
                          Fits true to size. Do you need size advice?
                        </div>

                        <div className="title">Return & exchange</div>
                        <div className="description">
                          If you are not satisfied with your purchase you can return it to
                          us within 14 days for an exchange or refund. More info.
                        </div>

                        <div className="title">Assistance</div>
                        <div className="description">
                          Contact us on (+44) 555 88 65, or email us at
                          support@ixiathemes.com
                        </div>
                      </div>
                    </Panel>

                    <Panel
                      key="2"
                      header={<div style={{ fontWeight: 600 }}>Specification</div>}
                    >
                      <Row align="middle">
                        <Col span={12}>
                          <div>BRAND</div>
                        </Col>
                        <Col span={12}>
                          <div className="description text-right m-0">
                            {data.brandName ? data.brandName : "-"}
                          </div>
                        </Col>
                        <Col span={24}>
                          <Divider style={{ margin: "8px 0" }} />
                        </Col>
                        <Col span={12}>
                          <div>MATERIAL</div>
                        </Col>
                        <Col span={12}>
                          <div className="description text-right m-0">
                            {data.material ? data.material : "Premium Quality"}
                          </div>
                        </Col>
                        <Col span={24}>
                          <Divider style={{ margin: "8px 0" }} />
                        </Col>
                        <Col span={12}>
                          <div>SIZE</div>
                        </Col>
                        <Col span={12}>
                          <div className="description text-right m-0">
                            {data.size ? data.size : "L, M, S, XS, XL, XXL"}
                          </div>
                        </Col>
                      </Row>
                    </Panel>
                  </Collapse>

                  {/* <Input.Group style={{ height: 40, marginTop: 24 }} compact>
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
                  >{`Don't show this popup again`}</Checkbox> */}

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
            </Col>
          </>
        ))}
      </Row>
    </StyledModal>
  );
};
export default QuickviewModal;
