import slider1 from '../assets/slide1.jpg';
import slider2 from '../assets/slide2.svg';
import slider3 from '../assets/slide3.svg';
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
    return (
        <section>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[300px] sm:h-[400px] lg:h-[600px] border-b-4 border-[#003366]">

                    <img
                        src={slider1}
                        className="w-full object-contain" />
                    <div className='absolute top-2/3 sm:top-3/4 text-slate-800 sm:right-24 text-center'>
                        <h1 className='px-5  text-2xl sm:text-4xl font-poppins font-bold'>Welcome To Visa Care</h1>
                        <p className='text-lg font-inter text-center'>
                        <span style={{color: 'red'}}>
                        <Typewriter
                            words={['Your Trusted Partner For Visa Application.']}
                            loop={Infinity}
                            typeSpeed={70}
                            cursor
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>
                        </p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item border-b-4 border-[#003366] relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
                    <img
                        src={slider2}
                        className="w-full object-contain" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item border-b-4 border-[#003366] relative w-full  h-[300px] md:h-[400px] lg:h-[600px]">
                    <img
                        src={slider3}
                        className="w-full object-cover" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-slate-800 p-5 rounded-md shadow-xl backdrop-blur-lg'>
                        <h1 className='px-5  text-2xl sm:text-4xl md:text-5xl font-poppins font-bold'>Simplified Visa Process</h1>
                        <p className='text-xl font-inter text-center'>Get Your Visa In Just A few Stepts</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;