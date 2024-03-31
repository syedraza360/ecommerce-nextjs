import { Row, Col } from "antd";
import CategoryCard from "../cards/categoryCard";
import styled from "styled-components";
import Link from "next/link";

const DressCategories = (props) => {
  return (
    <StyledContent>
      <Row justify="space-between" gutter={[32, 32]} align="middle">
        <Col xs={24} sm={24} md={11} lg={12} xl={5}>
          <CategoryCard type="Tops" />
        </Col>

        <Col xs={24} sm={24} md={11} lg={12} xl={5}>
          <CategoryCard type="Dresses" />
        </Col>

        <Col xs={24} sm={24} md={11} lg={12} xl={5}>
          <CategoryCard type="Jackets" />
        </Col>

        <Col xs={24} sm={24} md={11} lg={12} xl={5}>
          <CategoryCard type="Jeans" />
        </Col>

        <Col xs={24} sm={24} md={11} lg={12} xl={5}>
          <CategoryCard type="Accessories" img="/images/accessory.jpg" height="200px" />
        </Col>

        <Col xs={24} sm={24} md={11} lg={12} xl={18}>
          <div className="w-100 d-flex align-items-center justify-content-around">
            <Link href="/">
              <a className="dress-link">Outwear</a>
            </Link>

            <Link href="/">
              <a className="dress-link">Jumpsuits</a>
            </Link>

            <Link href="/">
              <a className="dress-link">Pants</a>
            </Link>

            <Link href="/">
              <a className="dress-link">Skirts</a>
            </Link>
          </div>
        </Col>
      </Row>
    </StyledContent>
  );
};

export default DressCategories;

const StyledContent = styled.div`
  padding: 80px;

  .dress-link {
    text-decoration: none;
    font-size: 24px;
    line-height: 1;
    font-weight: 300;
    color: #54595f;
    position: relative;

    :after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      height: 1px;
      width: 0%;
      background-color: #54595f;
      transition: 0.3s;
    }

    :hover {
      :after {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 12px;
  }
`;
