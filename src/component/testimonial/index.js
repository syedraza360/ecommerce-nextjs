import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Row, Col, Modal } from "antd";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Heading from "../headings";
import {
  comma,
  clientReview1,
  testimonialThumbnail,
  testimonialVedio,
} from "../../../images";

const StyledSection = styled.section`
  .video-container {
    width: 400px;
    height: 400px;
    border: 6px solid #ffa234;
    position: relative;
    border-radius: 32px;
    left: 24px;
  }
  .another {
    width: 400px;
    height: 400px;
    position: absolute;
    top: -24px;
    left: 0px;
    border-radius: 32px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {
      .vedio-overlay{
        opacity: 1;
        transition: 0.3s ease;
      }
      .play-button {
        transition: 0.3s ease;
        opacity: 1;
      }
    }
  }

  .vedio-overlay{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 32px;
    opacity: 0;
    transition: 0.3s ease;
  }
  h5 {
    font-weight: 700;
  }
  p {
    color: #58595b;
    line-height: 2.2;
  }

  .quote {
    height: 54px;
    width: 54px;
    margin: 0px 0px 20px 0px;
    fill: #e4e4e4;
  }

  .play-button {
    // display: flex;
    // margin-top: 16px;
    // margin-right: 20px;
    height: 100%;
    transform: rotate(90deg);
    transition: 0.3s ease;
    opacity: 1;
    position: absolute;
    top: -150px;
    left: 150px;


    .triangle,
    .triangle:before,
    .triangle:after {
      width: 4em;
      height: 4em;
    }
    .triangle {
      overflow: hidden;
      position: relative;
      border-radius: 20%;
      transform: translateY(50%) rotate(30deg) skewY(30deg) scaleX(0.866);
      pointer-events: none;
    }
    .triangle:before,
    .triangle:after {
      position: absolute;
      background-color: #ffa234;
      pointer-events: auto;
      content: "";
    }
    .triangle:before {
      border-radius: 20% 20% 20% 53%;
      transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
        skewX(30deg) scaleY(0.866) translateX(-24%);
    }
    .triangle:after {
      border-radius: 20% 20% 53% 20%;
      transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
        skewX(-30deg) scaleY(0.866) translateX(24%);
    }

  }

  @media(max-width: 991px){
    .play-button {
      opacity: 1;
  }

  @media (max-width: 450px) {
    .play-button{
      top: -75px;
      left: 90px;
    }
    .video-container {
      width: 250px;
      height: 250px;
      border-radius: 16px;
    }
    .another {
      width: 250px;
      height: 250px;
      border-radius: 16px;
    }
  }
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    box-shadow: none;
    background-color: transparent;
  }
  .ant-modal-body {
    padding: 0px;
  }
`;

const Testimonial = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const vedioRef = useRef(null);
  return (
    <>
      <StyledModal
        centered
        width={1200}
        visible={modalVisible}
        footer={null}
        onCancel={() => {
          setmodalVisible(false);
          vedioRef.current.pause();
        }}
      >
        <video
          ref={vedioRef}
          autoPlay={true}
          style={{ height: "100%", width: "100%", borderRadius: 6 }}
          controls={true}
        >
          <source src={testimonialVedio} type="video/mp4" />
        </video>
      </StyledModal>
      <StyledSection className="container my-5">
        <Heading title="WHAT OUR CLIENTS SAY"></Heading>
        <Row justify="space-around" align="middle">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xxl={12}
            className="d-flex justify-content-center"
          >
            <div style={{ position: "relative" }}>
              <div className="video-container"></div>
              <div
                onClick={() => {
                  setmodalVisible(true);
                  vedioRef.current.play();
                }}
                style={{ backgroundImage: `url(${testimonialThumbnail})` }}
                className="another"
              >
                <div className="vedio-overlay"></div>
                <div className="play-button">
                  <div className="triangle"></div>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xxl={12}>
            <img className="quote" src={comma} />
            <h5>Your Feedback Helps Us In Improving Our Services!</h5>
            <p>
              We firmly believe in “the customer is always right” policy. This is the
              reason why we take your feedback and recommendations seriously. Since our
              services are BY the people and FOR the people, we hold ourselves accountable
              whenever we have a chance to. The fact that we have assisted numerous SME’s
              and entrepreneurs throughout the pandemic, we aim to materialize all your
              ideas to help people grow together.
            </p>
            <img
              style={{ float: "right", transform: "rotate(180deg)" }}
              className="quote"
              src={comma}
            />
          </Col>
        </Row>
      </StyledSection>
    </>
  );
};

export default Testimonial;
