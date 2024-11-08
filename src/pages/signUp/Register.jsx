import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { addUser } from "../../api/user";
import { login, register } from "../../redux/authSlice";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "customer",
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
      // const res = await addUser(data);
      // localStorage.setItem("token",JSON.stringify(res.data))
      // dispatch(register(res.data));
      // navigate("/");

      const res = await axios.post(
        `http://${window.location.hostname}:5000/user/register`,
        data
      );
      dispatch(register(res.data))
      navigate("/")
    } catch (err) {
      toast.error(err.response.data.msg)
      console.log(err);
    }
  };
  return (
    <div>  
        <Navbar />
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 backImg text-dark">
      <div className="mt-2">
    
        {/* <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50 ">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-5 ">
              <div className="card bg-success p-5 text-dark bg-opacity-25  ">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h1>CREATE ACCOUNT</h1>
                    <div className="mb-3">
                      <label for="exampleInputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                      />
                    </div>
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
                      <label for="exampleInputPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        aria-describedby="passwordHelp"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputnumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputnumber"
                        aria-describedby="numberHelp"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputAddress"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-warning">
                      Submit
                    </button>
                    <div className="mt-3">
                      <Link className="form-text mt-5" to="/login">
                        Alredy Registered.?..Login here...
                      </Link>
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
          
            <div className="col-lg-6 d-none d-lg-inline-block">
              <div className="account-block rounded-right">
                <div className="overlay rounded-right" />
                <div className="account-testimonial">
                  <h4 className="text-white mb-4">
                  <Link className="form-text mt-5 text-white" to="/login">
                        Alredy Registered.?..Login here...
                      </Link>
                  </h4>
                  {/* <p className="lead text-white">
                    "Best investment i made for a long time. Can only recommend
                    it for other users."
                  </p>
                  <p>- Admin User</p> */}
                </div>
              </div>
            </div>  <div className="col-lg-6">
              <div className="p-5">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">Register</h3>
                </div>
                {/* <h6 className="h5 mb-0">Welcome back!</h6>
                <p className="text-muted mt-2 mb-5">
                  Enter your email address and password to access admin panel.
                </p> */}
                <form onSubmit={handleSubmit}>
                 
                  <div className="form-group">
                  <label for="exampleInputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="emailHelp"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                      />
                  </div>
                  <div className="form-group">
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
                  <div className="form-group">
                  <label for="exampleInputPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        aria-describedby="passwordHelp"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                  </div>
                  <div className="form-group ">
                  <label for="exampleInputnumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputnumber"
                        aria-describedby="numberHelp"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                      />
                  </div>
                  <div className="form-group mb-5 ">
                  <label for="exampleInputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputAddress"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                      />
                  </div>
                  <button type="submit" className="btn btn-theme">
                    Register
                  </button>
                  {/* <a href="#l" className="forgot-link float-right text-primary">
                    Forgot password?
                  </a> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-muted text-center mt-3 mb-0">
      <Link className="form-text mt-5 " to="/login">
                        Alredy Registered.?..Login here...
                      </Link>
      </p>
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

export default Register;
