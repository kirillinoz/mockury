import { FC, Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraEnum, FormatEnum, StageEnum } from "../../enums";
import Book from "./elements/Book";
import { book } from "../../assets/models";
import Watermark from "./elements/Watermark";
import { TextureType } from "../../types";

type SceneProps = {
  scene: React.RefObject<HTMLDivElement>;
  format: FormatEnum;
  camera: CameraEnum;
  stage: StageEnum;
  texture: TextureType;
};

const Scene: FC<SceneProps> = ({ scene, format, camera, stage, texture }) => {
  const [maxHeight, setMaxHeight] = useState<string>("none");
  const [position, setPosition] = useState<[number, number, number]>([180, -90, 0]);
  const [visible, setVisible] = useState<boolean>(true);

  // Max height of the scene
  useEffect(() => {
    setTimeout(() => {
      if (scene.current) {
        const height = scene.current.clientHeight;
        setMaxHeight(`${height}px`);
      }
    }, 1000);
  }, [scene]);

  // Format transition
  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      if (format === FormatEnum.Landscape) {
        setPosition([180, -90, 0]);
      } else {
        setPosition([90, -90, 0]);
      }
      setVisible(true);
    }, 300);
  }, [format]);

  return (
    <div className="w-full">
      <div
        ref={scene}
        className="max-w-full mx-auto overflow-hidden transition-all ease-in-out rounded-sm"
        style={{ maxHeight, aspectRatio: format }}
      >
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows={true}
          style={{ background: stage }}
          camera={{ position: [0, 0, 150] }}
        >
          <ambientLight color="white" intensity={1} />
          <Suspense fallback={null}>
            <Book
              texture={texture}
              visible={visible}
              position={[
                book.position[camera].x,
                book.position[camera].y,
                book.position[camera].z,
              ]}
              rotation={[
                book.rotation[camera].x,
                book.rotation[camera].y,
                book.rotation[camera].z,
              ]}
            />
            {/*<Watermark visible={visible} position={position} />*/}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
