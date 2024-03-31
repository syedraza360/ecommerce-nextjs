import styled from "styled-components";
import { image1, image2, image3, image4 } from "../../../images";
import moment from "moment";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const RecentBlogs = (props) => {
  return (
    <StyledContent style={{ position: "sticky", backgroundColor: "#fff", top: 75 }}>
      <div className="title-header">
        <h4 className="text-center">RECENT BLOG</h4>
      </div>

      <div>
        {props.data?.slice(0, 4)?.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-start align-items-center mt-4 w-100"
          >
            <img src={item.images[0]} width="35%" height={"60px"} />
            <div className="content ml-3">
              <Link href={`/blog/${item._id}`}>
                <h6 title={item.title} className="heading">
                  {item.title}
                </h6>
              </Link>

              <p style={{ fontSize: 12 }}>
                {Math.floor(Math.random() * (31 - 10 + 1)) + 10}
                {"-"}
                {moment().subtract("years", 1).format("MMM-YYYY")}
              </p>

              <p style={{ fontSize: 12, margin: 0 }}>
                <AiFillHeart className="mr-1" size={12} style={{ marginBottom: 3 }} />
                {Math.floor(Math.random() * 10) + 1} hits
              </p>
            </div>
          </div>
        ))}
      </div>
    </StyledContent>
  );
};

RecentBlogs.defaultProps = {
  data: [
    { _id: 1, images: [image1], title: "Pink Tutu with Headband" },
    { _id: 2, images: [image2], title: "Pink Tutu with Headband" },
    { _id: 3, images: [image3], title: "Pink Tutu with Headband" },
    { _id: 4, images: [image3], title: "Pink Tutu with Headband" },
    { _id: 5, images: [image3], title: "Pink Tutu with Headband" },
    { _id: 6, images: [image3], title: "Pink Tutu with Headband" },
    { _id: 7, images: [image3], title: "Pink Tutu with Headband" },
  ],
};
export default RecentBlogs;

const StyledContent = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 25px;
  .title-header h4 {
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 1px;
    font-size: 18px;
  }
  .content {
    .heading {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      transition: 0.1s ease;
      cursor: pointer;
      &:hover {
        color: #e84c88;
      }
    }
    p {
      line-height: 20px;
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
