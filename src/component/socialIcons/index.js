import Link from "next/link";
import styled from "styled-components";
import {
  FaInstagram,
  FaGooglePlusG,
  FaFacebook,
  FaTwitter,
  FaTumblr,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialIcons = (props) => {
  return (
    <StyledCard>
      <div id="fixed-social">
        <div>
          <a href="#" className="fixed-facebook" target="_blank">
            <FaFacebook color="gray" size={30} className="fa fa-facebook" />{" "}
            <span>Facebook</span>
          </a>
        </div>
        <div>
          <a href="#" className="fixed-twitter" target="_blank">
            <FaTwitter color="gray" size={30} className="fa fa-twitter" />{" "}
            <span>Twitter</span>
          </a>
        </div>
        <div>
          <a href="#" className="fixed-linkedin" target="_blank">
            <FaLinkedinIn color="gray" size={30} className="fa fa-linkedin" />{" "}
            <span>LinkedIn</span>
          </a>
        </div>
        <div>
          <a href="#" className="fixed-instagrem" target="_blank">
            <FaInstagram color="gray" size={30} className="fa fa-instagram" />{" "}
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

export default SocialIcons;

const StyledCard = styled.div`
  /* fixed social*/
  * {
    padding: 0px;
    margin: 0px;
  }
  #fixed-social {
    z-index: 9999;
    position: fixed;
    top: 35%;
  }

  #fixed-social a {
    color: #fff;
    display: block;
    /* height: 40px; */
    position: relative;
    text-align: center;
    line-height: 40px;
    width: 40px;
    margin-bottom: 1px;
    z-index: 999;
  }
  #fixed-social a:hover > span {
    visibility: visible;
    left: 41px;
    opacity: 1;
  }
  #fixed-social a span {
    /* line-height: 40px; */
    left: 60px;
    position: absolute;
    text-align: center;
    // width: 80px;
    visibility: hidden;
    transition-duration: 0.5s;
    z-index: 5;
    opacity: 0;
    padding: 0px 8px;
  }

  .fixed-facebook span {
    background-color: gray;
  }
  .fixed-twitter span {
    background-color: gray;
  }
  .fixed-linkedin span {
    background-color: gray;
  }
  .fixed-instagrem span {
    background-color: gray;
  }
  /*end fixed social*/
`;
