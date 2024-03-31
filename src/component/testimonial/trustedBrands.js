import styled from "styled-components";
import Heading from "../headings";

const StyledSection = styled.section`
  padding: 32px 0 12px 0;
  .brand-images-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .brand-image {
    padding: 16px 24px;
    object
  }
`;

const TrustedBrands = () => {
  return (
    <StyledSection className="bg-light">
      <Heading>
        We are regarded as the pioneers of the designing industry for a reason!
      </Heading>
      <div className="brand-images-wrapper container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <img
            src={`/images/Trusted_Brands_${item}.png`}
            alt={`Trusted_Brands_${item}`}
            key={item}
            className="brand-image"
            height={item >= 3 && item <= 6 ? 96 : 64}
          />
        ))}
      </div>
    </StyledSection>
  );
};

export default TrustedBrands;
