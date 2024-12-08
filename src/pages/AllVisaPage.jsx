import VisaCard from "../components/VisaCard";
import NoDataFound from "../components/NoDataFound";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "./LoadingPage";
const AllVisaPage = () => {
    const [allVisas, setAllVisas] = useState([]);
    // console.log(allVisas);
    const { root_dir } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const handleSelectedVisaType = (e) => {
        let selectedValue = e.target.textContent;

        if(selectedValue === 'All Visa'){
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
        <section className="max-w-8xl mx-auto px-5">
            <div className="dropdown mt-10">
                <div tabIndex={0} role="button" className="px-4 py-2 rounded-md bg-[#003366] font-inter text-white">Filter By Visa Type</div>
                <ul tabIndex={0} className="dropdown-content menu rounded-md bg-base-100 z-[1] w-52 p-2 shadow">
                    <li><a onClick={handleSelectedVisaType}>All Visa</a></li>
                    <li><a onClick={handleSelectedVisaType}>Tourist Visa</a></li>
                    <li><a onClick={handleSelectedVisaType}>Student Visa</a></li>
                    <li><a onClick={handleSelectedVisaType}>Official Visa</a></li>
                </ul>
            </div>
            {loading ? (
                <LoadingPage />
            ) : allVisas.length > 0 ? (
                <section>
                    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {allVisas.map((visa) => (
                            <VisaCard key={visa._id} visa={visa} />
                        ))}
                    </div>
                </section>
            ) : (
                <NoDataFound />
            )}
        </section>
    );
};

export default AllVisaPage;

