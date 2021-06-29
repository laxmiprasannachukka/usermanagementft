import React, { useState, useEffect } from 'react';
import { Postuserdata } from './api.js';
import { Getuserdata } from './api.js';
import {Deleteuserbyid} from './api.js';
import { useHistory } from "react-router-dom";





const Home = () => {
    let [fullname, setfullname] = useState("");
    let [mobile, setmobile] = useState();
    let [jobtype, setjobtype] = useState("");
    let [preflocation, setpreflocation] = useState("");
    let [email, setemail] = useState("");
    let [dob, setDob] = useState("");
    let [user, setUser] = useState([]);

    let history = useHistory();

    useEffect(async () => {
        let users = await Getuserdata()
        setUser(users.data)
        console.log(users.data)
    }, []);


    async function Userdata(e) {
        e.preventDefault();
        let userdata = { fullname, mobile, jobtype, preflocation, email, dob }
        await Postuserdata(userdata);
        console.log(userdata);
        setfullname("");
        setmobile("");
        setjobtype("");
        setpreflocation("")
        setemail("");
        setDob("");
        history.push("/")


    }



    return ( 
    <>
            <form  className="border border-3 border-dark rounded mt-5 px-3 py-3 bg-light" onSubmit={(e) => Userdata(e)}>
            <div className="row">
                    <h1 className="text-secondary">Registration Form</h1>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="name"><h5 className="text-secondary">Full Name</h5></label>
                        <input type="text" class="form-control" id="name" required placeholder="Name" value={fullname} onChange={(e) => {
                            setfullname(e.target.value);
                        }} />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="phone"><h5 className="text-secondary">Phone Number</h5></label>
                        <input type="tel" class="form-control" placeholder="99xx99xx99" required pattern="[0-9]{10}" id="phone" value={mobile} onChange={(e) => {
                            setmobile(e.target.value);
                        }} />
                    </div>
                    </div>
                    <div class="row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4"><h5 className="text-secondary">Email</h5></label>
                        <input type="email" class="form-control" id="inputEmail4" required placeholder="Email" value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }} />
                    </div>
                    </div>
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0"><h5 className="text-secondary">Job Type</h5></legend>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="FT" onChange={(e) => {
                                setjobtype(e.target.value);
                            }} />
                            <label class="form-check-label" for="gridRadios1">
                                FT
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="PT" onChange={(e) => {
                                setjobtype(e.target.value);
                            }} />
                            <label class="form-check-label" for="gridRadios2">
                                PT
                            </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Consultant" onChange={(e) => {
                                setjobtype(e.target.value);
                            }} />
                            <label class="form-check-label" for="gridRadios3">
                                Consultant
                            </label>
                        </div>
                    </div>
                    </div>
                     <div class="row">
                    <div class="form-group col-md-4">
                        <label for="dob"><h5 className="text-secondary">DOB</h5></label>
                        <input type="date" class="form-control" placeholder="Date Posted" id="dob" required value={dob} onChange={(e) => {
                            setDob(e.target.value);
                        }} />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="location"><h5 className="text-secondary">Prefered Location</h5></label>
                        <select id="location" class="form-control" required onChange={(e) => {
                            setpreflocation(e.target.value);
                        }} >
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
                            <option value="hyderabad">hyderabad</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <input type="submit" className="btn btn-primary col-2 offset-9" value="submit" />
                </div>
            </form>

            
            <table class="table table-striped border border-3 border-dark rounded mt-5 px-3 py-3 bg-light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Job Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((use, index) => {
                            return (
                                <tr>
                                    <th>{use.fullname}</th>
                                    <td>{use.email}</td>
                                    <td>{use.mobile}</td>
                                    <td>{use.dob}</td>
                                    <td>{use.jobtype}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={async () => {
                                            history.push(`/update/${use._id}`)
                                        }}>Update</button>
                                        <button className="btn btn-danger btn-sm" onClick={async () => {
                                            await Deleteuserbyid(use._id);
                                            history.push('/')
                                        }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    
</>
    )


}
export default Home