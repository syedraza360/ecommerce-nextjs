import styled from "styled-components";
import { Row, Col } from "antd";
import { FiTruck } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";

const StyledDiv = styled.div`
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  .main-row {
    padding: 3% 0px;
    min-height: 170px;
    align-items: center;

    .main-div {
      text-align: center;
      .icons {
        font-size: 50px;
        color: #1d8ece;
        margin-bottom: 16px;
        transition: all 0.3s ease;
      }

      .text {
        padding: 0px 10%;
        h5 {
          font-weight: 600;
          margin: 0;
          transition: 0.2s ease;
        }
        p {
          margin: 0;
          color: #777;
        }
      }

      &:hover {
        .text {
          h5 {
            color: #1d8ece;
            transition: 0.2s ease;
          }
        }
        .icons {
          transform: scale(1.1);
          animation: pulse 1s ease-in-out;
          transition: all 0.3s ease;
        }
      }
    }
  }
`;

const Service2 = (props) => {
  return (
    <StyledDiv style={props.style}>
      <Row className="main-row">
        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <div className="main-div">
            <FiTruck className="icons" />
            <div className="text">
              <h5>FREE SHIPPING</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
        </Col>

        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <div className="main-div">
            <AiOutlineFieldTime className="icons" />
            <div className="text">
              <h5>24 X 7 SERVICE</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
        </Col>

        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <div className="main-div">
            <HiOutlineSpeakerphone className="icons" />
            <div className="text">
              <h5>FESTIVAL OFFER</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
        </Col>

        <Col xl={8} lg={12} md={12} sm={24} xs={24}>
          <div className="main-div">
            <RiSecurePaymentLine className="icons" />
            <div className="text">
              <h5>ONLINE PAYMENT</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            </div>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Service2;
