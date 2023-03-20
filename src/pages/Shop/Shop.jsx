import React from 'react'
import { Product_data } from '../../Data/DataProduct'
import { ProductData } from '../../Componenet'
import './Shop.css'
const Shop = () => {
    
    return (
        <div className='shop'>
            <br />
            <br />
            <br />
            <br />
            <br />

            <center><h1 className='shop_title'>Shopping Items</h1></center>
            <br />
            <br />

            <div className="shop_item">
                {
                    Product_data.map((data) => {
                        return (
                            <div>
                                <ProductData data={data} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop