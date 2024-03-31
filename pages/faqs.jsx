import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Collapse, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .ant-collapse-header {
    border: 1px solid #ececec;

    padding: 16px 36px 16px 16px;

    font-size: 18px;
    color: rgb(78, 78, 78);
    font-weight: 500;
    cursor: pointer;
  }

  .ant-collapse-content {
    border: 1px solid #ececec !important;
    p {
      font-size: 14px;
      color: #4c4a4a;
      font-weight: 500;
      line-height: 24px;
      margin: 0px;
    }
  }

  .ant-collapse-item-active {
    .ant-collapse-header {
      color: #001a33 !important;
    }
  }

  .ant-collapse-borderless
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding: 16px;
  }

  .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 0px;
    margin-bottom: 24px;
    background-color: #fff;
  }

  .ant-collapse-borderless {
    background-color: #fff;
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    .ant-collapse-content {
      p {
        font-size: 14x;
      }
    }
    .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
  }
`;

const Faq = () => {
  const { Panel } = Collapse;
  return (
    <StyledDiv>
      <p
        style={{
          color: "#1d8ece",
          fontWeight: 600,
          fontSize: 36,
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        {`FAQ's - Frequently asked questions`}
      </p>
      <Row gutter={[40, 10]}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {faqs1.map((faq, index) => (
            <Collapse
              key={index}
              accordion={false}
              bordered={false}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  style={{ color: "#001A33", fontSize: 16 }}
                  rotate={isActive ? 135 : 0}
                />
              )}
            >
              <Panel header={`${faq.question}`} key={index}>
                <p>{faq.answer}</p>
              </Panel>
            </Collapse>
          ))}
        </Col>

        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {faqs2.map((faq, index) => (
            <Collapse
              key={index}
              accordion={false}
              bordered={false}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  style={{ color: "#001A33", fontSize: 16 }}
                  rotate={isActive ? 135 : 0}
                />
              )}
            >
              <Panel header={`${faq.question}`} key={index}>
                <p>{faq.answer}</p>
              </Panel>
            </Collapse>
          ))}
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Faq;

const faqs1 = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "Where can I get some?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // {
  //   question: "How can I get revisions in my website during the development stage?",
  //   answer:
  //     "Your input during the development phase is the most crucial factor for us. We would love getting your input during your website development process. For that your dedicated Account Manager will keep in touch with you and make sure that the website design and content is according to your needs and wants. We strive for this communication to be swift to provide you just the right look and functionality in the shortest possible time.",
  // },
  // {
  //   question: "When do I get complete ownership for my website?",
  //   answer:
  //     "When your website is completely developed and accepted by you. You will be given the credentials to access it and a Project delivery sign off document will ensure the full ownership transferred to you.",
  // },
];

const faqs2 = [
  {
    question: "Why do we use it?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "Why do we use it?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // {
  //   question: "How would I use my website as an Owner / Admin?",
  //   answer:
  //     "You will be given full access to the Admin area of your website and will be given enough training to become familiarized and use it effectively.",
  // },
  // {
  //   question: "What is a domain and Web Hosting?",
  //   answer:
  //     "A domain is a name you want users to enter in the internet browser to access your website like name of a building. Web hosting is an online service allowing to produce your website files onto the internet like the actual building. With that being said, everyone who has access to the internet would be having an access to your website through the hosting server. Each website plan that we offer comes with free domain and hosting for 1 year.",
  // },
];
