
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import header1 from "../assets/header1.png";
import header2 from "../assets/header2.png";
import header3 from "../assets/header3.png";

interface Slide {
    welcome: string;
    title: string;
    description: string;
    buttonText: string;
    image: string;
}

const slides: Slide[] = [
    {
        welcome: "WELCOME TO GREENSHOP",
        title: "LET'S MAKE A BETTER PLANET",
        description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
        buttonText: "SHOP NOW",
        image: header1,
    },
    {
        welcome: "WELCOME TO GREENSHOP",
        title: "LET'S LIVE IN A BETTER PLANET",
        description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
        buttonText: "LET'S START",
        image: header2,
    },
    {
        welcome: "WELCOME TO GREENSHOP",
        title: "LET'S OBSERVE A BETTER PLANET",
        description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!",
        buttonText: "GET CREDITS",
        image: header3,
    },
];

const Header: React.FC = () => {
    return (
        <div className="font-sans w-[1100px] mx-auto">
            <div className="w-full bg-gray-100 py-10 mt-[80px]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto pl-10">
                                <div className="md:w-1/2 text-left">
                                    <span>{slide.welcome}</span>
                                    <h2 className="text-[60px] font-black text-gray-900 leading-none">
                                        {slide.title.split("PLANET")[0]}
                                        <span className="text-green-600">PLANET</span>
                                    </h2>
                                    <p className="text-gray-600 my-4">{slide.description}</p>
                                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                                        {slide.buttonText}
                                    </button>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    <img
                                        src={slide.image}
                                        alt="Plant"
                                        className="w-3/4 md:w-1/2"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Header;
