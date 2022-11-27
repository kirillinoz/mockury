import { FC, useRef } from "react";
import Image from "next/image";
import { TextureType } from "../../../types";
import Slot from "./utils/Slot";

type ElementProps = {
  texture: TextureType;
  setTexture: (texture: TextureType) => void;
};

const Element: FC<ElementProps> = ({ texture, setTexture }) => {
  // Template
  const downloadTemplate = () => {
    const link = document.createElement("a");
    link.download = "Mockury - Book Template.png";
    link.href = "/templates/book.png";
    link.click();
  };

  // Texture
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const { type } = file;
      const buffer = await file.arrayBuffer();
      const imageURL = createImageURL(buffer, type);
      setTexture(imageURL);
    }
  };

  const createImageURL = (buffer: BlobPart, type: any) => {
    const blob = new Blob([buffer], { type });
    return URL.createObjectURL(blob);
  };

  return (
    <div className="card w-32">
      <Slot
        title="Template"
        icon="/icons/sidebar/texture/download.svg"
        alt="Download"
        onClick={downloadTemplate}
      />
      <div className="relative mt-6">
        <Slot
          title="Texture"
          icon="/icons/sidebar/texture/upload.svg"
          alt="Upload"
          active={texture !== null}
          onClick={handleClick}
        />
        {texture && (
          <button
            className="absolute -top-2 right-1 p-1 bg-gray-100 border border-gray-700 rounded-full"
            onClick={() => setTexture(null)}
          >
            <Image src="/icons/cross.svg" alt="Cancel" width={20} height={20} />
          </button>
        )}
        <input
          type="file"
          className="hidden"
          ref={hiddenFileInput}
          onChange={handleChange}
          accept=".png"
        ></input>
      </div>
    </div>
  );
};

export default Element;
