import { FC } from "react";
import { CameraEnum } from "../../../enums";
import Slot from "./utils/Slot";

type CameraProps = {
  camera: CameraEnum;
  setCamera: (camera: CameraEnum) => void;
};

const Camera: FC<CameraProps> = ({ camera, setCamera }) => {
  return (
    <div className="card w-32">
      <Slot
        title="Front"
        icon="/icons/sidebar/camera/front.svg"
        active={camera === CameraEnum.Front}
        onClick={() => setCamera(CameraEnum.Front)}
      />
      <Slot
        className="mt-6"
        title="Back"
        icon="/icons/sidebar/camera/back.svg"
        active={camera === CameraEnum.Back}
        onClick={() => setCamera(CameraEnum.Back)}
      />
      <Slot
        className="mt-6"
        title="Side"
        icon="/icons/sidebar/camera/side.svg"
        active={camera === CameraEnum.Side}
        onClick={() => setCamera(CameraEnum.Side)}
      />
      <Slot
        className="mt-6"
        title="Incline"
        icon="/icons/sidebar/camera/incline.svg"
        active={camera === CameraEnum.Incline}
        onClick={() => setCamera(CameraEnum.Incline)}
      />
    </div>
  );
};

export default Camera;
