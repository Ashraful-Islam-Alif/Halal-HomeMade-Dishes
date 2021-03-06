import React from 'react';
import './Items.css';
import { useNavigate } from 'react-router-dom';


const Items = ({ item }) => {
    const { id, img, name, details, price } = item;
    const navigate = useNavigate();
    const handleToItemsDetails = id => {
        navigate(`/items/${id}`)
    }
    return (
        <div id={'items'} className="col-sm-12 col-md-6 col-lg-4 g-4">
            <div className="card h-100 text-center mb-3" >
                <div>
                    <img style={{ width: "330px", height: "260px" }} src={img} className="card-img-top img-thumbnail" alt="..." />
                </div>
                <div className="card-body mb-5 ">
                    <h5 className="card-title">{name}</h5>
                    <p><small>Price: {price}</small></p>
                    <p className="card-text">{details}</p>
                    <button style={{ "margin-top": "auto" }} onClick={() => handleToItemsDetails(id)} className='btn btn-dark w-50 mx-5  '>Details</button>
                </div>
            </div>
        </div>

    );
};

export default Items;