import styled from "styled-components";
import Link from "next/link";
import router from "next/router";

// const heading = {
//   "/my-account/dashboard": "Dashboard",
//   "/my-account/orders": "Orders",
//   "/my-account/compare": "Compare Products",
//   "/my-account/wishlist": "My Wishlist",
//   "/my-account/account": "Account details",
// };

const AccountSidebar = (props) => {
  return (
    <StyledSidebar>
      {/* <h1 className="heading">{heading[router.pathname]}</h1> */}
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${
            router.pathname == "/my-account/dashboard" ? "selected" : ""
          }`}
        >
          <Link href="/my-account/dashboard">
            <a className="hoverable dark">Dashboard</a>
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            router.pathname == "/my-account/orders" ? "selected" : ""
          }`}
        >
          <Link href="/my-account/orders">
            <a className="hoverable dark">Orders</a>
          </Link>
        </li>

        <li
          className={`sidebar-item ${
            router.pathname == "/my-account/compare" ? "selected" : ""
          }`}
        >
          <Link href="/my-account/compare">
            <a className="hoverable dark">Compare Products</a>
          </Link>
        </li>

        <li
          className={`sidebar-item ${
            router.pathname == "/my-account/wishlist" ? "selected" : ""
          }`}
        >
          <Link href="/my-account/wishlist">
            <a className="hoverable dark">Wishlist</a>
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            router.pathname == "/my-account/settings" ? "selected" : ""
          }`}
        >
          <Link href="/my-account/settings">
            <a className="hoverable dark">Account</a>
          </Link>
        </li>
        <li className={`sidebar-item`}>
          <Link href="#">
            <a className="hoverable dark">Logout</a>
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default AccountSidebar;

const StyledSidebar = styled.div`
  padding: 16px;
  background-color: #fff;
  // box-shadow: 1px 1px 4px #e5e5e5;

  .heading {
    color: #54595f;
    font-weight: 600;
    margin-bottom: 32px;
  }

  .sidebar-list {
    padding: 0;
    list-style: none;
  }

  .sidebar-item {
    margin: 16px 0;

    &.selected {
      font-weight: 600;
      a {
        font-weight: 600;
      }
    }

    a {
      color: #0c0c0c;
      font-weight: 300;
      text-decoration: none;
    }
  }
`;
