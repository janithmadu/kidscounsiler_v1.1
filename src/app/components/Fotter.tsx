import Image from "next/image";
import Logo from "../../../public/NavLogo.png";
import Link from "next/link";
function Fotter() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="max-w-full mx-[70px] min-h-[160px] text-white flex items-center justify-center flex-col space-y-[14px]">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div>
        <div className="flex gap-x-14 min-w-[427px] justify-center items-center">
          <Link href="#" className="text-sm ">
            Home
          </Link>
          <Link href="#" className="text-sm ">
            Services
          </Link>
          <Link href="#" className="text-sm ">
            About
          </Link>
          <Link href="#" className="text-sm ">
            Contact
          </Link>
        </div>
        <div className="mt-[14px]">
          <p className="text-center text-sm text-white ">
            &copy; {year} · Kids’ Counselor
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
