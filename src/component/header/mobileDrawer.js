import styled from "styled-components";
import { Drawer, Collapse, Badge } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { InputWrapper } from "../inputs";
import { BsSearch, BsSuitHeart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ModalConstant } from "src/redux/constants";
import { openCart } from "src/redux/actions/cartActions";

const { Panel } = Collapse;

const MobileDrawer = (props) => {
  const dispatch = useDispatch();

  const { visible, onClose } = props;

  const menu = useSelector((state) => state.menu);
  const menuItems = menu.template || [];

  const { items: wishListItems } = useSelector((state) => state.wishlist);
  const { items: cartItems } = useSelector((state) => state.cart);

  const closeSidebar = () => {
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <Drawer
      title=""
      placement="left"
      visible={visible}
      closable={false}
      drawerStyle={{ backgroundColor: "#fff", padding: 0, margin: 0, maxWidth: 576 }}
      bodyStyle={{ padding: 0, maxWidth: 576 }}
      // style={{ maxWidth: 576 }}
      // width={"100%"}
      onClose={() => {
        closeSidebar();
      }}
    >
      <StyledContent>
        <div className="d-flex align-items-center justify-content-between p-4">
          <Link href="/">
            <a onClick={closeSidebar} style={{ textDecoration: "none" }}>
              <img
                alt="iXiaThemes"
                src="/images/iXiaThemes.svg"
                style={{ height: 32 }}
                className="app-logo"
              />
            </a>
          </Link>
          <IoCloseCircleOutline
            onClick={onClose}
            style={{ fontSize: 32, color: "#000" }}
          />
        </div>

        <div className="col-11 mx-auto mb-4">
          <InputWrapper
            placeholder="Enter keywords to search..."
            size="large"
            addonAfter={<BsSearch />}
            className="search-box"
            style={{ outline: "none", borderRadius: 40 }}
          />
        </div>

        <div
          className="d-flex justify-content-around  mt-3 py-2"
          style={{ borderTop: "1px solid #ececec" }}
        >
          <div
            className="text-center"
            style={{
              flex: "33%",
              color: "#727272",
              fontWeight: 600,
              borderRight: "1px solid #ececec",
              borderLeft: "1px solid #ececec",
            }}
            onClick={() => {
              closeSidebar();
            }}
          >
            <Link href="/my-account/wishlist">
              <a style={{ textDecoration: "none", color: "#727272" }}>
                <div className="icon-box">
                  <Badge size="small" offset={[5, 2]} count={wishListItems?.length}>
                    <FaRegHeart style={{ fontSize: 17 }} />
                  </Badge>
                  <div>Wishlist</div>
                </div>
              </a>
            </Link>
          </div>

          <div
            className="text-center"
            style={{
              flex: "33%",
              color: "#727272",
              borderRight: "1px solid #ececec",
              borderLeft: "1px solid #ececec",
              cursor: "pointer",
              fontWeight: 600,
            }}
            onClick={() => {
              closeSidebar();
              dispatch({ type: ModalConstant.OPEN_LOGIN_MODAL });
            }}
          >
            <AiOutlineUser style={{ fontSize: 20 }} />
            <div>Account</div>
          </div>

          <div
            className="text-center"
            style={{
              flex: "33%",
              borderRight: "1px solid #ececec",
              borderLeft: "1px solid #ececec",
              color: "#727272",
              cursor: "pointer",
              fontWeight: 600,
            }}
            onClick={() => {
              dispatch(openCart());
              closeSidebar();
            }}
          >
            <Badge size="small" offset={[5, 5]} count={cartItems?.length}>
              <AiOutlineShoppingCart style={{ fontSize: 20 }} />
            </Badge>
            <div>Cart</div>
          </div>
        </div>

        <div className="side-menu">
          <Collapse ghost className="main-menu">
            {menuItems.map((menu, i) => {
              if (menu.submenu) {
                return (
                  <Panel
                    key={i}
                    showArrow={false}
                    className="sidebar-item-wrapper"
                    header={
                      <div className={`sidebar-item`}>
                        {menu.title}
                        <FiChevronDown className="ml-3" style={{ fontSize: 20 }} />
                      </div>
                    }
                  >
                    <div>
                      {menu.submenu.map((subMenuItem, index) => {
                        if (subMenuItem.submenu) {
                          return (
                            <Collapse ghost>
                              <Panel
                                key={index}
                                showArrow={false}
                                header={
                                  <div className={`navigation-link`}>
                                    {subMenuItem.title}
                                    <FiChevronDown
                                      className="ml-3"
                                      style={{ fontSize: 16 }}
                                    />
                                  </div>
                                }
                              >
                                {subMenuItem.submenu.map((item, index) => (
                                  <div
                                    role="button"
                                    key={`sub-menu-${index}`}
                                    style={{ minWidth: 240 }}
                                    className="navigation-link-sub"
                                  >
                                    <Link href={item.link || ""}>
                                      <a onClick={closeSidebar}>{item.title}</a>
                                    </Link>
                                  </div>
                                ))}
                              </Panel>
                            </Collapse>
                          );
                        } else {
                          return (
                            <div className="navigation-link-main" key={index}>
                              <Link href={subMenuItem.link || ""}>
                                <a onClick={closeSidebar}>{subMenuItem.title}</a>
                              </Link>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </Panel>
                );
              } else {
                return (
                  <div key={i} className={`sidebar-item`}>
                    <Link href={menu.link || ""}>
                      <a
                        onClick={closeSidebar}
                        className="hoverable dark"
                        style={{ textDecoration: "none" }}
                      >
                        {menu.title}
                      </a>
                    </Link>
                  </div>
                );
              }
            })}
          </Collapse>
        </div>
      </StyledContent>
    </Drawer>
  );
};

export default MobileDrawer;

const StyledContent = styled.div`
  .side-menu {
    padding: 0;
    /* margin-top: 48px; */
  }
  .ant-collapse-header,
  .ant-collapse-header-text {
    display: block;
    width: 100%;
    padding: 0 !important;
  }

  .ant-collapse-ghost
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 4px 14px;
  }

  .sidebar-item {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    font-weight: 600;
    font-size: 15px;
    color: #000;
  }

  .navigation-link-main {
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 24px;
    color: #000;

    a {
      position: relative;
      font-size: 15px;
      text-decoration: none;
      :after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: #212529;
        transition: 0.3s;
      }
    }

    &:hover a {
      :after {
        width: 90%;
      }
    }
  }

  .navigation-link-sub {
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 24px;
    color: #000;

    a {
      position: relative;
      text-decoration: none;
      font-size: 13px;
      :after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 2px;
        width: 0%;
        background-color: #212529;
        transition: 0.3s;
      }
    }

    &:hover a {
      :after {
        width: 90%;
      }
    }
  }

  .navigation-link {
    margin-left: 24px;
    margin-top: 6px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 32px;
    color: #000;
  }
  a {
    color: #000;
    font-size: 15px;
  }

  .sub-menu-1 {
  }

  .sidebar-item-wrapper {
    border-top: 1px solid #ececec;
    :last-child {
      border-bottom: 1px solid #ececec;
    }
  }
`;
