import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItemFromCompareList } from "src/redux/actions";
import { addItemToCart } from "src/redux/actions/cartActions";
import styled from "styled-components";
import { ButtonWrapper, SwipeButton, VictoriaButton } from "../buttons";

const CompareCard = (props) => {
  const { productDetails, _id, title, description, brandName, price, images } = props;
  const dispatch = useDispatch();

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledCard>
      <div className="close-btn">
        <AiOutlineClose
          onClick={() => {
            dispatch(removeItemFromCompareList(productDetails));
          }}
          size={20}
        />
      </div>
      <div className="img-section">
        <img className="img-fluid" src={images[0]} />
        <Link href={"#"}>
          <h5 className="elipsText">{title}</h5>
        </Link>
        <h5>
          {" "}
          {formatedPrice.format(price)}{" "}
          <small style={{ color: "#858585", textDecoration: "line-through" }}>
            ${price + 100}
          </small>
        </h5>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>description</h5>
        </div>
        <div className="inner-detail" style={{ height: 100 }}>
          <p>{description?.slice(0, 120)}...</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>brand name</h5>
        </div>
        <div className="inner-detail">
          <p>Zara</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>size</h5>
        </div>
        <div className="inner-detail">
          <p>S, XS</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>color</h5>
        </div>
        <div className="inner-detail">
          <p>Blue, Pink</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>material</h5>
        </div>
        <div className="inner-detail">
          <p>Cotton</p>
        </div>
      </div>
      <div className="detail-part">
        <div className="title-detail">
          <h5>availability</h5>
        </div>
        <div className="inner-detail">
          <p>In stock</p>
        </div>
      </div>
      <div className="btn-part">
        <ButtonWrapper
          onClick={() => {
            dispatch(addItemToCart(productDetails));
          }}
          style={{ width: 220 }}
        >
          ADD TO CART
        </ButtonWrapper>
      </div>
    </StyledCard>
  );
};

export default CompareCard;

const StyledCard = styled.div`
  border: 1px solid #ddd;
  margin: 0 8px;
  /* border-right: none; */
  position: relative;
  .close-btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
  .img-section {
    padding: 0 15px 15px;
    /* height: 250px; */
    img {
      width: 70%;
      margin: 0 auto;
      padding-top: 25px;
    }
    h5 {
      margin-bottom: 0;
      text-transform: capitalize;
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .detail-part .title-detail {
    background-color: #f7f8fa;
    text-align: center;
    padding: 8px 0;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    h5 {
      margin-bottom: 0;
      text-transform: uppercase;
      font-weight: 400;
      line-height: 24px;
      font-size: 16px;
      color: #222;
      letter-spacing: 0.05em;
    }
  }
  .detail-part .inner-detail {
    padding: 15px;
    p {
      margin-bottom: 0;
      line-height: 1.2;
      letter-spacing: 0.05em;
      font-size: 14px;
      color: #777;
    }
  }
  .btn-part {
    text-align: center;
    padding: 15px;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: center;
  }
  .elipsText {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
