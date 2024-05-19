import Image from "next/image";
import Logo from "../../../public/NavLogo.png";
import Link from "next/link";

function NavBar() {
  return (
    <div className="min-w-full sticky top-0 min-h-[55px]">
      <nav className="mx-[70px] min-h-[55px] flex justify-between items-center">
        {/* LOGO */}
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        {/* LOGO END */}

        {/* NavItems */}
        <div className="flex gap-x-14 min-w-[427px] justify-center items-center">
          <Link href="#" className="text-sm text-web-text-gray">
            Home
          </Link>
          <Link href="#" className="text-sm text-web-text-gray">
            Services
          </Link>
          <Link href="#" className="text-sm text-web-text-gray">
            About
          </Link>
          <Link href="#" className="text-sm text-web-text-gray">
            Contact
          </Link>
        </div>
        {/* NavItems END */}

        {/* Contact Buttion */}

        <div>
          <button className="min-w-32 min-h-12 bg-web-bg-blue rounded-md text-white">
            Contact Us
          </button>
        </div>

        {/* Contact Buttion END */}
      </nav>
    </div>
  );
}

export default NavBar;
