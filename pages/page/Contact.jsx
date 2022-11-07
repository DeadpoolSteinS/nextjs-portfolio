import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="">
      <div className="container mx-auto xl:max-w-[1280px] px-8">
        <h1 className="text-4xl text-center text-[#353535] font-bold mb-8">
          Contact Me
        </h1>
        <div className="flex items-center gap-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-8">
              Feel Free To Send Me a Message
            </h2>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="border p-2 rounded border-[#5b5b5b]">
                  <BsWhatsapp className="text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">0852 1114 2794</p>
                  <p>WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="border p-2 rounded border-[#5b5b5b]">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">novaldisago@gmail.com</p>
                  <p>GMail</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="border p-2 rounded border-[#5b5b5b]">
                  <BsLinkedin className="text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">Novaldi Sandi Ago</p>
                  <p>LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
          <form
            action=""
            method="post"
            className="bg-gray-200 px-8 py-12 rounded w-1/2"
          >
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-12 rounded bg outline-none px-5 mb-5"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full h-12 rounded bg outline-none px-5 mb-5"
                required
              />
            </div>
            <div>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full rounded bg outline-none px-5 py-3 mb-5"
                required=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="main-button bg-gray-600 hover:bg-gray-800 transition-colors duration-500 font-bold text-white rounded px-6 py-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
