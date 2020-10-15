import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import CustomerSingleService from '../CustomerSingleService/CustomerSingleService'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { css } from "@emotion/core";
import { BounceLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const CustomerServices = () => {
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;

    const [order, setOrder] = useState([]);

    useEffect(() => {
        service()
    }, [order])

    const service = async () => {
        await fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }

    return (
        <section className="row">
            <div className="col-md-2 col-sm-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12">
                <DashboardHeader title={'Service List'} />
                <div style={{ backgroundColor: "#E5E5E5", paddingBottom: "100px" }} className="row ">
                    {
                        order.length === 0 &&
                        <BounceLoader
                            css={override}
                            size={70}
                            color={"#0278ae"}
                        />
                    }
                    {
                        order.map(service => <CustomerSingleService key={Math.random()} info={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerServices;