import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {

    const links = <>
        <NavLink to='/' className='hover:text-[#FF6F3F] transition-colors duration-150'>Home</NavLink>
        <NavLink to='/allVisaPage' className='hover:text-[#FF6F3F] transition-colors duration-150'>All visas</NavLink>
        <NavLink to='/addVisaPage' className='hover:text-[#FF6F3F] transition-colors duration-150'>Add visa</NavLink>
        <NavLink to='/myAddedVisaPage' className='hover:text-[#FF6F3F] transition-colors duration-150'>My added visas</NavLink>
        <NavLink to='/myVisaApplicationPage' className='hover:text-[#FF6F3F] transition-colors duration-150'>My visa applications</NavLink>
        
        <Link to='/loginPage' className='hover:text-[#FF6F3F] transition-colors duration-150 sm:hidden'>Login</Link>
        <Link to='/registerPage' className='hover:text-[#FF6F3F] transition-colors duration-150 sm:hidden'>Register</Link>
    </>;

    return (
        <div className='bg-[#003366] text-[#F2F2F2] sticky top-0 z-50'>
            <section className='max-w-8xl mx-auto px-5'>
                <div className='navbar mx-0 px-0 py-5'>
                    {/* left part */}
                    <div className='navbar-start space-x-3 lg:space-x-0'>
                        <div className='dropdown'>
                            <div tabIndex={0} role='button' className='lg:hidden'>
                                <GiHamburgerMenu className='text-2xl'/>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-md dropdown-content rounded-box z-[1] mt-5 w-60 space-y-1 p-2 shadow bg-[#003366] font-inter'>
                                {links}
                            </ul>
                        </div>

                        <Link to='/' className='inline-block'>
                            <div className='flex items-center gap-3'>
                                <img className='size-10 sm:size-12' src={logo} alt="Logo" />
                                <a className='text-xl text-[#F2F2F2] font-poppins font-bold'><span>Visa</span><span className='text-[#FF6F3F]'>Care</span></a>
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
                    <div className='hidden sm:flex navbar-end items-center justify-end gap-3'>
                        <NavLink to='/loginPage'><button className='px-4 py-1 sm:py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] font-inter'>Login</button></NavLink>
                        <NavLink to='/registerPage'><button className='px-4 py-1 sm:py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] font-inter'>Register</button></NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;