import styled from "styled-components";
import { image1, image2, image3, image4 } from "../../../images";

const blogData = [
  { _id: 1, image: image1, title: "Pink Tutu with Headband" },
  { _id: 2, image: image2, title: "Pink Tutu with Headband" },
  { _id: 3, image: image3, title: "Pink Tutu with Headband" },
  { _id: 4, image: image3, title: "Pink Tutu with Headband" },
  { _id: 5, image: image3, title: "Pink Tutu with Headband" },
  { _id: 6, image: image3, title: "Pink Tutu with Headband" },
  { _id: 7, image: image3, title: "Pink Tutu with Headband" },
];

const PopularBlogs = (props) => {
  return (
    <StyledContent>
      <div className="title-header">
        <h4 className="">POPULAR BLOG</h4>
      </div>

      <div>
        {blogData?.slice(0, 4)?.map((item, index) => (
          <div key={index} className="mt-4 w-100">
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ height: "70px" }}
            >
              <div className="blog-date">
                <span>03</span>
                <span>MAY</span>
              </div>

              <div className="content d-flex flex-column justify-content-between ml-2 h-100">
                <h6>Injected humour the like</h6>
                <p>0 hits</p>
              </div>
            </div>
            <p className="text">
              It look like readable English. Many desktop publishing text.
            </p>
          </div>
        ))}
      </div>
    </StyledContent>
  );
};

export default PopularBlogs;

const StyledContent = styled.div`
  /* border: 1px solid #ddd; */
  padding: 25px;
  margin-top: 30px;
  .title-header h4 {
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 18px;
  }
  .text {
    line-height: 20px !important;
    margin-top: 10px;
    margin-bottom: 0;
    color: #555;
  }

  .blog-date {
    background-color: #e84c88;
    height: 70px;
    width: 70px;
    margin: 0 15px 0 0;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      text-align: center;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .content {
    p {
      margin-bottom: 0;
      color: #555;
    }
    h6 {
      margin-bottom: 0;
      line-height: 20px;
      color: #333;
      font-weight: 700;
    }
  }
`;
