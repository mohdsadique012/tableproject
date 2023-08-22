import React, { useEffect, useState } from 'react';
import "./Homepage.css";

function HomePage() {
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilter(data);
            });
    }, []);

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const allProduct = filter;
    const categoryKey = "category";
    const categories = [...new Map(data.map(item => [item[categoryKey], item])).values()];

    const handleClick = (category) => {
        const filteredProducts = data.filter(item => item[categoryKey] === category);
        setFilter(filteredProducts);
    };

    const handleAllProductsClick = () => {
        setFilter(data);
    };

    return (
        <>
            <div className='main_container'>
                <div className='category-container'>
                    <button className='button' onClick={handleAllProductsClick}>All Products</button>
                    {categories.map((category) => (
                        <button onClick={() => handleClick(category[categoryKey])} className='button' key={category[categoryKey]}>
                            {category[categoryKey]}
                        </button>
                    ))}
                </div>

                {allProduct.map((item) => (
                    <div className='Content_box' key={item.id}>
                        <img src={item.image} className='image' alt={item.title} />
                        <div>
                            <p>{item[categoryKey]}</p>
                            <h6>{item.title}</h6>
                            <span>
                                <span>Price: {item.price}</span> <span>Rating: {item.rating.rate}</span>
                            </span>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomePage;
