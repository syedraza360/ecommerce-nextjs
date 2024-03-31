import { Row, Col, Collapse, Divider, message, Avatar } from "antd";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Breadcrumb from "src/component/breadcrumb";
import RecentBlogs from "src/component/blogListing/recentBlogs";
import {
  BsHandIndexThumb,
  BsHandThumbsDown,
  BsHandThumbsDownFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";
import { blogBanner } from "/images";
import UserProfileDetailCard from "src/component/cards/userProfileDetailCard";
import CommentSection from "src/component/commentSection";
import SocialIcons from "src/component/socialIcons";
import BlogCarousel from "src/component/productListing/blogCarousel";
import { clothProducts } from "src/mock/clothProducts";
import Title3 from "src/component/titles/title3";
import Link from "next/link";

const BlogDetail = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  return (
    <StyledPage>
      {/* <Breadcrumb title="BLOG" link="BLOG / WITH RIGHT SIDEBAR" className="my-5" /> */}
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
              <p className="m-0 mx-1"> DETAIL PAGE </p>
            </Link>
          </Col>
        </Row>
      </div>
      <SocialIcons />
      <div style={{ padding: "0px 80px" }} className="detail-section">
        <Row gutter={[30, 30]}>
          <Col
            lg={18}
            sm={24}
            xs={24}
            style={{ padding: "0 80px" }}
            className="detail-section2"
          >
            <Row gutter={[30, 30]} className="">
              <Col lg={12} sm={16} xs={16} className="d-flex">
                <Avatar
                  className="border"
                  size={60}
                  src="https://joeschmoe.io/api/v1/random"
                />
                <div className="ml-3 d-flex flex-column justify-content-between">
                  <p className="mb-0 font-weight-bold">Hunter Chang</p>
                  <p className="mb-0 ">Aug 20, 2021</p>
                </div>
              </Col>
              <Col
                lg={12}
                sm={8}
                xs={8}
                className="d-flex justify-content-end align-items-center"
              >
                {like ? (
                  <BsHandThumbsUpFill
                    className="likeBtn"
                    onClick={() => setLike(false)}
                    size={40}
                  />
                ) : (
                  <BsHandThumbsUp
                    className="likeBtn"
                    onClick={() => setLike(true)}
                    size={40}
                  />
                )}
                {disLike ? (
                  <BsHandThumbsDownFill
                    className="dislikeBtn"
                    onClick={() => setDisLike(false)}
                    size={40}
                  />
                ) : (
                  <BsHandThumbsDown
                    className="dislikeBtn"
                    onClick={() => setDisLike(true)}
                    size={40}
                  />
                )}
              </Col>
            </Row>
            <Divider style={{ background: "#f3f3f3", marginTop: 10, marginBottom: 15 }} />
            <div className="detail-section">
              <h4 className="my-3">
                ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY
                UNCHANGED.
              </h4>
              <img src={blogBanner} width="100%" />

              <Divider
                style={{ background: "#dddddd", marginTop: 0, marginBottom: 15 }}
              />
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non
                ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu
                metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet
                dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie
                condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel magna.
                Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc
                fermentum vehicula.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non
                ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu
                metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet
                dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie
                condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel magna.
                Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc
                fermentum vehicula.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non
                ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu
                metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet
                dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie
                condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel magna.
                Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc
                fermentum vehicula.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non
                ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu
                metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet
                dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie
                condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel magna.
                Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc
                fermentum vehicula.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida, lorem elit commodo urna, id viverra libero tellus non
                ipsum. Fusce molestie ultrices nibh feugiat pretium. Donec pulvinar arcu
                metus, et dapibus odio condimentum id. Quisque malesuada mauris sit amet
                dui feugiat, ut pretium mauris luctus. Ut aliquam, tellus nec molestie
                condimentum, tellus arcu dignissim quam, a gravida nunc nulla vel magna.
                Sed pulvinar tortor et euismod blandit. Proin accumsan orci ac nunc
                fermentum vehicula.
              </p>
              <p>
                Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
                augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus
                finibus. Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu
                ac cursus gravida.
              </p>
            </div>
            <Divider style={{ background: "#f3f3f3", marginTop: 10, marginBottom: 15 }} />
            <div className="mt-5">
              <CommentSection />
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div style={{ position: "sticky", backgroundColor: "#fff", top: 100 }}>
              <UserProfileDetailCard />
              <RecentBlogs />
            </div>
          </Col>
        </Row>
        <Title3 subtitle="Recent Story" maintitle="RELATED BLOGS" />
        <BlogCarousel padding="0% 0% 5% 0%" data={clothProducts} />
      </div>
    </StyledPage>
  );
};

export default BlogDetail;

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
    p {
      font-size: 20px;
    }
  }
  .likeBtn,
  .dislikeBtn {
    border: 1px solid #ddd;
    border-radius: 100px;
    padding: 7px;
    margin: 0 10px;
  }
  .likeBtn:hover {
    border: 1px solid #147814;
    background: #d2fbd2;
  }
  .dislikeBtn:hover {
    border: 1px solid #fd0000;
    background: #ffc1c1;
  }

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .detail-section2 {
      padding: 0px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
