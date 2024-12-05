import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <section className='bg-[#003366] text-[#F2F2F2] py-10'>
            <footer className='max-w-8xl mx-auto px-5'>
                {/* footer top */}
                <div className='flex flex-col sm:flex-row justify-between gap-5'>
                    {/* column 1 */}
                    <div className='basis-5/12 space-y-5'>
                        <Link to='/' className='inline-block'>
                            <div className='flex items-center gap-3'>
                                <img className='size-10 sm:size-12' src={logo} alt="Logo" />
                                <a className='text-xl text-[#F2F2F2] font-poppins font-bold'><span>Visa</span><span className='text-[#FF6F3F]'>Care</span></a>
                            </div>
                        </Link>
                        <p className='sm:w-3/4 mt-2 text-[#F2F2F2] font-inter'>
                            Your trusted partner for visa applications and tracking. We simplify the process so you can focus on your journey.
                        </p>
                    </div>

                    {/* column 2 */}
                    <div className='basis-4/12'>
                        <h3 className='text-[#FF6F3F] font-bold text-lg font-poppins'>Quick Links</h3>
                        <ul className='mt-2 space-y-2 font-inter'>
                            <li><a href='/homePage' className='hover:text-[#FF6F3F]'>Home</a></li>
                            <li><a href='#' className='hover:text-[#FF6F3F]'>Services</a></li>
                            <li><a href='#' className='hover:text-[#FF6F3F]'>Contact Us</a></li>
                            <li><a href='#' className='hover:text-[#FF6F3F]'>About</a></li>
                        </ul>
                    </div>

                    {/* column 3 */}
                    <div className="3/12">
                        <h3 className='text-[#FF6F3F] font-bold text-lg font-poppins'>Follow Us</h3>
                        <p className='mt-2 text-[#F2F2F2] font-inter'>Get the latest updates and offers:</p>
                        
                        <div className='flex items-center gap-3 mt-5'>
                            <FaFacebook className='text-2xl cursor-pointer'/>
                            <FaTwitter className='text-2xl cursor-pointer'/>
                            <FaInstagramSquare className='text-2xl cursor-pointer'/>
                            <FaGithub className='text-2xl cursor-pointer'/>
                        </div>
                    </div>
                </div>

                {/* footer bottom */}
                <div className='mt-10 text-center text-[#B3B3B3] text-sm'>
                    <p className='font-inter'>© 2024 VisaCare. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;