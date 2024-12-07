import { Link } from 'react-router-dom';
import animatedRocket from '../assets/rocket.gif';

const ErrorPage = () => {
    return (
        <div className="max-w-4xl h-screen mx-auto p-5 content-center">
            <div className='flex flex-col items-center justify-center p-10 sm:p-20 border-4 '>
                <div className='size-40'>
                    <img src={animatedRocket} alt="Rocket" />
                </div>
                <h1 className='text-xl sm:text-3xl font-poppins font-bold text-center'>OPPS! <br /> 404 Page Not Found.</h1>

                <Link to='/' className='px-4 py-2 bg-[#003366] text-white font-inter font-medium rounded-sm mt-5'>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;