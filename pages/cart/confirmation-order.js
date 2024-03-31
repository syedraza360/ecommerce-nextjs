import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import CartSteps from "src/component/cartSteps";
import { ButtonWrapper, PrimaryButton } from "src/component/buttons";
import { InputWrapper } from "src/component/inputs";
import { AiOutlineShopping } from "react-icons/ai";

const ConfrimationOrder = () => {
  return (
    <StyledPage style={{ padding: 80 }}>
      <CartSteps step={1} />

      <Row className="mt-5" gutter={[24, 1]}>
        <Col span={12}>
          <h6 className="heading">BILLING DETAILS</h6>
          <Row gutter={[24]}>
            <Col sm={24} xl={12}>
              <p className="label">FIRST NAME *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="What exact words should appear in your logo?"
              />
            </Col>
            <Col sm={24} xl={12}>
              <p className="label">LAST NAME *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="What exact words should appear in your logo?"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">COMPANY NAME (OPTIONAL)</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="What exact words should appear in your logo?"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">STREET ADDRESS *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                placeholder="House number and street name"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                placeholder="Appartment, suite, unit, etc. (optional)"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">TOWN / CITY *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="House number and street name"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">COUNTY (OPTIONAL)</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="House number and street name"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">POSTCODE *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="House number and street name"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">PHONE *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="House number and street name"
              />
            </Col>
            <Col className="mt-4" sm={24} xl={24}>
              <p className="label">EMAIL ADDRESS *</p>
              <InputWrapper
                name="words"
                // value={userInfo.words}
                // onChange={handleChange}
                // placeholder="House number and street name"
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <h6 className="heading">YOUR ORDER</h6>
          <div>
            <Row className="order-card-header">
              <Col className="p-3" span={16}>
                <p className="title">PRODUCT</p>
              </Col>
              <Col className="p-3" span={8}>
                <p className="title">SUBTOTAL</p>
              </Col>
            </Row>
            <div style={{ border: "1px solid #eaedf0" }}>
              {[1, 2, 3, 4].map((item, index) => (
                <Row key={index} className="product">
                  <Col span={16}>
                    <div className="box d-flex">
                      <div>
                        <img src="/images/demo_image.jpg" style={{ width: 50 }} />
                      </div>

                      <div className="ml-3">
                        <p className="font-weight-light">
                          Black Lace Trim Tee - M - Some more text
                        </p>
                        {/* <p># {index + 1}</p> */}
                      </div>
                    </div>
                  </Col>
                  <Col className="p-3" span={8}>
                    <p className="font-weight-light title">£159.00</p>
                  </Col>
                </Row>
              ))}
            </div>
            <Row className="" style={{ border: "1px solid #eaedf0" }}>
              <Col className="p-3" span={16}>
                <p className="title">SUBTOTAL</p>
              </Col>
              <Col className="p-3" span={8}>
                <p className="font-weight-light title mb-0">£159.00</p>
              </Col>
            </Row>
            <Row className="order-card-header">
              <Col className="p-3" span={16}>
                <p className="title">TOTAL</p>
              </Col>
              <Col className="p-3" span={8}>
                <p className="font-weight-bold title">£159.00</p>
              </Col>
            </Row>
          </div>

          <div className="payment-method-card mt-5">
            <div className="d-flex justify-content-start align-items-center">
              <AiOutlineShopping color={"#9d9d9d"} size={100} />
              <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                Sorry, it seems that there are no available payment methods for your
                state. Please contact us if you require assistance or wish to make
                alternate arrangements.
              </p>
            </div>
            <PrimaryButton className="w-100 mt-5">Proceed to checkout</PrimaryButton>
          </div>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default ConfrimationOrder;

const StyledPage = styled.div`
  .product {
    padding: 10px 20px;
  }
  .label {
    font-size: 12px;
    color: #808080;
    margin-bottom: 0px;
  }
  .title {
    font-size: 14px;
    margin-bottom: 0px;
  }
  .order-card-header {
    background: #eaedf0;
  }
  .heading {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .payment-method-card {
    background: #eaedf0;
    padding: 30px;
    p {
      font-size: 14px;
    }
    div {
      background: #fff;
      padding: 20px;
    }
  }
`;
