import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import ProductListing from "src/component/productListing";
import ShopSidebar from "src/component/sidebar/shopSidebar";
import SortBar from "src/component/sortItems";
import { bagsProducts } from "src/mock/bagsProducts";
import CardStyle7 from "src/component/cards/CardStyle7";
import { clothProducts } from "src/mock/clothProducts";
import { electronicItems } from "../../../src/mock/electronicProducts";
import styled from "styled-components";
import Link from "next/link";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);
  const [gridColumn, setGridColumn] = useState(3);

  return (
    <>
      {/* <Breadcrumb title="SHOP" link="ELECTRONICS STORE / PRODUCTS" className="my-5" /> */}
      <StyledPage>
        <div className="pagination-sec mt-5 mb-5">
          <Row className="d-flex justify-content-end align-items-center">
            <Col lg={6} sm={24} xs={24}>
              <h5 className="m-0 text-dark">PRODUCTS</h5>
            </Col>
            <Col
              lg={18}
              sm={24}
              xs={24}
              className="d-flex justify-content-sm-start justify-content-lg-end"
            >
              <Link href="/">
              <p className="m-0 mx-1"> ELECTRONIC-STORE / </p>
            </Link>{" "}
            <Link href="/">
              <p className="m-0 mx-1">PRODUCTS</p>
            </Link>
            </Col>
          </Row>
        </div>
      </StyledPage>
      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <img
              src="/images/Electronics/banner/all-products-banner.jpg"
              width="100%"
              className="mb-3"
            />
          </Col>

          <Col xs={0} sm={0} md={0} lg={6}>
            <div style={{ position: "sticky", top: 75, marginTop: 48 }}>
              <ShopSidebar />
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={18}>
            <SortBar className="my-5" setGridColumn={setGridColumn} />

            <ProductListing
              CardStyle={CardStyle7}
              products={electronicItems}
              grid={gridColumn}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ShopLeftSidebar;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    p {
      color: #555555;
      font-weight: 600;
    }
    p:hover {
      cursor: pointer;
      color: #000;
    }
    span {
      color: #6c757d;
    }
  }
`;