import React from 'react'
import { useEffect } from 'react'

const Products = () => {
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);
    })
  return (
    <div>Products</div>
  )
}

export default Products