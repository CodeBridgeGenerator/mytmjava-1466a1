import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import UserLayout from "../Layouts/UserLayout";


const SingleInventoryPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("inventory")
            .get(urlParams.singleInventoryId, { query: { $populate: [            {
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
                props.alert({ title: "Inventory", type: "error", message: error.message || "Failed get inventory" });
            });
    }, [props,urlParams.singleInventoryId]);


    const goBack = () => {
        navigate(-1, { replace: true });
    };

    return (
        <UserLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Inventory</h3>
                </div>
                <p>inventory/{urlParams.singleInventoryId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Itemid</label><p className="m-0 ml-3" >{_entity?.itemId}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Itemname</label><p className="m-0 ml-3" >{_entity?.itemName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Category</label><p className="m-0 ml-3" >{_entity?.category}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Unitofmeasure</label><p className="m-0 ml-3" >{_entity?.unitOfMeasure}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Quantityonhand</label><p className="m-0 ml-3" >{_entity?.quantityOnHand}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Minimumstocklevel</label><p className="m-0 ml-3" >{_entity?.minimumStockLevel}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Maximumstocklevel</label><p className="m-0 ml-3" >{_entity?.maximumStockLevel}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Reorderpoint</label><p className="m-0 ml-3" >{_entity?.reorderPoint}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier</label><p className="m-0 ml-3" >{_entity?.supplier}</p></div>
            

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

export default connect(mapState, mapDispatch)(SingleInventoryPage);