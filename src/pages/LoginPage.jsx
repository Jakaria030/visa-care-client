import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LoginPage = () => {

    const {signInUser, setUser, signInWithGoogle} = useContext(AuthContext);
    const [logingError, setLoginError] = useState("");

    const navigate = useNavigate();
    const {state} = useLocation();

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
        <section className='max-w-8xl mx-auto content-center px-5 min-h-[60vh] font-inter'>
            <div className='card w-full max-w-lg border-2 my-5 mx-auto py-5'>
            <h2 className='text-2xl sm:text-3xl font-semibold font-poppins mx-4 sm:mx-8 text-center'>Login Form</h2>
                <form onSubmit={handleLoginForm} className='card-body px-4 sm:px-8 pb-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input type='email' name='email' placeholder='Email' className='input input-bordered' required />
                    </div>

                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' name='password' placeholder='Password' className='input input-bordered' required />
                        <label className="label">
                            <Link className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        {
                            logingError && <label className="label">
                                <p className="label-text text-[#D32F2F]">{logingError}</p>
                            </label>
                        }
                    </div>
                    <div className='form-control mt-5'>
                        <button className='py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'>Login</button>
                    </div>
                </form>
                <div className='form-control mx-4 sm:mx-8'>
                    <button onClick={continueWithGoogle} className='flex items-center gap-3 justify-center py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'><FaGoogle /> <span>Continue with Google</span></button>

                    <p className='label-text text-center mt-3'>Don't have an account? <Link to='/registerPage' state={state} className='underline hover:text-[#FF6F3F] font-bold duration-150 transition-colors'>Register</Link></p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;