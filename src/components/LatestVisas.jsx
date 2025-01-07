import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import VisaCard from "./VisaCard";

const LatestVisas = () => {

    const [latestVisas, setLatestVisas] = useState([]);

    const { root_dir, isDarkMode } = useContext(AuthContext);

    useEffect(() => {
        fetch(`${root_dir}/visas?latest=6`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setLatestVisas(data))
    }, [])

    return (
        <section className="max-w-8xl mx-auto px-5 my-8 md:my-16">
            <div className="my-8 sm:my-10 flex items-center justify-center">
                <Zoom right>
                    <h2 className="text-3xl font-poppins font-semibold"> <span className={`${isDarkMode ? 'text-white' : 'text-[#003366]'}`}>Latest</span> <span className="text-[#FF6F3F]">Visa</span> </h2>
                </Zoom>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    latestVisas.map(latestVisa => <VisaCard key={latestVisa._id} visa={latestVisa}></VisaCard>)
                }
            </div>
            <Zoom>
                <div className="my-8 sm:my-10 flex justify-center">
                    <Link to='/allVisaPage' className='text-center px-4 py-2 rounded-sm bg-[#FF6F3F] text-[#F2F2F2] active:scale-95 font-semibold font-inter'>See All Visas</Link>
                </div>
            </Zoom>
        </section>
    );
};

export default LatestVisas;