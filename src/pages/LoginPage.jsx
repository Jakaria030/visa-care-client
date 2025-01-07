import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import login from "../assets/login.png";

const LoginPage = () => {

    const { signInUser, setUser, signInWithGoogle, isDarkMode } = useContext(AuthContext);
    const [logingError, setLoginError] = useState("");

    const navigate = useNavigate();
    const { state } = useLocation();

    // console.log(state);

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        // const user = {email, password};
        // console.log(user);

        setLoginError("");
        signInUser(email, password)
            .then(result => {
                // console.log(result);
                setUser(result.user);
                form.reset();
                navigate(`${state ? state : '/'}`);
            }).catch(err => {
                // console.log(err);
                setLoginError("Enter valid credential.");
            })
    };

    // sign in with google
    const continueWithGoogle = () => {
        signInWithGoogle()
            .then(resutl => {
                setUser(resutl.user);
                navigate(`${state ? state : '/'}`);
            }).catch(err => {
                setLoginError("Email is not valid.");
            })
    };

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <section className='max-w-8xl mx-auto content-center px-5 min-h-[60vh] font-inter py-8 md:py-16'>
                <div className="flex flex-col lg:flex-row border">
                    <div className="basis-1/2 border-b lg:border-b-0 lg:border-r">
                        <img className="max-h-[500px] object-center mx-auto" src={login} />
                    </div>

                    <div className='basis-1/2 card w-full max-w-lg mx-auto py-5'>
                        <h2 className={`text-2xl sm:text-3xl font-semibold font-poppins mx-4 sm:mx-8 text-center ${isDarkMode && 'text-[#F2F2F2]'}`}>Login Form</h2>
                        <form onSubmit={handleLoginForm} className='flex flex-col gap-2 px-4 sm:px-8 pb-5'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className={`label-text ${isDarkMode && 'text-[#F2F2F2]'}`}>Email</span>
                                </label>
                                <input type='email' name='email' placeholder='Email' className='input input-bordered' required />
                            </div>

                            <div className='form-control'>
                                <label className='label'>
                                    <span className={`label-text ${isDarkMode && 'text-[#F2F2F2]'}`}>Password</span>
                                </label>
                                <input type='password' name='password' placeholder='Password' className='input input-bordered' required />
                                <label className="label">
                                    <Link className={`label-text-alt link ${isDarkMode && 'text-[#F2F2F2]'}`}>Forgot password?</Link>
                                </label>
                                {
                                    logingError && <label className="label">
                                        <p className="label-text text-[#D32F2F]">{logingError}</p>
                                    </label>
                                }
                            </div>
                            <div className='form-control mt-5'>
                                <button className={`py-2 rounded-md text-[#F2F2F2] active:scale-95 ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}>Login</button>
                            </div>
                        </form>
                        <div className='form-control mx-4 sm:mx-8'>
                            <button onClick={continueWithGoogle} className={`flex items-center gap-3 justify-center py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95 ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}><FaGoogle /> <span>Continue with Google</span></button>

                            <p className={`label-text text-center mt-3 ${isDarkMode && 'text-[#F2F2F2]'}`}>Don't have an account? <Link to='/registerPage' state={state} className='underline hover:text-[#FF6F3F] font-bold duration-150 transition-colors'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;