import styled from "styled-components";
import { Row, Col } from "antd";
import { FiTruck } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const StyledDiv = styled.div`
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  .main-row {
    padding: 5% 0px;
    min-height: 170px;
    align-items: center;
    .main-col {
      border-right: 2px solid #e4e4e4;
    }

    .main-div {
      display: flex;
      align-items: center;
      justify-content: center;
      .icons {
        font-size: 50px;
        color: #1d8ece;
        margin-right: 16px;
        transition: all 0.3s ease;
      }

      .text {
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

  @media (max-width: 1200px) {
    .main-row {
      .main-col {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        margin-bottom: 16px;
        .main-div {
          width: 315px;
          justify-content: flex-start;
        }
      }
    }
  }
`;

const Service1 = (props) => {
  return (
    <StyledDiv style={props.style}>
      <Row className="main-row">
        <Col
          xl={8}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className="main-col"
          style={{ borderRight: "2px solid #e4e4e4" }}
        >
          <div className="main-div">
            <FiTruck className="icons" />
            <div className="text">
              <h5>FREE SHIPPING</h5>
              <p>Free Shipping World Wide</p>
            </div>
          </div>
        </Col>

        <Col
          xl={8}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className="main-col"
          style={{ borderRight: "2px solid #e4e4e4" }}
        >
          <div className="main-div">
            <AiOutlineFieldTime className="icons" />
            <div className="text">
              <h5>24 X 7 SERVICE</h5>
              <p>Online Service For New Customer</p>
            </div>
          </div>
        </Col>

        <Col
          xl={8}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className="main-col"
          style={{ borderRight: "2px solid #e4e4e4" }}
        >
          <div className="main-div">
            <HiOutlineSpeakerphone className="icons" />
            <div className="text">
              <h5>FESTIVAL OFFER</h5>
              <p>New Online Special Festival Offer</p>
            </div>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Service1;
