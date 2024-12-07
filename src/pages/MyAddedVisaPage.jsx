import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyAddedVisa from "../components/MyAddedVisa";
import Swal from "sweetalert2";

const MyAddedVisaPage = () => {
    const [myAddedVisas, setMyAddedVisas] = useState([]);
    const {user, root_dir} = useContext(AuthContext);


    useEffect(() => {
        fetch(`${root_dir}/visas?email=${user.email}`, {
            method: 'GET',
            headers: {
                'contetn-type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            setMyAddedVisas(data);
        });
    }, [])

    // handle delete visa
    const handleDeleteVisa = (id) => {
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
                fetch(`${root_dir}/visas/${id}`, {
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

                        const remAddedVisas = myAddedVisas.filter(myAddedVisa => myAddedVisa._id !== id);
                        setMyAddedVisas(remAddedVisas);
                    }else{
                        Swal.fire({
                            title: "Not Deleted!",
                            text: "Your visa has not been deleted.",
                            icon: "error"
                        });
                    }
                })
            }
        });

    };

    // handle update visa
    const handleUpdateVisa = (id) => {
        // console.log(id);
    };


    return (
        <section className='max-w-8xl mx-auto px-5 py-10'>
            <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                myAddedVisas.map(myAddedVisa => <MyAddedVisa
                    key={myAddedVisa._id}
                    myAddedVisa={myAddedVisa}
                    handleDeleteVisa={handleDeleteVisa}
                    handleUpdateVisa={handleUpdateVisa}
                ></MyAddedVisa>)
            }
            </div>
        </section>
    );
};

export default MyAddedVisaPage;