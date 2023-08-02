import {BsGithub, BsInstagram, BsFacebook, BsWhatsapp, BsLinkedin} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {FiMail} from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer" className="bg-gray-600 text-white mt-8">
      <div id="contact" className="container mx-auto xl:max-w-[1280px] px-8 py-12">
        <div className="flex justify-center gap-16 mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="border p-2 rounded border-white">
              <BsWhatsapp className="text-2xl"/>
            </div>
            <div>
              <p className="font-bold text-lg">0852 1114 2794</p>
              <p>WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="border p-2 rounded border-white">
              <FiMail className="text-2xl"/>
            </div>
            <div>
              <p className="font-bold text-lg">novaldisago@gmail.com</p>
              <p>GMail</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="border p-2 rounded border-white">
              <BsLinkedin className="text-2xl"/>
            </div>
            <div>
              <p className="font-bold text-lg">Novaldi Sandi Ago</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
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
