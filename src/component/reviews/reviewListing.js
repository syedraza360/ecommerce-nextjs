import styled from "styled-components";
import { Rate, Divider } from "antd";
import { PrimaryButton } from "../buttons";
import ReviewForm from "./reviewForm";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalConstant } from "../../redux/constants";

const ReviewListing = (props) => {
  const { reviews, productId } = props;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const reviewRef = useRef();

  const showReview = () => {
    reviewRef.current.classList.toggle("visible");
  };

  return (
    <StyledContainer>
      {reviews.map((review) => (
        <div key={review._id}>
          <Rate
            disabled
            defaultValue={review.rating}
            style={{ color: "#FF3E48", fontSize: 13 }}
          />{" "}
          <label>{Number(review.rating).toFixed(1)}/5.0</label>
          <div className="review">{review.review}</div>
          <Divider style={{ margin: "8px 0" }} />
        </div>
      ))}

      {isLoggedIn ? (
        <PrimaryButton className="mt-5 mb-3" onClick={showReview}>
          Add review
        </PrimaryButton>
      ) : (
        <PrimaryButton
          className="mt-5 mb-3"
          onClick={() => {
            dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
          }}
        >
          Login
        </PrimaryButton>
      )}

      <div ref={reviewRef} className={`review-container`}>
        <ReviewForm productId={productId} />
      </div>
    </StyledContainer>
  );
};

export default ReviewListing;

const StyledContainer = styled.div`
  .ant-rate-star {
    margin-right: 4px;
  }

  .review {
    font-weight: 300;
  }

  .review-container {
    width: 100%;
    height: 0;
    transition: 0.5s;
    overflow: hidden;

    &.visible {
      height: 350px;
    }
  }
`;
