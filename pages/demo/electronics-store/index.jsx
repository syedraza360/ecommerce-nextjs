import Head from "next/head";
import HomeCarousel from "src/component/heroSection";
import styled from "styled-components";
import FullBgImageSection from "src/component/heroSection/FullBgImageSection";
import SubscriptionModal from "src/component/modals/subscriptionModal3";
import BlogCarousel from "src/component/productListing/blogCarousel";
import Title2 from "src/component/titles/title2";
import Banner from "src/component/collectionBanner/banner";
import FilterByTab from "src/component/sortItems/filterByTab";
import { electronicItems, electronicBlogs } from "src/mock/electronicProducts";

const ElectronicStore = () => {
  let data = [...electronicItems];

  return (
    <>
      <Head>
        <title>Electronic Store</title>
      </Head>

      <StyledPage>
        <SubscriptionModal
          backgroundImage="url(/images/Electronics/banner/electronics-modal.jpg)"
          backgroundSize="contain"
        />

        <HomeCarousel
          btnDisplay={false}
          carouselData={[
            {
              title: "",
              subtitle: "",
              backgroundImage: [
                "/images/Electronics/banner/banner1.jpg",
                "/images/Electronics/banner/banner1.jpg",
              ],
            },
            {
              text: "",
              title: "",
              subtitle: "",
              backgroundImage: [
                "/images/Electronics/banner/banner2.jpg",
                "/images/Electronics/banner/banner2.jpg",
              ],
            },
            {
              text: "",
              title: "",
              subtitle: "",
              backgroundImage: [
                "/images/Electronics/banner/banner3.jpg",
                "/images/Electronics/banner/banner3.jpg",
              ],
            },
          ]}
        />

        <Title2 subtitle="Recent" maintitle="Discounted products" />

        <Banner
          colSize={8}
          insideData={[
            {
              image: "/images/watch-1.png",
              title1: "10% OFF",
              title2: "NEW WATCH",
            },
            {
              image: "/images/sale_banner.png",
              title1: "",
              title2: "",
            },
            {
              image: "/images/watch-2.png",
              title1: "50% OFF",
              title2: "GOLD WATCH",
            },
          ]}
          cardHeight={218}
          textAlign="end"
          title2Color="#222"
        />

        <Banner
          colSize={8}
          insideData={[
            {
              image: "/images/electronics-1.png",
              title1: "10% OFF",
              title2: "SPEAKER",
            },
            {
              image: "/images/electronics-2.png",
              title1: "10% OFF",
              title2: "EARPLUG",
            },
            {
              image: "/images/electronics-3.png",
              title1: "60% OFF",
              title2: "BEST DEAL",
            },
          ]}
          cardHeight={200}
          textAlign="start"
          title1Color="#fff"
          title2Color="#fff"
        />

        <FullBgImageSection
          h1=""
          h3=""
          h5=""
          bgImage="/images/Electronics/banner/Best_Gaming_Laptops_in_Pakistan.jpg"
          bgSize="contain"
          height="70vh"
        />

        <div style={{ padding: "0px 5%" }}>
          <Title2 subtitle="" maintitle="Shop by Categories" />

          <FilterByTab
            headerTitle=""
            data={data}
            tabBarData={[
              { title: "Refrigerators", id: 1, category: "fridge" },
              { title: "Fans", id: 2, category: "fan" },
              { title: "Beauty", id: 3, category: "health-and-beauty" },
              { title: "Others", id: 4, category: "other" },
            ]}
          />
        </div>

        <FullBgImageSection
          h1=""
          h3=""
          h5=""
          bgImage="/images/Electronics/banner/fridge-banner.webp"
        />

        <Title2 subtitle="Recent Story" maintitle="From the Blog" />
        <BlogCarousel data={electronicBlogs} />
      </StyledPage>
    </>
  );
};

export default ElectronicStore;

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
