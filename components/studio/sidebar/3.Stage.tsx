import { FC } from "react";
import { StageEnum } from "../../../enums";
import Slot from "./utils/Slot";

type StageProps = {
  stage: StageEnum;
  setStage: (stage: StageEnum) => void;
};

const Stage: FC<StageProps> = ({ stage, setStage }) => {
  return (
    <div className="card w-32">
      <Slot
        title="Sky"
        stage={StageEnum.Sky}
        active={stage === StageEnum.Sky}
        onClick={() => setStage(StageEnum.Sky)}
      />
      <Slot
        className="mt-6"
        title="Sun"
        stage={StageEnum.Sun}
        active={stage === StageEnum.Sun}
        onClick={() => setStage(StageEnum.Sun)}
      />
    </div>
  );
};

export default Stage;
