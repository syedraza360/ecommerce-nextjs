import Head from "next/head";
import ProductCarousel from "src/component/productListing/carousel";
import styled from "styled-components";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import SubscriptionModal from "src/component/modals/subscriptionModal3";
import BlogCarousel from "src/component/productListing/blogCarousel";
import Category1 from "src/component/category/category1";
import Category3 from "src/component/category/category3";
import Title4 from "src/component/titles/title4";
import Service2 from "src/component/services/service3";
import Banner from "src/component/collectionBanner/banner";
import CardStyle6 from "src/component/cards/CardStyle6";
import { shoesProducts, shoesBlogs } from "src/mock/shoesProducts";

const BagStore = () => {
  return (
    <>
      <Head>
        <title>Shoes Store</title>
      </Head>

      <StyledPage>
        <SubscriptionModal />
        <Title4 subtitle="" maintitle="Shop by Categories" />
        <Category1
          padding="0px 30px 5% 30px"
          insideData={[
            {
              image: "/images/Shoes/category/women-shoes.png",
              title: "Women Shoes",
              link: "/demo/shoes-store/women-shoes",
            },
            {
              image: "/images/Shoes/category/men-shoes.webp",
              title: "Men Shoes",
              link: "/demo/shoes-store/men-shoes",
            },
            {
              image: "/images/Shoes/category/formal.webp",
              title: "Formal",
              link: "/demo/shoes-store/men-shoes",
            },
            {
              image: "/images/Shoes/category/slippers.webp",
              title: "Slippers",
              link: "/demo/shoes-store/men-shoes",
            },
            {
              image: "/images/Shoes/category/heels.webp",
              title: "Heels",
              link: "/demo/shoes-store/women-shoes",
            },
            {
              image: "/images/Shoes/category/boots.png",
              title: "Boots",
              link: "/demo/shoes-store/men-shoes",
            },
          ]}
        />
        <Category3 />

        <Service2 style={{ borderBottom: "0px" }} />

        <Banner
          colSize={8}
          insideData={[
            {
              image: "/images/Shoes/banner/left-banner.jpg",
              title1: "40% OFF",
              title2: "Men Shoes",
            },
            {
              image: "/images/Shoes/banner/center-banner.jpg",
              title1: "",
              title2: "",
            },
            {
              image: "/images/Shoes/banner/right-banner.jpg",
              title1: "50% OFF",
              title2: "Women Shoes",
            },
          ]}
          cardHeight={250}
          textAlign="start"
          title1Color="#fff"
          title2Color="#fff"
        />

        <ProductCarousel
         padding={"5% 0%"}
          link="/demo/shoes-store/new-arrivals"
          CardStyle={CardStyle6}
          data={shoesProducts}
        />

        <FullBgImageSection h1="" h3="" h5="" bgImage="/images/Shoes/banner/banner.png" />

        <Title4 subtitle="Recent Story" maintitle="From the Blog" />
        <BlogCarousel data={shoesBlogs} />

        {/* <section>
          <div style={{ fontSize: "3rem", color: "#54595f", textAlign: "center" }}>
            Reveal your edginess.
            <br />
            Make a statement.
          </div>

          <img src="/images/slide_3.jpg" className="img-fluid mt-4" />
        </section> */}
      </StyledPage>
    </>
  );
};

export default BagStore;

const StyledPage = styled.div`
  .section-wrapper {
    padding: 80px;
  }

  @media only screen and (max-width: 576px) {
    .section-wrapper {
      padding: 24px;
    }
  }
`;
