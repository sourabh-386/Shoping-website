import React from 'react'
import './Cart.css'
import dog2 from '../../images/dog2.png'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Product_data } from '../../Data/DataProduct'

const Cart = () => {


  const { items, additem, removeitem } = useContext(Context)
  // console.log(items)





  let items_in_cart = false
  let total_price=0


  return (
    <div className='cart'>
      <br />
      <br />
      <center><h1 className='cart_title'>Your Cart Items</h1></center>
      <br />
      <br />
      <br />


      {
        Product_data.map((item) => {
          if (items[item.id] !== 0) {
            
            items_in_cart=true
            total_price= total_price+items[item.id] * item.price
            // console.log(total_price)
            return (
              <div className='cart_items'>
                <img src={item.productImage} alt="img" />
                <div className="cart_item_detail">
                  <h1>{item.productName}</h1>
                  <h2 className='cart_item_price'>Price : $ {item.price}</h2>
                  <div className='cart_btn'>
                    <div className='cart_btn_remove' onClick={() => { removeitem(item.id) }}>-</div>
                    <div className='cart_item_number' >{items[item.id]}</div>
                    <div className='cart_btn_add' onClick={() => { additem(item.id) }}>+</div>

                  </div>
                  <h2 className='cart_item_total_price'>Total Price : $ {items[item.id] * item.price}</h2>

                </div>
              </div>
            )

          }


        })

      }


<center><h1 className='nothing'>{items_in_cart===false?<div className='nothing_show'><img src={dog2} alt="" /> <h2>Nothing To Show</h2></div>:<div className='total_price'>
  <p>Total -  $ {total_price}</p>
  <button>Proceed To Payment</button>
  </div>}</h1></center>
    </div>

  )
}

export default Cart