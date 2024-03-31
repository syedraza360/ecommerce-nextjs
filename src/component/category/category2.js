import Slider from "react-slick";
import styled from "styled-components";
import Banner from "../collectionBanner/banner";

const StyledDiv = styled.div``;

const Category2 = (props) => {
  return (
    <StyledDiv style={{ width: "100%", backgroundColor: "#f1f5f4" }}>
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
        cardHeight={250}
        textAlign="end"
        textHeight="50%"
        title2Color="#222"
      />
    </StyledDiv>
  );
};

export default Category2;
