import React from 'react';

const Feedback = ({ feedback }) => {

    return (
        <div className="col-md-4">
            <div className="m-2 p-5 custom-card">
                <div className="d-flex mb-3">
                    <div>
                        <img className="rounded-circle" height="80px" width="80px" src={feedback.photo} alt="" />
                    </div>
                    <div className="pl-2 pt-3">
                        <h5>{feedback.name}</h5>
                        <strong>{feedback.company_name}</strong>
                    </div>
                </div>
                <h6>{feedback.description.substring(0, 150) + '...'}</h6>
            </div>
        </div>
    );
};

export default Feedback;