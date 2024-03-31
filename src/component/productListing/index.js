import React, { useState, useEffect } from "react";
import { Row, Col, Pagination } from "antd";
import CardStyle6 from "../cards/CardStyle6";
// import ProductCard from "../cards/productCardWithIcons";

let pageSize = 9;

const ProductListing = (props) => {
  const { columns, products, grid, CardStyle, rating } = props;
  const span = 24 / grid;

  if (grid == 2) {
    pageSize = 8;
  } else if (grid == 3) {
    pageSize = 9;
  } else if (grid == 4) {
    pageSize = 12;
  } else if (grid == 6) {
    pageSize = 18;
  }

  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  const handleChange = (page) => {
    setPage({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
    window.scrollTo(0, 700);
  };

  useEffect(() => {
    setPage({
      current: 1,
      minIndex: 0 * pageSize,
      maxIndex: 1 * pageSize,
    });
    setData([...products]);
  }, [grid]);

  return (
    <>
      <Row gutter={[32, 32]}>
        {products.map(
          (item, index) =>
            index >= page.minIndex &&
            index < page.maxIndex && (
              <Col key={index} xs={24} sm={24} md={12} lg={11} xl={span} xxl={span}>
                <CardStyle
                  productDetails={item}
                  listView={grid == 1 ? true : false}
                  {...item}
                />
              </Col>
            )
        )}
      </Row>

      {props.showPagination == false ? (
        <></>
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Pagination
            pageSize={pageSize}
            className="mt-5"
            defaultCurrent={1}
            current={page.current}
            onChange={(e) => handleChange(e)}
            total={[...products].length}
          />
        </div>
      )}
    </>
  );
};

ProductListing.defaultProps = {
  grid: 3,
  CardStyle: CardStyle6,
};

export default ProductListing;
