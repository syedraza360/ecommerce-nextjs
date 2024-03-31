import styled from "styled-components";

const Breadcrumb = (props) => {
  const { title, link, style, className } = props;
  return (
    <StyledCrumb style={style} className={className}>
      <div className="d-flex justify-content-between">
        <div style={{ fontWeight: 600, fontSize: 14 }}>{title}</div>
        <div style={{ fontWeight: 600, fontSize: 14 }}>{link}</div>
      </div>
    </StyledCrumb>
  );
};

export default Breadcrumb;

const StyledCrumb = styled.div`
  // background-color: #f8f8f8;
  padding: 32px 10%;
`;
