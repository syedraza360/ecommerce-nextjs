import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Comment, List, Tooltip } from "antd";
import moment from "moment";

const CommentSection = (props) => {
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality
          design resources (Sketch and Axure), to help people create their product
          prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().subtract(1, "days").fromNow()}</span>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality
          design resources (Sketch and Axure), to help people create their product
          prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().subtract(2, "days").fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <StyledCard>
      <h3>Discussion </h3>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </StyledCard>
  );
};

export default CommentSection;

const StyledCard = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  //   p{
  //     font-size: 16px !important;
  //   }
  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0 12px;
  }
`;
