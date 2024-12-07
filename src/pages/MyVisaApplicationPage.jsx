import MyAppliedVisa from "../components/MyAppliedVisa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NoDataFound from "../components/NoDataFound";
import Swal from "sweetalert2";

const MyVisaApplicationPage = () => {
    const [myAppliedVisas, setMyAppliedVisa] = useState([]);
    // console.log(myAppliedVisas);
    const {user, root_dir} = useContext(AuthContext);

    useEffect(()=> {
        fetch(`${root_dir}/applications/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyAppliedVisa(data)
        })
    },[])

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
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your application has been deleted.",
                            icon: "success"
                        });

                        const remAppliedVisas = myAppliedVisas.filter(myAppliedVisa => myAppliedVisa._id !== id);
                        setMyAppliedVisa(remAppliedVisas);
                    }else{
                        Swal.fire({
                            title: "Not Deleted!",
                            text: "Your application has not deleted.",
                            icon: "error"
                        });
                    }
                })
            }
        });
    }

    return (
        <section className='max-w-8xl mx-auto px-5'>
            {
                myAppliedVisas.length > 0 ? <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    myAppliedVisas.map(myAppliedVisa => <MyAppliedVisa
                        key={myAppliedVisa._id}
                        myAppliedVisa={myAppliedVisa}
                        handleCancelVisa={handleCancelVisa}
                    ></MyAppliedVisa>)
                }
                </div> : <NoDataFound></NoDataFound>
            }
        </section>
    );
};

export default MyVisaApplicationPage;