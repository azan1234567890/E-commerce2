// import React, { createContext, useState } from 'react';

// export const ApiContext = createContext();

// export const ApiProvider = ({ children, productapi }) => {
//   const [cart, setCart] = useState([]);
//   const handleClick = (product) => {
//     setCart((prevCart) => [...prevCart, ...product]); 
//   };
//   const Increment = (product) => {
//       if (product) {
//         const existingProduct = cart.find((item) => item.id === product.id);
//         setCart();
//       } else {
//         setCart((prevCart) => [...prevCart, { ...product, stock: 1 }]);
//       }

//   };

//   return (
//     <ApiContext.Provider value={{ productapi, handleClick, Increment, cart }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };
