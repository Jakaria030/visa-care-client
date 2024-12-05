import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <section className='max-w-8xl mx-auto content-center px-5 min-h-[60vh] font-inter'>
            <div className='card w-full max-w-lg border-2 my-5 mx-auto py-5'>
            <h2 className='text-2xl sm:text-3xl font-semibold mx-4 sm:mx-8 text-center'>Login Form</h2>
                <form className='card-body px-4 sm:px-8 pb-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input type='email' placeholder='Email' className='input input-bordered' required />
                    </div>

                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Password' className='input input-bordered' required />
                        <label className="label">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className='form-control mt-5'>
                        <button className='py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'>Login</button>
                    </div>
                </form>
                <div className='form-control mx-4 sm:mx-8'>
                    <button className='flex items-center gap-3 justify-center py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'><FaGoogle /> <span>Continue with Google</span></button>

                    <p className='label-text text-center mt-3'>Don't have an account? <Link to='/registerPage' className='underline hover:text-[#FF6F3F] font-bold duration-150 transition-colors'>Register</Link></p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;