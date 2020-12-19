import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReturnHeader from '../../Components/Header/ReturnHeader';
import "./Account.css"

class Login extends Component {
    render(){
        return (
            <div className="account">
                <ReturnHeader />
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-4 mx-auto">
                        <div className="acc-banner text-center">
                            <h1>Your account</h1>
                        </div>
                        <div class="card card-signin shadow">
                            <div className="card-body">
                                <div class="block">
                                    <h5 class="card-title border-bottom">Sign In</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group">
                                            <h6 className="hide">Your E-mail:</h6>
                                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                                        </div>

                                        <div class="form-label-group">
                                            <h6 className="hide">Your Password</h6>
                                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                    </form>
                                    <div className="submit-btn">
                                        <button className="btn btn-primary" type="submit" id="login-submit">Submit</button>
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
}

export default Login