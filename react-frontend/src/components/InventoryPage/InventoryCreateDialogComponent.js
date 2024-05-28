import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';




const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const InventoryCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        // replace this when there is a date field
        // const init  = { todate : new Date(), from : new Date()};
        // set_entity({...init});
        set_entity({});
    }, [props.show]);

    const validate = () => {
        {/*~cb-data-to-validate~*/}
        return true;
    }

    const onSave = async () => {
        let _data = {
            itemId: _entity?.itemId,
itemName: _entity?.itemName,
category: _entity?.category,
unitOfMeasure: _entity?.unitOfMeasure,
quantityOnHand: _entity?.quantityOnHand,
minimumStockLevel: _entity?.minimumStockLevel,
maximumStockLevel: _entity?.maximumStockLevel,
reorderPoint: _entity?.reorderPoint,
supplier: _entity?.supplier,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("inventory").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info inventory created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    

    return (
        <Dialog header="Create Inventory" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="inventory-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="itemId">Itemid:</label>
                <InputText id="itemId" className="w-full mb-3 p-inputtext-sm" value={_entity?.itemId} onChange={(e) => setValByKey("itemId", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="itemName">Itemname:</label>
                <InputText id="itemName" className="w-full mb-3 p-inputtext-sm" value={_entity?.itemName} onChange={(e) => setValByKey("itemName", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="category">Category:</label>
                <InputText id="category" className="w-full mb-3 p-inputtext-sm" value={_entity?.category} onChange={(e) => setValByKey("category", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="unitOfMeasure">Unitofmeasure:</label>
                <InputText id="unitOfMeasure" className="w-full mb-3 p-inputtext-sm" value={_entity?.unitOfMeasure} onChange={(e) => setValByKey("unitOfMeasure", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="quantityOnHand">Quantityonhand:</label>
                <InputText id="quantityOnHand" className="w-full mb-3 p-inputtext-sm" value={_entity?.quantityOnHand} onChange={(e) => setValByKey("quantityOnHand", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="minimumStockLevel">Minimumstocklevel:</label>
                <InputText id="minimumStockLevel" className="w-full mb-3 p-inputtext-sm" value={_entity?.minimumStockLevel} onChange={(e) => setValByKey("minimumStockLevel", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="maximumStockLevel">Maximumstocklevel:</label>
                <InputText id="maximumStockLevel" className="w-full mb-3 p-inputtext-sm" value={_entity?.maximumStockLevel} onChange={(e) => setValByKey("maximumStockLevel", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="reorderPoint">Reorderpoint:</label>
                <InputText id="reorderPoint" className="w-full mb-3 p-inputtext-sm" value={_entity?.reorderPoint} onChange={(e) => setValByKey("reorderPoint", e.target.value)}  />
            </span>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplier">Supplier:</label>
                <InputText id="supplier" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplier} onChange={(e) => setValByKey("supplier", e.target.value)}  />
            </span>
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InventoryCreateDialogComponent);
