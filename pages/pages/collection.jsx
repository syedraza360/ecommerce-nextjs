import { Row, Col } from "antd";
import styled from "styled-components";
import Breadcrumb from "src/component/breadcrumb";
import { ButtonWrapper } from "src/component/buttons";
import Link from "next/link";

const StyledDiv = styled.div`
  .main-div {
    padding: 5%;
    .card-div {
      text-align: center;
      margin: 18px;

      .image-container {
        position: relative;
        margin: auto;
        overflow: hidden;
        max-height: 320px;
        img {
          transition: 0.5s ease;
          transform: scale(1);
          display: block;
        }
      }
      h3 {
        font-weight: 800;
      }
      p {
        color: #777;
      }

      &:hover {
        .image-container img {
          transform: scale(1.03);
          transition: all 0.4s ease;
        }
      }
    }
  }
`;

const CollectionPage = () => {
  const cardData = [
    {
      title: "FASHION",
      image: "/images/clothing/Jackets/RelaxedBlazer-3.jpg",
      stock: "20 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Shoes/Women/2/5.webp",
      stock: "18 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Shoes/featured/2.webp",
      stock: "28 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Shoes/featured/3.webp",
      stock: "21 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Shoes/featured/2.webp",
      stock: "17 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Bags/ArgyleQuilted/Purse-1.webp",
      stock: "27 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Electronics/health-and-beauty/1/1.webp",
      stock: "03 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image: "/images/Electronics/fans/5/1.webp",
      stock: "13 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
  ];
  return (
    <StyledDiv>
      {/* <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="PAGES"
        link="PAGES / COLLECTION"
      /> */}
      <StyledPage>
        <div className="pagination-sec mt-5">
          <Row className="d-flex justify-content-end align-items-center">
            <Col lg={6} sm={24} xs={24}>
              <h5 className="m-0 text-dark">PAGES</h5>
            </Col>
            <Col
              lg={18}
              sm={24}
              xs={24}
              className="d-flex justify-content-sm-start justify-content-lg-end"
            >
              <Link href="/">
                <p className="m-0 mx-1"> PAGES / </p>
              </Link>{" "}
              <Link href="/">
                <p className="m-0 mx-1"> COLLECTION</p>
              </Link>
            </Col>
          </Row>
        </div>
      </StyledPage>

      <div className="w-100">
        <Row className="main-div">
          {cardData.map((data, index) => (
            <Col key={index} span={6}>
              <div className="card-div">
                <div className="image-container">
                  <img width="100%" src={data.image} />
                </div>
                <p style={{ marginTop: 12 }}>({data.stock})</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ButtonWrapper style={{ width: 180 }}>Shop Now</ButtonWrapper>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </StyledDiv>
  );
};

export default CollectionPage;

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
