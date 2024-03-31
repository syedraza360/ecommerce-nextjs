import styled from "styled-components";

const FullBgImageSection = (props) => {
  return (
    <StyledSection {...props}>
      <div className="content-section">
        <h1>{props.h1}</h1>
        <h3>{props.h3}</h3>
        <h5>{props.h5}</h5>
      </div>
    </StyledSection>
  );
};

export default FullBgImageSection;

const StyledSection = styled.div`
  height: ${(props) => (props.height ? props.height : "50vh")};
  background-size: ${(props) => (props.bgSize ? props.bgSize : "auto")};
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .content-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 10%;
    h1 {
      font-size: 100px;
      font-weight: 700;
      color: ${(props) => (props.color ? props.color : "#e84c88")};
    }
    h3 {
      font-size: 60px;
      color: #333;
      text-transform: uppercase;
      font-weight: 700;
    }
    h5 {
      font-size: 24px;
      color: #777;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5em;
      padding-top: 10px;
      margin-bottom: -5px;
      line-height: 1.3;
    }
  }
  @media (max-width: 1024px) {
    background-size: cover;
    .content-section {
      margin-left: 0%;
      padding: 30px;
      h1 {
        font-size: 50px;
      }
      h3 {
        font-size: 30px;
      }
      h5 {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 551px) {
    /* display: none; */
  }
`;
