import React, { useEffect, useState } from "react";
import { Select } from "antd";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  display: block;
  text-align: left;
  .ant-select,
  .ant-select-selector {
    outline: none !important;
    box-shadow: none !important;
    height: 42px !important;
    border: ${(props) =>
      props?.style?.border ? props.style.border : "1px solid #d1d1d1 !important"};
    border-radius: 4px !important;
    font-size: 14px !important;
    font-weight: 500;
    ::placeholder {
      color: #d0d0d0;
      font-weight: 500;
      user-select: none;
    }
    &:hover {
      transition: 0.3s ease;
      border: 1px solid #0025ff !important;
      box-shadow: none !important;
    }
    &:active {
      transition: 0.3s ease;
      border: 1px solid #0025ff !important;
      box-shadow: none !important;
    }
    &:focus {
      transition: 0.3s ease;
      border: 1px solid #0025ff !important;
      box-shadow: none !important;
    }
  }
`;

const { Option } = Select;

const SelectWrapper = (props) => {
  const { placeholder, onChange, type, disabled, autoComplete, onClick } = props;
  const [options, setOptions] = useState(props.options);

  const handleSearch = (val) => {
    const filteredOptions = props.options.filter((option) => {
      return option.value.toLowerCase().includes(val.toLowerCase());
    });
    setOptions(filteredOptions);
  };

  const countrySearch = (val) => {
    const filteredOptions = props.options.filter((option) => {
      return option[`${type.label}`].toLowerCase().includes(val.toLowerCase());
    });
    setOptions(filteredOptions);
  };

  useEffect(() => setOptions(props.options), [props.options]);

  return (
    <StyledSelect
      onChange={onChange}
      showSearch
      disabled={props.disabled ? props.disabled : false}
      onSearch={(e) => {
        if (type.custom) {
          countrySearch(e);
        } else {
          handleSearch(e);
        }
      }}
      placeholder={placeholder}
      size="large"
      filterOption={false}
      value={props.value == "" ? null : props.value}
      defaultValue={props.defaultValue}
      onClick={onClick}
      id={props.id}
    >
      {type.custom
        ? options.map((option, index) => (
            <Option key={index} value={option[`${type.value}`]}>
              {option[`${type.label}`]}
            </Option>
          ))
        : options.map((option, index) => (
            <Option key={index} value={option.value}>
              {option.label}
            </Option>
          ))}
    </StyledSelect>
  );
};

SelectWrapper.defaultProps = {
  placeholder: "Select",
  options: [],
  onChange: () => {},
  type: {},
  autoComplete: "new-password",
};

export default SelectWrapper;
