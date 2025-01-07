import MyAppliedVisa from "../components/MyAppliedVisa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NoDataFound from "../components/NoDataFound";
import Swal from "sweetalert2";
import LoadingPage from "./LoadingPage";
import { IoIosSearch } from "react-icons/io";

const MyVisaApplicationPage = () => {
    const [myAppliedVisas, setMyAppliedVisa] = useState([]);
    // console.log(myAppliedVisas);
    const { user, root_dir, isDarkMode } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${root_dir}/applications/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAppliedVisa(data);
                setLoading(false);
            })
    }, [])

    // handle cancel visa
    const handleCancelVisa = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${root_dir}/applications/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your application has been deleted.",
                                icon: "success"
                            });

                            const remAppliedVisas = myAppliedVisas.filter(myAppliedVisa => myAppliedVisa._id !== id);
                            setMyAppliedVisa(remAppliedVisas);
                        } else {
                            Swal.fire({
                                title: "Not Deleted!",
                                text: "Your application has not been deleted.",
                                icon: "error"
                            });
                        }
                    })
            }
        });
    }

    // handle search
    const handleSearch = (e) => {
        e.preventDefault();
        const searchingCountryName = e.target.searchingCountryName.value;
        // console.log(searchingCountryName);

        fetch(`${root_dir}/applications/${user.email}?searchingCountryName=${searchingCountryName}`)
            .then(res => res.json())
            .then(data => {
                setMyAppliedVisa(data);
                setLoading(false);
            })
    }

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className='max-w-8xl mx-auto px-5 py-8 md:py-16'>
                <div className="max-w-xs mx-auto">
                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-5">
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                name="searchingCountryName"
                                className="grow"
                                placeholder="Search by country name"
                            />
                            <IoIosSearch className="text-2xl" />
                        </label>
                        <button type="submit" className={`px-4 py-2 active:scale-95 rounded-lg text-white font-inter ${isDarkMode ? 'bg-[#FF6F3F]': 'bg-[#003366]'}`}>Search</button>
                    </form>
                </div>
                {loading ? (<LoadingPage />)
                    : myAppliedVisas.length > 0 ? (<div className='my-8 md:my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            myAppliedVisas.map(myAppliedVisa => <MyAppliedVisa
                                key={myAppliedVisa._id}
                                myAppliedVisa={myAppliedVisa}
                                handleCancelVisa={handleCancelVisa}
                            ></MyAppliedVisa>)
                        }
                    </div>) : (<NoDataFound />)}
            </section>
        </div>
    );
};

export default MyVisaApplicationPage;
