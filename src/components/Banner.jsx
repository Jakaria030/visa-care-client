import { useContext } from 'react';
import slider1 from '../assets/slide-1.jpg';
import slider2 from '../assets/slide-2.jpg';
import slider3 from '../assets/slide-3.jpg';
import { AuthContext } from '../provider/AuthProvider';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {

    const { isDarkMode } = useContext(AuthContext);

    return (
        <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className={`${isDarkMode ? 'border-white' : 'border-[#003366]'} relative w-full h-[300px] md:h-[400px] lg:h-[600px]`}>
                        <img src={slider1} className="w-full h-full" />
                        <div className='absolute inset-0 bg-[#003366]/20 '></div>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-4xl font-inter font-bold text-center bg-black/50 p-8 rounded-md text-white'>Our Simple Aproch To <br />  <Typewriter
                            words={['Immigration Process']}
                            cursor
                            loop={Infinity}
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${isDarkMode ? 'border-white' : 'border-[#003366]'} relative w-full h-[300px] md:h-[400px] lg:h-[600px]`}>
                        <img src={slider2} className="w-full h-full" />
                        <div className='absolute inset-0 bg-[#003366]/20 '></div>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-4xl font-inter font-bold text-center bg-black/50 p-8 rounded-md text-white'>Modern Immigration <br />  <Typewriter
                            words={['Firm With Savings']}
                            cursor
                            loop={Infinity}
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${isDarkMode ? 'border-white' : 'border-[#003366]'} relative w-full h-[300px] md:h-[400px] lg:h-[600px]`}>
                        <img src={slider3} className="w-full h-full" />
                        <div className='absolute inset-0 bg-[#003366]/20 '></div>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-4xl font-inter font-bold text-center bg-black/50 p-8 rounded-md text-white'>Best Visa Immigration<br />  <Typewriter
                            words={['Services']}
                            cursor
                            loop={Infinity}
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;