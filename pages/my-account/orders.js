import { Row, Col } from "antd";
import styled from "styled-components";
import Link from "next/link";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { useState } from "react";
import moment from "moment";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PrimaryButton } from "src/component/buttons";

const Orders = () => {
  const [myOrders, setMyOrders] = useState([]);

  return (
    <StyledPage style={{ padding: "5%" }}>
      <Row>
        <Col xs={0} sm={0} md={4} lg={4}>
          <AccountSidebar />
        </Col>

        <Col xs={24} sm={24} md={20} lg={20}>
          <h1
            style={{
              fontWeight: 600,
              marginBottom: 32,
              textAlign: "center",
              color: "#54595f",
            }}
          >
            Orders
          </h1>

          <Row gutter={[24, 24]}>
            {myOrders.length == 0 ? (
              <Row className="mt-3">
                <Col style={{ background: "#f9fafb" }} span={24} className="p-4">
                  <div className="d-flex justify-content-start align-items-center">
                    <AiOutlineShoppingCart color={"#ced4da"} size={50} />
                    <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                      Your Order List is currently empty.
                    </p>
                  </div>
                </Col>
                <Link href={"/"}>
                  <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
                </Link>
              </Row>
            ) : (
              <>
                {myOrders.map((item, index) => (
                  <Col key={index} span={12}>
                    <div className="box d-flex align-items-center">
                      <div>
                        <img
                          src={
                            process.env.NEXT_PUBLIC_STRAPI_URL +
                            item.product.images[0].url
                          }
                          style={{ width: 180 }}
                        />
                      </div>

                      <div className="ml-3">
                        <div className="product-name">{item.product.productName}</div>

                        <div className="">
                          <div
                            className="d-flex mb-1"
                            style={{ color: "#54595f", fontSize: 14 }}
                          >
                            <div className="">Price: </div>
                            <div className="font-weight-light ml-2">
                              ${item.product?.price?.toLocaleString()}
                            </div>
                          </div>
                          <div
                            className="d-flex mb-1"
                            style={{ color: "#54595f", fontSize: 14 }}
                          >
                            <div className="">Quantity: </div>
                            <div className="font-weight-light ml-2">{item.quantity}</div>
                          </div>
                          <div
                            className="d-flex mb-1"
                            style={{ color: "#54595f", fontSize: 14 }}
                          >
                            <div className="">Size: </div>
                            <div className="font-weight-light ml-2">{item.size}</div>
                          </div>
                          <div
                            className="d-flex mb-1"
                            style={{ color: "#54595f", fontSize: 14 }}
                          >
                            <div className="">Color: </div>
                            <div className="font-weight-light ml-2">{item.color}</div>
                          </div>
                          <div
                            className="d-flex mb-1"
                            style={{ color: "#54595f", fontSize: 14 }}
                          >
                            <div className="">Ordered date: </div>
                            <div className="font-weight-light ml-2">
                              {moment(item.createdAt).format("ddd DD/MM/YYYY")}
                            </div>
                          </div>
                          <div
                            className="d-flex mb-1"
                            style={{ color: "#54595f", fontSize: 14 }}
                          >
                            <div className="">Subtotal: </div>
                            <div className="font-weight-light ml-2">
                              ${(item.product?.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default Orders;

const StyledPage = styled.div`
  .table-header {
    background-color: #ececec;
    padding: 12px 0;
  }

  .table-row {
    border-bottom: 1px solid #e5e5e5;
    padding: 16px 0;

    :last-child {
      border: none;
    }
  }

  .box {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 12px;
    border: 1px solid #ececec;
  }

  .product-name {
    color: #0c0c0c;
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
