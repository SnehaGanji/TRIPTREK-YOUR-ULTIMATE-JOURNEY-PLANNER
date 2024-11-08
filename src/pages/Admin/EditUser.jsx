import React from "react";
import { Link, useAsyncError, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "../navbar/AdminNav";
const EditUser = () => {
  const params = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",

    role: "",
    createdAt: null
  });
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/user/${params.id}`);
      console.log(res.data, "tour");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data, "data");
  useEffect(() => {
    getData();
  }, []);
  const [photo, setPhoto] = useState(null);
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleFileChange = e => {
    setPhoto(e.target.files[0]);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role", data.role);
      formData.append("price", data.price);
      formData.append("createdAt", data.createdAt);
      const res = await axios.patch(
        "http://localhost:5000/user/" + params.id,
        formData
      );
      console.log(res.data, "user");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data, "data");
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark">
      <div className="mt-2">
        <AdminNav />
        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  tourbg">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-5 ">
              <div className="card bg-success p-5 text-dark bg-opacity-25  ">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <h1>EDIT PROFILE</h1>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                      />
                    </div>{" "}
                    {/* <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                      />
                    </div>{" "} */}
                    {/* <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Upload new photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        name="photo"
                        // value={data.photo}
                        onChange={handleFileChange}
                      />
                    </div> */}
                    {/* <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        role
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                        placeholder="Enter description"
                        aria-describedby="emailHelp"
                      />
                    </div>{" "} */}
                    {/* <div class="mb-3">
                      <label for="exampleInputName" class="form-label">
                        price
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName"
                        name="createdAt"
                        value={data.createdAt}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                      />
                    </div> */}
                    <button type="submit" class="btn btn-warning">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
