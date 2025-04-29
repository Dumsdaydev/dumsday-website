import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Products.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const productList = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 49.99,
            category: "Accessories",
            image: 'https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?...'
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 89.99,
            category: "Wearables",
            image: 'https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039303.jpg?...'
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            price: 29.99,
            category: "Electronics",
            image: 'https://img.freepik.com/free-photo/composition-smart-speaker-table_23-2149036840.jpg?...'
        },
        {
            id: 4,
            name: "iphone 13",
            price: 999.99,
            category: "Phones",
            image: 'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?...'
        }
    ];

    const filteredProducts = productList.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );

    const handleBuyNow = (product) => {
        toast.success(`${product.name} added to checkout`);
        navigate('/checkout', { state: { product } });
    };

    return (
        <div className='products-page'>
            <h1 className='products-title'>Our Products</h1>

            <div className='search-bar'>
                <FaSearch className='search-icon' />
                <input
                    type='text'
                    placeholder='Search products...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className='category-filter'>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value=''>All categories</option>
                    <option value='Accessories'>Accessories</option>
                    <option value='Wearables'>Wearables</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Phones'>Phones</option>
                </select>
            </div>

            <div className='products-grid'>
                {filteredProducts.map(product => (
                    <div key={product.id} className='product-card'>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => handleBuyNow(product)} className='buy-button'>
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;