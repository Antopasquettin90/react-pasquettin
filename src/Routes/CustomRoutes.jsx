import React, { useEffect, useState } from 'react';

import CustomRoutes from './CustomRoutes'

const CustomRoutes = () => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/product/1')
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  function App() {
  return <CustomRoutes />
  };
};

export default CustomRoutes;
