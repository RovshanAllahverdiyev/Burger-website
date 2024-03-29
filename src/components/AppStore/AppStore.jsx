import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";

const AppStore = () => {
  return (
    <section className="bg-gray-100 py-14 margin-b" id="contact">

      <div className="max-w-xl mx-auto container mb-2 sm:mb-4">
        <h1 data-aos='zoom-in' className="text-xl sm:text-4xl font-bold text-center text-gray-700">Burger King is available for Android and IOS</h1>
      </div>

        <div data-aos='fade-up' className="flex justify-center items-center ">

          <a href="#">
          <img src={PlayStoreImg} alt="play store" className="max-w-[100px] sm:max-w-[200px]"  />
          </a>

          <a href="#">
          <img src={AppStoreImg} alt="app store" className="max-w-[100px] sm:max-w-[200px]" />
          </a>

        </div>

    </section>
  );
};

export default AppStore;
