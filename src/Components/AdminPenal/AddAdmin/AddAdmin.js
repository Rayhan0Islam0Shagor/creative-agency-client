import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/admin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('success')
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12">
                <DashboardHeader title={'Add an Admin'} />
                <form style={{ borderRadius: "10px" }} className="w-75 bg-secondary p-5 d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <input required className="form-control" name="email" placeholder="Make sure admin email" ref={register({ required: true })} />
                    <br />
                    <input className="btn btn-success" value="send" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;