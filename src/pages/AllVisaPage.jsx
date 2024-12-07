import VisaCard from "../components/VisaCard";
import NoDataFound from "../components/NoDataFound";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AllVisaPage = () => {
    const [allVisas, setAllVisas] = useState([]);
    // console.log(allVisas);
    const {root_dir} = useContext(AuthContext);

    useEffect(() => {
        fetch(`${root_dir}/visas`)
        .then(res => res.json())
        .then(data => {
            setAllVisas(data)
            handleLoading(false)
        })
    }, [])

    return (
        <section className='max-w-8xl mx-auto px-5'>
            {
                allVisas.length > 0 ? <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allVisas.map(visa => <VisaCard
                        key={visa._id}
                        visa={visa}
                    ></VisaCard>)
                }
                </div> : <NoDataFound></NoDataFound>
            }
        </section>
    );
};

export default AllVisaPage;