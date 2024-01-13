import Slider from "react-slick"

import HeaderTitle from "../HeaderTitle/HeaderTitle"

const settings = {
  dots: true,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};

const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Micheal",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Jenifer",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonials = () => {
  return (
    <section className="margin-b">
      
      <div className="container">

        {/* Header */}
        <HeaderTitle 
        title='Testimonial'
        subTitle='What our costumer say'
        />

        {/* Testimonials */}
        <div className="max-w-[600px] mx-auto">
        <Slider {...settings}>
          {
            TestimonialData.map((data) => (
              <div key={data.id} data-aos='fade-up' >
                
                <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                  <img src={data.img} alt="testimonial img" className="rounded-full block mx-auto" />
                  <p className="text-gray-500 text-sm">{data.testimonial}</p>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                </div>

              </div>
            ))
          }
        </Slider>
        </div>

      </div>

    </section>
  )
}

export default Testimonials