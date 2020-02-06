import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import ButtonContainer from './Button'
import Title from './Title';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-0">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2> module : {title} </h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <b>
                      price : <span>$</span>
                      {price}
                    </b>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    {info}
                  </p>
                  {/* button */}
                  <div className="py-3">
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={()=>{
                        value.addToCart(id)
                        value.openModal(id)
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
                {/* end product text */}
              </div>
              {/* end product info */}
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
