import immigration from '../assets/immigration.png';
import easyApplication from '../assets/comfort.png';
import document from '../assets/passport.png';
import interview from '../assets/interview.png';

const OurOfferings = () => {
    return (
        <section className="max-w-8xl mx-auto px-5 my-10">
            <div className="my-8 sm:my-10 flex items-center justify-center">
                <h2 className="text-3xl font-poppins font-semibold"> <span className="text-[#003366]">What we</span> <span className="text-[#FF6F3F]">provide</span> </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className='bg-gray-200 p-5 space-y-4 rounded-md hover:shadow-lg'>
                    <div className='size-32 mx-auto hover:scale-105'>
                        <img className='w-full' src={immigration} />
                    </div>
                    <h3 className='text-xl font-poppins font-medium'> Responsibilities for Immigration Procedures </h3>
                </div>
                <div className='bg-gray-200 p-5 space-y-4 rounded-md hover:shadow-lg'>
                    <div className='size-32 mx-auto hover:scale-105'>
                        <img className='w-full' src={easyApplication} />
                    </div>
                    <h3 className='text-xl font-poppins font-medium'> Simple & Fast Visa Application </h3>
                </div>
                <div className='bg-gray-200 p-5 space-y-4 rounded-md hover:shadow-lg'>
                    <div className='size-32 mx-auto hover:scale-105'>
                        <img className='w-full' src={document} />
                    </div>
                    <h3 className='text-xl font-poppins font-medium'> Required Documents
                    Support </h3>
                </div>
                <div className='bg-gray-200 p-5 space-y-4 rounded-md hover:shadow-lg'>
                    <div className='size-32 mx-auto hover:scale-105'>
                        <img className='w-full' src={interview} />
                    </div>
                    <h3 className='text-xl font-poppins font-medium'> Skilled & Professional
                    Consultants </h3>
                </div>
            </div>
        </section>
    );
};

export default OurOfferings;