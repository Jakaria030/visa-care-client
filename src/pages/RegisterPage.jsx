import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <section className='max-w-8xl mx-auto content-center px-5 min-h-[60vh] font-inter'>
            <div className='card w-full max-w-lg border-2 my-5 mx-auto'>
                <form className='card-body px-4 sm:px-8 pb-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <input type='text' placeholder='Name' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input type='email' placeholder='Email' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <input type='text' placeholder='Photo URL' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Password' className='input input-bordered' required />
                    </div>
                    <div className='form-control mt-5'>
                        <button className='py-2 rounded-md bg-[#003366] text-[#F2F2F2]'>Register</button>
                    </div>
                </form>
                <div className='form-control mx-4 sm:mx-8 pb-10'>
                    <button className='flex items-center gap-3 justify-center py-2 rounded-md bg-[#003366] text-[#F2F2F2]'><FaGoogle /> <span>Continue with Google</span></button>

                    <span className='label-text text-center mt-3'>Already have an account? <Link to='/loginPage' className='underline hover:text-[#FF6F3F] font-bold duration-150 transition-colors'>Login</Link></span>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;