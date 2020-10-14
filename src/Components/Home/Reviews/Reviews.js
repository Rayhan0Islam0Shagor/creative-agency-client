import React, { useEffect, useState } from 'react';
import client1 from '../../../images/customer-1.png'
import client2 from '../../../images/customer-2.png'
import client3 from '../../../images/customer-3.png'
import Feedback from '../Feedback/Feedback';

const clientFeedback = [
    {
        photo: client1,
        name: 'Nash Pratik',
        company_name: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, saepe qui doloribus magni delectus blanditiis!'
    },
    {
        photo: client2,
        name: 'Mariam Barron',
        company_name: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, saepe qui doloribus magni delectus blanditiis!'
    },
    {
        photo: client3,
        name: 'Bria Marron',
        company_name: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, saepe qui doloribus magni delectus blanditiis!'
    }
]

const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    const newReview = [...clientFeedback, ...review]

    return (
        <section>
            <h1 className="text-center" style={{ color: "#171b4e" }}>Client <span style={{ color: "#7AB259" }}>Feedback</span></h1>
            <div className="row p-5 mt-5 mb-5">
                {
                    newReview.map(feedback => <Feedback key={Math.random()} feedback={feedback} />)
                }
            </div>
        </section>
    );
};

export default Review;