import { useContext } from "react";
import { Bounce } from "react-awesome-reveal";
import { AuthContext } from "../provider/AuthProvider";

const Statistics = () => {
    const {isDarkMode} = useContext(AuthContext);

    return (
        <section className={`${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#003366]/90'}  text-[#F2F2F2]`}>
                <div className="max-w-8xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-10 my-10">
            <Bounce cascade>
                    <div className='flex flex-col items-center justify-center py-5 sm:py-10 md:py-16 lg:py-20'>
                        <h1 className="text-3xl font-bold font-poppins">100+</h1>
                        <h3 className="text-lg font-inter">Visa Categories</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center py-5 sm:py-10 md:py-16 lg:py-20'>
                        <h1 className="text-3xl font-bold font-poppins">98%</h1>
                        <h3 className="text-lg font-inter">Satisfication Rate</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center py-5 sm:py-10 md:py-16 lg:py-20'>
                        <h1 className="text-3xl font-bold font-poppins">300+</h1>
                        <h3 className="text-lg font-inter">Trusted Clients</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center py-5 sm:py-10 md:py-16 lg:py-20'>
                        <h1 className="text-3xl font-bold font-poppins">2.9k</h1>
                        <h3 className="text-lg font-inter">Visa Process</h3>
                    </div>
            </Bounce>
                </div>
        </section>
    );
};

export default Statistics;