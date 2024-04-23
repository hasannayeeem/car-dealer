import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, ghuser, ghloading, gherror] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if(loading || ghloading || fbloading){
        return <Loading></Loading>
    }

    if (error || fberror || gherror) {
        errorElement = <p className='text-danger'>Error: {error?.message} {gherror?.message} {fberror?.message}</p>
    }

    if (user || ghuser || fbuser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='main-btn w-100 d-block bg-danger border-0 py-2 text-white mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt=""></img>
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button 
                    onClick={() => signInWithFacebook()}
                    className='main-btn w-100 d-block bg-danger border-0 py-2 text-white mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt=""></img>
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button 
                    onClick={() => signInWithGithub()}
                    className='main-btn w-100 d-block bg-danger border-0 py-2 text-white mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt=""></img>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;