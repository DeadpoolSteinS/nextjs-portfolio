import {BsWhatsapp, BsLinkedin} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto xl:max-w-[1280px] px-8">
        <h1 className="text-4xl text-center text-[#353535] font-bold mb-8">
          Contact Me
        </h1>
        <div className="flex justify-center">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-2">
              <div className="border p-2 rounded border-[#5b5b5b]">
                <BsWhatsapp className="text-2xl"/>
              </div>
              <div>
                <p className="font-bold text-lg">0852 1114 2794</p>
                <p>WhatsApp</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="border p-2 rounded border-[#5b5b5b]">
                <FiMail className="text-2xl"/>
              </div>
              <div>
                <p className="font-bold text-lg">novaldisago@gmail.com</p>
                <p>GMail</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border p-2 rounded border-[#5b5b5b]">
                <BsLinkedin className="text-2xl"/>
              </div>
              <div>
                <p className="font-bold text-lg">Novaldi Sandi Ago</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
