import { useState } from "react";
import styled from "styled-components";
import { Row, Col, Modal, Button } from "antd";
import SelectWrapper from "../inputs/selectWrapper";
import { InputWrapper, TextAreaWrapper } from "../inputs";
import { SwipeButton } from "../buttons";
import PhoneInputWrapper from "../inputs/phoneInputWrapper";

const StyledForm = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  .label {
    margin-bottom: 4px;
  }
`;

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Modal
      visible={true}
      width={800}
      bodyStyle={{ overflow: "hidden" }}
      style={{ overflow: "hidden" }}
    >
      <StyledForm>
        {step === 1 ? (
          <Step1
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            handleChange={handleChange}
          />
        ) : (
          <Step2
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            handleChange={handleChange}
          />
        )}

        <Button onClick={() => (step === 1 ? setStep(2) : setStep(1))}>Submit</Button>
      </StyledForm>
    </Modal>
  );
};

export default OrderForm;

const Step1 = (props) => {
  const { userInfo, handleChange } = props;
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <h4>STEP 1 - LOGO DESIGN</h4>
        <h4>REQUIREMENTS</h4>
        <h6>
          Form below is for us to know your Logo design requirements. The form seems long
          but most of it requires one click selection.
        </h6>
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">First Name</p>
        <InputWrapper
          name="firstName"
          placeholder="First Name"
          value={userInfo.firstName}
          onChange={handleChange}
        />
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">Last Name</p>
        <InputWrapper
          name="lastName"
          value={userInfo.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">Email</p>
        <InputWrapper
          name="email"
          placeholder="someone@anywhere.com"
          value={userInfo.email}
          onChange={handleChange}
        />
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">Phone</p>
        <PhoneInputWrapper
          value={userInfo.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};

const Step2 = (props) => {
  const { userInfo, handleChange } = props;
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <h4>STEP 2 - LOGO DESIGN</h4>
        <h4>REQUIREMENTS</h4>
        <h6>
          Form below is for us to know your Logo design requirements. The form seems long
          but most of it requires one click selection.
        </h6>
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">Select logo type </p>
        <SelectWrapper
          name="logoType"
          value={userInfo.logoType}
          // onChange={handleChange}
          placeholder="New Logo Design"
          options={[]}
        />
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">What exact words should appear in your logo?</p>
        <InputWrapper
          name="words"
          value={userInfo.words}
          onChange={handleChange}
          placeholder="What exact words should appear in your logo?"
        />
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">Tag line</p>
        <InputWrapper
          name="tagline"
          value={userInfo.tagline}
          onChange={handleChange}
          placeholder="Please mention the tagline if any?"
        />
      </Col>

      <Col sm={24} xxl={12}>
        <p className="label">Description</p>
        <TextAreaWrapper rows={4} />
      </Col>
    </Row>
  );
};
