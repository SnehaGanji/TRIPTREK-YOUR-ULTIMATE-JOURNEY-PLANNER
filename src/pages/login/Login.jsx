import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.email === "admin@gmail.com" && data.password === "admin") {
        // dispatch(login(data));
        localStorage.setItem(
          "token",
          JSON.stringify({ email: data.email, role: "Admin" })
        );
        navigate("/adminHome");
        window.location.assign("/adminHome");

        toast.success("Logged In Successfully");
      } else {
        const res = await axios.post(
          `http://${window.location.hostname}:5000/user/login`,
          data
        );
        dispatch(login(res.data));
        navigate("/");

        toast.success("Logged In Successfully");
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  return (  
    <div><Navbar /> 
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0 backImg text-dark">
    <div className="mt-2">
       
        {/* <div className="container-fluid bg-light py-md-5 py-sm-5  px-md-5 px-sm-0 bg-opacity-50 ">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-5 ">
              <div className="card bg-success px-md-5 px-sm-0 py-md-5 py-sm-5  text-dark bg-opacity-25 mt-5 ">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h1>LOGIN PAGE</h1>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-warning">
                      Submit
                    </button>
                    <div className="mt-3">
                      <div className="form-text">
                        <Link to="/signup">
                          Not Registered yet?... Register here
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
       <div className="mt-5"> 
        <div id="main-wrapper" className="container">
  <div className="row justify-content-center">
    <div className="col-xl-10">
      <div className="card border-0">
        <div className="card-body p-0">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="p-5">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">Login</h3>
                </div>
                <h6 className="h5 mb-0">Welcome back!</h6>
                <p className="text-muted mt-2 mb-5">
                  Enter your email address and password 
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                       type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       name="email"
                       value={data.email}
                       onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-theme">
                    Login
                  </button>
                 
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block">
              <div className="account-block rounded-right">
                <div className="overlay rounded-right" />
                <div className="account-testimonial">
                  <h4 className="text-white mb-4">
                  <Link to="/signup" className="text-white mb-4">
                          Not Registered yet?... Register here
                        </Link>
                  
                  </h4>
                  <p className="lead text-white">
                   
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  
  </div>
</div>
<style jsx="true">{`
.account-block {
    padding: 0;
    background-image: url(https://static6.depositphotos.com/1006568/627/i/450/depositphotos_6274141-stock-photo-travel-%E2%80%93-collection-of-the.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
}
.account-block .overlay {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
}
.account-block .account-testimonial {
    text-align: center;
    color: #fff;
    position: absolute;
    margin: 0 auto;
    padding: 0 1.75rem;
    bottom: 3rem;
    left: 0;
    right: 0;
}

.text-theme {
    color: #5369f8 !important;
}

.btn-theme {
    background-color: #5369f8;
    border-color: #5369f8;
    color: #fff;
}
`}</style>
    </div>
      </div>
    </div></div>
  );
};

export default Login;
