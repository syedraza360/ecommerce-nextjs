import Link from "next/link";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import moment from "moment";
import { image1 } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineSync,
} from "react-icons/ai";
import { Rate, Row, Col } from "antd";
import {
  addItemToCompareList,
  addItemToWishlist,
  removeWishlistItem,
} from "src/redux/actions";
import { addItemToCart } from "src/redux/actions/cartActions";
import { QuickviewModalConstant } from "src/redux/constants";

const CardStyle6 = (props) => {
  const { productDetails, _id, images, title, price, brandName, listView, rating } =
    props;
  const dispatch = useDispatch();
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const { items: wishlist } = useSelector((state) => state.wishlist);
  let wishlistItem = wishlist?.map((item) => item._id);
  return (
    <StyledCard images={images}>
      <Row justify="space-between">
        <Col
          xs={24}
          sm={24}
          md={listView ? 8 : 24}
          lg={listView ? 6 : 24}
          xl={listView ? 4 : 24}
        >
          <Link href={`/product/${_id}`}>
            <div className="image-container" />
          </Link>
          <div className="cart-actions">
            <div className="add_to_cart" style={{ opacity: 1 }}>
              <AiOutlineShoppingCart
                onClick={() => {
                  dispatch(addItemToCart(productDetails));
                }}
                size={20}
                title={"Add to cart"}
              />
            </div>
            <div className="add_to_wishlist">
              {wishlistItem.includes(_id) ? (
                <div
                  className="wish-button"
                  onClick={() => {
                    dispatch(removeWishlistItem(productDetails));
                  }}
                >
                  <FaHeart className="icon" title="Remove from wishlist" />
                </div>
              ) : (
                <div
                  className="wish-button"
                  onClick={() => {
                    dispatch(addItemToWishlist(productDetails));
                  }}
                >
                  <FaRegHeart className="icon" title="Add to wishlist" />
                </div>
              )}
              {/* <AiOutlineHeart size={20} title={"Add to wishlist"} /> */}
            </div>
            <div className="quick_view">
              <AiOutlineEye
                onClick={() => {
                  dispatch({
                    type: QuickviewModalConstant.OPEN_QUICKVIEW_MODAL,
                    payload: productDetails,
                  });
                }}
                size={22}
                title={"Quick view"}
              />
            </div>
            <div className="compare">
              <AiOutlineSync
                size={20}
                title={"Compare"}
                onClick={() => {
                  dispatch(addItemToCompareList(productDetails));
                }}
              />
            </div>
          </div>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={listView ? 15 : 24}
          lg={listView ? 17 : 24}
          xl={listView ? 19 : 24}
        >
          <div className="item-details">
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Rate
                // defaultValue={3}
                disabled
                allowHalf
                value={rating}
                style={{ color: "#ffa200", fontSize: 13 }}
              />
              <p style={{ paddingLeft: "20px", paddingTop: "16px" }}>{rating}</p>
            </div>
            <div title={title} className="product mt-2">
              {title}
            </div>

            <div style={{ fontSize: 12, color: "brown" }}>{brandName}</div>

            <div className="price">
              {formatedPrice.format(price)}{" "}
              <small style={{ color: "#858585", textDecoration: "line-through" }}>
                ${price * 1.5}
              </small>
            </div>

            {listView ? (
              <div className="description">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters.
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default CardStyle6;

const StyledCard = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-bottom: 30px;
  margin-left: 12px;
  margin-right: 12px;

  .image-container {
    /* border: 1px solid #f2f2f2; */
    background-color: #fff;
    border-bottom: none;
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 130%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url(${props.images[0]})`};
    transition: 0.2s ease;
    /* min-height: 320px; */

    &:hover {
      background-image: ${(props) =>
        props.images.length > 1 ? `url(${props.images[1]})` : `url(${props.images[0]})`};
    }
  }

  .cart-actions {
    .add_to_cart,
    .add_to_wishlist,
    .quick_view,
    .compare {
      color: #333;
      align-items: center;
      justify-content: center;
      transform: translateY(0px);
      transition: all 0.3s ease;
      cursor: pointer;
      :hover {
        color: #f5513c;
      }
    }
  }

  .cart-actions {
    opacity: 0;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    border-radius: 30px;
    background-color: #fff;
    padding: 10px 4% 10px 4%;
    -webkit-transition: all 0.5s ease;
    box-shadow: 0px 0px 5px 0px #929292;
    transition: all 0.5s ease;
    min-width: 150px;
    max-width: 180px;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -5px;
    text-align: center;
  }
  :hover .cart-actions {
    opacity: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    bottom: 20px;
  }
  :hover .image-container {
    background-image: url(${(props) => props.images[1]});
  }

  .item-details {
    overflow: hidden;
    position: relative;
    background: #fff;
    // z-index: 999;
  }

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
  }

  .product {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 400;
    color: #000;
    &:hover {
      cursor: pointer;
    }
  }

  .price {
    font-size: 14px;
    font-weight: 500;
    color: #696969;
    margin-top: 10px;
  }
`;
