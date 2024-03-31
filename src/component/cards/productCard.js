import Link from "next/link";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../redux/actions";

const ProductCard = (props) => {
  const { _id, productName, brandName, price, images } = props;
  const cardImage = process.env.NEXT_PUBLIC_STRAPI_URL + images[0].url;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledCard>
      <Link href={`/product/${_id}`}>
        <div className="product-image" style={{ backgroundImage: `url(${cardImage})` }} />
      </Link>

      <div className="item-details">
        <div className="company">{brandName}</div>
        <div className="product">{productName}</div>
        <div className="price">{formatedPrice.format(price)}</div>

        {/* <div className="card-footer d-flex justify-content-center">
          <div
            className="hoverable dark"
            style={{ fontSize: 12, marginRight: 12, cursor: "pointer", fontWeight: 600 }}
          >
            ADD TO CART
          </div>
          {wishlist.includes(_id) ? (
            <div
              style={{ fontSize: 12, marginLeft: 12, cursor: "pointer", fontWeight: 600 }}
              className="d-flex align-items-center"
              onClick={() => dispatch(removeWishlistItem(_id))}
            >
              <FaHeart className="mr-1" />
              <div className="text hoverable dark">REMOVE FROM WISHLIST</div>
            </div>
          ) : (
            <div
              style={{ fontSize: 12, marginLeft: 12, cursor: "pointer", fontWeight: 600 }}
              className="d-flex align-items-center"
              onClick={() => dispatch(addItemToWishlist(_id))}
            >
              <FaRegHeart className="mr-1" />
              <div className="text hoverable dark">ADD TO WISHLIST</div>
            </div>
          )}
        </div> */}
      </div>
    </StyledCard>
  );
};

export default ProductCard;

const StyledCard = styled.div`
  margin: 0 24px;
  .product-image {
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  .item-details {
    overflow: hidden;
    position: relative;
  }

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
    margin-top: 20px;
  }

  .product {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
    color: #000;
    margin: 12px 0;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
  }

  .card-footer {
    padding: 10px;
    border: none;
    background-color: #fff;
    transition: 0.6s;
    position: absolute;
    bottom: 40%;
    // left: 0;
  }

  :hover .card-footer {
    bottom: -6px;
  }

  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0 12px;
  }
`;
