import { Badge } from "antd";
import { HiCheckCircle } from "react-icons/hi";

const ColorPicker = ({ handleSpanClick, isSelected, color }) => {
  return (
    <Badge
      count={
        isSelected ? <HiCheckCircle style={{ color: "#05aa1c", fontSize: 20 }} /> : null
      }
    >
      <span
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleSpanClick}
      />
    </Badge>
  );
};

export default ColorPicker;
