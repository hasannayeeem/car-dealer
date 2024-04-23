import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import logo from '../../../images/logo.png'
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        console.log('user:', user);
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        // const agree = event.target.terms.checked;
        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <PageTitle title="Register"></PageTitle>
            <div className={`w-75 mx-auto rounded shadow`}>
            <div className={`mx-5 my-4 py-3`}>
            <img className={`mx-auto my-2 d-block`} src={logo} alt="" />
            <h2 className='text-danger text-center py-3 mb-4 fw-bold'>Let's go!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>Accept AutosStars Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className={`w-100 mx-auto mt-2 ${agree&& 'main-btn'}`}
                    type="submit"
                    value="Register" />

            </form>
            <p className={`fw-bold`}>Already have an account? <Link to="/login" className='text-danger pe-auto  text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
            </div>
            </div>
        </div>
    );
};

export default Register;