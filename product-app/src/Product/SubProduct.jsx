import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const SubProduct = ({product}) => {

  const dispatch = useDispatch();
  const handleBuy = () => {
    dispatch({type:"ADD_ITEM_TO_CART", payload:product});
  }

  const cart = useSelector(state => state.cart);
  return (
    <>
       <div key={product.id} className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                {/* <a href={product.href}> */}
                    <span aria-hidden="true" className="absolute" />
                    {product.title}
                {/* </a> */}
                </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
            </div>
            <button 
              type="submit" 
              className="rounded-md bg-indigo-600 disabled:bg-[#808080] disabled:text-grey py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={() => handleBuy()}
              disabled = {cart.filter(e => e.id === product.id).length > 0 } 
              >Buy Now</button>
        </div> 
    </>
  )
}

export default React.memo(SubProduct);