import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
    const {_id, countryImage, countryFlag, countryName, visaType, visaFee} = visa;
    return (
        <div className='flex flex-col items-center border-2 rounded-md hover:shadow-lg'>
            <div className='border-b-2 border-[#FF6F3F] rounded-t-md'>
                <img className='w-full rounded-t-md country-image' src={countryImage} alt='Country Image' />
            </div>
            <div className='max-w-20 border-2 p-1 bg-[#F2F2F2] border-[#FF6F3F] rounded-full -mt-10'>
                <img className='w-full' src={countryFlag} alt='Country Flag' />
            </div>
            <div className='pt-2 pb-5 text-center'>
                <h3 className='text-2xl font-poppins font-semibold text-[#333333] mb-2'>{countryName}</h3>
                <p className='text-[#4A4A4A] font-inter'>{visaType}</p>
                <p className='text-[#4A4A4A] font-inter'>Visa Fee: ${visaFee}</p>
                <Link to={`/visaDetails/${_id}`}><button className='px-4 sm:py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] font-inter mt-3'>See Details</button></Link>
            </div>
        </div>
    );
};

export default VisaCard;