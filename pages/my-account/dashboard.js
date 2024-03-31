import { Row, Col } from "antd";
import styled from "styled-components";
import Link from "next/link";
import AccountSidebar from "../../src/component/sidebar/accountSidebar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { username } = useSelector((state) => state.user.data);
  return (
    <StyledPage style={{ padding: "5%" }}>
      <Row>
        <Col xs={0} sm={0} md={6} lg={6}>
          <AccountSidebar />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18}>
          <h1
            style={{
              fontWeight: 600,
              marginBottom: 32,
              textAlign: "center",
              color: "#54595f",
            }}
          >
            Dashboard
          </h1>
          <div className="dashboard">
            <div className="mb-4 fs-5">
              Hello <b>{username}</b>
            </div>
            <div>
              From your account dashboard you can view your{" "}
              <Link href="/my-account/orders">
                <a className="link">recent orders</a>
              </Link>{" "}
              and{" "}
              <Link href="/my-account/settings">
                <a className="link">edit your password and account details.</a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </StyledPage>
  );
};

export default Dashboard;

const StyledPage = styled.div`
  .dashboard {
    color: #54595f;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .link {
    text-decoration: none;
    color: #54595f;
    font-weight: 500;
    border-bottom: 1px solid #54595f;
    transition: 0.3s;
    :hover {
      color: #0c0c0c;
    }
  }
`;
