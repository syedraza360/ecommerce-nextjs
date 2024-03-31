import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/mie.scss";
import "styles/globals.scss";
import "src/component/header/header.style.scss";
import "src/component/header/header2.style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";
import ReactDOM from "react-dom";
import * as ga from "react-ga";
import { useRouter } from "next/router";
import Layout from "src/component/layouts/mainLayout";
import { store, persistor } from "src/redux/ConfigStore";
import AuthModal from "src/component/modals/authModal";
import SideCart from "src/component/sidebar/sideCart";
import PageLoad2 from "src/component/loader/pageLoad2";
import QuickviewModal from "src/component/modals/quickviewModal";
import {
  shoesMenu,
  bagsMenu,
  mainMenu,
  clothingMenu,
  electronicsMenu,
} from "src/mock/menus";
import { Menu } from "src/redux/constants";
import Head from "next/head";

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(<PageLoad2 path={url} />, document.getElementById("page-transition"));
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /**
   * Addng a div element with id page transition to show loading screen when switching between pages
   */
  if (typeof window !== "undefined") {
    const myDiv = document.createElement("div");
    myDiv.id = "page-transition";
    const body = document.querySelector("body");
    body.appendChild(myDiv);
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  /**
   * Updating menus for different demos
   */
  useEffect(() => {
    if (router.pathname.includes("/demo/bag-store")) {
      store.dispatch({ type: Menu.UPDATE, payload: bagsMenu });
    } else if (router.pathname.includes("/demo/shoes-store")) {
      store.dispatch({ type: Menu.UPDATE, payload: shoesMenu });
    } else if (router.pathname.includes("/demo/clothing-store")) {
      store.dispatch({ type: Menu.UPDATE, payload: clothingMenu });
    } else if (router.pathname.includes("/demo/electronics-store")) {
      store.dispatch({ type: Menu.UPDATE, payload: electronicsMenu });
    } else {
      store.dispatch({ type: Menu.UPDATE, payload: mainMenu });
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>iXiaThemes | Home</title>
        <link rel="icon" href="/iXiafavicon.png" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            {/* <CookieBanner /> */}
            <AuthModal />
            <QuickviewModal />
            <SideCart />
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
