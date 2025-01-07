import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyAppliedVisa = ({ myAppliedVisa, handleCancelVisa }) => {
    const { _id, countryImage, countryFlag, countryName, processingTime, validity, applicationMethod, visaType, visaFee, applyDate, email, firstName, lastName } = myAppliedVisa;
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={`flex flex-col rounded-md hover:shadow-lg ${isDarkMode ? 'bg-gray-600':'bg-[#003366]/20'}`}>
            <div className='border-b-2 w-full h-44 border-[#FF6F3F] rounded-t-md'>
                <img className='w-full h-full object-cover rounded-t-md country-image' src={countryImage} alt='Country Image' />
            </div>

            <div className='max-w-20 border-2 mx-auto p-1 bg-[#F2F2F2] border-[#FF6F3F] rounded-full -mt-10'>
                <img className='w-full' src={countryFlag} alt='Country Flag' />
            </div>

            <div className='flex-grow flex flex-col'>
                <div className='flex-grow px-5'>
                    <h3 className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} text-2xl text-center font-poppins font-semibold my-3`}>{countryName}</h3>
                    <h4 className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}>Applicant's Name: {firstName + ' ' + lastName} </h4>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}>Applicant's Email: {email} </p>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}><span>Visa Type:</span> {visaType}</p>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}><span>Processing Time:</span> {processingTime}</p>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}><span>Validity:</span> {validity}</p>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}><span>Application Method:</span> {applicationMethod}</p>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}><span>Visa Fee:</span> ${visaFee}</p>
                    <p className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#333333]'} font-inter`}><span>Applied Date:</span> {applyDate}</p>
                </div>
                <div className='my-3 mx-auto'>
                    <button onClick={() => handleCancelVisa(_id)} className={`w-full px-4 py-2 rounded-sm text-[#F2F2F2] active:scale-95 font-semibold font-inter ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>Cancle Visa</button>
                </div>
            </div>
        </div>
    );
};

export default MyAppliedVisa;