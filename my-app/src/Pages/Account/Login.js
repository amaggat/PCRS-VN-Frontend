import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Account.css"

class Login extends Component {
    render(){
        return (
            <div className="account">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <h5 class="card-title border-bottom">Sign In</h5>
                                <form class="form-signin">
                                    <div class="form-label-group">
                                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                                    </div>

                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                                    </div>

                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                                    </div>
                                </form>
                                <div className="border-top text-center">
                                    <Link className="reset-password" to="/forgot">Forgot password?</Link>
                                </div>

                                <div className="submit-btn">
                                    <button className="btn btn-primary" type="submit" id="login-submit">Submit</button>
                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title border-bottom">Not a member?</h5>
                                <div className="sub-register">
                                    <Link className="btn btn-outline-primary" to="/register">Register now</Link>
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