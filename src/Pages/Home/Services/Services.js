import React from 'react';
import services1 from '../../../images/items/service1.jpg'
import service2 from '../../../images/items/service2.jpg'
import service3 from '../../../images/items/service3.jpg'

import Items from './Items/Items';

const items = [
    { id: 1, price: "(150-400)tk", img: services1, name: "HomeMade Meals", details: "Looking for food to make for dinner tonight? These recipes are comfort food at its best. From homemade chicken potpie to mom's meatloaf, make these comforting dinner foods when you need a home-cooked meal." },
    { id: 2, price: "(100-200)tk", img: service2, name: "HomeMade Drinks", details: "If you’re looking for colorful, fresh, fruity drinks that are refreshing and perfect for summer, here are four homemade drink ideas. I wanted to create a series of non-alcoholic drinks that were impressively beautiful, fresh, and delicious." },
    { id: 3, price: "(500-2000)tk", img: service3, name: "HomeMade Cake", details: "If you're looking for a birthday treat, or pastries for a coffee morning, then there's a wide choice, and probably 'a bakery near me' which will serve exactly what you want. Delicious breads, wonderful cakes, and delightful cookies are what make the day sweet and fun.  There's also a range of cake and bakery goods from all over the world to enjoy in Dhaka, so read on to find out more." },
]
const Services = () => {

    return (
        <div className='container mb-5'>
            <h1 className='text-center m-5'>Services</h1>

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