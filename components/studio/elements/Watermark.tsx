import { useTexture } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";
import { FunctionComponent } from "react";

type WatermarkProps = {
  visible: boolean;
  position: Vector3;
};

const Watermark: FunctionComponent<WatermarkProps> = ({ visible, position }) => {
  const colorMap = useTexture("/icons/watermark.svg");

  return (
    <sprite position={position} scale={[40, 40, 40]} visible={visible}>
      <spriteMaterial map={colorMap} />
    </sprite>
  );
};

export default Watermark;
