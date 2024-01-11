import HeaderTitle from "../HeaderTitle/HeaderTitle";

import Img2 from "../../assets/burger/burger2.png";
import Img3 from "../../assets/burger/burger3.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Chiken Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Veg Burger",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <section
      className="margin-b bg-gray-100 py-12 lg:py-20 lg:pt-30"
      id="services"
    >
      <div className="container">
        <HeaderTitle title="Services" subTitle="Our Services" />

        {/* Services section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((service) => (
            <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="bg-white rounded-2xl hover:bg-primary/70 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Service Image section */}
              <div className="h-[100px]">
                <img
                  src={service.img}
                  alt="service image"
                  className="max-w-[200px] block transform -translate-y-16 mx-auto group-hover:scale-105 duration-high"
                />
              </div>

              {/* Service Text section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{service.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
