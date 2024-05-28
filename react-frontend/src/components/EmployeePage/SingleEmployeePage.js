import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import UserLayout from "../Layouts/UserLayout";


const SingleEmployeePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("employee")
            .get(urlParams.singleEmployeeId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Employee", type: "error", message: error.message || "Failed get employee" });
            });
    }, [props,urlParams.singleEmployeeId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <UserLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Employee</h3>
                </div>
                <p>employee/{urlParams.singleEmployeeId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Name</label><p className="m-0 ml-3" >{_entity?.name}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Employeeid</label><p className="m-0 ml-3" >{_entity?.employeeId}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Dob</label><p className="m-0 ml-3" >{_entity?.dob}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Gender</label><p className="m-0 ml-3" >{_entity?.gender}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Phone</label><p className="m-0 ml-3" >{_entity?.phone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Email</label><p className="m-0 ml-3" >{_entity?.email}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Address</label><p className="m-0 ml-3" >{_entity?.address}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Employment</label><p className="m-0 ml-3" >{_entity?.employment}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Status</label><p className="m-0 ml-3" >{_entity?.status}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Hire</label><p className="m-0 ml-3" >{_entity?.hire}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Date</label><p className="m-0 ml-3" >{_entity?.date}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Terminationdate</label><p className="m-0 ml-3" >{_entity?.terminationDate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Job</label><p className="m-0 ml-3" >{_entity?.job}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Title</label><p className="m-0 ml-3" >{_entity?.title}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Department</label><p className="m-0 ml-3" >{_entity?.department}</p></div>
            

            <div className="col-12">&nbsp;</div>
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">created</label>
                <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">updated</label>
                <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">createdBy</label>
                <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
            </div>
            
            <div className="col-12 md:col-6 lg:col-3">
                <label className="text-sm text-primary">lastUpdatedBy</label>
                <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
            </div>

                </div>
            </div>
        </div>
        
        </UserLayout>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleEmployeePage);
