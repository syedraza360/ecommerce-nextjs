import { useState } from "react";
import styled from "styled-components";
import { Rate, Form, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../buttons";
import { useFetch, Mutations, errorHandler } from "../../api/config";
import { useSelector } from "react-redux";

const initialState = { review: "", rating: "" };

const ReviewForm = (props) => {
  const { productId } = props;
  const { _id: userId } = useSelector((state) => state.user.data);
  const [state, setState] = useState({ ...initialState });
  const [form] = Form.useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };



  const [createReview, loading] = useFetch(Mutations.createReview);

  const handleCreate = async () => {
    try {
      await createReview({
        rating: `${state.rating}`,
        review: state.review,
        product: productId,
        users_permissions_user: userId,
      });
      form.resetFields();
      setState({ ...state });
      message.success("Your review has been posted.");
    } catch (err) {
      message.error(errorHandler(err));
    }
  };

  return (
    <StyledContainer>
      <small>
        Your email address will not be published. Required fields are marked *
      </small>

      <Form form={form} onFinish={handleCreate} validateTrigger="onFinish">
        <label style={{ margin: "16px 0 -8px 0", display: "block" }}>Your rating *</label>
        <Form.Item
          name="Rating"
          rules={[{ required: true }]}
          style={{ marginBottom: 10 }}
        >
          <Rate
            style={{ color: "#FF3E48", fontSize: 13 }}
            onChange={(val) => setState({ ...state, rating: val })}
            value={state.rating}
          />
           
        </Form.Item>

        <label>Your review *</label>
        <Form.Item name="Review" rules={[{ required: true }]}>
          <textarea
            rows={5}
            name="review"
            className="review-input"
            onChange={handleChange}
            value={state.review}
          />
        </Form.Item>

        {/* <label>Name *</label>
        <Form.Item name="Name" rules={[{ required: true }]}>
          <input className="review-input" onChange={handleChange} value={state.name} />
        </Form.Item>

        <label>Email *</label>
        <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
          <input className="review-input" onChange={handleChange} value={state.email} />
        </Form.Item> */}

        <PrimaryButton htmlType="submit" className="mt-4">
          {loading ? <LoadingOutlined /> : null} Submit
        </PrimaryButton>
      </Form>
    </StyledContainer>
  );
};

export default ReviewForm;

const StyledContainer = styled.div`
  .ant-rate-star {
    margin-right: 4px;
  }

  .review-input {
    resize: none;
    border: 1px solid #e5e5e5;
    font-weight: 300;
    width: 100%;
    max-width: 400px;
    outline: none;
    padding: 8px;
  }
`;
