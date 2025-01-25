import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { executeScript } from '../script/script.js';

import { useForm } from "react-hook-form";

const LoginContent = ({
  page,
}) => {
  useEffect(() => {
    executeScript();
  }, []);

  let loginForm = useRef(null);

  const { 
    register: registerLogin, 
    handleSubmit: handleSubmitLogin, 
    setValue: setValueLogin,
    clearErrors: clearErrorsLogin,
    formState: { errors: loginError }
  } = useForm();

  const onSubmitLogin = async (data, e) => {
    try {
      const loginResponse = await axios.post('/auth-login', {
        email: data.email,
        password: data.password,   

        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (loginResponse.data === 'failed') {
        var Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          icon: 'error',
          title: 'Incorrect username or password.'
        })
      } else {
        window.location.href = '/admin';
      }
    } catch (error) {
      var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        icon: 'error',
        title: 'Error during login: ' + error
      })
    }
  };

  const onLoginError = (error, e) => {
    console.log("Error Insert");
    console.log(error);
  };

  const generateRandomToken = () => {
    return Math.random().toString(36).substr(2, 10); // Adjust length as needed
  }

  return (
    <>
      <div className="card card-outline card-primary card-fade">
        <div className="card-header text-center">
          <a href="/" className="h1"><b>M</b>ed<b>B</b>ank</a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <form ref={loginForm} onSubmit={handleSubmitLogin(onSubmitLogin, onLoginError)}>
            <div className="input-group mb-3">
              <input
                type="email" 
                placeholder="Email"
                className={`form-control ${loginError.email && loginError.email.type === "required" ? 'is-invalid' : ''}`}
                {...registerLogin("email",{
                  required: {
                      value: true, 
                      message: "Required"
                  }
                })} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password" 
                placeholder="Password"
                className={`form-control ${loginError.password && loginError.password.type === "required" ? 'is-invalid' : ''}`}
                {...registerLogin("password",{
                  required: {
                      value: true, 
                      message: "Required"
                  }
                })} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <button type="submit" className="btn btn-default btn-block">Forgot password?</button>
              </div>
              
              <div className="col-6">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
            </div>
            <hr />
            <p className="login-box-msg">Not Registered?</p>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-success btn-block">Request a business account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginContent;