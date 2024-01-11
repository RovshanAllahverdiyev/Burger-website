import { useState } from "react";
import BurgerImg1 from "../../assets/burger/burger1.png";
import BurgerImg2 from "../../assets/burger/burger2.png";
import BurgerImg3 from "../../assets/burger/burger3.png";
import Vector from "../../assets/vector.png";

const ImageList = [
  {
    id: 1,
    img: BurgerImg1,
  },
  {
    id: 2,
    img: BurgerImg2,
  },
  {
    id: 3,
    img: BurgerImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(BurgerImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    witdh: "100%",
    height: "100%",
  };

  return (
    <section
      className=" bg-gray-100 margin-b"
      style={bgImage}
      id="home"
    >
      <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold ">
                Welcome to
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)]"
                  style={{
                    filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                  }}
                >
                  {" "}
                  Burger {' '}
                </span>
                King
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, minus optio quo dolorum sequi vero?
              </p>

              <div>
                <button className="bg-gradient-to-r from-primary to-white py-2 px-4 rounded-full border-2 border-white text-black hover:scale-105 duration-300 font-bold">Order Now</button>
              </div>
            </div>

            {/* image section  */}
              
              <div className="order-1 sm:order-2 min-h-[450px] relative flex justify-center items-center">

                <div>
                <img src={imageId} alt="" className="max-w-[430px] hover:scale-105 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)] cursor-pointer"/>
                </div>

                <div className="absolute flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 lg:-right-10 bottom-[-30px] justify-center gap-4 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <div key={item.id}>
                      <img 
                        src={item.img} alt="burger img"
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-300 cursor-pointer"
                        onClick={() => setImageId(
                          item.id === 1
                          ? BurgerImg1
                          : item.id === 2
                          ? BurgerImg2
                          : BurgerImg3
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
