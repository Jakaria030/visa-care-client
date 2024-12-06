import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const RegisterPage = () => {

    const {user, setUser, signUpUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const {state} = useLocation();

    // console.log(state);
    // console.log(user);

    // form submit
    const handleRegisterForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // const user = {name, email, photoURL, password};
        // console.log(user);

        setRegisterError('');
        // valid password check
        if(password.length < 6){
            setRegisterError("Password must be at least 6 characters long.")
            return;
        }

        const uppercaseRegex = /[A-Z]/;
        if(!uppercaseRegex.test(password)){
            setRegisterError("Password must contain at least one uppercase letter.");
            return;
        }

        const lowercaseRegex = /[a-z]/;
        if(!lowercaseRegex.test(password)){
            setRegisterError("Password must contain at least one lowercase letter");
            return;
        }

        // sing up user
        signUpUser(email, password)
        .then(result => {
            setRegisterError('');
            setUser(result.user);
            
            // update user profile
            updateUserProfile({displayName: name, photoURL: photoURL})
            .then(() => {
                navigate(`${state ? state : '/'}`);
            }).catch(err => {
                setRegisterError(err.message);
            })
        }).catch(err => {
            setRegisterError(err.message);
        })
    };

    // sign up with google
    const continueWithGoogle = () => {
        signInWithGoogle()
        .then(resutl => {
            setUser(resutl.user);
            navigate(`${state ? state : '/'}`);
        }).catch(err => {
            setRegisterError("Email is not valid.");
        })
    };

    return (
        <section className='max-w-8xl mx-auto px-5 font-inter'>
            <div className='card w-full max-w-lg border-2 my-5 mx-auto py-5'>
                <h2 className='text-2xl sm:text-3xl font-semibold mx-4 sm:mx-8 font-poppins text-center'>Registration Form</h2>
                <form onSubmit={handleRegisterForm} className='card-body px-4 sm:px-8 py-5'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <input type='text' name='name' placeholder='Name' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input type='email' name='email' placeholder='Email' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Photo URL</span>
                        </label>
                        <input type='text' name='photoURL' placeholder='Photo URL' className='input input-bordered' required />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' name='password' placeholder='Password' className='input input-bordered' required />
                        {
                            registerError && <label className="label">
                                <p className="label-text text-[#D32F2F]">{registerError}</p>
                            </label>
                        }
                    </div>
                    <div className='form-control mt-5'>
                        <button className='py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'>Register</button>
                    </div>
                </form>
                <div className='form-control mx-4 sm:mx-8'>
                    <button onClick={continueWithGoogle} className='flex items-center gap-3 justify-center py-2 rounded-md bg-[#003366] text-[#F2F2F2] active:scale-95'><FaGoogle /> <span>Continue with Google</span></button>

                    <p className='label-text text-center mt-3'>Already have an account? <Link to='/loginPage' className='underline hover:text-[#FF6F3F] font-bold duration-150 transition-colors'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;

// https://i.ibb.co.com/3ckS7jZ/profile-1.jpg