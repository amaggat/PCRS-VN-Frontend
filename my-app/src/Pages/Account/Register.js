import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginService, RegisterService } from '../../Client/AccountService';
import ReturnHeader from '../../Components/Header/ReturnHeader';
import "./Account.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ToSChecked, setToSChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
    setLoading(true);
    if (!ToSChecked) {
      toast.error('You must agree to our ToS!')
    } else {
      try {
        const result = await RegisterService({
          username,
          password,
          name,
          email
        });
        
        if (result.data.success) {
          const loginResult = await LoginService({username, password});
          if (loginResult.data.success) {
            Cookies.set('jwt', loginResult.data.jwt);
            Cookies.set('username', loginResult.data.username);
            Cookies.set('userId', loginResult.data.id);
            toast.dark('Registered successfully! Returning to homescreen...');
            setTimeout(() => {
              history.push('/');
            }, 3000)
          }
        } else {
          toast.error(`Error: ${result.data.jwt}`)
        }
      } catch (error) {
        toast.error(`Error: ${error}`)
      }
    }
    setLoading(false);
  }

  return (
    <div className="account">
      <ReturnHeader returnTo="/" />
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="acc-banner text-center">
            <h1>Registration</h1>
          </div>
          <div className="card card-signin shadow">
            <div className="card-body">
              <div className="block">
                <h5 className="card-title border-bottom">Create a new account</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="username" value={username} onChange = {(event) => setUsername(event.target.value)} className="form-control" placeholder="Username" required autofocus />
                  </div>

                  <div className="form-label-group">
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="E-mail" required />
                  </div>

                  <div className="form-label-group">
                    <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} className="form-control" placeholder="Fullname" required />
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="Password" required />
                  </div>

                  <div className="form-check">
                    <input type="checkbox" value={ToSChecked} onChange={(event) => setToSChecked(event.target.checked)} className="form-check-input" id="agree-term" />
                    <label className="form-check-label" for="agree-term"> I have read and consent to the</label> <Link className="agree-term" to="/term">Terms of Service</Link>
                  </div>
                  <br />
                </form>
                <div className="submit-btn">
                  <button className="btn btn-primary" disabled={isLoading} onClick={() => handleSubmit()} id="register-submit">Register</button>
                </div>
              </div>
              <div className="block">
                <h5 className="card-title border-bottom">Already a member?</h5>
                <div className="sub-login">
                  <Link className="btn btn-outline-primary" to="/login">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register