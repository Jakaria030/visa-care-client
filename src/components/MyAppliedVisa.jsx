
const MyAppliedVisa = ({ myAppliedVisa }) => {
    const { _id, countryImage, countryFlag, countryName, processingTime, validity, applicationMethod, visaType, visaFee, applyDate, email, firstName, lastName } = myAppliedVisa;

    return (
        <div className='flex flex-col border-2 rounded-md hover:shadow-lg'>
            <div className='border-b-2 w-full h-44 border-[#FF6F3F] rounded-t-md'>
                <img className='w-full h-full object-cover rounded-t-md country-image' src={countryImage} alt='Country Image' />
            </div>
            <div className='max-w-20 border-2 mx-auto p-1 bg-[#F2F2F2] border-[#FF6F3F] rounded-full -mt-10'>
                <img className='w-full' src={countryFlag} alt='Country Flag' />
            </div>
            <div className='flex-grow flex flex-col p-2'>
                <div className='flex-grow'>
                    <h3 className='text-2xl text-center font-poppins font-semibold text-[#333333] mb-2'>{countryName}</h3>
                    <h4 className='text-[#4A4A4A] font-inter'>Applicant's Name: {firstName + ' ' + lastName} </h4>
                    <p className='text-[#4A4A4A] font-inter'>Applicant's Email: {email} </p>
                    <p className='text-[#4A4A4A] font-inter'><span>Visa Type:</span> {visaType}</p>
                    <p className='text-[#4A4A4A] font-inter'><span>Processing Time:</span> {processingTime}</p>
                    <p className='text-[#4A4A4A] font-inter'><span>Validity:</span> {validity}</p>
                    <p className='text-[#4A4A4A] font-inter'><span>Application Method:</span> {applicationMethod}</p>
                    <p className='text-[#4A4A4A] font-inter'><span>Visa Fee:</span> ${visaFee}</p>
                    <p className='text-[#4A4A4A] font-inter'><span>Applied Date:</span> {applyDate}</p>
                </div>
                <div className='mt-3'>
                    <button className='w-full px-4 sm:py-2 rounded-sm bg-[#003366] text-[#F2F2F2] active:scale-95 font-semibold font-inter'>Cancle Visa</button>
                </div>
            </div>
        </div>
    );
};

export default MyAppliedVisa;