import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const cartTotal = useSelector(state => state.cartTotal);
  return (
    <section>
    <h1 className="sr-only">Checkout</h1>

    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-50 py-12 md:py-24">
        <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
          <div className="flex items-center gap-4">

            <h2 className="font-medium text-gray-900">Product App</h2>
          </div>

          <div>
            <p className="text-2xl font-medium tracking-tight text-gray-900">
            ₹ {cartTotal}
            </p>

            <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
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

        </div>
      </div>
        <CheckoutForm />
   </div>
</section>
  )
}

export default Cart