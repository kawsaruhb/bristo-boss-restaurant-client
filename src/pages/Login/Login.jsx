import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    useEffect( () => {
        loadCaptchaEnginge(6);
    } , [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email)
    }

    const captchaRef = useRef(null);
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }

  return (
    <div className='hero min-h-screen bg-base-300'>

        <div className='hero-content md:w-1/2 flex-col lg:flex-row'>
          <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
        </div>

        <div className='card md:w-2/3 max-w-sm shadow-2xl bg-base-100'>
          <form onSubmit={handleLogin} className='card-body'>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='email'
                        className='input input-bordered'
                    />
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <span className='label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        className='input input-bordered'
                    />
                    <label className='label'>
                        <a href='#' className='label-text-alt link link-hover'>
                        Forgot password?
                        </a>
                    </label>
                </div>
                <div className='form-control'>
                    <label className='label'>
                        <LoadCanvasTemplate />
                    </label>
                    <input
                        ref={captchaRef}
                        type='text'
                        name='captcha'
                        placeholder='Type here'
                        className='input input-bordered'
                    />
                    <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate Captcha</button>
                </div>
                <div className='form-control mt-6'>
                    <input disabled={disabled} className='btn btn-primary' type="submit" value="Login" />
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
