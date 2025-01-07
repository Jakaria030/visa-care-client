import { useContext, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
    const visaDetails = useLoaderData();
    const { countryImage, countryFlag, countryName, visaType, processingTime, ageRestriction, visaFee, applicationMethod, validity, description, requiredDocuments } = visaDetails;

    const { user, root_dir, isDarkMode } = useContext(AuthContext);

    const documents = Array.from(requiredDocuments);
    const closeModalRef = useRef(null);
    const navigate = useNavigate();

    // apply form
    const handleApplyForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const visaPrice = parseInt(form.visaPrice.value);
        const applyDate = form.applyDate.value;

        const applyVisaDetails = { countryImage, countryFlag, countryName, visaType, processingTime, ageRestriction, visaFee, applicationMethod, validity, description, requiredDocuments, firstName, lastName, email, visaPrice, applyDate };
        // console.log(applyVisaDetails);

        fetch(`${root_dir}/applications`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(applyVisaDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    Swal.fire({
                        icon: "success",
                        title: "Great! Your application has been successful.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate('/allVisaPage');
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Failed to apply for the visa. Please try again.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: err.message,
                    showConfirmButton: false,
                    timer: 2000
                });
            })

        closeModalRef.current.click();
    };

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className='max-w-8xl mx-auto px-5 py-8 md:py-16'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 justify-center'>
                    <div className='basis-1/2 h-[500px] border-2 p-2 rounded-md bg-white'>
                        <img className='w-full h-full mx-auto object-cover rounded-md' src={countryImage} alt='Country Image' />
                    </div>
                    <div className={`basis-1/2 space-y-2 border-2 p-2 rounded-md flex flex-col ${isDarkMode && 'text-[#F2F2F2]'}`}>
                        <div className='flex-grow'>
                            <table className="w-full text-lg">
                                <tr>
                                    <td>Country Name</td>
                                    <td>:</td>
                                    <td className="pl-5">{countryName}</td>
                                </tr>
                                <tr>
                                    <td>Visa Type</td>
                                    <td>:</td>
                                    <td className="pl-5">{visaType}</td>
                                </tr>
                                <tr>
                                    <td>Processing Time</td>
                                    <td>:</td>
                                    <td className="pl-5">{processingTime}</td>
                                </tr>
                                <tr>
                                    <td>Minimmu Age</td>
                                    <td>:</td>
                                    <td className="pl-5">{ageRestriction}</td>
                                </tr>
                                <tr>
                                    <td>Visa Fee</td>
                                    <td>:</td>
                                    <td className="pl-5">{visaFee}</td>
                                </tr>
                                <tr>
                                    <td>Validity</td>
                                    <td>:</td>
                                    <td className="pl-5">{validity}</td>
                                </tr>
                                <tr>
                                    <td>Application Methos</td>
                                    <td>:</td>
                                    <td className="pl-5">{applicationMethod}</td>
                                </tr>
                                <tr>
                                    <td>Required Documents</td>
                                    <td>:</td>
                                    <td className="pl-5"><ul className="list-disc pl-6">
                                    {
                                        documents.map((document, indx) => <li key={indx}>{document}</li>)
                                    }
                                    </ul></td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>:</td>
                                    <td className="pl-5">{description}</td>
                                </tr>
                            </table>
                        </div>
                        <div>
                            <button onClick={() => document.getElementById('apply_modal').showModal()} className={`w-full px-4 py-1 sm:py-2 rounded-sm  text-[#F2F2F2] font-semibold font-inter active:scale-95 ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>Apply For The Vis</button>
                        </div>
                    </div>
                </div>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="apply_modal" className="modal modal-middle">
                    <div className={`modal-box max-w-3xl rounded-md ${isDarkMode && 'bg-gray-600'}`}>
                        <div className="modal-action mt-0">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button ref={closeModalRef} className="btn btn-circle">X</button>
                            </form>
                        </div>
                        <h3 className={`text-2xl text-center font-poppins font-semibold ${isDarkMode && 'text-[#F2F2F2]'}`}>Apply For The Visa!</h3>
                        <form onSubmit={handleApplyForm}>
                            {/* row 1 */}
                            <div className='flex flex-col sm:flex-row items-center sm:gap-5'>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className={`label-text ${isDarkMode && 'text-[#F2F2F2]'}`}>First Name</span>
                                    </label>
                                    <input type='text' name='firstName' placeholder='First Name' className='input input-bordered' required />
                                </div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className={`label-text ${isDarkMode && 'text-[#F2F2F2]'}`}>Last Name</span>
                                    </label>
                                    <input type='text' name='lastName' placeholder='Last Name' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* row 2 */}
                            <div className='flex flex-col sm:flex-row items-center sm:gap-5'>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className={`label-text ${isDarkMode && 'text-[#F2F2F2]'}`}>Email</span>
                                    </label>
                                    <input type='email' name='email' defaultValue={user.email} readOnly placeholder='Email' className='input input-bordered' required />
                                </div>
                                <div className='form-control w-full sm:basis-1/2'>
                                    <label className='label'>
                                        <span className={`label-text ${isDarkMode && 'text-[#F2F2F2]'}`}>Visa Fee</span>
                                    </label>
                                    <input type='number' name='visaPrice' defaultValue={visaFee} readOnly placeholder='Visa Fee' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* row - 3 */}
                            <div>
                                <div className='form-control mt-3 sm:mt-5'>
                                    <input type='date' name='applyDate' className='input input-bordered' required />
                                </div>
                            </div>

                            {/* apply button */}
                            <div>
                                <div className='form-control mt-5'>
                                    <button className={`py-2 rounded-md  text-[#F2F2F2] active:scale-95 ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>Apply</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>
            </section>
        </div>
    );
};

export default VisaDetails;

{/* <h3 className='text-2xl font-poppins font-semibold'>Country Name: {countryName}</h3>
<p className='font-inter'><span className='font-medium text-lg'>Visa Type:</span> {visaType}</p>
<p className='font-inter'><span className='font-medium text-lg'>Processing Time:</span> {processingTime}</p>
<ul className='list-disc'>
    <p className='font-medium text-lg'>Required Documents: </p>
    {
        documents.map((document, indx) => <li className='ml-10' key={indx}>{document}</li>)
    }
</ul>
<p className='font-inter'><span className='font-medium text-lg'>Minimmu Age: </span> {ageRestriction} years.</p>
<p className='font-inter'><span className='font-medium text-lg'>Visa Fee:</span> ${visaFee}</p>
<p className='font-inter'><span className='font-medium text-lg'>Validity: </span>{validity}</p>
<p className='font-inter'><span className='font-medium text-lg'>Application Methos: </span> {applicationMethod}</p>
<p className='font-inter'><span className='font-medium text-lg'>Description:</span> {description}</p> */}