import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Zoom } from "react-awesome-reveal";

import member1 from "../assets/member-1.jpg";
import member2 from "../assets/member-2.jpg";
import member3 from "../assets/member-3.jpg";

const OurTeam = () => {
    const { isDarkMode } = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className='max-w-8xl mx-auto px-5 pb-8 md:pb-16'>
                <Zoom>
                    <div className="my-8 sm:my-10 flex items-center justify-center">
                        <h2 className="text-3xl font-poppins font-semibold"> <span className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Our</span> <span className="text-[#FF6F3F]">Team</span> </h2>
                    </div>
                </Zoom>

                <div className="grid grid-cols-col sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="relative">
                        <figure className="z-10 relative border bg-white rounded-sm h-[300px]">
                            <img className="w-full h-full object-center mx-auto p-1 rounded-sm" src={member1} />
                        </figure>
                        <div className={`w-3/4 mx-auto px-4 py-2 rounded-sm -mt-8 z-30 relative text-[#F2F2F2] ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>
                            <h2 className="text-xl font-semibold text-center font-inter relative">Prince Brown</h2>
                            <p className="text-center font-poppins">Senior Consultant</p>
                            <div className={`w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-[#003366]':'bg-[#FF6F3F]'}`}></div>
                            <div className={`w-2 h-10 absolute right-0 top-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-[#003366]':'bg-[#FF6F3F]'}`}></div>
                        </div>
                    </div>

                    <div className="relative">
                        <figure className="z-10 relative border bg-white rounded-sm h-[300px]">
                            <img className="w-full h-full object-center mx-auto p-1 rounded-sm" src={member2} />
                        </figure>
                        <div className={`w-3/4 mx-auto px-4 py-2 rounded-sm -mt-8 z-30 relative text-[#F2F2F2] ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>
                            <h2 className="text-xl font-semibold text-center font-inter relative">Sara Albert</h2>
                            <p className="text-center font-poppins">Senior Consultant</p>
                            <div className={`w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-[#003366]':'bg-[#FF6F3F]'}`}></div>
                            <div className={`w-2 h-10 absolute right-0 top-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-[#003366]':'bg-[#FF6F3F]'}`}></div>
                        </div>
                    </div>

                    <div className="relative">
                        <figure className="z-10 relative border bg-white rounded-sm h-[300px]">
                            <img className="w-full h-full object-center mx-auto p-1 rounded-sm" src={member3} />
                        </figure>
                        <div className={`w-3/4 mx-auto px-4 py-2 rounded-sm -mt-8 z-30 relative text-[#F2F2F2] ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>
                            <h2 className="text-xl font-semibold text-center font-inter relative">Stock William</h2>
                            <p className="text-center font-poppins">Support Engineer</p>
                            <div className={`w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-[#003366]':'bg-[#FF6F3F]'}`}></div>
                            <div className={`w-2 h-10 absolute right-0 top-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-[#003366]':'bg-[#FF6F3F]'}`}></div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default OurTeam;