import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  SendOutlined,
  DashboardOutlined,
  SmileOutlined,
  ScissorOutlined,
  ZhihuOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { RiCoupon3Line, RiOrderPlayLine } from "react-icons/ri";

const SidebarContent = (props) => {
  const { collapsed } = props;

  return (
    <Menu mode="inline" theme="dark" inlineCollapsed={collapsed}>
      <Menu.Item
        className={
          window.location.pathname == "/dashboard/orders" ? "active-class-menu" : ""
        }
        key="1"
        icon={<RiOrderPlayLine style={{ fontSize: 18 }} />}
      >
        <Link href="/dashboard/orders" style={{ color: "#fff" }}>
          My Orders
        </Link>
      </Menu.Item>

      <Menu.Item
        className={
          window.location.pathname == "/dashboard/coupons" ? "active-class-menu" : ""
        }
        key="3"
        icon={<RiCoupon3Line style={{ fontSize: 18 }} />}
      >
        <Link href="/dashboard/coupons" style={{ color: "#fff" }}>
          My Coupons
        </Link>
      </Menu.Item>
      {/*
      <Menu.Item key="2" icon={<SmileOutlined />}>
        <Link to="/customers" style={{ color: "#fff" }}>
          Customers
        </Link>
      </Menu.Item>

      <Menu.Item key="4" icon={<ScissorOutlined />}>
        <Link to="/discount-coupons" style={{ color: "#fff" }}>
          Coupon
        </Link>
      </Menu.Item>

      <Menu.Item key="5" icon={<UsergroupDeleteOutlined />}>
        <Link to="/leads" style={{ color: "#fff" }}>
          Leads
        </Link>
      </Menu.Item> */}
    </Menu>
  );
};
export default SidebarContent;
