import Slider from "react-slick";
import styled from "styled-components";
import { ButtonWrapper } from "../buttons";
import { Row, Col } from "antd";
import Link from "next/link";

const StyledDiv = styled.div`
  .main-div {
    display: flex;
    align-items: center;
    justify-content: center;
    .inside-main {
      border: 1px solid #dddada;
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
      /* padding: 24px 24px; */
      img {
        width: 100%;
        margin-bottom: 34px;
        max-height: 370px;
      }
      h5 {
        padding: 0px 12px;
        font-weight: 600;
        margin-bottom: 16px;
        color: #54595f;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 12px;
        color: #858585;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 30px !important;
  }

  .slick-slide img {
    display: initial;
  }
`;

const Category4 = (props) => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: true,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledDiv style={{ padding: "0 80px" }}>
      <Slider {...settings}>
        {props.insideData.map((data, index) => (
          <div key={index} className="main-div">
            <div className="inside-main">
              <img style={{ width: "100%", marginBottom: 24 }} src={data.images[0]} />
              <h5 title={data.title}>{data.title}</h5>

              <p key={index} style={{ marginBottom: 0 }}>
                {data.para}
              </p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href={`/product/${data._id}`}>
                  <ButtonWrapper style={{ margin: "24px 0px", maxWidth: 200 }}>
                    Read More
                  </ButtonWrapper>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </StyledDiv>
  );
};

export default Category4;
