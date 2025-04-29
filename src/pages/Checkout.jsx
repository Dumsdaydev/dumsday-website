import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './Checkout.css';

function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [checkoutItems, setCheckoutItems] = useState(() => {
        const stored = localStorage.getItem('checkoutItems');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        const { product } = location.state || {};
        if (product) {
            setCheckoutItems(prevItems => {
                const exists = prevItems.some(item => item.id === product.id);
                if (!exists) {
                    const updated = [...prevItems, { ...product, quantity: 1 }];
                    localStorage.setItem('checkoutItems', JSON.stringify(updated));
                    return updated;
                }
                return prevItems;
            });
        }
    }, [location.state]);

    useEffect(() => {
        localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    }, [checkoutItems]);

    useEffect(() => {
        if (checkoutItems.length === 0) {
            const timer = setTimeout(() => {
                navigate('/products');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [checkoutItems, navigate]);

    const handleDelete = (id) => {
        const updatedItems = checkoutItems.filter(item => item.id !== id);
        setCheckoutItems(updatedItems);
    };

    const handleQuantityChange = (id, amount) => {
        setCheckoutItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const totalPrice = checkoutItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    if (checkoutItems.length === 0) {
        return <p className="empty-message">No product selected for checkout. Redirecting...</p>;
    }

    return (
        <div className="checkout-page">
            <div className="checkout-items">
                {checkoutItems.map(item => (
                    <div className="checkout-product" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="checkout-product-details">
                            <h3>{item.name}</h3>
                            <p><strong>${item.price}</strong></p>
                        </div>
                        <div className="checkout-quantity-controls">
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                        <FaTrash
                            className="delete-icon"
                            onClick={() => handleDelete(item.id)}
                            title="Remove Item"
                        />
                    </div>
                ))}
            </div>

            <div className="checkout-summary">
                <div className="summary-details">
                    <span>Total price</span>
                    <span>${totalPrice}</span>
                </div>
                <h3>Summary</h3>
                <div className="summary-buttons">
                    <button className="back-button" onClick={() => navigate('/products')}>
                        ← back to shop
                    </button>
                    <button className="checkout-button">
                        check out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;