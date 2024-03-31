import Slider from "react-slick";
import styled from "styled-components";
import Link from "next/link";

const StyledDiv = styled.div`
  .main-div {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
    h6 {
      margin-top: 16px;
    }
    h6 > span {
      text-transform: capitalize;
      position: relative;
      width: max-content;
      ::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: #001719;
        -webkit-transition: 0.3s;
        transition: 0.3s;
      }
    }
    .circle {
      margin: 0 auto;
      text-align: center;
      border: 2px solid #ddd;
      border-radius: 100%;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
      cursor: pointer;
      img {
        transition: 0.5s ease;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 100px;
      }

      /* &:hover {
        background-color: #fa869b;
        transition: 0.5s ease;
        img {
          transition: 0.5s ease;
          filter: brightness(0) invert(1);
        }
      } */
    }
    &:hover {
      h6 > span {
        ::after {
          width: 100%;
        }
      }
    }
  }
`;

const Category1 = (props) => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledDiv
      style={{ padding: props.padding ? props.padding : "5% 8%" }}
      className="col-11 m-auto"
    >
      <Slider {...settings}>
        {props.insideData.map((data, index) => (
          <div key={index} className="main-div">
            <Link href={data.link ? data.link : "#"}>
              <a style={{ textDecoration: "none" }}>
                <div>
                  <div className="circle">
                    <img src={data.image} />
                  </div>
                  <h6 style={{ fontWeight: 600 }}>
                    <span>{data.title}</span>
                  </h6>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </StyledDiv>
  );
};

export default Category1;
