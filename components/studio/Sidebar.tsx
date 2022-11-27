import { FC } from "react";
import { SidebarType } from "../../types";
import Slot from "./sidebar/utils/Slot";
import { toPng } from "html-to-image";

type SidebarProps = {
  sidebar: SidebarType;
  setSidebar: (sidebar: SidebarType) => void;
  scene: React.RefObject<HTMLDivElement>;
};

const Sidebar: FC<SidebarProps> = ({ sidebar, setSidebar, scene }) => {
  // Download scene
  const exportImage = () => {
    if (!scene.current || !scene.current.firstChild) return;
    toPng(scene.current.firstChild as HTMLElement).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "Mockury - Book.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="card w-32">
      <Slot
        title="Format"
        icon="/icons/sidebar/format.svg"
        active={sidebar === "format"}
        onClick={() => setSidebar("format")}
      />
      <Slot
        className="mt-6"
        title="Camera"
        icon="/icons/sidebar/camera.svg"
        active={sidebar === "camera"}
        onClick={() => setSidebar("camera")}
      />
      <Slot
        className="mt-6"
        title="Stage"
        icon="/icons/sidebar/stage.svg"
        active={sidebar === "stage"}
        onClick={() => setSidebar("stage")}
      />
      <div className="border border-gray-100 mt-6"></div>
      <Slot
        className="mt-6"
        title="Element"
        icon="/icons/sidebar/element.svg"
        active={sidebar === "element"}
        onClick={() => setSidebar("element")}
      />
      <div className="border border-gray-100 mt-6"></div>
      <Slot
        className="mt-6"
        title="Export"
        icon="/icons/sidebar/export.svg"
        highlight
        onClick={() => exportImage()}
      />
    </div>
  );
};

export default Sidebar;
