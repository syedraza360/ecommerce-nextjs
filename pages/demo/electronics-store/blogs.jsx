import { Row, Col, Collapse, Divider, message } from "antd";

import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecentBlogs from "src/component/blogListing/recentBlogs";
import BlogListingCard from "src/component/blogListing/blogListingCard";
import { electronicBlogs } from "src/mock/electronicProducts";
import Breadcrumb from "src/component/breadcrumb";
import Link from "next/link";
const { Panel } = Collapse;

const BagBlogs = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  return (
    <StyledPage>
      {/* <Breadcrumb title="BLOG" link="HOME / ELECTRONICS STORE / BLOGS" className="mt-5" /> */}
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
              <p className="m-0 mx-1"> ELECTRONICS-STORE /</p>
            </Link>
            <Link href="/">
              <p className="m-0 mx-1"> BLOG</p>
            </Link>
          </Col>
        </Row>
      </div>
    
      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="flex-column-reverse flex-lg-row">
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs data={electronicBlogs} />
            {/* <PopularBlogs className="mt-5" /> */}
          </Col>
          <Col lg={18} sm={24} xs={24}>
            {electronicBlogs.map((item, index) => {
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

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
