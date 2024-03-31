import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import { AiFillHeart, AiFillWechat } from "react-icons/ai";
import moment from "moment";
import { image1 } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../redux/actions";

const BlogListingCard = (props) => {
  const { _id, title, images } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledCard>
      <Row gutter={[30, 30]}>
        <Col lg={12} sm={24} xs={24} className="w-100">
          <Link href={`/blog/${_id}`} className="w-100">
            <div
              className="product-image img-fluid"
              style={{
                backgroundImage: `url(${images[0]})`,
              }}
            ></div>
          </Link>
        </Col>

        <Col
          lg={12}
          sm={24}
          xs={24}
          className="d-flex flex-column justify-content-center"
        >
          <div className="product">
            <Link href={`/blog/${_id}`}>{title}</Link>
          </div>

          <ul className="blog-created-date">
            <li
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              Posted By:{" "}
              <p
                style={{ margin: 0, fontWeight: 600, marginLeft: 8, fontStyle: "italic" }}
              >
                Admin
              </p>
            </li>

            <li
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <p style={{ margin: 0, fontWeight: 500, marginLeft: 8 }}>
                {moment(new Date()).format("DD-MMM-YYYY")}
              </p>
            </li>

            <li
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <AiFillHeart className="mr-1" size={16} style={{ marginBottom: 3 }} />
              {Math.floor(Math.random() * 10) + 1} Hits
            </li>
            <li
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <AiFillWechat className="mr-1" size={18} />
              {Math.floor(Math.random() * 10) + 1} Comment
            </li>
          </ul>

          <p className="mb-0 card-text">
            Consequences that are extremely painful. Nor again is there anyone who loves
            or pursues or desires to obtain pain of itself, because it is pain, but
            because occasionally circumstances occur in which toil and pain can procure
            him some great pleasure.
          </p>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default BlogListingCard;

const StyledCard = styled.div`
  margin-bottom: 30px;
  .product-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 280px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .createdAt {
    color: #e84c88;
    line-height: 1;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 12px;
  }

  .card-text {
    font-size: 14px;
    color: #777777;
    margin-top: 10px;
    line-height: 20px;
    letter-spacing: 0.03em;
  }
  .product a {
    color: #222222;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.03em;
    margin-top: 10px;
    margin-bottom: 0;
    transition: all 0.5s ease;

    :hover {
      color: #e84c88;
      transition: all 0.5s ease;
      text-decoration: none;
    }
  }

  .blog-created-date {
    list-style-type: none;
    margin-top: 10px;
    margin-bottom: 0px;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    li {
      color: #777777;
    }
    li:nth-child(n + 2) {
      margin-left: 10px;
      border-left: 1px solid #dddddd;
      padding-left: 10px;
    }
  }

  @media (max-width: 1024px) {
    .blog-created-date {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      li:nth-child(n + 2) {
        margin-left: 0px;
        border-left: none;
        padding-left: 0px;
      }
    }
  }
`;
