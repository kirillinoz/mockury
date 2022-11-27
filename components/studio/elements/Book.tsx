import React, { FC } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { TextureType } from "../../../types";

type BookProps = {
  visible: boolean;
  position: [number, number, number];
  rotation: [number, number, number];
  texture: TextureType;
};

const Book: FC<BookProps> = ({ visible, position, rotation, texture }) => {
  const { nodes, materials } = useGLTF("/models/book.gltf");
  const colorMap = useTexture(texture ? texture : "/textures/book.png");
  return (
    <group {...{ visible, position, rotation }} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.41, 0, 1.05]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cover__0.geometry}
              material={materials["Material.001"]}
            >
              <meshStandardMaterial map={colorMap} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/book.gltf");

export default Book;
