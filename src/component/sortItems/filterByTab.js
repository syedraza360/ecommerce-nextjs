import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Col, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import CardStyle6 from "../cards/CardStyle6";

const FilterByTab = (props) => {
  const { tabBarData, data, headerTitle } = props;
  const [itemCategory, setItemCategory] = useState(props.tabBarData[0].category);
  const [seletedItem, setSelectedItem] = useState(1);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const newData = data.filter((item) => {
      return item.category == itemCategory;
    });
    setFilterData(newData);
  }, [itemCategory]);

  return (
    <StyledDiv>
      <div className="title2">
        <h2 className="title-inner2">{headerTitle}</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-5">
        {tabBarData.map((item, index) => {
          return (
            <p
              key={index}
              className={`mr-5 tab-title ${item.id == seletedItem ? "selected" : null}`}
              onClick={() => {
                setSelectedItem(item.id);
                setItemCategory(item.category);
              }}
            >
              {item.title}
            </p>
          );
        })}
      </div>
      <Row gutter={[30, 30]} className="d-flex">
        {filterData.map((item, index) => {
          return (
            <Col key={index} lg={6} sm={24} xs={24} className="">
              <CardStyle6 productDetails={item} {...item} />
            </Col>
          );
        })}
      </Row>
    </StyledDiv>
  );
};
export default FilterByTab;

const StyledDiv = styled.div`
  .tab-title {
    margin-bottom: 0;
    font-size: 18px;
    cursor: pointer;
    text-transform: uppercase;
  }
  .selected {
    color: #e84c88;
  }
  @media (max-width: 1024px) {
    .tab-title {
      margin-right: 1rem !important;
    }
  }
`;
