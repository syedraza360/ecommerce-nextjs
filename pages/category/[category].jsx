import { Row, Col } from "antd";
import axios from "axios";
import ProductCard from "../../src/component/cards/productCard";
import router from "next/router";
import styled from "styled-components";

const ProductListings = (props) => {
  const { productList } = props;
  return (
    <StyledPage>
      <div className="heading">
        <div>{router.query.category}</div>
        <div className="dot" />
        <div>{productList.length}</div>
      </div>
      <Row gutter={[24, 50]}>
        {productList.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6}>
            <ProductCard {...item} />
          </Col>
        ))}
      </Row>
    </StyledPage>
  );
};

export default ProductListings;

const StyledPage = styled.div`
  padding: 80px;

  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    font-size: 24px;
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #72ec72;
      margin-inline: 16px;
    }
  }
  @media (max-width: 1024px) {
    padding: 20px !important;
  }
`;

export async function getServerSideProps(context) {
  const uri = `http://64.227.31.159:1337/categories/type/${context.params.category}`;
  try {
    const { data } = await axios.get(uri);
    return {
      props: { productList: data.products },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
