import { Row, Col } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import RecentBlogs from "src/component/blogListing/recentBlogs";
import PopularBlogs from "src/component/blogListing/popularBlogs";
import BlogListingCard from "src/component/blogListing/blogListingCard";
import { clothBlogs } from "src/mock/clothProducts";
import Link from "next/link";

const BlogRightSidebar = (props) => {
  const dispatch = useDispatch();

  return (
    <StyledPage>
      {/* <Breadcrumb title="BLOG" link="BLOG / WITH RIGHT SIDEBAR" className="my-5" /> */}
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
              <p className="m-0 mx-1"> BLOG / </p>
            </Link>
            <Link href="/">
              <p className="m-0 mx-1"> WITH RIGHT SIDEBAR </p>
            </Link>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="">
          <Col lg={18} sm={24} xs={24}>
            {clothBlogs.map((item, index) => {
              return <BlogListingCard key={index} {...item} />;
            })}
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs />
            {/* <PopularBlogs className="mt-5" /> */}
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default BlogRightSidebar;

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
