import React from 'react'
import FoodsComponents from '../components/FoodsComponents'

import './FoodPages.css';


function FoodPages() {
    return (
       <div className="wrap">
           <div className="hero-section">
                <img src="https://cdn-2.tstatic.net/ternate/foto/bank/images/nasi-goreng.jpg"></img>
           </div>
          <FoodsComponents />
       </div>
    )
}

export default FoodPages
