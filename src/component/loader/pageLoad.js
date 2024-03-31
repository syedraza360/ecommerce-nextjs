import styled from "styled-components";

const StyledLoader = styled.section`
  background-color: rgba(38, 38, 38, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
  user-select: none;

  .loader-area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid #fff;
    border-radius: 50%;
    animation: animate 2s ease infinite;
  }

  .loader::before,
  .loader::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 50px;
    animation: animate 2s linear infinite;
  }

  .loader::before {
    border-left: 10px solid #fff;
    border-radius: 25px 25px 0 0;
    left: 0;
    top: 0;
  }

  .loader::after {
    border-right: 10px solid #fff;
    border-radius: 0 0 50px 50px;
    right: 0;
    bottom: 0;
  }

  @keyframes animate {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loader-area">
        <div className="loader"></div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
