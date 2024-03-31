import styled from "styled-components";
import Link from "next/link";

const CategoryCard = (props) => {
  const { type } = props;
  return (
    <StyledCard {...props}>
      <div className="category">
        <Link href="/">
          <a className="text">{type}</a>
        </Link>
      </div>
    </StyledCard>
  );
};

CategoryCard.defaultProps = {
  img: "/images/shop_card_image.jpg",
  height: "440px",
};

export default CategoryCard;

const StyledCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height};
  width: 100%;
  position: relative;
  border-radius: 4px;

  :hover {
    .text:after {
      width: 100%;
    }
  }

  .category {
    position: absolute;
    bottom: 60px;
    left: -50px;
    width: 300px;
  }

  .text {
    text-decoration: none;
    font-size: 32px;
    line-height: 1;
    font-weight: 600;
    color: #54595f;
    position: relative;

    :after {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 0;
      height: 2px;
      width: 0%;
      background-color: #54595f;
      transition: 0.3s;
    }
  }

  @media only screen and (max-width: 1200px) {
    .category {
      bottom: 50px;
      left: 30px;
    }
  }
`;
