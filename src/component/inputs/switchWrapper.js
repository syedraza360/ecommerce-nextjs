import styled from "styled-components";

const StyledSwitch = styled.div`
  /* taeb-switch styles */
  .taeb-switch {
    position: relative;
  }

  .taeb-switch:after {
    content: "";
    position: absolute;
    width: 30%;
    top: 0;
    transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s;
    border-radius: 27.5px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #2a2a2a;
    height: 100%;
    z-index: 0;
  }

  .taeb-switch.right:after {
    width: 30%;
  }

  .taeb-switch.middle:after {
    width: 40%;
  }

  .taeb-switch.left:after {
    left: 0;
  }

  .taeb-switch.middle:after {
    left: 30%;
  }

  .taeb-switch.right:after {
    left: 70%;
  }

  .taeb-switch .taeb {
    display: inline-block;
    width: 40%;
    padding: 12px 0;
    z-index: 1;
    position: relative;
    cursor: pointer;
    transition: color 200ms;
    font-size: 16px;
    font-weight: bold;
    line-height: normal;
    user-select: none;
    :first-child,
    :last-child {
      width: 30%;
    }
  }

  .taeb-switch .taeb.active {
    color: #fff;
  }

  h1 {
    font-size: 38px;
    font-weight: bold;
    display: block;
    width: 100%;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .wrapper {
    border-radius: 37px;
    background-color: #f4f4f4;
    padding: 8px;
    width: 100%;
    max-width: 316px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SwitchWrapper = ({ solution, setSolution }) => {
  return (
    <StyledSwitch>
      <div className="wrapper">
        <div
          className={`taeb-switch text-center ${
            solution === "logoPackage"
              ? "right"
              : solution === "ecommercePackage"
              ? "middle"
              : "left"
          }`}
        >
          <div
            className={`taeb ${solution === "webPackage" ? "active" : ""}`}
            onClick={() => setSolution("webPackage")}
          >
            Web
          </div>

          <div
            className={`taeb ${solution === "ecommercePackage" ? "active" : ""}`}
            onClick={() => setSolution("ecommercePackage")}
          >
            Ecommerce
          </div>

          <div
            className={`taeb ${solution === "logoPackage" ? "active" : ""}`}
            onClick={() => setSolution("logoPackage")}
          >
            Logo
          </div>
        </div>
      </div>
    </StyledSwitch>
  );
};
export default SwitchWrapper;
