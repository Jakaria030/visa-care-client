import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const LatestVisas = () => {

    const [latestVisas, setLatestVisas] = useState([]);

    const { root_dir, isDarkMode } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${root_dir}/visas?latest=6`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setLatestVisas(data))
    }, [])

    return (
        <section className="max-w-8xl mx-auto px-5 my-10">
            <div className="my-8 sm:my-10 flex items-center justify-center">
                <Zoom right>
                    <h2 className="text-3xl font-poppins font-semibold"> <span className={`${isDarkMode ? 'text-white' : 'text-[#003366]'}`}>Latest</span> <span className="text-[#FF6F3F]">Visa</span> </h2>
                </Zoom>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    latestVisas.map(latestVisa => <div key={latestVisa._id} className={`${isDarkMode && 'border-gray-600'} flex flex-col border-2 rounded-md hover:shadow-lg`}>
                        <div className='border-b-2 w-full h-44 border-[#FF6F3F] rounded-t-md'>
                            <img className='w-full h-full object-cover rounded-t-md country-image' src={latestVisa.countryImage} alt='Country Image' />
                        </div>
                        <div className='max-w-20 border-2 mx-auto p-1 bg-[#F2F2F2] border-[#FF6F3F] rounded-full -mt-10'>
                            <img className='w-full' src={latestVisa.countryFlag} alt='Country Flag' />
                        </div>
                        <div className='flex-grow flex flex-col p-2'>
                            <div className='flex-grow'>
                                <h3 className={`${isDarkMode ? 'text-[#E0E0E0]' : 'text-slate-900'} text-2xl text-center font-poppins font-semibold mb-2`}>{latestVisa.countryName}</h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-[#121212'} font-inter`}><span>Visa Type:</span> {latestVisa.visaType}</p>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-[#121212'} font-inter`}><span>Processing Time:</span> {latestVisa.processingTime}</p>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-[#121212'} font-inter`}><span>Validity:</span> {latestVisa.validity}</p>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-[#121212'} font-inter`}><span>Application Method:</span> {latestVisa.applicationMethod}</p>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-[#121212'} font-inter`}><span>Visa Fee:</span> ${latestVisa.visaFee}</p>
                            </div>
                            <div className='mt-3 flex gap-5'>
                                <Link to={`/visaDetails/${latestVisa._id}`} className={`${isDarkMode ? 'bg-[#FF6F3F]/75' : 'bg-[003366]'} w-full text-center px-4 py-2 rounded-sm text-[#F2F2F2] active:scale-95 font-semibold font-inter`}>See Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Zoom>
                <div className="my-8 flex justify-center">
                    <Link to='/allVisaPage' className='text-center px-4 py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] active:scale-95 font-semibold font-inter'>See All Visas</Link>
                </div>
            </Zoom>
        </section>
    );
};

export default LatestVisas;