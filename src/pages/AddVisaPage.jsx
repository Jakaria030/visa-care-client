import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddVisaPage = () => {
    const {user, root_dir} = useContext(AuthContext);

    const handleAddVisaForm = (e) => {
        e.preventDefault();
        const form = e.target;

        // form values
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

        const visaFormData = {
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
        // console.log(visaFormData);

        // data send to the server side
        fetch(`${root_dir}/visas`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(visaFormData)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                form.reset();
                Swal.fire({
                    icon: "success",
                    title: "Great! Your visa has been added successfully.",
                    showConfirmButton: false,
                    timer: 2000
                });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Failed to add your visa. Please try again.",
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
    };

    return (
        <section className='max-w-8xl mx-auto px-5 font-inter'>
            <div className='card w-full max-w-4xl border-2 my-5 mx-auto py-5'>
                <h2 className='text-2xl sm:text-3xl font-semibold font-poppins mx-4 sm:mx-8 text-center'>Add Visa Form</h2>
                <form onSubmit={handleAddVisaForm} className='card-body px-4 sm:px-8 py-5'>
                    {/* row - 1 */}
                    <div className='flex items-center gap-5'>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Country Image</span>
                            </label>
                            <input type='text' name='countryImage' placeholder='Country Image URL' className='input input-bordered' required />
                        </div>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Country Flag</span>
                            </label>
                            <input type='text' name='countryFlag' placeholder='Country Flag URL' className='input input-bordered' required />
                        </div>
                    </div>

                    {/* row - 2 */}
                    <div className='flex items-center gap-5'>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Country Name</span>
                            </label>
                            <input type='text' name='countryName' placeholder='Country Name' className='input input-bordered' required />
                        </div>
                        <div className='form-control basis-1/2'>
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
                    <div className='flex items-center gap-5'>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Processing Time</span>
                            </label>
                            <input type='text' name='processingTime' placeholder='Processing Time' className='input input-bordered' required />
                        </div>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Age Restriction</span>
                            </label>
                            <input type='number' min={0} name='ageRestriction' placeholder='Age Restriction' className='input input-bordered' required />
                        </div>
                    </div>

                    {/* row - 4 */}
                    <div className='flex items-center gap-5'>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Visa Fee</span>
                            </label>
                            <input type='number' min={0} name='visaFee' placeholder='Visa Fee' className='input input-bordered' required />
                        </div>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Application Method</span>
                            </label>
                            <input type='text' name='applicationMethod' placeholder='Application Method' className='input input-bordered' required />
                        </div>
                    </div>

                    {/* row - 5 */}
                    <div>
                        <div className='form-control basis-1/2'>
                            <label className='label'>
                                <span className='label-text'>Validity</span>
                            </label>
                            <input type='text' name='validity' placeholder='Validity' className='input input-bordered' required />
                        </div>
                    </div>

                    {/* row - 6 */}
                    <div className='flex items-center gap-5'>
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
                            <textarea placeholder='Description' className='textarea textarea-bordered textarea-sm w-full' name='description' required></textarea>
                        </div>
                    </div>

                    {/* add visa button */}
                    <div className='form-control mt-5'>
                        <button className='py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'>Add Visa</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddVisaPage;