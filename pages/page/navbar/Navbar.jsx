import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-b-[1px] border-solid border-gray-300">
      <div className="container mx-auto flex xl:max-w-[1280px] p-8">
        <a className="flex items-center" href="#">
          <Image src="/steins.png" width={120} height={18} alt="Logo SteinS"/>
        </a>

        <div className="flex grow">
          <ul className="mx-auto flex items-center">
            <NavbarLink name="About"/>
            <NavbarLink name="History"/>
            <NavbarLink name="Projects"/>
            <NavbarLink name="Contact"/>
          </ul>

          <div className="flex items-center">
            <div className="flex items-center cursor-pointer">
              <BsFillMoonStarsFill/>
              <div className="font-bold ml-2">Color mode</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
