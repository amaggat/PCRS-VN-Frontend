import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReturnHeader from '../../Components/Header/ReturnHeader';
import "./Account.css"

class Register extends Component {
    render() {
        return (
            <div className="account">
                <ReturnHeader />
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title border-bottom">Create a new account</h5>
                                <form class="form-signin">
                                    <div class="form-label-group">
                                        <input type="username" id="username" class="form-control" placeholder="Username" required autofocus/>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="email" id="email" class="form-control" placeholder="E-mail" required/>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="email" id="email" class="form-control" placeholder="E-mail (Again)" required/>
                                    </div>

                                    <h6>Note: An account activation email will be sent to the email address you provide.</h6>

                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password (Again)" required/>
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="agree-term"/>
                                        <label class="form-check-label" for="agree-term"> I have read and consent to the Terms of Service</label>
                                    </div>

                                    <h6>By registering you consent to allow PCPartPicker to retain personal information consisting of your email address and 
                                        IP addresses used to access the site. PCPartPicker does not sell your personal information. 
                                        Details on what data we retain and how we use it can be found in our privacy policy.</h6>
                                </form>

                                <div className="submit-btn">
                                    <button className="btn btn-primary" type="submit" id="register-submit">Register</button>
                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title border-bottom">Already a member?</h5>
                                <div className="sub-login">
                                    <Link className="btn btn-outline-primary" to="/login">Sign in</Link>
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