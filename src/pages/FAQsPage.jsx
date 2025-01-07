import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const FAQsPage = () => {
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className='max-w-8xl mx-auto px-5 py-8 md:py-16 '>
                <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
                    <div className="md:basis-1/2">
                        <div>
                            <h2 className={`text-3xl font-semibold mb-5 ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Genral Questions</h2>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">Which payment methods do you accept?</div>
                                <div className="collapse-content font-poppins">
                                    <p>We accept Visa, Mastercard, PayPal, bank transfers, and local payment options like bKash and Nagad. These methods ensure secure and convenient transactions for all users.</p>
                                </div>
                            </div>

                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">What is the registration process?</div>
                                <div className="collapse-content font-poppins">
                                    <p>To register, create an account by providing your name, email, and picture then verify your email. After logging in, complete your profile to access visa application and tracking features.</p>
                                </div>
                            </div>

                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">How can I update my personal information?</div>
                                <div className="collapse-content font-poppins">
                                    <p>You can update your personal information by logging into your account and navigating to the "Profile" or "Account Settings" section. From there, you can edit and save changes to your details, such as your name, contact information, or other necessary updates.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className={`text-3xl font-semibold mb-5 ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Tourist Visa</h2>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">Qualification for a Canada Tourist Visa?</div>
                                <div className="collapse-content font-poppins">
                                    <p>To qualify for a Canada Tourist Visa, you need a valid passport, proof of sufficient funds to cover your stay, and a clear purpose for your visit. Additionally, you must demonstrate strong ties to your home country, such as employment, family, or property, to ensure your return after the visit.</p>
                                </div>
                            </div>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">Do you guarantee a visa approval?</div>
                                <div className="collapse-content font-poppins">
                                    <p>We do not guarantee visa approval, as the decision is solely made by the respective embassy or consulate. However, we assist in preparing and submitting accurate applications to maximize your chances of approval.</p>
                                </div>
                            </div>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">How long does the application process take?</div>
                                <div className="collapse-content font-poppins">
                                    <p>The application process duration varies depending on the visa type and the processing times of the respective embassy or consulate. Typically, it can take anywhere from a few weeks to several months. We recommend applying well in advance to ensure sufficient time for processing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:basis-1/2">
                        <div>
                            <h2 className={`text-3xl font-semibold mb-5 ${isDarkMode ? 'text-[#F2F2F2]' : 'text-[#003366]'}`}>Study Visa</h2>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">What are the requirements for a study visa?</div>
                                <div className="collapse-content font-poppins">
                                    <p>To apply for a study visa, you must provide proof of acceptance from a recognized educational institution, proof of sufficient funds to cover your tuition and living expenses, and a valid passport. You may also need to provide medical and police clearance, depending on the country.</p>
                                </div>
                            </div>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">How long does it take to process a study visa?</div>
                                <div className="collapse-content font-poppins">
                                    <p>Processing times for study visas vary by country, but it typically takes between 4 to 12 weeks. It's recommended to apply as early as possible to allow ample time for approval.</p>
                                </div>
                            </div>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">Can I work while on a study visa?</div>
                                <div className="collapse-content font-poppins">
                                    <p>In many countries, students on a study visa are allowed to work part-time during their studies, usually up to 20 hours per week during term time and full-time during breaks. However, this depends on the country’s regulations, so it's important to check specific work rights.</p>
                                </div>
                            </div>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">Can I extend my study visa?</div>
                                <div className="collapse-content font-poppins">
                                    <p>Yes, most countries allow you to extend your study visa if you continue to meet the visa requirements and are still enrolled in your course. Be sure to apply for an extension well before your current visa expires.</p>
                                </div>
                            </div>
                            <div className={`collapse rounded-md collapse-arrow mb-5 ${isDarkMode ? 'bg-gray-600 text-[#F2F2F2]' : 'bg-gray-100'}`}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium font-inter">Can my family join me on a study visa?</div>
                                <div className="collapse-content font-poppins">
                                    <p>Many countries allow family members (spouse and dependent children) to accompany you on a study visa. However, they may need to apply for a separate visa and meet specific requirements, such as financial proof and health checks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQsPage;