import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReturnHeader from '../../Components/Header/ReturnHeader';
import "./Account.css"

class Register extends Component {
    render() {
        return (
            <div className="account">
                <ReturnHeader />
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
                                            <input type="username" id="username" className="form-control" placeholder="Username" required autofocus/>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="email" id="email" className="form-control" placeholder="E-mail" required/>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="email" id="email" className="form-control" placeholder="E-mail (Again)" required/>
                                        </div>

                                        <h6 className="note">Note: An account activation email will be sent to the email address you provide.</h6>
                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password (Again)" required/>
                                        </div>

                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="agree-term"/>
                                            <label className="form-check-label" for="agree-term"> I have read and consent to the</label> <Link className="agree-term" to="/term">Terms of Service</Link>
                                        </div>

                                        <h6 className="note">By registering you consent to allow PCPartPicker to retain personal information consisting of your email address and 
                                            IP addresses used to access the site. PCPartPicker does not sell your personal information. 
                                            Details on what data we retain and how we use it can be found in our privacy policy.</h6>
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
}

export default Register