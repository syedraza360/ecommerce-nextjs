import Link from "next/link";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import moment from "moment";
import { addItemToWishlist, removeWishlistItem } from "../../redux/actions";
import { cardBackground1 } from "../../../images";
import { Avatar } from "antd";
import { ButtonWrapper } from "../buttons";

const UserProfileDetailCard = (props) => {
  const { _id, title, images, description } = props;

  return (
    <StyledCard>
      <div className="d-flex">
        <Avatar className="border" size={60} src="https://joeschmoe.io/api/v1/random" />
        <div className="ml-3 d-flex flex-column justify-content-between">
          <p className="mb-0 font-weight-bold">Hunter Chang</p>
          <p className="mb-0 ">Followers: 5k</p>
        </div>
      </div>
      <ButtonWrapper className="mt-3" backgroundColor="#1d8ece">
        Follow
      </ButtonWrapper>
      <div className="ml-3 mt-3 d-flex flex-column justify-content-between">
        <p className="mb-2">
          <span className="font-weight-bold">Location:</span> Colorado
        </p>
        <p className="">
          <span className="font-weight-bold">Joined:</span> Apr 8, 2018
        </p>
      </div>
    </StyledCard>
  );
};

export default UserProfileDetailCard;

const StyledCard = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  p {
    font-size: 16px !important;
  }
  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }

  @media only screen and (max-width: 576px) {
    /* margin: 0 12px; */
  }
`;
