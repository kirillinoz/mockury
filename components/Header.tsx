import Image from "next/image";
import Link from "next/link";

const Header = ({ children }: any) => {
  return (
    <div className="bg-white w-full px-12 py-3 border-b-2 border-gray-100 shadow-lg h-20 flex items-center">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/icons/logo.svg" alt="Mockury" width={35} height={35} />
          <p className="font-rubik ml-3 text-gray-700">Mockury</p>
        </Link>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Header;
