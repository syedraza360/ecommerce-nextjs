import Link from "next/link";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Rate, Row, Col } from "antd";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineSync,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeCartItem } from "src/redux/actions/cartActions";
import {
  addItemToCompareList,
  addItemToWishlist,
  removeWishlistItem,
} from "src/redux/actions";
import { QuickviewModalConstant } from "src/redux/constants";

const ProductCardWithIcons = (props) => {
  const { productDetails, _id, title, brandName, price, images, listView } = props;
  const dispatch = useDispatch();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const { items: wishlist } = useSelector((state) => state.wishlist);
  let wishlistItem = wishlist?.map((item) => item._id);
  return (
    <StyledCard>
      <Row justify="space-between">
        <Col
          xs={24}
          sm={24}
          md={listView ? 8 : 24}
          lg={listView ? 6 : 24}
          xl={listView ? 4 : 24}
        >
          <Link href={`/product/${_id}`}>
            <div
              className="image-container"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
          </Link>
          <div className="new-item">NEW</div>

          <div className="icon-section">
            <div className="icon icon-1">
              <AiOutlineShoppingCart
                onClick={() => {
                  dispatch(addItemToCart(productDetails));
                }}
                size={20}
                title={"Add to cart"}
              />
            </div>

            {wishlistItem.includes(_id) ? (
              <div
                className="icon icon-2"
                onClick={() => {
                  dispatch(removeWishlistItem(productDetails));
                }}
              >
                <FaHeart size={18} />
              </div>
            ) : (
              <div
                className="icon icon-2"
                onClick={() => {
                  dispatch(addItemToWishlist(productDetails));
                }}
              >
                <FaRegHeart size={18} />
              </div>
            )}
            <div className="icon icon-3">
              <AiOutlineEye
                onClick={() => {
                  dispatch({
                    type: QuickviewModalConstant.OPEN_QUICKVIEW_MODAL,
                    payload: productDetails,
                  });
                }}
                size={20}
                title={"Quick view"}
              />
            </div>
            <div className="icon icon-4">
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
            <div className="product mt-2">{title}</div>
            <div className="company mt-2">{brandName}</div>
            <Rate defaultValue={4} disabled style={{ color: "#ffa200", fontSize: 13 }} />

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

ProductCardWithIcons.defaultProps = {
  brandName: "Spotlight on Style",
};

export default ProductCardWithIcons;

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;

  .image-container {
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 130%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .icon-section {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 8px;
  }

  .icon {
    position: absolute;
    left: -48px;
    cursor: pointer;
    background-color: #fde4e4;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #f2f2f2;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.09);
    transition: all 0.6s;
    :hover {
      background-color: #ff0000a8;
      color: #fff;
    }
  }

  .icon-1 {
    top: 8px;
    transition-delay: 0.1s;
  }
  .icon-2 {
    top: 48px;
    transition-delay: 0.2s;
  }
  .icon-3 {
    top: 88px;
    transition-delay: 0.3s;
  }
  .icon-4 {
    top: 128px;
    transition-delay: 0.4s;
  }

  :hover {
    .icon-1,
    .icon-2,
    .icon-3,
    .icon-4 {
      left: 0px;
    }
  }

  .item-details {
    overflow: hidden;
    position: relative;
  }

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
  }

  .product {
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
  }

  .new-item {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #e84c88;
    color: #fff;
    line-height: 36px;
    text-align: center;
    font-size: 10px;
    cursor: context-menu;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .description {
    color: #727272;
    font-size: 13px;
    margin-top: 12px;
  }

  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0 12px;
    .item-details {
      left: 0px;
    }
  }
`;
