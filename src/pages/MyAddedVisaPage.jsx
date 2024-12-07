import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyAddedVisa from "../components/MyAddedVisa";
import Swal from "sweetalert2";
import LoadingPage from "./LoadingPage";
import NoDataFound from "../components/NoDataFound";

const MyAddedVisaPage = () => {
    const [myAddedVisas, setMyAddedVisas] = useState([]);
    const {user, root_dir} = useContext(AuthContext);
    const closeModalRef = useRef(null);
    const [updatedVisa, setUpdatedVisa] = useState({})
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        });
    }, [myAddedVisas, setMyAddedVisas])

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

    const handleShowModal = (id) => {
        // console.log(id);
        fetch(`${root_dir}/visas/${id}`)
        .then(res => res.json())
        .then(data => setUpdatedVisa(data));
    };

    // handle update visa
    const handleUpdateVisa = (e) => {
        e.preventDefault();

        const form = e.target;

        // form values
        const id = form.id.value;
        const countryImage = form.countryImage.value;
        const countryFlag = form.countryFlag.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const ageRestriction = parseInt(form.ageRestriction.value);
        const visaFee = parseInt(form.visaFee.value);
        const applicationMethod = form.applicationMethod.value;
        const validity = form.validity.value;
        const description = form.description.value;

        // checkbox values
        const requiredDocuments = [];
        if (form.validPassport.checked) {
            requiredDocuments.push(form.validPassport.value);
        }
        if (form.visaForm.checked) {
            requiredDocuments.push(form.visaForm.value);
        }
        if (form.recentPicture.checked) {
            requiredDocuments.push(form.recentPicture.value);
        }
        // console.log(requiredDocuments);

        // Author info 
        const authName = user.displayName;
        const authEmail = user.email;

        const visaUpdateFormData = {
            countryImage,
            countryFlag,
            countryName,
            visaType,
            processingTime,
            ageRestriction,
            visaFee,
            applicationMethod,
            validity,
            description,
            requiredDocuments,
            authName,
            authEmail
        };
        // console.log(visaUpdateFormData);
        closeModalRef.current.click();

        // data send to the server side
        fetch(`${root_dir}/visas/${updatedVisa._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(visaUpdateFormData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                form.reset();
                Swal.fire({
                    icon: "success",
                    title: "Your visa has been updated successfully.",
                    showConfirmButton: false,
                    timer: 2000
                });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Failed to update your visa. Please try again.",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
        .catch(err => {
            console.log(err.message);
            Swal.fire({
                icon: "error",
                title: err.message,
                showConfirmButton: false,
                timer: 2000
            });
        })

    };


    return (
        <section className='max-w-8xl mx-auto px-5 py-10'>
            {
                loading ? (<LoadingPage />) : myAddedVisas.length > 0 ? (<div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    myAddedVisas.map(myAddedVisa => <MyAddedVisa
                        key={myAddedVisa._id}
                        myAddedVisa={myAddedVisa}
                        handleDeleteVisa={handleDeleteVisa}
                        handleShowModal={handleShowModal}
                    ></MyAddedVisa>)
                }
                </div>) : (<NoDataFound />)
            }

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="update_modal" className="modal modal-middle">
                <div className="modal-box max-w-3xl px-3">
                    <div className='card w-full max-w-4xl border-2 mx-auto py-2 sm:py-5'>
                        <h2 className='text-2xl sm:text-3xl font-semibold font-poppins mx-4 sm:mx-8 text-center'>Update Visa Form</h2>
                        <form onSubmit={handleUpdateVisa} className='card-body px-4 sm:px-8 py-5'>
                            {/* row - 1 */}
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Country Image</span>
                                    </label>
                                    <input type='text' name='countryImage' defaultValue={updatedVisa.countryImage} placeholder='Country Image URL' className='input input-bordered' required />
                                </div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Country Flag</span>
                                    </label>
                                    <input type='text' name='countryFlag' defaultValue={updatedVisa.countryFlag} placeholder='Country Flag URL' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* row - 2 */}
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Country Name</span>
                                    </label>
                                    <input type='text' name='countryName' defaultValue={updatedVisa.countryName} placeholder='Country Name' className='input input-bordered' required />
                                </div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Visa Type</span>
                                    </label>
                                    <select className='select select-bordered' name='visaType'>
                                        <option value='Choose a visa type' disabled>Choose a visa type</option>
                                        <option value='Tourist Visa'>Tourist Visa</option>
                                        <option value='Student Visa'>Student Visa</option>
                                        <option value='Official Visa'>Official Visa</option>
                                    </select>
                                </div>
                            </div>

                            {/* row - 3 */}
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Processing Time</span>
                                    </label>
                                    <input type='text' name='processingTime' defaultValue={updatedVisa.processingTime} placeholder='Processing Time' className='input input-bordered' required />
                                </div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Age Restriction</span>
                                    </label>
                                    <input type='number' min={0} name='ageRestriction' defaultValue={updatedVisa.ageRestriction} placeholder='Age Restriction' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* row - 4 */}
                            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-5'>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Visa Fee</span>
                                    </label>
                                    <input type='number' min={0} name='visaFee' defaultValue={updatedVisa.visaFee} placeholder='Visa Fee' className='input input-bordered' required />
                                </div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Application Method</span>
                                    </label>
                                    <input type='text' name='applicationMethod' defaultValue={updatedVisa.applicationMethod} placeholder='Application Method' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* row - 5 */}
                            <div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className='label-text'>Validity</span>
                                    </label>
                                    <input type='text' name='validity' defaultValue={updatedVisa.validity} placeholder='Validity' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* row - 6 */}
                            <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>Required Documents</span>
                                    </label>
                                    <label className='label justify-start gap-3 cursor-pointer'>
                                        <input type='checkbox' name='validPassport' value='Valid Passport' className='checkbox rounded-md' defaultChecked />
                                        <span className='label-text'>Valid Passport</span>
                                    </label>
                                    <label className='label justify-start gap-3 cursor-pointer'>
                                        <input type='checkbox' name='visaForm' value='Visa Application Form' className='checkbox rounded-md' />
                                        <span className='label-text'>Visa Application Form</span>
                                    </label>
                                    <label className='label justify-start gap-3 cursor-pointer'>
                                        <input type='checkbox' name='recentPicture' value='Recent Passport Size Picture' className='checkbox rounded-md' />
                                        <span className='label-text'>Recent Passport Size Picture</span>
                                    </label>
                                </div>
                            </div>

                            {/* row - 7 */}
                            <div>
                                <div className='form-control'>
                                    <label className='label'>
                                        <span className='label-text'>Description</span>
                                    </label>
                                    <textarea defaultValue={updatedVisa.description} placeholder='Description' className='textarea textarea-bordered textarea-sm w-full' name='description' required></textarea>
                                </div>
                            </div>

                            {/* add visa button */}
                            <div className='form-control mt-5'>
                                <button className='py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'>Update Visa</button>
                            </div>
                        </form>
                    </div>

                    {/* if there is a button in form, it will close the modal */}
                    <div className="modal-action">
                        <form method="dialog">
                            <button ref={closeModalRef} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default MyAddedVisaPage;