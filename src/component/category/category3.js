import styled from "styled-components";
import { Row, Col } from "antd";
import { ButtonWrapper } from "../buttons";
import { productStyle2 } from "../../mock/mockupData";

const StyledDiv = styled.div`
  width: 100%;
  background-color: #ffb9b3;
  padding: 34px;

  .image-block-1 {
    ::after {
      content: "";
      position: absolute;
      background-color: #ffb9b3;
      height: 0;
      width: 40px;
      z-index: 1;
      right: 0;
      left: 0;
      opacity: 0;
      transition: 0.5s ease;
      margin: -40px auto 0;
    }
    &:hover {
      ::after {
        opacity: 0.5;
        transition: 0.3s ease;
        height: 80px;
      }
    }
  }

  .image-block-2 {
    ::after {
      content: "";
      position: absolute;
      background-color: #ffb9b3;
      height: 0;
      width: 40px;
      z-index: 1;
      right: 0;
      left: 0;
      opacity: 0;
      transition: 0.5s ease;
      margin: -40px auto 0;
      bottom: 94%;
    }
    &:hover {
      ::after {
        opacity: 0.5;
        transition: 0.3s ease;
        height: 80px;
      }
    }
  }

  .contain-block-1 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fff;
    padding: 44px 0px;
    ::after {
      content: "";
      position: absolute;
      background-color: #ffb9b3;
      height: 0;
      width: 40px;
      z-index: 1;
      right: 0;
      left: 0;
      margin: 0 auto;
      opacity: 0;
      transition: 0.5s ease;
      top: 94%;
    }
    &:hover {
      ::after {
        opacity: 0.5;
        transition: 0.3s ease;
        height: 80px;
      }
    }
  }

  .contain-block-2 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fff;
    padding: 44px 0px;
    ::after {
      content: "";
      position: absolute;
      background-color: #ffb9b3;
      height: 0;
      width: 40px;
      z-index: 1;
      right: 0;
      left: 0;
      margin: 0 auto;
      opacity: 0;
      transition: 0.5s ease;
      bottom: 94%;
    }
    &:hover {
      ::after {
        opacity: 0.5;
        transition: 0.3s ease;
        height: 80px;
      }
    }
  }

  @media (max-width: 625px) {
    h2 {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

const Category3 = (props) => {
  return (
    <StyledDiv>
      <Row>
        <Col
          xl={8}
          md={12}
          sm={24}
          xs={24}
          style={{ backgroundColor: "#fff", display: "flex" }}
        >
          <div className="p-0">
            <a className="image-block-1">
              <img
                src="/images/Shoes/category3-1.jpg"
                className="img-fluid blur-up lazyload bg-img media"
              />
            </a>
          </div>
        </Col>

        <Col xl={8} md={12} sm={24} xs={24} style={{ backgroundColor: "#fff" }}>
          <div className="contain-block-1 even">
            <div>
              <h6>New Products</h6>
              <h2>Nike Runway Sneakers</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <ButtonWrapper style={{ maxWidth: 170 }}>-80% off</ButtonWrapper>
              </div>
              <h6>
                <span>Shop now</span>
              </h6>
            </div>
          </div>
        </Col>

        <Col xl={8} md={12} sm={24} xs={24} style={{ backgroundColor: "#fff" }}>
          <div className="p-0">
            <a className="image-block-1">
              <img
                src="/images/Shoes/category3-3.jpg"
                className="img-fluid blur-up lazyload bg-img media"
              />
            </a>
          </div>
        </Col>

        <Col xl={8} md={12} sm={24} xs={24} style={{ backgroundColor: "#fff" }}>
          <div className="contain-block-2 even">
            <div>
              <h6>On sale</h6>
              <h2>Gripper Nike Sneakers</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <ButtonWrapper style={{ maxWidth: 170 }}>-70% off</ButtonWrapper>
              </div>
              <h6>
                <span>Shop now</span>
              </h6>
            </div>
          </div>
        </Col>

        <Col xl={8} md={12} sm={24} xs={24} style={{ backgroundColor: "#fff" }}>
          <div className="p-0">
            <a className="image-block-2">
              <img
                src="/images/Shoes/category3-2.jpg"
                className="img-fluid blur-up lazyload bg-img media"
              />
            </a>
          </div>
        </Col>

        <Col xl={8} md={12} sm={24} xs={24} style={{ backgroundColor: "#fff" }}>
          <div className="contain-block-2 even">
            <div>
              <h6>On sale</h6>
              <h2>Multi Color Sneakers</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <ButtonWrapper style={{ maxWidth: 170 }}>-60% off</ButtonWrapper>
              </div>
              <h6>
                <span>Shop now</span>
              </h6>
            </div>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Category3;
