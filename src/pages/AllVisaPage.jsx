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
            {loading ? (
                <LoadingPage />
            ) : allVisas.length > 0 ? (
                <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {allVisas.map((visa) => (
                        <VisaCard key={visa._id} visa={visa} />
                    ))}
                </div>
            ) : (
                <NoDataFound />
            )}
        </section>
    );
};

export default AllVisaPage;

