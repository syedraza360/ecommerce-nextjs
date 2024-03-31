import { useRef } from "react";
import styled from "styled-components";

let pos = { top: 0, left: 0, x: 0, y: 0 };

const Custom = (props) => {
  const { className, children } = props;
  const myRef = useRef();

  const mouseDownHandler = function (e) {
    const ele = myRef.current;
    // Change the cursor and prevent user from selecting the text
    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";
    pos = {
      // The current scroll
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    const ele = myRef.current;
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    const ele = myRef.current;
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    ele.style.cursor = "grab";
    ele.style.removeProperty("user-select");
  };

  return (
    <StyledContent className={className} ref={myRef} onMouseDown={mouseDownHandler}>
      {children}
    </StyledContent>
  );
};

export default Custom;

const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: grab;
  overflow: auto;
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;
