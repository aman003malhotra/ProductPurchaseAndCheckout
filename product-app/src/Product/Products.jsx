import React, { useEffect, useState } from 'react'
import SubProduct from './SubProduct';


const Products = () => {
    const [productData, setProductData] = useState();
    useEffect(() => {
        fetch('./product.json')
        .then(response => {
            return response.json();
        }).then(data => {
            setProductData(data);
        }).catch((e) => {
            console.log(e);
        });
    }, []);
  return (
    <>
    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Products</h1>
          </div>
    </header>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productData && productData.map((product) => (
                <SubProduct key={product.id} product={product}/>
            ))}  
        </div>
      </div>
    </div>
    </>
  )
}

export default Products