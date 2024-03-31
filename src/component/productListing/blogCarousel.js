import styled from "styled-components";
import { Row, Col } from "antd";
import ProductCard from "../cards/productCard";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ProductCardWithIcons from "../cards/productCardWithIcons";
import Heading from "../headings";
import BlogCard from "../cards/blogCard";
import { image1, image2, image3 } from "../../../images";

const carouselSettings = {
  // dots: true,
  speed: 500,
  // autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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

const BlogCarousel = (props) => {
  const { data } = props;
  const { items } = useSelector((state) => state.products);

  return (
    <StyledContent style={{ padding: props.padding ? props.padding : "5% 8%" }}>
      <Slider {...carouselSettings}>
        {data.map((item, index) => (
          <div key={index}>
            <BlogCard {...item} />
          </div>
        ))}
      </Slider>
    </StyledContent>
  );
};

BlogCarousel.defaultProps = {
  data: [
    { _id: 1, images: [image1], title: "Pink Tutu with Headband" },
    { _id: 2, images: [image2], title: "Pink Tutu with Headband" },
    { _id: 3, images: [image3], title: "Pink Tutu with Headband" },
  ],
};

export default BlogCarousel;

const StyledContent = styled.div`
  // padding: 80px;

  @media only screen and (max-width: 576px) {
    margin: 0;
    padding: 0 8px;
  }
`;
