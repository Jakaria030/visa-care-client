import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisaPage = () => {
    const allVisas = useLoaderData();
    // console.log(allVisas);

    return (
        <section className='max-w-8xl mx-auto px-5'>
            <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allVisas.map(visa => <VisaCard
                        key={visa._id}
                        visa={visa}
                    ></VisaCard>)
                }
            </div>
        </section>
    );
};

export default AllVisaPage;