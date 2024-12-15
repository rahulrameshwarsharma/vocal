import React from 'react';
import '../../index.css';
import './login.css';
import { Link } from 'react-router-dom';
import adminLoginImage from '../../assets/images/adminLogin.png';
import logo from '../../assets/images/logo.png';

const Login = () => {
  return (
    <div className="wrapper">
      <div className="cover cover-left">
        <div className="login-container">
          <div className="login-wrapper">

            <div className='login-text-container'>
              <span>Login</span>
              <span>Login to access your account</span>
            </div>
            <div className='login-input-container'>

                <div className="input-wrapper">
                  <div>
                    <label htmlFor="email"><span>Email</span></label>
                    <input type="email" name='email' />
                  </div>
                  <div>
                    <label htmlFor="password"><span>Password</span></label>
                    <input type="password" name='password' />
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.2501 21.0001C20.1516 21.0003 20.054 20.9809 19.963 20.9432C19.872 20.9054 19.7894 20.8501 19.7199 20.7803L3.21994 4.28025C3.08522 4.13845 3.01123 3.94964 3.01373 3.75407C3.01624 3.5585 3.09504 3.37164 3.23334 3.23334C3.37164 3.09504 3.5585 3.01624 3.75407 3.01373C3.94964 3.01123 4.13845 3.08522 4.28025 3.21994L20.7803 19.7199C20.8851 19.8248 20.9564 19.9584 20.9854 20.1039C21.0143 20.2493 20.9994 20.4001 20.9427 20.5371C20.8859 20.6741 20.7899 20.7912 20.6666 20.8736C20.5433 20.956 20.3984 21 20.2501 21.0001ZM11.6251 14.8056L9.19744 12.3779C9.18353 12.3641 9.16565 12.355 9.1463 12.3519C9.12696 12.3488 9.10713 12.3518 9.0896 12.3606C9.07206 12.3693 9.05771 12.3833 9.04855 12.4006C9.03939 12.418 9.03589 12.4377 9.03853 12.4571C9.13654 13.087 9.43227 13.6693 9.88299 14.12C10.3337 14.5707 10.916 14.8665 11.5459 14.9645C11.5653 14.9671 11.585 14.9636 11.6024 14.9544C11.6197 14.9453 11.6337 14.9309 11.6424 14.9134C11.6512 14.8959 11.6542 14.876 11.6511 14.8567C11.648 14.8374 11.6389 14.8195 11.6251 14.8056ZM12.3751 9.19462L14.8065 11.6251C14.8204 11.6391 14.8383 11.6483 14.8577 11.6516C14.8772 11.6548 14.8971 11.6518 14.9148 11.643C14.9324 11.6343 14.9469 11.6201 14.956 11.6027C14.9652 11.5853 14.9686 11.5654 14.9659 11.5459C14.8681 10.9152 14.5722 10.332 14.1209 9.88071C13.6696 9.42942 13.0864 9.13348 12.4557 9.03572C12.4362 9.03271 12.4162 9.03594 12.3986 9.04496C12.381 9.05398 12.3668 9.06833 12.3578 9.08595C12.3489 9.10358 12.3457 9.12357 12.3488 9.14309C12.3519 9.16261 12.3611 9.18064 12.3751 9.19462Z" fill="#313131"/>
                          <path d="M23.0156 12.8137C23.1708 12.5702 23.2529 12.2872 23.252 11.9984C23.2512 11.7096 23.1675 11.4271 23.0109 11.1844C21.7706 9.26625 20.1614 7.63688 18.3577 6.47203C16.3594 5.18203 14.1562 4.5 11.985 4.5C10.8404 4.50157 9.7035 4.6882 8.61843 5.05266C8.58807 5.06276 8.56079 5.08046 8.5392 5.10409C8.51761 5.12772 8.50242 5.15647 8.49509 5.18763C8.48776 5.21878 8.48853 5.25129 8.49732 5.28207C8.50611 5.31284 8.52263 5.34085 8.54531 5.36344L10.7597 7.57781C10.7827 7.60086 10.8113 7.61752 10.8427 7.62615C10.8741 7.63478 10.9072 7.63508 10.9387 7.62703C11.6893 7.44412 12.4744 7.45752 13.2183 7.66595C13.9622 7.87438 14.6399 8.27082 15.1862 8.8171C15.7325 9.36338 16.1289 10.0411 16.3373 10.785C16.5458 11.5289 16.5592 12.3139 16.3762 13.0645C16.3683 13.096 16.3686 13.129 16.3773 13.1603C16.3859 13.1916 16.4025 13.2202 16.4255 13.2431L19.6106 16.4306C19.6438 16.4638 19.6881 16.4834 19.735 16.4855C19.7819 16.4876 19.8278 16.472 19.8637 16.4419C21.0898 15.3968 22.1522 14.1739 23.0156 12.8137ZM12 16.5C11.3188 16.5 10.6465 16.3454 10.0337 16.0478C9.42094 15.7502 8.88375 15.3173 8.46263 14.7819C8.04151 14.2464 7.74745 13.6223 7.60262 12.9567C7.45779 12.2911 7.46598 11.6012 7.62656 10.9392C7.63452 10.9077 7.63417 10.8747 7.62555 10.8434C7.61692 10.8121 7.60031 10.7836 7.57734 10.7606L4.44422 7.62609C4.41099 7.59283 4.36649 7.57327 4.31952 7.57127C4.27255 7.56927 4.22655 7.58499 4.19062 7.61531C3.04734 8.59078 1.9875 9.77766 1.01859 11.1647C0.84899 11.4081 0.755584 11.6965 0.750243 11.9931C0.744901 12.2897 0.827865 12.5813 0.988591 12.8306C2.22656 14.768 3.81937 16.3997 5.59547 17.5486C7.59656 18.8438 9.74625 19.5 11.985 19.5C13.1412 19.4969 14.2899 19.3143 15.39 18.9586C15.4206 18.9488 15.4482 18.9313 15.4702 18.9078C15.4921 18.8842 15.5076 18.8554 15.5152 18.8242C15.5227 18.7929 15.5222 18.7602 15.5134 18.7293C15.5047 18.6983 15.4882 18.6701 15.4655 18.6473L13.2403 16.4227C13.2174 16.3997 13.1888 16.3831 13.1575 16.3744C13.1262 16.3658 13.0932 16.3655 13.0617 16.3734C12.7141 16.4577 12.3577 16.5002 12 16.5Z" fill="#313131"/>
                          </svg>
                    </span>
                  </div>
                  <div>
                    <span>
                      <input className='checkbox' type="checkbox" name="rememberMe" id="remember" />
                      <label htmlFor="rememberMe">Remember Me</label>
                    </span>
                    <span>Forgot Password</span>
                  </div>
                </div>
                
                </div>
                  <button className='login-btn'>
                  <Link to='/dashboard'>
                    <span>
                      Login
                    </span>
                    </Link>
                  </button>
                </div>
                

            </div>
        </div>

      <div className="cover cover-right">
        <img src={logo} alt="logo" />
        <img src={adminLoginImage} />
      </div>
    </div>
  )
}

export default Login;