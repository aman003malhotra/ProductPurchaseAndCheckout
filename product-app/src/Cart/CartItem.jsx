import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <li className="flex items-center gap-4 py-4">
        <img
            src={cartItem.thumbnail}
            alt=""
            className="h-16 w-16 rounded object-cover"
        />

        <div>
            <h3 className="text-sm text-gray-900">{cartItem.title}</h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
                <dt className="inline">Description: </dt>
                <dd className="inline">{cartItem.description}</dd>
            </div>

            <div>
                <dt className="inline">Price: </dt>
                <dd className="inline">₹ {cartItem.price}</dd>
            </div>
            </dl>
        </div>
    </li>
  )
}

export default CartItem