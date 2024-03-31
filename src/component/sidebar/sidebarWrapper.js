import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import SidebarContent from "./sidebarContent";
import LogoLight from "../images/logo_light.png";

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  background: #1d194d !important;
  min-height: 100vh;
  position: sticky;
  top: 0;
  .ant-layout-sider-children ul {
    background-color: transparent !important;
  }
  li {
    font-size: 16px;
    font-weight: 600;
  }
  .ant-menu-item {
    :first-child {
      margin-top: 24px;
    }
    background-color: #1d194d !important;
    &:hover {
      background-color: #232a38;
    }
    a {
      text-decoration: none;
    }
  }

  .ant-menu-item ant-menu-item-selected {
    background-color: #e84c88 !important;
  }
  .active-class-menu {
    background-color: #1890ff !important;
  }
`;

const SidebarWrapper = (props) => {
  const { collapsed, toggleCollapsed } = props;
  let imageVisible;

  collapsed ? (imageVisible = "hidden") : (imageVisible = "visible");

  return (
    <StyledSider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={80}
      width="256px"
    >
      {/* <div style={{ textAlign: "center" }}>
        <img
          src={LogoLight}
          alt="logi_logos"
          style={{
            width: "70%",
            padding: "20px 0",
            visibility: imageVisible,
          }}
        />
      </div> */}

      <SidebarContent collapsed={collapsed} />
    </StyledSider>
  );
};

export default SidebarWrapper;
