import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getAuth} from '../../apis/Api';
import { setUser } from "../../slices/productSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
const {token} = useSelector((state)=> state.products)
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await getAuth({email,password});
  
   dispatch(setUser(response.data))   
    
    } catch (error) {
      console.log(error);
      // Handle error here (e.g., show error message)
    }
    if (token) {
        navigate('/')
        
       }
  };

  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Sign in to your account
                  </h2>
                  <form onSubmit={handleLogin}> {/* Use onSubmit instead of action="#!" */}
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            value={email}
                            placeholder="name@example.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex gap-2 justify-content-between">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              name="rememberMe"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label text-secondary"
                              htmlFor="rememberMe"
                            >
                              Keep me logged in
                            </label>
                          </div>
                          <a
                            href="#!"
                            className="link-primary text-decoration-none"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button className="btn btn-primary btn-lg" type="submit">
                            Log in
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="m-0 text-secondary text-center">
                          Don't have an account?{" "}
                          <a
                            href="#!"
                            className="link-primary text-decoration-none"
                          >
                            Sign up
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
