import React, { useEffect, useState } from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import Sidebar from '../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import CustomerSingleService from '../CustomerSingleService/CustomerSingleService'
import { useContext } from 'react';
import { UserContext } from '../../../App';


const CustomerServices = () => {
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;

    const [order, setOrder] = useState([]);
    console.log(order)

    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])

    return (
        <section className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12">
                <DashboardHeader title={'Service List'} />
                <div style={{ backgroundColor: "#E5E5E5", paddingBottom: "100px" }} className="row ">
                    {
                        order.map(service => <CustomerSingleService key={Math.random()} info={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerServices;