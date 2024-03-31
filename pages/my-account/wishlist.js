import { Row, Col } from "antd";
import allProducts from "src/mock/products";
import styled from "styled-components";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { PrimaryButton } from "../../src/component/buttons";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import ProductCardWithIcons from "src/component/cards/productCardWithIcons";
import CardStyle6 from "src/component/cards/CardStyle6";
import { useSelector } from "react-redux";

const Wishlist = (props) => {
  const { products } = props;
  const { items: wishlist } = useSelector((state) => state.wishlist);

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
            My Wishlist
          </h1>
          {wishlist.length == 0 ? (
            <Row className="mt-3">
              <Col style={{ background: "#f9fafb" }} span={24} className="p-4">
                <div className="d-flex justify-content-start align-items-center">
                  <FiHeart color={"#ced4da"} size={50} />
                  <p className="mb-0 ml-5 title" style={{ color: "#808080" }}>
                    Your wishlist is currently empty.
                  </p>
                </div>
              </Col>
              <Link href={"/"}>
                <PrimaryButton className="mt-5">RETURN TO SHOP</PrimaryButton>
              </Link>
            </Row>
          ) : (
            <Row gutter={[24, 24]}>
              {wishlist.map((item, index) => (
                <Col key={index} xs={24} sm={24} lg={6}>
                  <CardStyle6 {...item} productDetails={item} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </StyledPage>
  );
};

export default Wishlist;

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

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
    margin-top: 20px;
  }

  .product {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
    color: #000;
    margin: 12px 0;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
  }
`;

export async function getServerSideProps(context) {
  return {
    props: {
      products: [allProducts[0], allProducts[3], allProducts[6]],
    },
  };
}
