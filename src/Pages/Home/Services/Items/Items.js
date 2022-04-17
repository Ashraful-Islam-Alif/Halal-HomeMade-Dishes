import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({ item }) => {
    const { id, img, name, details, price } = item;
    const navigate = useNavigate();
    const handleToItemsDetails = id => {
        navigate(`/items/${id}`)
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-4">
            <div class="card w-100 text-center" >
                <img style={{ width: "330px", height: "260px" }} src={img} class="card-img-top img-thumbnail" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p><small>Price: {price}</small></p>
                    <p class="card-text">{details}</p>
                    <button onClick={() => handleToItemsDetails(id)} className='btn btn-dark w-50'>Details</button>
                </div>
            </div>
        </div>

    );
};

export default Items;