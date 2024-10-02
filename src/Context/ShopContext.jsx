// // import React, { createContext, useState } from 'react'
// // import all_product from '../Components/Assets/all_product'

// // export const ShopContext = createContext(null);
// // const getDefaultCart = ()=>{
// //     let cart = {};
// //     for (let index = 0; index < all_product.length+1; index++) {
// //         cart[index] = 0;
// //     }
// //     return cart;
// // }

// // const ShopContextProvider = (props) => {
    

// //     const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
// //     const addToCart = (itemId) =>{
// //         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
// //         console.log(cartItems);
// //     }
// //     const removeFromcart = (itemId)=>{
// //         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
// //     }

// //     const contextValue = {all_product,cartItems,addToCart,removeFromcart}; 
// //     return (
// //         <ShopContext.Provider value={contextValue}>
// //             {props.children}
// //         </ShopContext.Provider>
// //     )
// // }

// // export default ShopContextProvider;


// import React, { createContext, useEffect, useState } from 'react';

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index <300 + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {

//     const [all_product,setAll_Product] = useState([]);
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     useEffect(()=>{
//         fetch('http://localhost:4000/allproducts')
//         .then((response)=>response.json())
//         .then((data)=>setAll_Product(data))
//     },[])

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => {
//             const updatedCart = { ...prev };

//             // Ensure quantity does not go below zero
//             if (updatedCart[itemId] > 0) {
//                 updatedCart[itemId] -= 1;
//             }

//             // Remove item from cart if quantity reaches zero
//             if (updatedCart[itemId] === 0) {
//                 delete updatedCart[itemId];
//             }

//             return updatedCart;
//         });
//     }
//     // const getTotalCartAmount = () => {
//     //     let totalAmount = 0;
//     //     for(const item in cartItems)
//     //     {
//     //         if(cartItems[item]>0)
//     //         {
//     //             let itemInfo = all_product.find((product)=>product.id===Number(item))
//     //             totalAmount += itemInfo.new_price *  cartItems[item];
//     //         }
//     //         return totalAmount;
//     //     }
//     // }
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
    
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(item));
//                 totalAmount += itemInfo.new_price * cartItems[item];
//             }
//         }
    
//         return totalAmount;
//     }
    
//     const getTotalCartItems = () => {
//         let totalItem = 0;
//         for(const item in cartItems)
//         {
//             if(cartItems[item]>0)
//             {
//                 totalItem += cartItems[item];
//             }
//         }
//         return totalItem;
//     }

//     const contextValue = {getTotalCartItems,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContextProvider;

import React,{ createContext,useEffect,useState } from "react";
import { baseUrl } from "../urls";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {

    const [all_product,setAll_Product] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        // Fetch products first, independent of authentication
        fetch(`${baseUrl}/allproducts`)
            .then((response) => response.json())
            .then((data) => setAll_Product(data))
            .catch((err) => console.error('Error fetching products:', err)); // Log any fetch error for debugging
    
        // Check if the user is logged in by checking for the 'auth-token'
        if (localStorage.getItem('auth-token')) {
            fetch(`${baseUrl}/getcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json', // Fix the typo in 'application/form-data'
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json', // Fix the typo in 'application.json'
                },
                body: "", // You can remove this or send necessary data in body if required
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((err) => console.error('Error fetching cart:', err)); // Log any fetch error for debugging
        }
    }, []);
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch(`${baseUrl}/addtocart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch(`${baseUrl}/removefromcart`,{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
            return totalAmount;
        }
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
