import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import { ButtonWrapper } from "../buttons";

// const carouselData = [
//   {
//     title: "Women's week",
//     subtitle: "Take advantage of promotions upto 60%",
//     backgroundImage: ["/images/slide_1.jpg", "/images/slide_1.jpg"],
//   },
//   {
//     text: "NEW TREND",
//     title: "THE BASICS",
//     subtitle: "An exclusive selction of season's trends.",
//     backgroundImage: ["/images/slide_2.jpg", "/images/slide_2.jpg"],
//   },
//   {
//     text: "NEW COLLECTION",
//     title: "Bellemount '20",
//     subtitle: (
//       <div>
//         Rapidiously redifine dynamic niche markets before
//         <br />
//         plug-and-play collaboration and idea-sharing Continually
//         <br />
//         utlilize focused convergence via top-line outsourcing
//       </div>
//     ),
//     backgroundImage: ["/images/slide_3.jpg", "/images/slide_3.jpg"],
//   },
// ];

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
  fade: true,
};

const HeroSection = (props) => {
  return (
    <Slider
      autoplay={true}
      {...carouselSettings}
      draggable={true}
      autoplaySpeed={8000}
      centerPadding={"0"}
      accessibility={true}
    >
      {props.carouselData.map((item, index) => (
        <Carousel key={`carousel-${index + 1}`} {...item} />
      ))}
    </Slider>
  );
};

const Carousel = (props) => {
  const { text, title, subtitle, backgroundImage } = props;

  return (
    <StyledDiv>
      <Image
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
        backgroundImage={backgroundImage}
        className="eaze-animate mask"
      />
      <div
        className="col-11 col-sm-10 col-md-11 col-lg-11 col-xl-8 mx-auto text-white"
        style={{ zIndex: 200 }}
      >
        <p className="text">{text}</p>
        <p className="text-uppercase my-2 my-md-3 title">{title}</p>
        <p className="subtitle">{subtitle}</p>

        <ButtonWrapper
          style={{
            width: 280,
            marginTop: 32,
            display: props.btnDisplay ? "flex" : "none",
          }}
        >
          EXPLORE NOW
        </ButtonWrapper>
      </div>

      <div className="social-icons d-none d-sm-flex text-white">
        <p>SOCIALS</p>
        <div
          style={{
            height: 1,
            width: 40,
            backgroundColor: "#fff",
            margin: "0 16px",
          }}
        />
        <div className="narrow-social-icons">
          <a href="https://www.facebook.com/LetsEmergeForward" target="blank">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://twitter.com/EmergeForward" target="blank">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/emergeforward/" target="blank">
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFkPtfpMV_z1QVxvpGheNIg/featured"
            target="blank"
          >
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </StyledDiv>
  );
};

export default HeroSection;

const StyledDiv = styled.div`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .eaze-animate {
    width: 100vw;
    height: 65vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 140;
    animation: ease-animation 12s infinite;
  }

  @keyframes ease-animation {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
  }

  p {
    margin: 0;
    line-height: 1;
  }

  .text {
    font-size: 18px;
    font-weight: 600;
  }
  .title {
    font-size: 100px;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: currentColor;
    -webkit-text-stroke-width: 2px;
    color: #fff;
    line-height: 0.9em;
    letter-spacing: -2.7px;
  }
  .subtitle {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }

  .social-icons {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 48px;
    right: 100px;
  }
  .narrow-social-icons {
    a {
      font-size: 20px;
      color: #fff;
      margin-right: 16px;
    }
    .icon:hover {
      color: #efa718;
      fill: #efa718;
    }
  }

  .mask {
    ::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    .text {
      font-size: 18px;
    }
    .title {
      font-size: 60px;
    }
    .subtitle {
      font-size: 25px;
    }
    .social-icons {
      right: 48px;
    }
  }

  @media (max-width: 576px) {
    .text {
      font-size: 13px;
    }
    .title {
      font-size: 38px;
    }
    .subtitle {
      font-size: 15px;
    }
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage[0]})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    background-image: ${(props) => `url(${props.backgroundImage[1]})`};
  }
`;
