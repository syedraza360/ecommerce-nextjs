import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Dropdown, Menu } from "antd";
import Hamburger from "src/component/hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import MobileDrawer from "src/component/mobileDrawer";
import { ModalConstant } from "src/redux/constants";
import { openCart } from "src/redux/actions/cartActions";
import { logoutAction } from "src/redux/actions";

const HeaderContent = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, data } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart);
  const router = useRouter();
  const [drawer, setDrawer] = useState(false);

  /**
   * This useEffect function is used to change header background-color
   */
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && router.pathname === "/") {
        navRef.current.classList.add("nav-wrapper-fixed");
      }
      if (window.scrollY <= 20 && router.pathname === "/") {
        navRef.current.classList.remove("nav-wrapper-fixed");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const accountOverlay = (
    <AccountOverlay>
      <ul className="account-menu-list">
        <li className="menu-item">
          <Link href="/my-account/dashboard">
            <a className="hoverable dark">Dashboard</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/my-account/orders">
            <a className="hoverable dark">Orders</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/my-account/settings">
            <a className="hoverable dark">Account</a>
          </Link>
        </li>
        <li className="menu-item">
          <a
            onClick={() => {
              dispatch(logoutAction());
            }}
            className="hoverable dark"
          >
            Logout
          </a>
        </li>
      </ul>
    </AccountOverlay>
  );

  const discoverOverlay = (
    <StyledOverlay justify="space-between">
      <Col xs={24} sm={24} md={7} lg={7}>
        {[1, 2, 3].map((item, index) => (
          <div key={index}>
            <Link href={`/category/${item}`}>
              <a>Product {item}</a>
            </Link>
          </div>
        ))}
      </Col>

      <Col xs={24} sm={24} md={10} lg={10}>
        <img src="/images/model.jpg" className="img-fluid" />
      </Col>
    </StyledOverlay>
  );

  return (
    <>
      <MobileDrawer visible={drawer} onClose={() => setDrawer(false)} />
      <header className="header">
        <nav
          ref={navRef}
          className={`navbar-wrapper ${
            router.pathname === "/" ? "" : "nav-wrapper-fixed"
          } `}
        >
          <Row align="middle" justify="space-between" className="nav-container">
            <Col xs={12} sm={12} md={6} lg={5} xl={4}>
              <div className="d-flex align-items-center">
                <img
                  alt="iXiaThemes"
                  src="/images/LogiLogos-light.svg"
                  className="app-logo"
                />
                <menu className="menu-list d-none d-lg-flex align-items-center p-0">
                  {header.map((menu) => {
                    if (menu.submenu) {
                      return (
                        <Dropdown
                          overlay={
                            <Menu style={{ minWidth: 200, marginTop: 14 }}>
                              {menu.submenu.map((subMenuItem, index) => {
                                if (subMenuItem.submenu) {
                                  return (
                                    <Menu.SubMenu
                                      key={index}
                                      title={
                                        <a className="navigation-link">
                                          {subMenuItem.title}
                                        </a>
                                      }
                                    >
                                      {subMenuItem.submenu.map((item, index) => (
                                        <Menu.Item
                                          role="button"
                                          key={`sub-menu-${index}`}
                                          style={{ minWidth: 200 }}
                                        >
                                          <Link href={item.link || ""}>
                                            <a className="navigation-link">
                                              {item.title}
                                            </a>
                                          </Link>
                                        </Menu.Item>
                                      ))}
                                    </Menu.SubMenu>
                                  );
                                } else {
                                  return (
                                    <Menu.Item key={index}>
                                      <Link href={subMenuItem.link || ""}>
                                        <a className="navigation-link">
                                          {subMenuItem.title}
                                        </a>
                                      </Link>
                                    </Menu.Item>
                                  );
                                }
                              })}
                            </Menu>
                          }
                        >
                          <div
                            className={`menu-item ${
                              router.pathname === menu.link ? "active" : ""
                            }`}
                          >
                            <Link href="/">
                              <a style={{ textTransform: "uppercase" }}>{menu.title}</a>
                            </Link>
                          </div>
                        </Dropdown>
                      );
                    } else {
                      return (
                        <div
                          className={`menu-item ${
                            router.pathname === menu.link ? "active" : ""
                          }`}
                        >
                          <Link href="/">
                            <a style={{ textTransform: "uppercase" }}>{menu.title}</a>
                          </Link>
                        </div>
                      );
                    }
                  })}

                  <div
                    className={`menu-item ${
                      router.pathname === "discover" ? "active" : ""
                    }`}
                  >
                    <Dropdown overlay={discoverOverlay}>
                      <a>DISCOVER</a>
                    </Dropdown>
                  </div>
                </menu>

                <div
                  className="d-flex d-sm-flex d-md-flex d-lg-none"
                  onClick={() => setDrawer((prev) => !prev)}
                >
                  <Hamburger open={drawer} />
                </div>
              </div>
            </Col>

            <Col xs={10} sm={10} md={6} lg={5} xl={4}>
              <div className="icons-wrapper d-flex align-items-center">
                <BiSearch className="icon" />
                <MdOutlineShoppingBag
                  className="icon"
                  onClick={() => {
                    dispatch(openCart());
                  }}
                />
                <div className="cart-items">{items.length}</div>
                {isLoggedIn ? (
                  <Dropdown overlay={accountOverlay} trigger="click">
                    <BiUser className="icon" />
                  </Dropdown>
                ) : (
                  <BiUser
                    onClick={() => {
                      dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
                    }}
                    className="icon"
                  />
                )}
              </div>
            </Col>
          </Row>
        </nav>
      </header>
    </>
  );
};

