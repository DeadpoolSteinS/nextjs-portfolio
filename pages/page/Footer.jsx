import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <section id="footer" className="bg-gray-600 text-white mt-8">
      <div className="container mx-auto xl:max-w-[1280px] px-8 py-12">
        <div className="flex justify-center gap-4">
          <a href="#">
            <BsGithub className="text-6xl border p-2 rounded-full" />
          </a>
          <a href="#">
            <SiLeetcode className="text-6xl border p-2 rounded-full" />
          </a>
          <a href="#">
            <BsInstagram className="text-6xl border p-2 rounded-full" />
          </a>
          <a href="#">
            <BsFacebook className="text-6xl border p-2 rounded-full" />
          </a>
        </div>
        <p className="text-center mt-4">
          &copy;{" "}
          <a className="text-primary" href="#">
            SteinS
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
