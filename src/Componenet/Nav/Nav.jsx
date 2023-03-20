import React, { useRef } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Product_data } from '../../Data/DataProduct'

// import { ShoppingCart } from "phosphor-react"
const Nav = () => {

    const { items } = useContext(Context)
    console.log(items)
    // let ref=useRef(null)
    // ref.current.style.backgroundColor="pink"


    let no_of_items = 0


    return (
        <div className='nav'>
<h3 className='logo'>Shoping.com</h3>
            <Link to='/' className='links'>Shop</Link>

            <Link to='Cart' className='links' >
                <h2><i className="bi bi-cart3 "></i> {
                    Product_data.map((item) => {
                        if (items[item.id] !== 0) {
                            no_of_items = no_of_items + 1
                            return(
                                <div className='indicator' ><p>{no_of_items}</p></div>
                            )
                        }
                    })
                }</h2>
            </Link>

        </div>
    )
}

export default Nav