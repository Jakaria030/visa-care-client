import VisaCard from "../components/VisaCard";
import NoDataFound from "../components/NoDataFound";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "./LoadingPage";
import { FiChevronDown } from "react-icons/fi";


const AllVisaPage = () => {
    const [allVisas, setAllVisas] = useState([]);
    // console.log(allVisas);
    const { root_dir, isDarkMode } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const handleSelectedVisaType = (e) => {
        let selectedValue = e.target.textContent;

        if (selectedValue === 'All Visa') {
            selectedValue = "";
        }
        fetch(`${root_dir}/visas?filterByVisaType=${selectedValue}`)
            .then(res => res.json())
            .then(data => {
                setAllVisas(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetch(`${root_dir}/visas`)
            .then(res => res.json())
            .then(data => {
                setAllVisas(data);
                setLoading(false);
            })
    }, [])


    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className="max-w-8xl mx-auto px-5 py-8 md:py-16">
                <div className="flex items-center justify-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className={`px-4 py-2 rounded-md font-inter w-52 text-center text-white flex items-center justify-center gap-1 ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}><p>Filter By Visa Type</p> <FiChevronDown className="text-2xl mt-1" /></div>
                        <ul tabIndex={0} className={`dropdown-content menu rounded-md z-[1] w-52 p-2 shadow  ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-base-100'}`}>
                            <li><a onClick={handleSelectedVisaType}>All Visa</a></li>
                            <li><a onClick={handleSelectedVisaType}>Tourist Visa</a></li>
                            <li><a onClick={handleSelectedVisaType}>Student Visa</a></li>
                            <li><a onClick={handleSelectedVisaType}>Official Visa</a></li>
                        </ul>
                    </div>
                </div>
                {loading ? (
                    <LoadingPage />
                ) : allVisas.length > 0 ? (
                    <section>
                        <div className="my-8 sm:my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {allVisas.map((visa) => (
                                <VisaCard key={visa._id} visa={visa} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <NoDataFound />
                )}
            </section>
        </div>
    );
};

export default AllVisaPage;

