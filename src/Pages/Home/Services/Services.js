import React from 'react';
import items1 from '../../../images/items/items1.jpg'
import items2 from '../../../images/items/items2.jpg'
import items3 from '../../../images/items/items3.jpg'
import items4 from '../../../images/items/items4.jpg'
import Items from './Items/Items';

const items = [
    { id: 1, price: "150tk", img: items1, name: "Beef Tehari", details: "Tehari (তেহারি) is a rice dish that is almost always made with beef in Bangladesh. With mustard oil, authentic old Dhaka tehari is prepared. In the Indian subcontinent (India, Pakistan, and Bangladesh) cuisine, beef tehari (বিফ তেহারি) is extremely popular." },
    { id: 2, price: "130tk", img: items2, name: "Chicken Khichuri", details: "Spicy rice dish cooked lentil served with chicken. Chicken Khichuri. Pearls of rice. Gorgeous red lentils. Succulent cuts of chicken. An ensemble of spices. Dollops of ghee. All cooked to luxuriant perfection." },
    { id: 3, price: "160tk", img: items3, name: "Morog Polao", details: "Morog Pulao is a delicious food for any special day." },
    { id: 4, price: "300tk", img: items4, name: "Mutton Paya", details: "Mutton paya goat is basically stew or broth made with goat trotters when these trotters are cooked in water with some ginger, garlic and spices like red chili, turmeric powder, coriander powder and salt overnight so that the juice from the goat legs or trotters is extracted fully and mixed with the gravy ." }
]
const Services = () => {

    return (
        <div className='container '>
            <h1 className='text-center m-5'>Items</h1>

            <div className="row ">
                {
                    items.map(item => <Items
                        key={item.id}
                        item={item}
                    ></Items>)
                }
            </div>

        </div>
    );
};

export default Services;