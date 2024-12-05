import logo from '../assets/logo.png';

const LoadingPage = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center relative'>
            <div className='size-28 border-4 border-[#FF6F3F] rounded-full bouncing'></div>
            <img className='size-20 absolute' src={logo} alt="Logo" />
        </div>
    );
};

export default LoadingPage;