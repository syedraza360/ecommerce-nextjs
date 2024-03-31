import styled from "styled-components";
import { Input, Button } from "antd";

export const InputWrapper = styled(Input)`
  // background-image: ${(props) => (props.backgroundImage ? props.backgroundImage : "")};
  outline: none;
  // padding: 8px 12px;
  border: ${(props) => (props.border ? props.border : "1px solid #d1d1d1")};
  border-radius: 4px;
  display: block;
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  width: ${(props) => (props.width ? props.width : "-moz-available")};
  height: 42px;
  font-weight: 500;
  transition: 0.3s ease;
  ::placeholder {
    color: #d0d0d0;
    font-weight: 500;
    user-select: none;
  }
  input {
    height: 40px;
    border-radius: 40px;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    ::placeholder {
      color: #d0d0d0;
      font-weight: 500;
      user-select: none;
    }
    &:focus {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }

  .ant-input-group-addon {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border: none;
    width: 48px;
    color: #727272;
    background-color: #f8f8f8;
    cursor: pointer;
  }

  &:hover,
  &:focus,
  &:active {
    transition: 0.3s ease;
    border: 1px solid #727272;
    box-shadow: none !important;
  }
`;

export const InputWrapperWithoutBorder = styled(Input)`
  outline: none;
  border: ${(props) => (props.border ? props.border : "1px solid #d1d1d1")};
  border-radius: 4px;
  display: block;
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  width: ${(props) => (props.width ? props.width : "-moz-available")};
  height: 42px;
  font-weight: 500;
  transition: 0.3s ease;
  ::placeholder {
    color: #d0d0d0;
    font-weight: 500;
    user-select: none;
  }
  input {
    height: 40px;
    border-radius: 4px;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    ::placeholder {
      color: #d0d0d0;
      font-weight: 500;
      user-select: none;
    }
    &:focus {
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }
  &:hover {
    box-shadow: none !important;
    transition: 0.3s ease;
    border: 0px;
  }
  &:active {
    box-shadow: none !important;
    transition: 0.3s ease;
    border: 0px;
  }
  &:focus {
    box-shadow: none !important;
    transition: 0.3s ease;
    border: 0px;
  }
`;

export const PaymentButton = styled(Button)`
  border-radius: 4px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#0025ff"};
  border: none;
  color: #fff;
  height: 42px;
  font-size: 14px;
  user-select: none;
  transition: all 0.5s;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "200px")};
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  float: ${(props) => (props.float ? props.float : "left")};
  position: relative;

  // &:after {
  //   display: ${(props) => (props.display ? props.display : "")};
  //   content: "→";
  //   position: absolute;
  //   opacity: 0;
  //   top: 3px;
  //   font-size: 24px;
  //   right: 0px;
  //   transition: 0.5s;
  // }

  &:hover {
    opacity: 0.8;
    background-color: ${(props) => (props.hoverColor ? props.hoverColor : "#0025ff")};
    // padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "40px")};
    // padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "15px")};
  }
  &:focus {
    background-color: ${(props) => (props.focusColor ? props.focusColor : "#0025ff")};
  }

  // &:hover:after {
  //   opacity: 1;
  //   right: 20px;
  // }
`;

export const NextButtonWrapper = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-color: #0025ff;
  border-radius: 50%;
  color: #fff;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: transform 0.3s ease-out;
  box-shadow: 0 10px 20px -8px #0025ff;
  user-select: none;
  &:hover {
    opacity: 0.8;
    transition: transform 0.3s ease-out;
    transform: translateX(4px);
  }
`;

export const BackButtonWrapper = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 2px solid #2a2a2a;
  background-color: #fff;
  border-radius: 100px;
  color: #2a2a2a;
  outline: none;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: transform 0.3s ease-out;
  box-shadow: 0 10px 20px -8px #2a2a2a;
  user-select: none;
  &:hover {
    opacity: 0.8;
    transition: transform 0.3s ease-out;
    transform: translateX(-4px);
  }
`;

export const TextAreaWrapper = styled.textarea`
  outline: none;
  box-shadow: none;
  // resize: none;
  padding: 12px 16px;
  height: ${(props) => props.height ?? "150px"};
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  font-size: 15px;
  font-weight: 500;
  transition: 0.3s ease;
  width: -webkit-fill-available;
  width: -moz-available;
  ::placeholder {
    color: #d0d0d0;
    font-weight: 500;
    user-select: none;
  }
  &:hover,
  &:active,
  &:focus {
    border: 1px solid #727272;
  }
`;
