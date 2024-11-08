import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "../navbar/AdminNav";
import { toast } from "react-toastify";
const ViewContacts = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/contact`);
    console.log(res.data, "contact");
    setData(res.data)
  };
  useEffect(() => {
    getData();
  }, []);
const handleDelete=async(id) => {
    const res=await axios.delete(`http://localhost:5000/contact/${id}`);
    console.log(res.data)
    getData();
    toast.success(res.data.msg,{})
}
  return (
    <div className="px-md-5 px-sm-0 py-md-5 py-sm-0  mb-2 bg-warning text-dark fs-5 tourbg">
      <div className="mt-2">
        <AdminNav />

        
        <div className="container-fluid bg-light px-md-5 px-sm-0 py-md-5 py-sm-0  bg-opacity-50  " >
        <div className="table-responsive "> 
       
<table className="table table-info">
    <thead>
        <tr>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">Phone</th>
        <th scope="col">Message</th>
   <th></th>
        </tr>
       
    </thead>
    <tbody>
    {data.map((item,index) => {
            return(
                <>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.message}</td>
                   
                  
                    <td>
                        <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>DELETE</button>
                    </td>
                </tr>
                </>
                )
            })}
    </tbody>
</table>
        </div>
      </div>
    </div></div>
  );
};

export default ViewContacts;
