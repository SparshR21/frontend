// components/Alert.js

import React, { useEffect } from 'react';

const Alert = ({ message }) => {
    useEffect(() => {
        // Check if the user is logged in by verifying if the token is in localStorage
        const token = localStorage.getItem('auth-token');

        // If no token found (user not logged in), display the alert message
        if (!token && message) {
            alert(message); // Display the alert message
        }
    }, [message]);

    return null; // Alert component doesn't render any visible UI
};

export default Alert;
