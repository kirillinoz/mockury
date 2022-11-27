import { FC } from "react";
import Image from "next/image";

type SlotProps = {
  className?: string;
  title: string;
  icon?: string;
  alt?: string;
  stage?: string;
  active?: boolean;
  highlight?: boolean;
  onClick: () => void;
};

const Slot: FC<SlotProps> = ({
  className,
  title,
  icon,
  alt,
  stage,
  highlight,
  active,
  onClick,
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        className={`slot ${highlight && "highlight"} ${active && "active"}`}
        onClick={onClick}
      >
        {icon && <Image src={icon} alt={alt ? alt : title} width={30} height={30} />}
        {stage && (
          <div className="w-[30px] h-[30px] flex justify-center items-center">
            <div className="w-[24px] h-[24px] rounded-sm" style={{ background: stage }} />
          </div>
        )}
      </button>
      <p className="text-xs mt-1 font-rubik text-gray-700">{title}</p>
    </div>
  );
};

export default Slot;
