// Imports
import { FC, useRef, useState } from "react";
import Head from "next/head";

// Components
import Header from "../components/Header";
import Scene from "../components/studio/Scene";
import Sidebar from "../components/studio/Sidebar";
import Format from "../components/studio/sidebar/1.Format";
import Camera from "../components/studio/sidebar/2.Camera";
import Stage from "../components/studio/sidebar/3.Stage";
import Element from "../components/studio/sidebar/4.Element";

// Types and enums
import { SidebarType, TextureType } from "../types";
import { FormatEnum, CameraEnum, StageEnum } from "../enums";

const Studio: FC = () => {
  // Scene
  const scene = useRef<HTMLDivElement>(null);

  // Sidebar
  const [sidebar, setSidebar] = useState<SidebarType>("format");

  // Attributes
  const [format, setFormat] = useState<FormatEnum>(FormatEnum.Landscape);
  const [camera, setCamera] = useState<CameraEnum>(CameraEnum.Front);
  const [stage, setStage] = useState<StageEnum>(StageEnum.Sky);
  const [texture, setTexture] = useState<TextureType>(null);

  return (
    <>
      <Head>
        <title>Mockury | Studio</title>
      </Head>
      <div className="w-screen h-screen bg-grid">
        <Header>
          <button className="btn" disabled>
            Sign in
          </button>
        </Header>
        <div className="flex w-full">
          <div className="max-w-fit flex pl-6 pr-3 py-6">
            <div>
              <Sidebar sidebar={sidebar} setSidebar={setSidebar} scene={scene} />
            </div>
            <div className="ml-3">
              {sidebar === "format" && <Format format={format} setFormat={setFormat} />}
              {sidebar === "camera" && <Camera camera={camera} setCamera={setCamera} />}
              {sidebar === "stage" && <Stage stage={stage} setStage={setStage} />}
              {sidebar === "element" && (
                <Element texture={texture} setTexture={setTexture} />
              )}
            </div>
          </div>
          <div className="h-full w-full max-w-full flex-grow flex-shrink flex justify-center pl-3 pr-6 py-6">
            <Scene
              scene={scene}
              format={format}
              camera={camera}
              stage={stage}
              texture={texture}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio;
