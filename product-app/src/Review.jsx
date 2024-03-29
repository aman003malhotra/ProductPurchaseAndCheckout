import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './Cart/CartItem';

const Review = () => {
  const store = useSelector(state => state);
  const cart = useSelector(state => state.cart)
  const cartTotal = useSelector(state => state.cartTotal);
  return (
    <div>
    <section>

    <div className="mx-auto grid max-w-screen-2xl grid-cols-1">
      <div className="bg-gray-50 py-12 md:py-24">
        <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
          <div className="flex items-center gap-4">

            <h2 className="font-medium text-gray-900">Items Bought</h2>
          </div>

          <div>
            <p className="text-2xl font-medium tracking-tight text-gray-900">
            ₹ {cartTotal}
            </p>

            <p className="mt-1 text-sm text-gray-600">You have purchased</p>
          </div>


        { cart.map(cartItem => (
            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  <CartItem key={cartItem.id} cartItem={cartItem}/>
                </ul>
              </div>
            </div>
        ))}
        {
          <>
            <p>Name: {store.userInfo.firstName} {store.userInfo.lastName} </p>
            <p>Email: {store.userInfo.email}</p>
            <p>Phone Number: {store.userInfo.phoneNumber}</p>
          </>
          

        }
        </div>
      </div>
   </div>
</section>

    </div>
  )
}

export default Review