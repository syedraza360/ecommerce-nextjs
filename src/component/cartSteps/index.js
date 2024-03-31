import { Row, Col, Form, message } from "antd";
import styled from "styled-components";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const CartSteps = (props) => {
  const stepsData = [
    { id: 1, title: "SHOPPING BAG", description: "VIEW YOUR ITEMS", link: "/cart" },
    {
      id: 2,
      title: "SHIPPING AND CHECKOUT",
      description: "ENTER YOUR DETAILS",
      link: "/cart/checkout",
    },
    {
      id: 3,
      title: "BILLING ADDRESS",
      description: "REVIEW AND ORDER!",
      link: "/cart/billingAddress",
    },
  ];

  return (
    <StyledPage>
      <Row className="step-container" gutter={[24, 24]}>
        {stepsData.map((item, index) => (
          <Link key={index} href={`${item.link}`}>
            <Col
              xs={24}
              sm={24}
              xl={8}
              className={props.step == item.id ? `main-step-selected` : `main-step`}
            >
              <h6>{item.title}</h6>
              <p className="step-para">{item.description}</p>
            </Col>
          </Link>
        ))}
      </Row>
    </StyledPage>
  );
};

export default CartSteps;

const StyledPage = styled.div`
  .step-container {
    .main-step-selected {
      border-bottom: 4px solid gray;
      cursor: pointer;
    }
    .main-step {
      border-bottom: 4px solid #e8eaed;
      cursor: pointer;
    }
    .step-para {
      font-size: 10px;
      color: #484f56;
    }
  }
`;
