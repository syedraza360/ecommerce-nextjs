import styled from "styled-components";
import { ButtonWrapper } from "../buttons";
import Link from "next/link";

const ShopCard = (props) => {
  const { title, description, link } = props;
  return (
    <StyledCard>
      <div className="image-container" />
      <div className="item-details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <Link href={link}>
          <ButtonWrapper style={{ width: 200 }}>SEE DEMO</ButtonWrapper>
        </Link>
      </div>
    </StyledCard>
  );
};

ShopCard.defaultProps = {
  link: "#",
};

export default ShopCard;

const StyledCard = styled.div`
  .image-container {
    background-image: url(/images/shop_card_image.jpg);
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 480px;
    position: relative;
    border-radius: 4px;
  }

  .item-details {
    position: absolute;
    top: 100px;
    right: -20px;
    width: 300px;
  }

  .title {
    font-size: 48px;
    font-weight: 600;
    color: #54595f;
    line-height: 1;
  }

  .description {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
    color: #54595f;
    margin: 40px 0;
  }

  @media only screen and (max-width: 1200px) {
    // .item-details {
    //   left: 96%;
    // }
  }

  @media only screen and (max-width: 786px) {
    .image-container {
      width: 100%;
      margin: 16px auto;
    }
    .item-details {
      right: -50px;
    }
  }

  @media only screen and (max-width: 576px) {
    .title {
      font-size: 38px;
    }
    .image-container {
      width: 100%;
      margin: 16px auto;
    }

    .item-details {
      position: relative;
      top: 0px;
      left: 0px;
    }

    .description {
      margin: 12px 0;
      font-weight: 300;
    }
  }
`;
