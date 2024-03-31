import styled from "styled-components";
import { Row, Col, Divider } from "antd";
import ProductCard from "../cards/productCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ProductCardWithIcons from "../cards/productCardWithIcons";
import { image1, image2, image3, image4 } from "../../../images";
import { Rate } from "antd";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsUp,
  FiChevronUp,
} from "react-icons/fi";
import { useRef } from "react";
const carouselSettings = {
  // dots: true,
  speed: 500,
  // autoplay: true,
  infinite: true,
  vertical: true,
  verticalSwiping: false,
  // adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const blogData = [
  { id: 1, image: image1, title: "Pink Tutu with Headband" },
  { id: 2, image: image2, title: "Pink Tutu with Headband" },
  { id: 3, image: image3, title: "Pink Tutu with Headband" },
  { id: 4, image: image3, title: "Pink Tutu with Headband" },
  { id: 5, image: image3, title: "Pink Tutu with Headband" },
  { id: 6, image: image3, title: "Pink Tutu with Headband" },
  { id: 7, image: image3, title: "Pink Tutu with Headband" },
];

const ProductVerticalCarousel = (props) => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledContent style={{ padding: props.padding ? props.padding : "5%" }} {...props}>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">{props.headerTitle}</h6>
        <div className="icons-group">
          <FiChevronUp size={30} onClick={() => previous()} />
          <FiChevronDown size={30} onClick={() => next()} />
        </div>
      </div>
      <Divider />

      <Slider ref={sliderRef} {...carouselSettings} className="verticalCarousel">
        {props.data?.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-start align-items-center w-100"
          >
            <img
              src={item.images[0]}
              style={{ maxHeight: 100, width: "30%", margin: "24px 0px" }}
            />
            <div className="content ml-4">
              <Rate className="mb-2" disabled defaultValue={2} />
              <h6>{item.title}</h6>
              <h4>
                {formatedPrice.format(item.price)}{" "}
                <small style={{ color: "#858585", textDecoration: "line-through" }}>
                  ${item.price + 100}
                </small>
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </StyledContent>
  );
};

export default ProductVerticalCarousel;

const StyledContent = styled.div`
  .content {
    ul li {
      font-size: 14px;
    }
    h6 {
      font-size: 12px;
      color: #777;
    }
    h4 {
      font-size: 14px;
    }
  }
  .icons-group {
    color: #838383;
    display: flex;
    flex-direction: column;
  }
  .icons-group svg:nth-child(1):hover,
  svg:nth-child(2):hover {
    cursor: pointer;
    color: #222222;
  }

  @media only screen and (max-width: 576px) {
    margin: 0;
    padding: 0 8px;
  }
`;
