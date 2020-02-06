import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import ButtonContainer from './Button'
import { Link } from 'react-router-dom'

export default class modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value
          const { img, title, price } = value.modalProduct

          if (!modalOpen) {
            return null
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to='/'>
                        <ButtonContainer bgWhite onClick={() => closeModal()}>Store</ButtonContainer>
                      </Link>
                      <Link to='/cart'>
                        <ButtonContainer bgWhite cart onClick={() => closeModal()}>go to cart</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  left: 0;
  right: 0px;
  bottom: 0px;
  top: 0px;
  #modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 15px;
    width: 90%;
    max-width: 400px;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    box-shadow: 0 0 4px 1px rgba(10, 10, 10, 0.22);
  }
`