export default HeaderContent;

const StyledOverlay = styled(Row)`
  background-color: #fff;
  padding: 40px;
  width: 600px;
  box-shadow: 1px 1px 4px #e5e5e5;

  div {
    margin-bottom: 12px;
    :last-child {
      margin: 0;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 0%;
      background-color: #000;
      transition: 0.3s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

const AccountOverlay = styled.div`
  background-color: #fff;
  padding: 18px;
  width: 200px;
  box-shadow: 1px 1px 4px #e5e5e5;

  .account-menu-list {
    list-style: none;
    padding: 0;
    .menu-item {
      margin-bottom: 12px;
    }
    .menu-item a {
      text-decoration: none;
      color: #0c0c0c;
      font-size: 14px;
    }
  }
`;

const header = [
  {
    title: "home",
    submenu: [
      {
        title: "Clothing",
        submenu: [
          { title: "Fashion 1", link: "/fashion-1" },
          { title: "Fashion 2", link: "/fashion-2" },
          { title: "Fashion 3", link: "/fashion-3" },
          { title: "Fashion 4", link: "/fashion-4" },
        ],
      },
      {
        title: "Fashion",
        submenu: [
          { title: "Fashion 1", link: "/fashion-1" },
          { title: "Fashion 2", link: "/fashion-2" },
          { title: "Fashion 3", link: "/fashion-3" },
          { title: "Fashion 4", link: "/fashion-4" },
        ],
      },
      { title: "Grocery", link: "/" },
      { title: "Electronics", link: "/" },
    ],
    link: "/",
  },
  {
    title: "shop",
    submenu: [
      { title: "Left Sidebar", link: "/shop/left-sidebar" },
      { title: "Right Sidebar", link: "/shop/right-sidebar" },
      { title: "No Sidebar", link: "/shop/no-sidebar" },
      { title: "Thee Grid", link: "/shop/three-grid" },
      { title: "Six Grid", link: "/shop/six-grid" },
      { title: "List View", link: "/shop/list-view" },
    ],
  },
  {
    title: "products",
    link: "/products",
    submenu: [
      { title: "4-image", link: "/product/4-image" },
      { title: "Sticky", link: "/product/sticky" },
      { title: "Carousel", link: "/product/carousel" },
      {
        title: "Thumbnails",
        submenu: [
          { title: "Right thumbnail", link: "/product/right-thumbnail" },
          { title: "Left thumbnail", link: "/product/left-thumbnail" },
          { title: "Bottom thumbnail", link: "/product/bottom-thumbnail" },
        ],
      },
    ],
  },
  {
    title: "feature",
    link: "/feature",
    submenu: [
      { title: "Product Box", link: "/feature/product-element/product-box" },
      { title: "Multi slider", link: "/feature/product-element/multi-slider" },
    ],
  },
  {
    title: "pages",
    link: "/pages",
    submenu: [
      {
        title: "Compare",
        submenu: [
          { title: "Compare", link: "/page/compare" },
          { title: "Compare 2", link: "/page/compare-2" },
        ],
      },
    ],
  },
  {
    title: "blog",
    link: "/blog",
    submenu: [
      { title: "Blog left sidebar", link: "/blog/blog-left-sidebar" },
      { title: "Blog right sidebar", link: "/blog/blog-right-sidebar" },
      { title: "No sidebar", link: "/blog/no-sidebar" },
    ],
  },
];
