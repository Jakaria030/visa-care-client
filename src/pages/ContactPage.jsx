import { FiPhoneCall } from "react-icons/fi";
import office from "../assets/office.jpg";
import { MdMail, MdOutlineWatchLater } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ContactPage = () => {
    const{isDarkMode} = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className='max-w-8xl mx-auto px-5 py-8 md:py-16 '>
                <h2 className="text-3xl text-center font-inter font-semibold "><span className={`${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Contact</span> <span className="text-[#FF6F3F]">Us</span></h2>

                <div className="flex flex-col md:flex-row gap-10 mt-8 md:mt-10">
                    <figure>
                        <img className="w-full sm:h-[480px] object-cover border-2 rounded-md" src={office} />
                    </figure>

                    <div className="bg-[#003366]/10 border-2 rounded-md">
                        <form className="p-5 sm:p-8 space-y-2">
                            <h2 className={`text-2xl font-inter font-semibold mb-3 ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>If you have any questions, don't hesitate to reach out.</h2>
                            <input type="text" placeholder="Your Full Name" className="input input-bordered w-full" />

                            <input type="email" placeholder="Your Email Address" className="input input-bordered w-full" />

                            <input type="text" placeholder="Subject" className="input input-bordered w-full" />

                            <textarea className="textarea w-full textarea-bordered" placeholder="Message"></textarea>

                            <button className={`px-4 py-2 rounded-sm text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] w-full font-inter ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>Submit Here</button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 md:mt-16">
                    <div className="border p-10 rounded-md space-y-5">
                        <div className={`p-5 rounded-sm w-16 mx-auto ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]/20'}`}>
                            <FiPhoneCall className={`text-2xl flex items-center justify-center ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`} />
                        </div>
                        <div className="space-y-1">
                            <h3 className={`text-xl font-bold font-inter text-center ${isDarkMode ? 'text-[#F2F2F2]': 'text-[#003366]'}`}>Call Us On</h3>
                            <p className={`text-center font-medium font-poppins ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>+8801725490784</p>
                        </div>
                    </div>
                    <div className="border p-10 rounded-md space-y-5">
                        <div className={`p-5 rounded-sm w-16 mx-auto ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]/20'}`}>
                            <MdMail className={`text-2xl flex items-center justify-center ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`} />
                        </div>
                        <div className="space-y-1">
                            <h3 className={`text-xl font-bold font-inter text-center ${isDarkMode ? 'text-[#F2F2F2]': 'text-[#003366]'}`}>Email</h3>
                            <p className={`text-center font-medium font-poppins ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>jakariag84@gmail.com</p>
                        </div>
                    </div>
                    <div className="border p-10 rounded-md space-y-5">
                        <div className={`p-5 rounded-sm w-16 mx-auto ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]/20'}`}>
                            <MdOutlineWatchLater className={`text-2xl flex items-center justify-center ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`} />
                        </div>
                        <div className="space-y-1">
                            <h3 className={`text-xl font-bold font-inter text-center ${isDarkMode ? 'text-[#F2F2F2]': 'text-[#003366]'}`}>Opening Hours</h3>
                            <p className={`text-center font-medium font-poppins ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Sat-Thu 9:00am - 10:00pm</p>
                        </div>
                    </div>
                    <div className="border p-10 rounded-md space-y-5">
                        <div className={`p-5 rounded-sm w-16 mx-auto ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]/20'}`}>
                            <FaShareNodes className={`text-2xl flex items-center justify-center ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`} />
                        </div>
                        <div className="space-y-1">
                            <h3 className={`text-xl font-bold font-inter text-center ${isDarkMode ? 'text-[#F2F2F2]': 'text-[#003366]'}`}>Share</h3>
                            <p className={`text-center font-medium font-poppins ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Facebook, Twitter, Instagram</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;