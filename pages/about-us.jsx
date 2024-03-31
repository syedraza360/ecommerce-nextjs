import { Row, Col } from "antd";
import styled from "styled-components";

const Aboutus = (props) => {
  const cardData = [
    {
      image: "about-us-tile1.webp",
      heading: "A “just-right” selection",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      image: "/about-us-tile2.webp",
      heading: "Easy experience",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      image: "/about-us-tile3.webp",
      heading: "Design for everyone",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
  ];

  return (
    <StyledPage>
      <img src="/about-us-desktop.webp" className="mt-4 mt-md-5 img-fluid" />
      <h1 className="page-heading">Where small businesses get big ideas.</h1>

      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p className="mb-3">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.`}
          </p>
          <p className="mb-3">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.`}
          </p>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.`}
          </p>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. `}
          </p>
          <p>
            {` It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.`}
          </p>
        </Col>
      </Row>

      <h1 className="page-heading">How we help small businesses</h1>
      <Row justify="space-between" gutter={[0, 24]}>
        {cardData.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={11} lg={7} xl={7}>
            <div className="mb-5 mb-md-0">
              <img src={item.image} className="img-fluid" />
              <h2 className="card-heading">{item.heading}</h2>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      {/* <div className="text-center" style={{ margin: "64px 0" }}>
        <img src="/images/iXiaThemes.svg" alt="logo" height={40} className="mb-4" />
        <h3 style={{ fontWeight: 600 }}>ABSOLUTELY GUARANTEED</h3>
        <h5>{`Not satisfied? We’ll make it right.`}</h5>
        <br />
        <p>
          {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. `}
        </p>
        <p>{`If that doesn’t help, we’ll refund you in full.`}</p>
        <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. `}</p>
      </div> */}
    </StyledPage>
  );
};

export default Aboutus;

const StyledPage = styled.div`
  width: 80%;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  .page-heading {
    font-weight: 600;
    margin: 48px 0;
  }

  .card-heading {
    margin-top: 16px;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;

    .card-heading {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 576px) {
    .page-heading {
      font-size: 24px;
      margin: 24px 0;
      font-weight: 600;
      text-align: center;
    }

    .card-heading {
      font-size: 20px;
    }
  }
`;
