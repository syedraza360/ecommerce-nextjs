import Head from "next/head";
import { Row, Col } from "antd";
import styled from "styled-components";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import SubscriptionModal from "src/component/modals/subscriptionModal1";
import DragToScroll from "src/component/scroll/dragToScroll";
import Link from "next/link";
import Typewriter from "typewriter-effect";
// import ShopCard from "../src/component/cards/shopCard";
// import HomeCarousel from "../src/component/heroSection";
// import { brownHair } from "../images";
// import BlogCarousel from "../src/component/productListing/blogCarousel";
// import SortItems from "../src/component/sortItems";
// import DressCategories from "../src/component/categories/derssCategories";
// import ProductCarousel from "../src/component/productListing/carousel";
// import CardStyle5 from "src/component/cards/CardStyle5";
// import { shoesProducts } from "src/mock/shoesProducts";
// import ProductListing from "../src/component/productListing";
// import SidebarFiltration from "../src/component/sidebar/sidebarFiltration";
// import ProductVerticalCarousel from "../src/component/productListing/productVerticalCarousel";
// import { productStyle5, productStyle8 } from "src/mock/mockupData";
// import Heading from "../src/component/headings";
// import { ButtonWrapper } from "src/component/buttons";

const Home = () => {
  return (
    <>
      <Head>
        <title>iXiaThemes | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta charset="utf-8" />
        <meta name="keywords" content="e-commerce, theme, store, shop" />
        <meta name="title" content="Creative multi-purpose e-Commerce store" />
        <meta
          name="description"
          content="The complete template for your ecommerce store build on Next.js to create different structures and satisfy any specific requirements."
        />
        <meta name="page-topic" content="e-commerce store" />
        <meta name="page-type" content="ecommerce" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:image"
          content={`${window.location.origin}/images/preload_image.jpg`}
        />
        <meta property="og:title" content="Creative multi-purpose e-Commerce store" />
        <meta
          property="og:description"
          content="The complete template for your ecommerce store build on Next.js to create different structures and satisfy any specific requirements."
        />
        <meta property="og:type" content="" />
        <meta property="og:url" content="https://ixiathemes.com" />
        <meta property="og:site_name" content="ixiathemes" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <SubscriptionModal image="/images/subscriptionModalBg.png" />

      <StyledPage>
        <section className="banner">
          <div className="content">
            <h1 style={{ fontWeight: 500 }}>
              Creative multi-purpose
              <span style={{ color: "#E94C89", fontWeight: 800, display: "flex" }}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Furniture")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Electronics")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Bags")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Clothing")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("e-Commerce")
                      .pauseFor(2500)
                      .start();
                  }}
                />
                <span style={{ fontWeight: 500, color: "#2a2a2a" }}>theme</span>
              </span>
            </h1>

            <p className="mb-5 mt-4 description">
              The complete template for your ecommerce store build on Next.js to create
              different structures and satisfy any specific requirements.
            </p>
            <div className="d-flex col-10">
              <button className="button-1 mr-4">Buy Now</button>
              <a
                href="#demos"
                className="button-1 outline text-center text-decoration-none"
              >
                See Demo
              </a>
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="col-10 m-auto">
            <div className="text-center">
              <p
                style={{
                  color: "#1d8ece",
                  fontWeight: 600,
                  fontSize: 20,
                  marginBottom: 0,
                }}
              >
                WHY CHOOSE US
              </p>
              <p
                style={{
                  color: "#2a2a2a",
                  fontWeight: 600,
                  maxWidth: 600,
                  fontSize: 32,
                  margin: "auto",
                }}
              >
                A complete website building toolkit save your time by using iXiaThemes
              </p>
            </div>

            <Row gutter={[40, 40]}>
              {whyChooseUs.map((item, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
                  <div className="text-center">
                    <img
                      src={item.image}
                      alt={`image-${index}`}
                      className="img-fluid"
                      style={{ height: 200, objectFit: "contain" }}
                    />
                    <h4 className="my-4">{item.heading}</h4>
                    <p>{item.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section
          id="demos"
          style={{
            backgroundImage: 'url("/images/bg-demos.png")',
            backgroundColor: "#eff1f2",
          }}
        >
          <div className="col-11 mx-auto py-5">
            <Row justify="space-between" gutter={[0, 40]}>
              {themes.map((item, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={7} xl={7}>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                  <Link href={item.link}>
                    <a target="_blank">
                      <div className="demo-image">
                        <img src={item.images[0]} alt="image" width={"100%"} />
                      </div>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <FullBgImageSection bgImage={"/images/mian-fixed.png"} />

        <section
          style={{
            backgroundImage: "url(/images/bg-features.png)",
            backgroundAttachment: "fixed",
            padding: "48px 0",
          }}
        >
          {/* <div
            style={{
              position: "sticky",
              top: "50%",
              transform: "translateY(-50%) rotate(270deg)",
              width: "fit-content",
              fontSize: 48,
              color: "#727272",
              fontWeight: 600,
            }}
          >
            demos
          </div> */}

          <div className="col-11 m-auto">
            <h3
              className="heading-5"
              style={{
                fontWeight: 600,
                margin: "16px 0 44px 0",
                color: "#e94c89",
                textAlign: "center",
              }}
            >
              HOME PAGES
            </h3>

            <DragToScroll>
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/images/home_pages/image-${item}.png`}
                  alt={`home-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>

          <div className="col-11 m-auto pt-5">
            <h3
              className="heading-5"
              style={{
                fontWeight: 600,
                margin: "16px 0 44px 0",
                color: "#e94c89",
                textAlign: "center",
              }}
            >
              PRODUCT PAGES
            </h3>
            <DragToScroll>
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`/images/product_pages/image-${item}.png`}
                  alt={`product-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>

          <div className="col-11 m-auto pt-5">
            <h3
              className="heading-5"
              style={{
                fontWeight: 600,
                margin: "16px 0 44px 0",
                color: "#e94c89",
                textAlign: "center",
              }}
            >
              SHOP PAGES
            </h3>
            <DragToScroll>
              {[1, 4, 3, 2].map((item) => (
                <img
                  key={item}
                  src={`/images/shop_pages/image-${item}.png`}
                  alt={`shop-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>

          <div className="col-11 m-auto pt-5">
            <h3
              className="heading-5"
              style={{
                fontWeight: 600,
                margin: "16px 0 44px 0",
                color: "#e94c89",
                textAlign: "center",
              }}
            >
              GENERAL PAGES
            </h3>
            <DragToScroll>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <img
                  key={item}
                  src={`/images/general_pages/image-${item}.png`}
                  alt={`shop-image-${item}`}
                  style={{ width: 300, objectFit: "contain", margin: "0 24px" }}
                />
              ))}
            </DragToScroll>
          </div>
        </section>

        <section className="text-center">
          <div style={{ fontSize: "2rem", color: "#001719" }}>Email Template</div>
          <p style={{ color: "#979797", maxWidth: 500, width: "90%", margin: "auto" }}>
            iXiaThemes comes with email template which include order success, promotion
            and give away tamplates
          </p>

          <img src="/images/email_templates.png" className="w-100" />
        </section>

        <section
          style={{ backgroundImage: "url(/images/bg-features.png)", padding: "48px 0" }}
        >
          <div className="features col-11 col-xl-10 m-auto">
            <h1 style={{ fontWeight: 600 }} className="text-center heading-4 my-5">
              Clean, <span style={{ fontWeight: 400 }}>lightweight</span> & highly modular
            </h1>

            <Row gutter={[0, 32]} justify="space-around">
              {features.map(({ image, heading, description }, index) => (
                <Col key={index} xs={24} sm={24} md={12} lg={8} l={8}>
                  <div className="feature-card">
                    <img src={image} />
                    <h3 className="heading">{heading}</h3>
                    <p className="description">{description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </StyledPage>
    </>
  );
};

export default Home;

const StyledPage = styled.div`
  .banner {
    background-image: url("/images/slide_1.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;

    .content {
      width: 90%;
      max-width: 500px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 100px;

      p {
        font-size: 20px;
      }
    }
  }

  .section-wrapper {
    padding: 80px;
  }

  .features {
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #fff4f4;
    box-shadow: 2px 2px 3px #fff4f4;
    background-image: url("/images/bg-clean.jpg");
  }

  .feature-card {
    max-width: 340px;
    margin: auto;

    .heading {
      color: #070707;
      font-size: 24px;
      font-weight: 600;
      margin: 20px 0;
    }

    .description {
      color: #070707;
      line-height: 32px;
      font-weight: 500;
    }
  }

  .demo-image {
    width: 100%;
    position: relative;
    transition: all 0.3s;

    :before {
      content: "";
      position: absolute;
      top: 0;
      width: 0;
      bottom: 0;
      transition: all 0.3s;
      background-color: rgba(0, 0, 0, 0.4);
    }

    :hover {
      transform: scale(1.02);

      &:after {
        content: "Preview";
        cursor: pointer;
        color: #fff;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 3px;
        transition: all 0.3s;
        border: 2px solid #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      :before {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .section-wrapper {
      padding: 24px;
    }

    .banner {
      .content {
        margin: auto;
        h1 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
`;

const features = [
  {
    image: "/images/features/fontpreloader.svg",
    heading: "Font Preloader",
    description:
      "A single source of truth for your Google and Adobe fonts, avoiding performance hiccups.",
  },
  {
    image: "/images/features/modularity.svg",
    heading: "Modularity",
    description:
      "Load and unload various built-in functionalities with ease. The general principle - only load what’s in use.",
  },
  {
    image: "/images/features/dev-friendly.svg",
    heading: "Developer friendly",
    description:
      "Love coding? Awesome, so do i! Easily extend functionalities with hooks and built-in features.",
  },
  {
    image: "/images/features/future.svg",
    heading: "Built for the future",
    description: "Because we need to work and think ahead.",
  },
  {
    image: "/images/features/seo-friendly.svg",
    heading: "SEO friendly",
    description: "Clean markup following web standards.",
  },
  {
    image: "/images/features/svg-image.svg",
    heading: "Built-in SVG support",
    description: "Insert those lovely crisp and colored vector images.",
  },
];

const themes = [
  {
    heading: "Apparels",
    description: "Classy, urban clothing, fashion.",
    images: ["/images/crop-image-4.png"],
    link: "/demo/clothing-store/",
  },
  {
    heading: "Bags",
    description: "Urban, backpacks, travel, camping.",
    images: ["/images/crop-image-2.png"],
    link: "/demo/bag-store/",
  },
  {
    heading: "Shoes",
    description: "Stylish, urban, sports, fashion, shoes.",
    images: ["/images/crop-image-1.png"],
    link: "/demo/shoes-store/",
  },
  {
    heading: "Electronics",
    description: "Minimal, classy, electronics, interiors.",
    images: ["/images/crop-image-3.png"],
    link: "/demo/electronics-store/",
  },
];

const whyChooseUs = [
  {
    image: "/images/why_choose_us_1.png",
    heading: "Online Store",
    text: "iXiaThemes fully supports  allowing you to use sections anywhere. Experience the latest technology from e-commerce to the fullest.",
  },
  {
    image: "/images/why_choose_us_2.png",
    heading: "Stunning Design",
    text: "Want to increase your sales just in the first visit. Come to us & you will see how miracle our flagship e-commerce themes are.",
  },
  {
    image: "/images/why_choose_us_3.png",
    heading: "Demos Design",
    text: "We have assembled a huge collection of theme demo. Now you can choose different templates to create stunning layouts.",
  },
  {
    image: "/images/why_choose_us_4.png",
    heading: "Easy to Implement and Use",
    text: "We analyze, then support you the best methods for any necessary processes or features make your website operate stably and smoothly.",
  },
  {
    image: "/images/why_choose_us_5.png",
    heading: "e-Commerce Optimization",
    text: "With our experience in e-commerce, we are confident to bring the theme with the highest conversion rate.",
  },
  {
    image: "/images/why_choose_us_6.png",
    heading: "Search Engine Optimization",
    text: "Combination of SEO and our web development team make a powerful weapon to get super high conversion rate websites.",
  },
];
