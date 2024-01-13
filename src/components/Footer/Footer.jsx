import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

import footerLogo from "../../assets/logo.png";

const footerLinks = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Services",
    link: "#services",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

const Footer = () => {
  return (
    <div className=" bg-gray-100 pt-10 px-10">
      <div data-aos='fade-up' data-aos-delay='500' className="container ">
        <div className="grid md:grid-cols-3 sm:gap-16">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <a href="#home">
              <img src={footerLogo} alt="footer logo" className="w-16" />
              </a>
              <h1 className="text-xl sm:text-2xl font-bold">Burger King</h1>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum labore optio dolor itaque quos vero doloribus illum et
              omnis vitae!{" "}
            </p>

            <div className="flex items-center gap-2 text-sm">
              <FaLocationArrow />
              <p>Baku, Azerbaijan</p>
            </div>

            <div className="flex items-center gap-2 text-sm ">
              <FaMobileAlt />
              <p>+994554233353</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <a href="#">
              <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
              <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
              <FaLinkedin className="text-3xl" />
              </a>
            </div>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-4">
            {/* Important Link section */}
            <div className="gap-3 flex flex-col">
              <h1 className="text-xl font-bold text-justify">
                Important Links
              </h1>
              {footerLinks.map((link) => (
                <ul key={link.id}>
                  <li className="flex justify-center flex-col ">
                    <a
                      href={link.link}
                      className="hover:text-primary duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            {/* Company Link section */}
            <div className="gap-3 flex flex-col">
              <h1 className="text-xl font-bold text-justify">Company Links</h1>
              {footerLinks.map((link) => (
                <ul key={link.id}>
                  <li className="flex justify-center flex-col ">
                    <a
                      href={link.link}
                      className="hover:text-primary duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>

            {/* Link section */}
            <div className="gap-3 flex flex-col">
              <h1 className="text-xl font-bold text-justify">Links</h1>
              {footerLinks.map((link) => (
                <ul key={link.id}>
                  <li className="flex justify-center flex-col ">
                    <a
                      href={link.link}
                      className="hover:text-primary duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-10 border-t-2 border-gray-300/50">
          <p>&copy; copyright 2024 || Developed by <a href="https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/"><span className="text-primary
          "> Rovshan</span></a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
