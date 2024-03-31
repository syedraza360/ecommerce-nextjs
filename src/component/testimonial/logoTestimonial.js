import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Row, Col } from "antd";
import { GoQuote, GoStar } from "react-icons/go";
import { CgQuote } from "react-icons/cg";
import { blueQuotes } from "../../../images";
import Heading from "../headings";
import Slider from "react-slick";

const StyledSection = styled.section`
  .background-shadow {
    width: 100%;
    height: 380px;
    background-color: #eff1f2;
    position: absolute;
  }
  .testimony-project-image {
    width: 100%;
    height: 360px;
    position: relative;
    top: 20px;
    left: 20px;
  }

  .quote {
    font-size: 32px;
    color: #0025ff;
  }
  .rotate-180 {
    transform: rotate(180deg);
  }

  .reviewer-name {
    color: #0025ff;
    font-weight: 600;
    font-style: italic;
  }
  .reviewer-image {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid #0025ff;
    border-radius: 50%;
    margin-right: 12px;
  }
  .start svg {
    color: #eba82f;
    font-size: 26px;
  }

  .dots-container {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: auto;
    position: relative;
    top: 32px;
    list-style: none;

    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #a5a5a5;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 576px) {
    .background-shadow {
      top: -10px;
      left: -10px;
    }
    .testimony-project-image {
      top: 10px;
      left: 10px;
    }
  }
`;

const logoTestimoniData = [
  {
    image: "/images/testimony_1.jpg",
    name: "Brooklyn Vinci",
    para: "ABSOLUTELY PERFECT! You are the absolute best at taking care of your customers! The level of service your people have provided me is simply outstanding. I wasn't left waiting for days and you actually got back to me faster than I could keep up with my emails, unlike other companies I have dealt with recently. I am surely recommending my circle to go with Logi Logos for all their design and digital marketing needs.",
    personImage: "/images/Awards_Recognitions_5.png",
  },
  {
    image: "/images/testimony_2.jpg",
    name: "Lauren McDougall",
    para: "Your great service has won you a new customer. I will surely be referring and making more purchases requests soon. Keep up the great work.",
    personImage: "/images/Awards_Recognitions_5.png",
  },
  {
    image: "/images/testimony_3.jpg",
    name: "Travis Brendan",
    para: "There are loads of design companies and then there companies that offer a complete package of user experience, interface design and consultancy services. For someone who is looking for a proper professional solutions, Logi logos is the place to land. I have worked with multiple companies and Logi logos is by far the best amongst others.",
    personImage: "/images/Awards_Recognitions_5.png",
  },
  {
    image: "/images/testimony_4.jpg",
    name: "Denison Gris",
    para: "They took care of my project quickly and at a very fair price. Exactly as promised; so easy, professional, efficient, fast, and beautiful work. It was more than I hoped for. I had been searching for a company that could take care of projects like mine, and found a true winner with this team.",
    personImage: "/images/Awards_Recognitions_5.png",
  },
];

const TestimonyWithRating = () => {
  const [state, setState] = useState(1);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <StyledSection className="container my-5">
      <Heading>Our customers can help you know us better!</Heading>
      <Slider autoplay={true} {...settings}>
        {logoTestimoniData.map((item, index) => (
          <div key={index}>
            <Row
              className="container mx-auto"
              justify="center"
              align="middle"
              gutter={[24, 24]}
            >
              <Col xs={24} sm={12} md={12} lg={10} xl={8}>
                <div style={{ position: "relative" }}>
                  <div className="background-shadow"></div>
                  <img src={item.image} className="img-fluid testimony-project-image" />
                </div>
              </Col>

              <Col xs={24} sm={12} md={12} lg={10} xl={10}>
                <div className="ml-md-5 ml-0">
                  <div>
                    <img
                      style={{ height: 30, width: 30 }}
                      src={blueQuotes}
                      alt="quotes"
                    />
                    <p>{item.para}</p>
                    <img
                      style={{
                        height: 30,
                        width: 30,
                        float: "right",
                        transform: "rotate(180deg)",
                      }}
                      src={blueQuotes}
                      alt="quotes"
                    />
                  </div>
                  <br />
                  <br />
                  <div className="d-flex">
                    <img
                      src={item.personImage}
                      alt="test-image"
                      className="reviewer-image"
                    />
                    <div>
                      <h6 className="reviewer-name">{item.name}</h6>
                      {/* <h6 className="m-0 mb-1">— The Good Liquid Brewing Co. —</h6> */}
                      <span className="start">
                        <GoStar />
                        <GoStar />
                        <GoStar />
                        <GoStar />
                        <GoStar />
                      </span>
                    </div>
                  </div>

                  {/* <ul className="d-flex dots-container">
                    {[1, 2, 3, 4].map((item) => (
                      <li
                        key={item}
                        className="dot"
                        style={{
                          background:
                            item === state
                              ? "linear-gradient(to right, #5e2ced, #a485fd)"
                              : "#fff",
                        }}
                        onClick={() => setState(item)}
                      />
                    ))}
                  </ul> */}
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>

      <div style={{ marginTop: 25, textAlign: "center" }}>
        <Link href="/testimonials">
          <a>See all Reviews</a>
        </Link>
      </div>
    </StyledSection>
  );
};

export default TestimonyWithRating;
