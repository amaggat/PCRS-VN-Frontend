import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReturnHeader from '../../Components/Header/ReturnHeader';
import "./Account.css"

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                                        <input type="username" id="username" className="form-control" placeholder="Username" required autofocus />
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

                                    <div>TODO: Retype Password</div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="agree-term" />
                                        <label className="form-check-label" for="agree-term"> I have read and consent to the</label> <Link className="agree-term" to="/term">Terms of Service</Link>
                                    </div>
                                    <br />
                                </form>
                                <div className="submit-btn">
                                    <button className="btn btn-primary" type="submit" id="register-submit">Register</button>
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