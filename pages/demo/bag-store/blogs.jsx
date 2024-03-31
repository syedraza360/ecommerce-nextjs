import { Row, Col } from "antd";
import styled from "styled-components";
import RecentBlogs from "src/component/blogListing/recentBlogs";
import BlogListingCard from "src/component/blogListing/blogListingCard";
import Breadcrumb from "src/component/breadcrumb";
import { bagsBlogs } from "src/mock/bagsProducts";
import Link from "next/link";

const BagBlogs = (props) => {
  return (
    <StyledPage>
      {/* <Breadcrumb title="BLOG" link="BLOG / BAG STORE" className="mt-5" /> */}
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">BLOG</h5>
          </Col>
          <Col
            lg={18}
            sm={24}
            xs={24}
            className="d-flex justify-content-sm-start justify-content-lg-end"
          >
           <Link href="/">
              <p className="m-0 mx-1"> BAG-STORE</p>
            </Link>
            <Link href="/">
              <p className="m-0 mx-1"> BLOG </p>
            </Link>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="flex-column-reverse flex-lg-row">
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs data={bagsBlogs} />
            {/* <PopularBlogs className="mt-5" /> */}
          </Col>
          <Col lg={18} sm={24} xs={24}>
            {bagsBlogs.map((item, index) => {
              return <BlogListingCard key={index} {...item} />;
            })}
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default BagBlogs;

const StyledPage = styled.div`
  .pagination-sec {
    // background: #f8f8f8;
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

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
