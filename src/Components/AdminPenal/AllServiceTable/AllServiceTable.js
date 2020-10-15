import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { css } from "@emotion/core";
import { FadeLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const AllServiceTable = () => {
    const [allService, setAllService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allService')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [allService])

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th colspan="4">Name</th>
                    <th colspan="3">Email Id</th>
                    <th colspan="1">Service</th>
                    <th colspan="3">Project Details</th>
                    <th colspan="1">Action</th>
                </tr>
            </thead>
            {
                allService.length === 0 &&
                <FadeLoader
                    className="d-flex justify-content-center"
                    css={override}
                    size={150}
                    color={"#0f3057"}
                />
            }
            {
                allService.map(user =>
                    <tbody>
                        <tr>
                            <th colspan="5">{user.name}</th>
                            <td colspan="2">{user.email}</td>
                            <td colspan="1">{user.service}</td>
                            <td colspan="3">{user.description.substring(0, 40) + '...'}</td>
                            <td colspan="1">
                                <button className="btn btn-danger">
                                    done
                        </button>
                            </td>
                        </tr>
                    </tbody>
                )}
        </table>
    );
};

export default AllServiceTable;



