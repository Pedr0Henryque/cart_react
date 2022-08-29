import React, { useState, useEffect } from 'react'
import styles from './Cart/Cart.module.css'

function Cart() {} 
  return (
  <>
    <div>
      <main>
        <div className="basket">
          <div className="basket-module">
            <label htmlFor="promo-code">Insira o código promocional</label>
            <input id="promo-code" type="text" name="promo-code" maxLength={5} className="promo-code-field" />
            <button className="promo-code-cta">Aplicar</button>
          </div>
          <div className="basket-labels">
            <ul>
              <li className="item item-heading">Item</li>
              <li className="price">Preço</li>
              <li className="quantity">Quantidade</li>
              <li className="subtotal">Subtotal</li>
            </ul>
          </div>
          <div className="basket-product">
            <div className="item">
              <div className="product-image">
                <img src="/images/index/product1.jpg" alt="imagem produto 1" className="product-frame" />
              </div>
              <div className="product-details">
                <h1><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
                <p><strong>Navy, Size 18</strong></p>
                <p>Product Code - 232321939</p>
              </div>
            </div>
            <div className="price">26.00</div>
            <div className="quantity">
              <input type="number" defaultValue={4} min={1} className="quantity-field" />
            </div>
            <div className="subtotal">104.00</div>
            <div className="remove">
              <button>Remover</button>
            </div>
          </div>
          <div className="basket-product">
            <div className="item">
              <div className="product-image">
                <img src="/images/index/product2.jpg" alt="Placholder Image 2" className="product-frame" />
              </div>
              <div className="product-details">
                <h1><strong><span className="item-quantity">1</span> x Whistles</strong> Amella Lace Midi Dress</h1>
                <p><strong>Navy, Size 10</strong></p>
                <p>Product Code - 232321939</p>
              </div>
            </div>
            <div className="price">26.00</div>
            <div className="quantity">
              <input type="number" defaultValue={1} min={1} className="quantity-field" />
            </div>
            <div className="subtotal">26.00</div>
            <div className="remove">
              <button>Remover</button>
            </div>
          </div>
        </div>
        <aside>
          <div className="summary">
            <div className="summary-total-items"><span className="total-items" /> Itens no seu Carrinho</div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
              <div className="summary-promo hide">
                <div className="promo-title">Promotion</div>
                <div className="promo-value final-value" id="basket-promo" />
              </div>
            </div>
            <div className="summary-delivery">
              <select name="delivery-collection" className="summary-delivery-selection">
                <option value={0} selected="selected">Selecione retirar ou tipo de envio</option>
                <option value="collection">Retirar</option>
                <option value="signed-for">Correios Mini Envios</option>
                <option value="first-class">Correios PAC</option>
                <option value="second-class">Correios Sedex</option>
                <option value="third-class">Correios Sedex 10</option>
                <option value="fourth-class">Correios Sedex Hoje</option>
              </select>
            </div>
            <div className="summary-total">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">130.00</div>
            </div>
            <div className="summary-checkout">
              <button className="checkout-cta"><a href ir para compra segura /></button>
           </div>
              </aside>
        </main>
        </div>
  </>
)
  
    
  

export default Cart
