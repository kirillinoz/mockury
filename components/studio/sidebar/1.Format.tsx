import { FC } from "react";
import { FormatEnum } from "../../../enums";
import Slot from "./utils/Slot";

type FormatProps = {
  format: FormatEnum;
  setFormat: (format: FormatEnum) => void;
};

const Format: FC<FormatProps> = ({ format, setFormat }) => {
  return (
    <div className="card w-32">
      <Slot
        title="16:9"
        icon="/icons/sidebar/format/landscape.svg"
        active={format === FormatEnum.Landscape}
        onClick={() => setFormat(FormatEnum.Landscape)}
      />
      <Slot
        className="mt-6"
        title="1:1"
        icon="/icons/sidebar/format/square.svg"
        active={format === FormatEnum.Square}
        onClick={() => setFormat(FormatEnum.Square)}
      />
    </div>
  );
};

export default Format;
