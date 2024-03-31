import { useState } from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import ProductListing from "src/component/productListing";
import ShopSidebar from "src/component/sidebar/shopSidebar";
import SortBar from "src/component/sortItems";
import CardStyle6 from "src/component/cards/CardStyle6";
import { menShoesListing } from "src/mock/shoesProducts";

const MenShoesListing = (props) => {
  const { items } = useSelector((state) => state.products);
  const [gridColumn, setGridColumn] = useState(3);

  return (
    <>
      <Breadcrumb title="SHOP" link="HOME / SHOES STORE / MEN" className="my-5" />

      <div className="col-11 mx-auto mb-5">
        <Row gutter={[32, 0]}>
          {/* <Col xs={0} sm={0} md={0} lg={6}>
            <ShopSidebar />
          </Col> */}

          <Col xs={24} sm={24} md={24} lg={24}>
            {/* <div style={{ fontSize: 34, textAlign: "center", marginTop: 18 }}>Women</div>
            <p
              style={{
                fontSize: 24,
                color: "#858585",
                padding: "24px 5%",
                textAlign: "center",
              }}
            >
              {`Shop a wide range of women shoes, women heels, women court shoes, women peep toes, women boots, women sport shoes and many more online. iXiaThemes provides high quality shoes for women at your door step.`}
            </p> */}
            <img
              src="/images/Shoes/banner/Men-banner.jpg"
              width="100%"
              className="mb-3"
            />

            <SortBar
              count={menShoesListing.length}
              className="my-5"
              setGridColumn={setGridColumn}
            />

            <ProductListing
              CardStyle={CardStyle6}
              products={menShoesListing}
              grid={gridColumn}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MenShoesListing;
