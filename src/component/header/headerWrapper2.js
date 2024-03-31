import { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import { Row, Col, Input, Dropdown, Menu, Badge } from "antd";
import { InputWrapper } from "../inputs";
import MobileDrawer from "./mobileDrawer";
/**
 * Icons
 */
import { SearchOutlined, ShoppingCardOutlined } from "@ant-design/icons";
import { AiOutlineShoppingCart, AiOutlineUser, AiFillHome } from "react-icons/ai";
import { BsTelephoneFill, BsSuitHeartFill, BsSearch } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaRegHeart,
} from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "src/redux/actions/cartActions";
import { ModalConstant } from "src/redux/constants";

const HeaderWrapper2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const [sidebar, toggleSidebar] = useState(false);
  const { visible, items: cartItems } = useSelector((state) => state.cart);
  const { items: wishListItems } = useSelector((state) => state.wishlist);

  const menu = useSelector((state) => state.menu);
  const menuItems = menu.template || [];

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // to limit setting state only the first time
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <MobileDrawer visible={sidebar} onClose={() => toggleSidebar(false)} />
      <Row className="top-bar">
        <Col xs={0} sm={0} md={12}>
          <div
            className="d-flex align-items-center"
            style={{ color: "#727272", fontSize: 13 }}
          >
            <div>Welcome to our store</div>
            <BsTelephoneFill style={{ color: "#1d8ece" }} className="ml-4 mr-2" />
            <div>Call Us: 123 - 456 - 7890</div>
          </div>
        </Col>

        {/* <div className="d-flex align-items-center" style={{ color: "#727272" }}>
          <div className="d-flex align-items-center" role="button">
            <FaHeart style={{ color: "#1d8ece", marginRight: 6 }} /> Wishlist
          </div>
          <div className="d-flex align-items-center ml-4" role="button">
            <RiUser3Fill style={{ color: "#1d8ece", marginRight: 6 }} /> My account
          </div>
        </div> */}
        <Col className="top-bar-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
          <FaPinterestP />
          <FaYoutube />
          <FaInstagram />
        </Col>
      </Row>

      <div className="col-12 col-lg-11 m-auto header-wrapper-2" style={{ zIndex: 2 }}>
        <Row justify="space-evenly" align="middle">
          <Col xs={3} sm={3} md={1} lg={0} xl={0}>
            <IoMenuOutline
              style={{ fontSize: 32, cursor: "pointer" }}
              onClick={() => toggleSidebar(true)}
            />
          </Col>

          <Col xs={14} sm={14} md={10} lg={3} xl={3}>
            <Link href="/">
              <a style={{ textDecoration: "none" }}>
                <img src="/images/iXiaThemes.svg" className="img-fluid site-logo" />
              </a>
            </Link>
          </Col>

          <Col xs={0} sm={0} md={10} lg={10} xl={10}>
            <InputWrapper
              placeholder="Enter keywords to search..."
              size="large"
              addonAfter={<SearchOutlined />}
              className="search-box"
              style={{ outline: "none", borderRadius: 40 }}
            />
          </Col>

          <Col xs={0} sm={0} md={0} lg={2}>
            <div
              className="icon-box"
              role="button"
              onClick={() => {
                dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
              }}
            >
              <AiOutlineUser className="icon" />

              <div>
                <p className="title">Sign in</p>
                <p className="sub-title">Account</p>
              </div>
            </div>
          </Col>

          <Col xs={0} sm={0} md={0} lg={2}>
            <Link href="/my-account/wishlist">
              <a style={{ textDecoration: "none" }}>
                <div className="icon-box">
                  <Badge size="small" offset={[-10, 2]} count={wishListItems?.length}>
                    <FaRegHeart size={24} className="icon" />
                  </Badge>
                  <p className="title">Wishlist</p>
                </div>
              </a>
            </Link>
          </Col>

          <Col xs={0} sm={0} md={0} lg={2}>
            <div
              className="icon-box"
              role="button"
              onClick={() => {
                dispatch(openCart());
              }}
            >
              <Badge size="small" offset={[-15, 5]} count={cartItems?.length}>
                <AiOutlineShoppingCart className="icon" />
              </Badge>
              <p className="title">Cart</p>
            </div>
          </Col>

          <Col xs={3} sm={3} md={0}>
            <div className="text-right">
              <AiOutlineUser
                style={{ fontSize: 24, cursor: "pointer" }}
                onClick={() => {
                  dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
                }}
              />
            </div>
          </Col>
        </Row>
      </div>

      <menu
        className="menu-list d-none d-lg-flex justify-content-center align-items-center m-0"
        style={{
          backgroundColor: "#fff",
          height: 64,
          lineHeight: "64px",
          border: "1px solid #f8f8f8",
          boxShadow: "1px 1px 2px #f8f8f8, -1px -1px 2px #f8f8f8",
          position: "sticky",
          top: 0,
          zIndex: 2,
        }}
      >
        {menuItems.map((menu) => {
          if (menu.submenu) {
            return (
              <Dropdown
                overlay={
                  <Menu style={{ minWidth: 200, marginTop: -4 }}>
                    {menu.submenu.map((subMenuItem, index) => {
                      if (subMenuItem.submenu) {
                        return (
                          <Menu.SubMenu
                            key={index}
                            title={<a className="navigation-link">{subMenuItem.title}</a>}
                          >
                            {subMenuItem.submenu.map((item, index) => (
                              <Menu.Item
                                role="button"
                                key={`sub-menu-${index}`}
                                style={{ minWidth: 240 }}
                              >
                                <Link href={item.link || ""}>
                                  <a className="navigation-link">{item.title}</a>
                                </Link>
                              </Menu.Item>
                            ))}
                          </Menu.SubMenu>
                        );
                      } else {
                        return (
                          <>
                            <Menu.Item key={index}>
                              <Link
                                target={subMenuItem.target}
                                href={subMenuItem.link || ""}
                              >
                                <a
                                  target={subMenuItem.target}
                                  className="navigation-link"
                                >
                                  {subMenuItem.title}
                                </a>
                              </Link>
                            </Menu.Item>
                          </>
                        );
                      }
                    })}
                  </Menu>
                }
              >
                <div
                  className={`menu-item ${router.pathname === menu.link ? "active" : ""}`}
                >
                  <a style={{ textTransform: "uppercase" }}>{menu.title}</a>
                  <GoChevronDown style={{ marginBottom: 4 }} className="ml-2" />
                </div>
              </Dropdown>
            );
          } else {
            return (
              <div
                className={`menu-item ${router.pathname === menu.link ? "active" : ""}`}
              >
                <Link href={menu.link}>
                  <a style={{ textTransform: "uppercase" }}>{menu.title}</a>
                </Link>
              </div>
            );
          }
        })}
        {isVisible ? (
          <div
            className="d-lg-block d-sm-none"
            role="button"
            onClick={() => {
              dispatch(openCart());
            }}
            style={{
              display: "flex",
              // width: "100px",
              alignItems: "center",
              justifyContent: "center",

              position: "absolute",
              right: "50px",
              top: "-4px",
              marginBottom: "0px",
            }}
          >
            <p style={{ fontWeight: "inherit", paddingRight: "20px" }}>
              <Badge size="small" offset={[-5, 5]} count={cartItems?.length}>
                <AiOutlineShoppingCart size="30px" />
              </Badge>
              Cart
            </p>
          </div>
        ) : (
          ""
        )}
      </menu>
    </>
  );
};

export default HeaderWrapper2;
