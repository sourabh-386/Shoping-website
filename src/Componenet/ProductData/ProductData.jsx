import React from 'react'
import './ProductData.css'

import { useContext } from 'react'
import { Context } from '../../Context/Context'

const ProductData = ({data}) => {


const { items,additem}=useContext(Context)  

// button function 
const item_data=(value)=>{

additem(value.id)

}




    const {id,productImage,productName,price}=data
  return (
    <div className='productdata'>
        <div className="productdata_img">
            <img src={productImage} alt="img" />
            <center><h2>{productName}</h2></center>
            <div className="productdata_btn">
            <h3>$ {price}</h3>
            <button style={{backgroundColor:items[id]===0?'white':'lightGreen'}} onClick={()=>{item_data(data)}} >{items[id]===0?'Add to Cart':`Added   (${items[id]})`} </button>
                
            </div>

        </div>

    </div>
  )
}

export default ProductData