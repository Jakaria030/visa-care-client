import immigration from '../assets/immigration.png';
import easyApplication from '../assets/comfort.png';
import document from '../assets/passport.png';
import interview from '../assets/interview.png';
import { Zoom } from 'react-awesome-reveal';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const OurOfferings = () => {
    const {isDarkMode} = useContext(AuthContext);

    return (
        <section className="max-w-8xl mx-auto px-5 py-10">
            <Zoom>
                <div className="my-8 sm:my-10 flex items-center justify-center">
                    <h2 className="text-3xl font-poppins font-semibold"> <span className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]' }`}>What we</span> <span className="text-[#FF6F3F]">provide</span> </h2>
                </div>
            </Zoom>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Zoom>
                    <div className={`${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-200'} p-5 space-y-4 rounded-md hover:shadow-lg`}>
                        <div className='size-32 mx-auto hover:scale-105'>
                            <img className='w-full' src={immigration} />
                        </div>
                        <h3 className='text-xl font-poppins font-medium'> Responsibilities for Immigration Procedures </h3>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-200'} p-5 space-y-4 rounded-md hover:shadow-lg`}>
                        <div className='size-32 mx-auto hover:scale-105'>
                            <img className='w-full' src={easyApplication} />
                        </div>
                        <h3 className='text-xl font-poppins font-medium'> Simple & Fast Visa Application </h3>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-200'} p-5 space-y-4 rounded-md hover:shadow-lg`}>
                        <div className='size-32 mx-auto hover:scale-105'>
                            <img className='w-full' src={document} />
                        </div>
                        <h3 className='text-xl font-poppins font-medium'> Required Documents
                            Support </h3>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-200'} p-5 space-y-4 rounded-md hover:shadow-lg`}>
                        <div className='size-32 mx-auto hover:scale-105'>
                            <img className='w-full' src={interview} />
                        </div>
                        <h3 className='text-xl font-poppins font-medium'> Skilled & Professional
                            Consultants </h3>
                    </div>
                </Zoom>
            </div>
        </section>
    );
};

export default OurOfferings;