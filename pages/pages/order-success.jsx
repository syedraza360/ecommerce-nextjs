import Head from "next/head";
import { Row, Col, Divider } from "antd";
import styled from "styled-components";
import { products } from "src/mock/products";
import Breadcrumb from "src/component/breadcrumb";
import { BsCheckCircleFill } from "react-icons/bs";
import { Item } from "rc-menu";
import { ButtonWrapper } from "src/component/buttons";

const OrderSuccess = (props) => {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Thankyou for shopping</title>
      </Head>

      <Breadcrumb title="ORDER SUCCESS" link="PAGES / ORDER SUCCESS" />
      <StyledDiv>
        <div className="thankyou-banner text-center">
          <BsCheckCircleFill
            style={{ fontSize: 48, color: "#4ead4e", marginBottom: 24 }}
          />
          <h1 className="heading">Thankyou for shopping with us</h1>
          <br />
          <p style={{ color: "#727272" }}>
            Payment Is Successfully Processsed And Your Order Is On The Way
            <br />
            <br />
            Transaction ID:267676GHERT105467
          </p>
        </div>

        <div className="container pb-5">
          <h3 className="my-5">ORDER DETAILS</h3>
          <Row justify="space-between">
            <Col sm={24} md={24} lg={12} xl={12}>
              {products.map((product, index) => (
                <Row
                  key={index}
                  className="order-items"
                  align="middle"
                  justify="space-around"
                >
                  <Col sm={24} lg={4} xl={4}>
                    <img
                      src={product.images[0]}
                      width={80}
                      alt={product.title}
                      className="mb-3 mb-md-0"
                    />
                  </Col>

                  <Col xs={24} sm={24} lg={11} xl={11} className="d-flex d-md-block">
                    <p className="title">Product name</p>
                    <div className="value">{product.title}</div>
                  </Col>

                  <Col xs={24} sm={24} lg={3} xl={3} className="d-flex d-md-block">
                    <p className="title">Quantity</p>
                    <div className="value">1</div>
                  </Col>

                  <Col xs={24} sm={24} lg={3} xl={3} className="d-flex d-md-block">
                    <p className="title">Price</p>
                    <div className="value">${product.price}</div>
                  </Col>
                </Row>
              ))}
            </Col>

            <Col sm={24} md={24} lg={11} xl={11}>
              <Row gutter={[0, 32]}>
                <Col span={24}>
                  <div className="box-1">
                    <p style={{ fontWeight: 600 }}>Shipping Address</p>
                    <p>
                      <strong>Name: </strong>John Doe
                    </p>
                    <address>
                      <strong>Address: </strong>329 Mandolin Dr, San Jose, CA 95134, USA
                    </address>
                    <div>
                      <strong>Contact: </strong>+1234567890
                    </div>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="box-1">
                    <p style={{ fontWeight: 600 }}>Total Summary</p>
                    <div className="d-flex justify-content-between">
                      <div>Subtotal</div>
                      <div>$3000</div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>Shipping Fee</div>
                      <div>$280</div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>Shipping Fee Promotion</div>
                      <div>-$80</div>
                    </div>

                    <Divider />

                    <div className="d-flex justify-content-between">
                      <div>Total</div>
                      <div>$3200</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <ButtonWrapper style={{ width: 300, margin: "24px auto" }}>
          Continue Shopping
        </ButtonWrapper>
      </StyledDiv>
    </>
  );
};

export default OrderSuccess;

export async function getServerSideProps(context) {
  return {
    props: {
      products: [products[4], products[3]],
    },
  };
}

const StyledDiv = styled.div`
  .thankyou-banner {
    background-color: #eaecf8;
    padding: 6% 24px;

    .heading {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  .order-items {
    border-bottom: 1px solid #ececec;
    margin-bottom: 12px;
    padding-bottom: 12px;
    :last-child {
      border: none;
    }
  }
  .title {
    font-weight: 600;
    margin-bottom: 8px;
  }
  .value {
    color: #727272;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .box-1 {
    border: 1px solid #ececec;
    cursor: pointer;
    padding: 16px;
    border-radius: 4px;
  }

  @media only screen and (max-width: 576px) {
    .title {
      font-size: 12px;
      :after {
        content: ":";
      }
    }
    .value {
      white-space: break-spaces;
      margin-left: 8px;
    }
  }
`;
