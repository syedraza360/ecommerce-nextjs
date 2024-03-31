import React from "react";
import styled from "styled-components";
import { MdPhoneInTalk } from "react-icons/md";
import { HiPhoneIncoming } from "react-icons/hi";
import { AiOutlineWechat } from "react-icons/ai";
import { Row, Col } from "antd";
import Heading from "../headings";
import { tollFreeImg, requestCallImg, liveChatImg } from "../../../images";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .row {
    padding: 0px 15%;
    .col {
      display: flex;
      justify-content: center;
    }
  }

  h1 {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 24px;
    line-height: 1.1em;
    font-size: 36px;
  }
  p {
    text-align: center;
    padding: 0px 5%;
  }
  a {
    color: #2a2a2a;
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    .row {
      padding: 0px 5%;
    }
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    padding: 5% 10%;
    h1 {
      font-size: 24px;
    }
    p {
      text-align: left;
    }
    .row {
      display: block;
      .col {
        margin-bottom: 12px;
        justify-content: start;
      }
    }
  }

  @media (max-width: 480px) {
  }
`;

const ContactInfo = (props) => {
  return (
    <StyledDiv>
      <h1>
        <Heading>
          {/* {
            <>
              {props.heading1} <br /> {props.heading2}
            </>
          } */}
          Got a unique business idea that you want developed?
          <br />
          Get in touch with us today for a custom quote!
        </Heading>
      </h1>
      <p>
        {`We are available round-the-clock, ensuring that none of your queries are left
        unanswered. Give us a call today and we’ll assist you in turning your dream
        website into a ravishing reality.`}
      </p>
      <Row className="row">
        <Col span={8} className="col">
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 100,
              border: "1px solid #0025FF",
            }}
          >
            <MdPhoneInTalk style={{ fontSize: 32, color: "#0025FF" }} />
          </div> */}

          <img src={tollFreeImg} style={{ height: 50, width: 50 }} />
          <div style={{ padding: "0px 12px" }}>
            <h6>Toll Free</h6>
            <h5>
              <a href="tel:408-622-0105">408-622-0105</a>
            </h5>
          </div>
        </Col>

        <Col span={8} className="col">
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 100,
              border: "1px solid #0025FF",
            }}
          >
            <HiPhoneIncoming style={{ fontSize: 32, color: "#0025FF" }} />
          </div> */}
          <img src={requestCallImg} style={{ height: 50, width: 50 }} />
          <div style={{ padding: "0px 12px" }}>
            <h6>Request</h6>
            <h5>
              <a href="tel:408-622-0105">Call Back</a>
            </h5>
          </div>
        </Col>

        <Col span={8} className="col">
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 100,
              border: "1px solid #0025FF",
            }}
          >
            <AiOutlineWechat style={{ fontSize: 32, color: "#0025FF" }} />
          </div> */}
          <img src={liveChatImg} style={{ height: 50, width: 50 }} />
          <div style={{ padding: "0px 12px" }}>
            <h6>Start a</h6>
            <h5>
              <a href="tel:408-622-0105">Live Chat</a>
            </h5>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ContactInfo;
