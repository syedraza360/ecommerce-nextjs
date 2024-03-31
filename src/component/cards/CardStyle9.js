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
import { Rate } from "antd";
import { addItemToCart } from "src/redux/actions/cartActions";
import {
  addItemToCompareList,
  addItemToWishlist,
  removeWishlistItem,
} from "src/redux/actions";
import { QuickviewModalConstant } from "src/redux/constants";

const CardStyle9 = (props) => {
  const { productDetails, _id, images, title, price } = props;
  const dispatch = useDispatch();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const { items: wishlist } = useSelector((state) => state.wishlist);
  let wishlistItem = wishlist?.map((item) => item._id);
  return (
    <StyledCard>
      {/* <img src={image} width="100%" /> */}
      <Link href={`/product}`}>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
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
        </div>
        <div className="quick_view">
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

      <div className="item-details">
        <Rate defaultValue={4} disabled style={{ color: "#ffa200", fontSize: 13 }} />
        <div className="product mt-2">{title}</div>

        <div className="price">
          {formatedPrice.format(price)}{" "}
          <small style={{ color: "#858585", textDecoration: "line-through" }}>
            ${price + 100}
          </small>
        </div>
      </div>
    </StyledCard>
  );
};

export default CardStyle9;

const StyledCard = styled.div`
  position: relative;
  margin: auto;
  overflow: hidden;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  // :hover .cart-actions .add_to_wishlist {
  //   transform: translateY(4px);
  //   opacity: 1;
  //   transition: all 0.5s ease;
  // }
  // :hover .cart-actions .quick_view {
  //   transform: translateY(6px);
  //   opacity: 1;
  //   transition: all 0.8s ease;
  // }
  // :hover .cart-actions .compare {
  //   transform: translateY(8px);
  //   opacity: 1;
  //   transition: all 1s ease;
  // }

  .image-container {
    text-align: center;
    width: 100%;
    padding-top: 105%;
    background-color: #fff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s ease;
    transform: scale(1);
  }

  .cart-actions {
    .add_to_cart,
    .add_to_wishlist,
    .quick_view,
    .compare {
      background-color: hsla(0, 0%, 100%, 0.8);
      padding: 10px;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(0px);
      cursor: pointer;
      :hover {
        color: #f5513c;
      }
    }

    .add_to_cart,
    .add_to_wishlist,
    .quick_view {
      border-right: 1px solid #ddd;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(0px);
      :hover {
        color: #f5513c;
      }
    }
  }

  .item-details {
    overflow: hidden;
    position: relative;
    background: #fff;
    padding: 12px 12px;
  }

  .cart-actions {
    opacity: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    background-color: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -10px;
    text-align: center;
    color: #fff;
  }
  :hover .cart-actions {
    opacity: 1;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    bottom: 100px;
  }
`;
