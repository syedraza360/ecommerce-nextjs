import Header from "../header/headerWrapper2.js";
import Footer from "../footer/footerWrapper2.js";
import DemoFooter from "src/component/footer/footerWrapperDemo";
import Router from "next/router";

const Layout = ({ children }) => {
  console.log("Router.pathname.includes", Router.pathname);
  return (
    <div>
      <div
        style={{
          display: Router.pathname.includes("/email-template") ? "none" : "initial",
        }}
      >
        <Header />
      </div>
      {children}
      <div
        style={{
          display: Router.pathname.includes("/email-template") ? "none" : "initial",
        }}
      >
        {Router.pathname == "/" ? <Footer /> : <DemoFooter />}
      </div>
    </div>
  );
};

export default Layout;
