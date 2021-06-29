import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Getuserbyid, Updateuserbyid } from "./api";

function Update(props) {

    let [fullname, setfullname] = useState("");
    let [mobile, setmobile] = useState();
    let [jobtype, setjobtype] = useState("");
    let [preflocation, setpreflocation] = useState("");
    let [email, setemail] = useState("");
    let [dob, setDob] = useState("");
    let [user, setUser] = useState([]);

   

    useEffect(async () => {
        let user = await Getuserbyid(props.match.params.id);
        setfullname(user.data.fullname)
        setmobile(user.data.mobile)
        setjobtype(user.data.jobtype)
        setpreflocation(user.data.preflocation)
        setDob(user.data.dob)
        setemail(user.data.email)
    }, [])

    
    let userdata = { fullname, mobile, jobtype, preflocation, email, dob }
    let history = useHistory();


    return (
        <>
            <form className="border border-3 border-dark rounded mt-5 px-3 py-3 bg-light" onSubmit={async (e) => {
                e.preventDefault();
               await Updateuserbyid(props.match.params.id,userdata)
               setfullname("");
               setmobile("");
               setjobtype("");
               setpreflocation("")
               setemail("");
               setDob("");
                history.push("/")
            }}>
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
                    <input type="submit" className="btn btn-primary col-2 offset-9" value="update" />
                </div>
            </form>
        </>
    )
}

export default Update;