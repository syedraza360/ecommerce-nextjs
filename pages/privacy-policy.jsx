import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const StyledDiv = styled.div`
  .gray-portion-div {
    background-color: #fff;
    padding: 120px 10% 40px 10%;
    p {
      font-size: 16px;
      color: rgb(69, 80, 98);
      margin-bottom: 10px;
    }
    h3,
    h4,
    h5,
    h2 {
      color: rgb(69, 80, 98);
    }
    h1 {
      font-weight: 600;
      color: rgb(69, 80, 98);
    }
    ul {
      padding-left: 30px;
      margin-bottom: 30px;
    }
    li {
      font-size: 16px;
      color: rgb(69, 80, 98);
      font-weight: 300;
    }
  }

  @media (max-width: 767px) {
    .top-banner-text {
      text-align: center;
      h6 {
        padding: 0px 0px 4% 0px;
      }
    }
    .banner-image-col {
      justify-content: center;
    }
    .top-banner {
      background-color: #fff;
      img {
        width: 250px;
      }
    }
    .gray-portion-div {
      background-color: #f6f6f6;
      p {
        font-size: 16px;
      }
      h3 {
        font-size: 22px;
      }
      li {
        font-size: 16px;
      }
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | iXiaThemes</title>
      </Head>

      <StyledDiv>
        <div className="gray-portion-div">
          <h1 style={{ textAlign: "center", marginBottom: 40 }}>Privacy Policy</h1>

          <p className="mb-0">Privacy Policy</p>
          <p className="mb-0">Last updated: September 14, 2022</p>

          <p className="mt-4">
            This Privacy Policy describes Our policies and procedures on the collection,
            use and disclosure of Your information when You use the Service and tells You
            about Your privacy rights and how the law protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By using the
            Service, You agree to the collection and use of information in accordance with
            this Privacy Policy. This Privacy Policy has been created with the help of the
            TermsFeed Privacy Policy Generator.
          </p>

          <h3>Interpretation and Definitions</h3>
          <h4>Interpretation</h4>
          <p>
            The words of which the initial letter is capitalized have meanings defined
            under the following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.
          </p>

          <h4>Definitions</h4>
          <p>For the purposes of this Privacy Policy:</p>

          <div className="ml-4">
            <ul>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Account</span> means a unique account
                  created for You to access our Service or parts of our Service.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Company</span>{" "}
                  {`(referred to as either
                  "the Company", "We", "Us" or "Our" in this Agreement) refers to
                  iXiaThemes.`}
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Cookies</span> are small files that
                  are placed on Your computer, mobile device or any other device by a
                  website, containing the details of Your browsing history on that website
                  among its many uses.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Country</span> refers to: California,
                  United States
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Device</span> means any device that
                  can access the Service such as a computer, a cellphone or a digital
                  tablet.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Personal Data</span> is any
                  information that relates to an identified or identifiable individual.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Service</span> refers to the Website.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Service Provider</span> means any
                  natural or legal person who processes the data on behalf of the Company.
                  It refers to third-party companies or individuals employed by the
                  Company to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to assist the
                  Company in analyzing how the Service is used.
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Usage Data</span>{" "}
                  {`refers to data
                collected automatically, either generated by the use of the Service or
                from the Service infrastructure itself (for example, the duration of a
                page visit).`}
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>Website</span>
                  {` refers to IxiaThemes,
                  accessible from https://ixiathemes.com/`}
                </p>
              </li>
              <li>
                <p>
                  <span style={{ fontWeight: 700 }}>You</span>{" "}
                  {`means the individual
                  accessing or using the Service, or the company, or other legal entity on
                  behalf of which such individual is accessing or using the Service, as
                  applicable.`}
                </p>
              </li>
            </ul>
          </div>

          <h3>Collecting and Using Your Personal Data</h3>
          <h4>Types of Data Collected</h4>

          <h5>Personal Data</h5>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally
            identifiable information that can be used to contact or identify You.
            Personally identifiable information may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>Usage Data</li>
          </ul>

          <h5>Usage Data</h5>
          <p>Usage Data is collected automatically when using the Service.</p>

          <p>
            {`Usage Data may include information such as Your Device's Internet Protocol
            address (e.g. IP address), browser type, browser version, the pages of our
            Service that You visit, the time and date of Your visit, the time spent on
            those pages, unique device identifiers and other diagnostic data.`}
          </p>
          <p>
            When You access the Service by or through a mobile device, We may collect
            certain information automatically, including, but not limited to, the type of
            mobile device You use, Your mobile device unique ID, the IP address of Your
            mobile device, Your mobile operating system, the type of mobile Internet
            browser You use, unique device identifiers and other diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may collect
            certain information automatically, including, but not limited to, the type of
            mobile device You use, Your mobile device unique ID, the IP address of Your
            mobile device, Your mobile operating system, the type of mobile Internet
            browser You use, unique device identifiers and other diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You visit our
            Service or when You access the Service by or through a mobile device.
          </p>

          <h5>Tracking Technologies and Cookies</h5>
          <p>
            We use Cookies and similar tracking technologies to track the activity on Our
            Service and store certain information. Tracking technologies used are beacons,
            tags, and scripts to collect and track information and to improve and analyze
            Our Service. The technologies We use may include:
          </p>

          <ul>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>Cookies or Browser Cookies. </span> A
                cookie is a small file placed on Your Device. You can instruct Your
                browser to refuse all Cookies or to indicate when a Cookie is being sent.
                However, if You do not accept Cookies, You may not be able to use some
                parts of our Service. Unless you have adjusted Your browser setting so
                that it will refuse Cookies, our Service may use Cookies.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>Cookies or Browser Cookies. </span>
                {`Certain features of our Service may use local stored objects (or Flash
                Cookies) to collect and store information about Your preferences or Your
                activity on our Service. Flash Cookies are not managed by the same browser
                settings as those used for Browser Cookies. For more information on how
                You can delete Flash Cookies, please read "Where can I change the settings
                for disabling, or deleting local shared objects?" available at
                https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_`}
              </p>
            </li>
          </ul>
          <p>
            {` Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on
            Your personal computer or mobile device when You go offline, while Session
            Cookies are deleted as soon as You close Your web browser. You can learn more
            about cookies on TermsFeed website article.`}
          </p>
          <p>
            We use both Session and Persistent Cookies for the purposes set out below:
          </p>

          <ul className="mb-2">
            <li style={{ fontWeight: "bold" }}>Necessary / Essential Cookies</li>
          </ul>
          <div className="ml-5">
            <p>Type: Session Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies are essential to provide You with services available
              through the Website and to enable You to use some of its features. They help
              to authenticate users and prevent fraudulent use of user accounts. Without
              these Cookies, the services that You have asked for cannot be provided, and
              We only use these Cookies to provide You with those services.
            </p>
          </div>

          <ul className="mb-2">
            <li style={{ fontWeight: "bold" }}>
              Cookies Policy / Notice Acceptance Cookies
            </li>
          </ul>
          <div className="ml-5">
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies identify if users have accepted the use of cookies on
              the Website.
            </p>
          </div>

          <ul className="mb-2">
            <li style={{ fontWeight: "bold" }}>Functionality Cookies</li>
          </ul>
          <div className="ml-5">
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies allow us to remember choices You make when You use
              the Website, such as remembering your login details or language preference.
              The purpose of these Cookies is to provide You with a more personal
              experience and to avoid You having to re-enter your preferences every time
              You use the Website.
            </p>
          </div>

          <p>
            For more information about the cookies we use and your choices regarding
            cookies, please visit our Cookies Policy or the Cookies section of our Privacy
            Policy.
          </p>

          <h2>Use of Your Personal Data</h2>
          <p>The Company may use Personal Data for the following purposes:</p>

          <ul>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>
                  To provide and maintain our Service,
                </span>{" "}
                including to monitor the usage of our Service..
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>To manage Your Account:</span> to manage
                Your registration as a user of the Service. The Personal Data You provide
                can give You access to different functionalities of the Service that are
                available to You as a registered user.{" "}
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>
                  For the performance of a contract:
                </span>
                the development, compliance and undertaking of the purchase contract for
                the products, items or services You have purchased or of any other
                contract with Us through the Service.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>To contact You:</span>
                {` To contact You by
                email, telephone calls, SMS, or other equivalent forms of electronic
                communication, such as a mobile application's push notifications regarding
                updates or informative communications related to the functionalities,
                products or contracted services, including the security updates, when
                necessary or reasonable for their implementation.`}
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>To provide You :</span> with news,
                special offers and general information about other goods, services and
                events which we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive such
                information.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>To manage Your requests: </span> To
                attend and manage Your requests to Us.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>For business transfers: </span> We may
                use Your information to evaluate or conduct a merger, divestiture,
                restructuring, reorganization, dissolution, or other sale or transfer of
                some or all of Our assets, whether as a going concern or as part of
                bankruptcy, liquidation, or similar proceeding, in which Personal Data
                held by Us about our Service users is among the assets transferred.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>For other purposes: </span> We may use
                Your information for other purposes, such as data analysis, identifying
                usage trends, determining the effectiveness of our promotional campaigns
                and to evaluate and improve our Service, products, services, marketing and
                your experience.
              </p>
            </li>
          </ul>
          <p>We may share Your personal information in the following situations:</p>

          <ul>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>With Service Providers: </span> We may
                share Your personal information with Service Providers to monitor and
                analyze the use of our Service, to contact You.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>For business transfers: </span> We may
                share or transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing, or
                acquisition of all or a portion of Our business to another company.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>With Affiliates: </span> We may share
                Your information with Our affiliates, in which case we will require those
                affiliates to honor this Privacy Policy. Affiliates include Our parent
                company and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with Us.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>With business partners: </span>We may
                share Your information with Our business partners to offer You certain
                products, services or promotions.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>With other users: </span>when You share
                personal information or otherwise interact in the public areas with other
                users, such information may be viewed by all users and may be publicly
                distributed outside.
              </p>
            </li>
            <li>
              <p>
                <span style={{ fontWeight: 700 }}>With Your consent:</span>We may disclose
                Your personal information for any other purpose with Your consent.
              </p>
            </li>
          </ul>

          <h3>Retention of Your Personal Data</h3>
          <p>
            The Company will retain Your Personal Data only for as long as is necessary
            for the purposes set out in this Privacy Policy. We will retain and use Your
            Personal Data to the extent necessary to comply with our legal obligations
            (for example, if we are required to retain your data to comply with applicable
            laws), resolve disputes, and enforce our legal agreements and policies.
          </p>
          <p>
            The Company will also retain Usage Data for internal analysis purposes. Usage
            Data is generally retained for a shorter period of time, except when this data
            is used to strengthen the security or to improve the functionality of Our
            Service, or We are legally obligated to retain this data for longer time
            periods.
          </p>

          <h3>Transfer of Your Personal Data</h3>
          <p>
            {`Your information, including Personal Data, is processed at the Company's
            operating offices and in any other places where the parties involved in the
            processing are located. It means that this information may be transferred to —
            and maintained on — computers located outside of Your state, province, country
            or other governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.`}
          </p>
          <p>
            Your consent to this Privacy Policy followed by Your submission of such
            information represents Your agreement to that transfer.
          </p>
          <p>
            The Company will take all steps reasonably necessary to ensure that Your data
            is treated securely and in accordance with this Privacy Policy and no transfer
            of Your Personal Data will take place to an organization or a country unless
            there are adequate controls in place including the security of Your data and
            other personal information.
          </p>

          <h3>Disclosure of Your Personal Data</h3>

          <h5>Business Transactions</h5>
          <p>
            If the Company is involved in a merger, acquisition or asset sale, Your
            Personal Data may be transferred. We will provide notice before Your Personal
            Data is transferred and becomes subject to a different Privacy Policy.
          </p>

          <h5>Law enforcement</h5>
          <p>
            Under certain circumstances, the Company may be required to disclose Your
            Personal Data if required to do so by law or in response to valid requests by
            public authorities (e.g. a court or a government agency).
          </p>

          <h5>Other legal requirements</h5>
          <p>
            The Company may disclose Your Personal Data in the good faith belief that such
            action is necessary to:
          </p>

          <ul>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the Service
            </li>
            <li>Protect the personal safety of Users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>

          <h3>Security of Your Personal Data</h3>
          <p>
            The security of Your Personal Data is important to Us, but remember that no
            method of transmission over the Internet, or method of electronic storage is
            100% secure. While We strive to use commercially acceptable means to protect
            Your Personal Data, We cannot guarantee its absolute security.
          </p>

          <h3>Changes to this Privacy Policy</h3>
          <p>
            We may update Our Privacy Policy from time to time. We will notify You of any
            changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            {`We will let You know via email and/or a prominent notice on Our Service, prior
            to the change becoming effective and update the "Last updated" date at the top
            of this Privacy Policy.`}
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective when they are posted on this
            page.
          </p>

          <h3 className="mt-4">Contact Us</h3>
          <p>
            If you have any questions about these Terms and Conditions, You can contact
            us:
          </p>
          <ul>
            <li>
              By visiting this page on our website: https://ixiathemes.com/contact-us
            </li>
          </ul>
        </div>
      </StyledDiv>
    </>
  );
};

export default PrivacyPolicy;
