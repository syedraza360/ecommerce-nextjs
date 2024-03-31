import { useEffect, useState } from "react";
import { Row, Col, Collapse, Pagination, Empty } from "antd";
import styled from "styled-components";
import Breadcrumb from "src/component/breadcrumb";
import { useDispatch } from "react-redux";
import BlogCard2 from "src/component/cards/blogCard2";
import { bagsBlogs } from "src/mock/bagsProducts";
import { clothBlogs, clothProducts } from "src/mock/clothProducts";
import FilterBar from "src/component/sortItems/FilterBar";
import Link from "next/link";

let pageSize = 8;

const NoSidebar = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (page) => {
    setPage({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
    window.scrollTo(0, 120);
  };

  useEffect(() => {
    setPage({
      current: 1,
      minIndex: 0 * pageSize,
      maxIndex: 1 * pageSize,
    });
    setData([...clothProducts, ...bagsBlogs]);
  }, []);

  return (
    <StyledPage>
      {/* <h3>BLOG</h3> */}
      {/* <Breadcrumb title="BLOG" link="BLOG / WITHOUT SIDEBAR" className="my-5" /> */}
      <div className="pagination-sec mt-5 mb-5">
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
              <p className="m-0 mx-1"> WITHOUT SIDEBAR </p>
            </Link>
          </Col>
        </Row>
      </div>
      <div style={{ padding: " 30px 80px" }} className="detail-section">
        <FilterBar className="w-100 mb-5" data={data} setData={setData} />
        <Row gutter={[0, 40]} className="">
          {data?.length < 1 ? (
            <Row className="mt-3">
              <Col span={24} className="p-4">
                <div className="d-flex justify-content-start align-items-center">
                  <Empty
                    description="Do not have any item."
                    color={"#ced4da"}
                    size={50}
                  />
                </div>
              </Col>
            </Row>
          ) : (
            data.map(
              (item, index) =>
                index >= page.minIndex &&
                index < page.maxIndex && (
                  <Col lg={6} sm={24} xs={24}>
                    <BlogCard2 key={index} {...item} />
                  </Col>
                )
            )
          )}
        </Row>
        <Pagination
          pageSize={pageSize}
          className="mt-5"
          defaultCurrent={1}
          current={page.current}
          onChange={(e) => handleChange(e)}
          total={data.length}
        />
      </div>
    </StyledPage>
  );
};

export default NoSidebar;

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

  .detail-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
