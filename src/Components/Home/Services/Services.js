import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {

    const [products, setProducts] = useState([])

    useEffect(() => (
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    ), [])

    return (
        <div>
            <h3 className="text-center">Provide awesome <span style={{ color: "#7AB259" }}>services</span>
            </h3>
            <div className="row mt-5 d-flex justify-content-around mb-5">
                {
                    products.map(service => <Service key={Math.random()} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;