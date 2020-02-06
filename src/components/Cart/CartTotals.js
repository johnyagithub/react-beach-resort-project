import React from 'react'

import { Link } from 'react-router-dom'

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value
  return (
    <React.Fragment>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-center text-md-right ">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <b>$ {cartSubTotal}</b>
            </h5>
            <h5>
              <span className="text-title">tex :</span>
              <b>$ {cartTax}</b>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <b>$ {cartTotal}</b>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
