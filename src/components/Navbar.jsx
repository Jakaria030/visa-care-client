import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { CiDark, CiLight } from 'react-icons/ci';

const Navbar = () => {
    const { user, signOutUser, isDarkMode, setIsDarkMode } = useContext(AuthContext);
    const [isHover, setIsHover] = useState(false);
    const { pathname, state } = useLocation();
    const navigate = useNavigate();

    const links = <>
        <NavLink to='/' className={`hover:text-[#FF6F3F] transition-colors duration-100 ${pathname === '/homePage' && 'text-[#FF6F3F]'}`}>Home</NavLink>
        <NavLink to='/allVisaPage' className='hover:text-[#FF6F3F] transition-colors duration-100'>All visas</NavLink>
        <NavLink to='/addVisaPage' className='hover:text-[#FF6F3F] transition-colors duration-100'>Add visa</NavLink>

        {
            user && <><NavLink to='/myAddedVisaPage' className='hover:text-[#FF6F3F] transition-colors duration-100'>My visas</NavLink>
                <NavLink to='/myVisaApplicationPage' className='hover:text-[#FF6F3F] transition-colors duration-100'>My applications</NavLink></>
        }

        <NavLink to='/faqs' className='hover:text-[#FF6F3F] transition-colors duration-100'>FAQs</NavLink>
        <NavLink to='/contact' className='hover:text-[#FF6F3F] transition-colors duration-100'>Contact Us</NavLink>

        {
            (!user) && <div className='flex flex-col space-y-1'><NavLink to='/loginPage' className='hover:text-[#FF6F3F] transition-colors duration-100 sm:hidden'>Login</NavLink>
                <NavLink to='/registerPage' className='hover:text-[#FF6F3F] transition-colors duration-100 sm:hidden'>Register</NavLink></div>
        }
    </>;

    return (
        <div className={`${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#003366]'} text-[#F2F2F2] sticky top-0 z-50`}>
            <section className='max-w-8xl mx-auto px-5'>
                <div className='navbar mx-0 px-0 py-5'>
                    {/* left part */}
                    <div className='navbar-start space-x-3 lg:space-x-0'>
                        <div className='dropdown'>
                            <div tabIndex={0} role='button' className='lg:hidden'>
                                <GiHamburgerMenu className='text-2xl' />
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-md dropdown-content rounded-box z-[1] mt-5 w-60 space-y-1 px-3 py-4 shadow bg-[#003366] font-inter'>
                                {links}
                            </ul>
                        </div>

                        <Link to='/' className='inline-block'>
                            <div className='flex items-center gap-3'>
                                <img className='size-10 sm:size-12' src={logo} alt="Logo" />
                                <p className='text-xl text-[#F2F2F2] font-poppins font-bold'><span>Visa</span><span className='text-[#FF6F3F]'>Care</span></p>
                            </div>
                        </Link>
                    </div>

                    {/* center part */}
                    <div className='navbar-center hidden lg:flex'>
                        <ul className='menu menu-horizontal px-1 space-x-5 text-base font-inter'>
                            {links}
                        </ul>
                    </div>

                    {/* right part */}
                    <div className='relative navbar-end'>
                        {/* toggle dark/light mode */}
                        <label className={`swap swap-rotate ${user && "mr-3"} sm:mr-5`}>
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />

                            {/* sun icon */}
                            <CiDark onClick={() => setIsDarkMode(true)} className="swap-on h-10 w-10 fill-current"></CiDark>

                            {/* moon icon */}
                            <CiLight onClick={() => setIsDarkMode(false)} className="swap-off h-10 w-10 fill-current"></CiLight>
                        </label>

                        {
                            user ? <div onMouseEnter={() => setIsHover(true)} className='size-10 sm:size-12 rounded-full ring-2 ring-[#FF6F3F] flex items-center justify-center cursor-pointer'>
                                {user?.photoURL !== "undefined" ? <img className='size-full rounded-full p-1' src={user?.photoURL} alt="User" /> : <FaUserCircle className='text-5xl p-1' />}
                            </div> : <div className='sm:flex items-center justify-end gap-3 cursor-pointer hidden'>
                                <NavLink to='/loginPage'><button className='px-4 py-1 sm:py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] font-inter'>Login</button></NavLink>
                                <NavLink to='/registerPage' state={state}><button className='px-4 py-1 sm:py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] font-inter'>Register</button></NavLink>
                            </div>
                        }

                        {
                            isHover && <div onMouseLeave={() => setIsHover(false)} className='absolute top-[70px] flex flex-col items-center gap-2 bg-[#003366] w-40 rounded-md p-2'>
                                <p>{user?.displayName}</p>
                                <button onClick={() => {
                                    signOutUser();
                                    navigate('/');
                                    setIsHover(false);
                                }} className='px-4 py-1 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] font-inter'>Logout</button>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;