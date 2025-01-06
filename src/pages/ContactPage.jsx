import { FiPhoneCall } from "react-icons/fi";
import office from "../assets/office.jpg";
import { MdMail, MdOutlineWatchLater } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <section className='max-w-8xl mx-auto px-5 my-5'>
            <h2 className="text-2xl md:text-3xl text-center font-inter font-semibold my-10"><span className="text-[#003366]">Contact</span> <span className="text-[#FF6F3F]">Us</span></h2>


            <div className="flex flex-col md:flex-row gap-10">
                <figure>
                    <img className="w-full sm:h-[480px] object-cover" src={office} />
                </figure>

                <div className="bg-[#003366]/10">
                    <form className="p-5 sm:p-8 space-y-2">
                        <h2 className="text-2xl font-inter text-[#003366] font-semibold mb-3">If you have any questions, don't hesitate to reach out.</h2>
                        <input type="text" placeholder="Your Full Name" className="input input-bordered w-full" />

                        <input type="email" placeholder="Your Email Address" className="input input-bordered w-full" />

                        <input type="text" placeholder="Subject" className="input input-bordered w-full" />

                        <textarea className="textarea w-full textarea-bordered" placeholder="Message"></textarea>

                        <button className='px-4 py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] font-semibold hover:bg-[#FF6F3FDE] w-full font-inter'>Submit Here</button>
                    </form>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
                <div className="border p-10 rounded-md space-y-1">
                    <div className="border p-5 rounded-sm w-16 bg-[#003366]/20 mx-auto">
                        <FiPhoneCall className="text-2xl flex items-center justify-center text-[#003366]"/>
                    </div>
                    <h3 className="text-xl font-bold font-inter text-[#003366] text-center">Call Us On</h3>
                    <p className="text-center font-medium font-poppins text-[#003366]">+8801725490784</p>
                </div>
                <div className="border p-10 rounded-md space-y-1">
                    <div className="border p-5 rounded-sm w-16 bg-[#003366]/20 mx-auto">
                        <MdMail className="text-2xl flex items-center justify-center text-[#003366]"/>
                    </div>
                    <h3 className="text-xl font-bold font-inter text-[#003366] text-center">Email</h3>
                    <p className="text-center font-medium font-poppins text-[#003366]">jakariag84@gmail.com</p>
                </div>
                <div className="border p-10 rounded-md space-y-1">
                    <div className="border p-5 rounded-sm w-16 bg-[#003366]/20 mx-auto">
                        <MdOutlineWatchLater className="text-2xl flex items-center justify-center text-[#003366]"/>
                    </div>
                    <h3 className="text-xl font-bold font-inter text-[#003366] text-center">Opening Hours</h3>
                    <p className="text-center font-medium font-poppins text-[#003366]">Sat-Thu 9:00am - 10:00pm</p>
                </div>
                <div className="border p-10 rounded-md space-y-1">
                    <div className="border p-5 rounded-sm w-16 bg-[#003366]/20 mx-auto">
                        <FaShareNodes className="text-2xl flex items-center justify-center text-[#003366]"/>
                    </div>
                    <h3 className="text-xl font-bold font-inter text-[#003366] text-center">Share</h3>
                    <p className="text-center font-medium font-poppins text-[#003366]">Facebook, Twitter, Instagram</p>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;