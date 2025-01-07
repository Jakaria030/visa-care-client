import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

import user1 from "../assets/jakaria.jpg";
import user2 from "../assets/arafat.jpg";
import user3 from "../assets/arnab.jpg";
import user4 from "../assets/nakib.jpg";
import user5 from "../assets/shimul.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Zoom } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    const { isDarkMode } = useContext(AuthContext);

    return (
        <section className={`${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#003366]/90'}  text-[#F2F2F2]`}>
            <div className="max-w-8xl mx-auto px-5 py-8 md:py-16">

                <Zoom>
                    <div className="mb-8 sm:mb-10 flex items-center justify-center">
                        <h2 className="text-3xl font-poppins font-semibold"> <span className='text-[#F2F2F2]'>What Client</span> <span className="text-[#FF6F3F]">Says</span> </h2>
                    </div>
                </Zoom>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-[#003366]'} p-5 rounded-sm h-[300px]`}>
                            <div className="flex items-center gap-5 p-5">
                                <div className="rounded-full ring-2 ring-white shrink-0">
                                    <img className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1" src={user1} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="sm:text-xl font-inter font-medium">Gulam Jakaria</h2>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-justify font-poppins">VisaCare made the visa application process so smooth and stress-free! Their guidance was clear, and the approval came faster than expected. Highly recommend!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-[#003366]'} p-5 rounded-sm h-[300px]`}>
                            <div className="flex items-center gap-5 p-5">
                                <div className="rounded-full ring-2 ring-white shrink-0">
                                    <img className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1" src={user2} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="sm:text-xl font-inter font-medium">Arafat Hossen</h2>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-justify font-poppins">I was overwhelmed with visa requirements until I found VisaCare. Their step-by-step instructions were a lifesaver. Excellent service!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-[#003366]'} p-5 rounded-sm h-[300px]`}>
                            <div className="flex items-center gap-5 p-5">
                                <div className="rounded-full ring-2 ring-white shrink-0">
                                    <img className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1" src={user3} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="sm:text-xl font-inter font-medium">Arnab Mojumdar</h2>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-justify font-poppins">Thanks to VisaCare, I got my student visa approved without any hassle. Their customer support team was always available to help. Great experience!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-[#003366]'} p-5 rounded-sm h-[300px]`}>
                            <div className="flex items-center gap-5 p-5">
                                <div className="rounded-full ring-2 ring-white shrink-0">
                                    <img className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1" src={user4} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="sm:text-xl font-inter font-medium">Ahnaf Nakib</h2>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-justify font-poppins">VisaCare's user-friendly platform made the entire application process effortless. Their attention to detail is impressive. Highly satisfied!</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${isDarkMode ? 'bg-gray-600' : 'bg-[#003366]'} p-5 rounded-sm h-[300px]`}>
                            <div className="flex items-center gap-5 p-5">
                                <div className="rounded-full ring-2 ring-white shrink-0">
                                    <img className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1" src={user5} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="sm:text-xl font-inter font-medium">Elias Jahan</h2>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                        <FaStar className="sm:text-lg text-[#FF6F3F]" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-justify font-poppins">Applying for a work visa seemed daunting, but VisaCare simplified everything for me. Their expert advice ensured my application was flawless. Amazing service!</p>
                        </div>
                    </SwiperSlide>             
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;