import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const VisaCard = ({ visa }) => {
    const {_id, countryImage, countryFlag, countryName, visaType, visaFee} = visa;
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={`flex flex-col items-center rounded-md hover:shadow-lg ${isDarkMode ? 'bg-gray-600':'bg-[#003366]/20'}`}>
            <div className='border-b-2 w-full h-44 border-[#FF6F3F] rounded-t-md relative'>
                <img className='w-full h-full object-cover rounded-t-md country-image' src={countryImage} alt='Country Image' />
                <p className='text-[#F2F2F2] font-inter absolute top-3 right-3 bg-[#FF6F3F] px-3 py-1 rounded-sm'>${visaFee}</p>
            </div>
            <div className='max-w-20 border-2 p-1 bg-[#F2F2F2] border-[#FF6F3F] rounded-full -mt-10 z-30'>
                <img className='w-full' src={countryFlag} alt='Country Flag' />
            </div>
            <div className='pt-2 pb-5 text-center'>
                <h3 className={`text-2xl font-poppins font-semibold ${isDarkMode ? "text-[#F2F2F2]" : "text-[#333333]"}  mb-2`}>{countryName}</h3>
                <p className={`${isDarkMode ? "text-[#F2F2F2]" : "text-[#4A4A4A]"} font-inter`}>{visaType}</p>
                <Link to={`/visaDetails/${_id}`}><button className={`px-4 sm:py-2 rounded-sm text-[#F2F2F2] active:scale-95 font-semibold font-inter mt-3 ${isDarkMode ? 'bg-[#FF6F3F]':'bg-[#003366]'}`}>See Details</button></Link>
            </div>
        </div>
    );
};

export default VisaCard;