import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../navbar/AdminNav";
import { toast } from "react-toastify";
import { getBookings } from "../../api/booking";
import { getUserById } from "../../api/user";
import { getTourById } from "../../api/tour";
import moment from "moment";
const ViewBookings = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await getBookings();
    for (let i of res.data) {
      const user = await getUserById(i.userId);
      i.userId = user.data;
      const tour = await getTourById(i.tourName);
      i.tourName = tour.data;
    }
    console.log(res.data, "contact");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/booking/${id}`);
    console.log(res.data);
    getData();
    toast.success(res.data.msg, {});
  };
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark fs-5 tourbg pb-1">
      <div className="mt-2 px-md-5 px-sm-0 py-md-5 py-sm-0 ">
        <AdminNav />

        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  pb-5">
          <div className="  py-md-5 py-sm-0">
            <div className="table-responsive ">
              <table className="table  table-info  ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">No. of People</th>
                    <th scope="col">phone Number</th>
                    <th scope="col">bookAt</th>
                    <th scope="col">tourName</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>{item.userId.email}</td>
                          <td>{item.userId.name}</td>
                          <td>{item.people}</td>
                          <td>{item.userId.phone}</td>
                          <td>{moment(item.bookAt).format("YYYY-MM-DD")}</td>
                          <td>{item.tourName.title}</td>

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
    </div>
  );
};

export default ViewBookings;
