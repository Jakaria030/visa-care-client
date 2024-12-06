import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
    const { _id, countryImage, countryFlag, countryName, visaType, processingTime, ageRestriction, visaFee, applicationMethod, validity, description, requiredDocuments } = useLoaderData();

    const documents = Array.from(requiredDocuments);

    return (
        <section className='max-w-8xl mx-auto px-5 my-10'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 justify-center'>
                <div className='basis-1/2 h-[500px] border-2 p-2 rounded-md'>
                    <img className='w-full h-full mx-auto object-cover rounded-md' src={countryImage} alt='Country Image' />
                </div>
                <div className='basis-1/2 space-y-2 border-2 p-2 rounded-md flex flex-col'>
                    <div className='flex-grow'>
                        <h3 className='text-2xl font-poppins font-semibold'>Country Name: {countryName}</h3>
                        <p className='font-inter'><span className='font-medium text-lg'>Visa Type:</span> {visaType}</p>
                        <p className='font-inter'><span className='font-medium text-lg'>Processing Time:</span> {processingTime}</p>
                        <ul className='list-disc'>
                            <p className='font-medium text-lg'>Required Documents: </p>
                            {
                                documents.map((document, indx) => <li className='ml-10' key={indx}>{document}</li>)
                            }
                        </ul>
                        <p className='font-inter'><span className='font-medium text-lg'>Minimum Age: </span> {ageRestriction} years.</p>
                        <p className='font-inter'><span className='font-medium text-lg'>Visa Fee:</span> ${visaFee}</p>
                        <p className='font-inter'><span className='font-medium text-lg'>Validity: </span>{validity}</p>
                        <p className='font-inter'><span className='font-medium text-lg'>Application Methos: </span> {applicationMethod}</p>
                        <p className='font-inter'><span className='font-medium text-lg'>Description:</span> {description}</p>
                    </div>
                    <div>
                        <button className='w-full px-4 py-1 sm:py-2 rounded-sm bg-[#003366] text-[#F2F2F2] font-semibold font-inter active:scale-95'>Apply For The Vis</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaDetails;