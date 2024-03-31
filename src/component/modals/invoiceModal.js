import React from "react";
import moment from "moment";
import { Row, Col, Modal } from "antd";
import styled from "styled-components";
import LogiLogoImage from "../images/logo_light.png";
const StyledContent = styled.section`
  .table-heading {
    font-weight: bold;
    font-size: 16px;
    color: #2a2a2a;
  }

  .table-content {
    font-size: 14px;
    color: #2a2a2a;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid darkgray;
    &:last-child {
      // border-bottom: 0px solid darkgray;
    }
  }

  .top-content {
    font-size: 16px;
    color: #2a2a2a;
  }

  .table-footer {
    // background-color: #f4f4f4;
    // border: 1px solid #dfe0e1;
    height: 60px;
    display: flex;
    border-top: 1px solid darkgray;
    border-bottom: 1px solid darkgray;
    // justify-content: flex-end;
    align-items: center;
    font-weight: 600;
  }
`;

const InvoiceModal = (props) => {
  const { visible, onCancel, orderDetails } = props;
  return (
    <Modal
      id="full-invoice-modal"
      visible={visible}
      closable={false}
      footer={null}
      onCancel={onCancel}
      width={400}
      style={{ overflow: "hidden" }}
    >
      <StyledContent>
        <div>
          {/*---------------------------------
           Modal Header. Invoice overview
        ---------------------------------- */}
          <Row justify="space-between">
            <Col>
              <div className="top-content">
                <p style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>
                  <span style={{ fontSize: 16, fontWeight: 700 }}>Bill To:</span>
                  <br />
                  {orderDetails.userId.firstName} {orderDetails.userId.lastName}
                </p>
              </div>
              <div className="top-content">{orderDetails.userId.email}</div>
              <div className="top-content">{orderDetails.userId.phoneNo}</div>
            </Col>
            <Col>
              <img style={{ width: 100 }} src="/images/LogiLogos-dark.svg" alt="logo" />
            </Col>
          </Row>

          <Row style={{ alignItems: "center", justifyContent: "center", marginTop: 44 }}>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontWeight: 600, color: "#0025FF", fontSize: 32 }}>INVOICE</h2>
              <p style={{ fontSize: 18 }}>{orderDetails._id}</p>
            </div>
          </Row>

          {/*------------------
           Table Heading
        ------------------- */}
          <Row
            justify="space-between"
            style={{
              marginTop: 42,
              paddingBottom: 12,
              borderBottom: "1px solid dimgray",
            }}
          >
            <Col span={18}>
              <div className="table-heading">Description</div>
            </Col>
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <div className="table-heading">Amount</div>
            </Col>
          </Row>

          {/*--------------------
           Service Payment Row
          --------------------- */}
          <Row justify="space-between">
            <Col span={20}>
              <div className="table-content">{`${orderDetails.packageId.orderType} (${orderDetails.packageId.packageType})`}</div>
            </Col>
            <Col span={4}>
              <div className="table-content">${orderDetails.packageAmount}</div>
            </Col>
          </Row>

          {/*--------------------
           Discount Row
          --------------------- */}
          <>
            <Row justify="space-between" style={{ lineHeight: 2, marginTop: 16 }}>
              <Col span={10} style={{ display: "flex" }}>
                <div>Sub total</div>
              </Col>
              <Col span={4}>
                <div>${orderDetails.packageAmount}</div>
              </Col>
            </Row>

            <Row justify="space-between" style={{ lineHeight: 2 }}>
              <Col span={10}>
                <div>
                  <p style={{ margin: 0 }}>Rush Delivery</p>
                </div>
              </Col>
              <Col span={4}>
                <div>
                  ${orderDetails.rushDelivery ? orderDetails.rushDeliveryCharges : "0"}
                </div>
              </Col>
            </Row>

            <Row justify="space-between" style={{ lineHeight: 2, marginBottom: 16 }}>
              <Col span={19}>
                <div>
                  {`Discount (`}
                  {/* <span style={{ color: "#0025FF" }}>
                    {orderDetails.couponId?.code}
                  </span>{" "}
                  —{" "} */}
                  <span>
                    {orderDetails.couponDiscount ? orderDetails.couponDiscount : 0}%
                  </span>
                  {`)`}
                </div>
              </Col>
              <Col span={4}>
                {orderDetails.couponDiscount == 0 ? (
                  "$0"
                ) : (
                  <div style={{ marginLeft: "-7px" }}>
                    -$
                    {((orderDetails.packageAmount +
                      (orderDetails.rushDelivery
                        ? orderDetails.rushDeliveryCharges
                        : 0)) *
                      orderDetails.couponDiscount) /
                      100}
                  </div>
                )}
              </Col>
            </Row>
          </>

          {/*--------------------
           Invoice Total Row
          --------------------- */}
          <Row justify="space-between" className="table-footer">
            <Col span={10}>
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>Invoice Total</p>
              </div>
            </Col>
            <Col span={4}>
              <div style={{ fontSize: 18 }}>${Math.round(orderDetails.amount)}</div>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ marginTop: 16 }}>
              <div>Date: {moment(orderDetails.createdAt).format("DD-MMM-YYYY")}</div>
            </Col>
          </Row>
        </div>
      </StyledContent>
    </Modal>
  );
};

InvoiceModal.defaultProps = {
  orderDetails: {
    userId: {},
    packageId: {},
    orderId: {},
  },
  onCancel: () => {},
};

export default InvoiceModal;
