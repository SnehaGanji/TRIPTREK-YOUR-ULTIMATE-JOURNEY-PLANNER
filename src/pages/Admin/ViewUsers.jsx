import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../navbar/AdminNav";
const ViewUsers = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/user`);
    console.log(res.data, "user");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/user/${id}`);
    console.log(res.data);
    getData();
  };
  const navigate = useNavigate();
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark fs-5 tourbg">
      <div className="mt-2">
        <AdminNav />

        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50   ">
          <div className="table-responsive">
            <table className="table table-info">
              <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">photo</th>
                  <th scope="col">role</th>
                  <th scope="col">createdAt</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td className="text-center">
                          <img
                            src={`http://${window.location.hostname}:5000/userimages/${item.photo}`}
                            alt={item.title}
                            width="70"
                            height="70"
                            className="rounded-circle"
                          />
                        </td>
                        <td>{item.role}</td>
                        <td>{item.createdAt}</td>

                        {/* <td>
                        <button className="btn btn-info" onClick={() => navigate(`/editUser/${item._id}`)}>EDIT</button>
                    </td> */}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item._id)}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
