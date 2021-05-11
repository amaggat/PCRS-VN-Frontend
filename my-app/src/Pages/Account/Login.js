import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'

import { LoginService } from '../../Client/AccountService';
import ReturnHeader from '../../Components/Header/ReturnHeader';
import Color from '../../Variables/color';
import "./Account.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmitLoginInfo = async () => {
    setLoading(true);
    const result = await LoginService({ username, password });
    if (result.data.success) {
      cookies.set('jwt', result.data.jwt);
      cookies.set('username', result.data.username);
      cookies.set('userId', result.data.id);
      toast.dark('Logged in! Returning to previous page...', {
        autoClose: 1000,
      })
      setTimeout(() => {
        history.go(-1);
      }, 1000)
    } else {
      toast.error('Invalid username or password!');
    }
    setLoading(false);
  }

  return (
    <div className="account">
      <ReturnHeader returnTo="/" />
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
          <div className="acc-banner text-center">
            <h1>Your account</h1>
          </div>
          <div className="card card-signin shadow">
            <div className="card-body">
              <div className="block">
                <h5 className="card-title border-bottom">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <h6>Username</h6>
                    <input
                      type="username"
                      id="inputUsername"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      className="form-control"
                      placeholder="your-username"
                      required
                      autofocus
                    />
                  </div>

                  <div className="form-label-group">
                    <h6>Password</h6>
                    <input
                      type="password"
                      id="inputPassword"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                </form>
                <div className="submit-btn">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSubmitLoginInfo()}
                    id="login-submit"
                    disabled={isLoading}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="border-top text-center block">
                <Link className="reset-password" to="/forgot">Forgot password?</Link>
              </div>

              <div className="block">
                <h5 className="card-title border-bottom">Not a member?</h5>
                <div className="sub-register">
                  <Link className="btn btn-outline-primary" to="/register">Register now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login