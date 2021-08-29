import React from 'react'
// import FoodsComponents from '../components/FoodsComponents'

import { BrowserRouter as Router, Link } from 'react-router-dom';

function FoodPages() {
    return (
        <Router>
         <div>
             <ul>
                 <li>
                     <Link to="/">Home</Link>
                 </li>
                 <li>
                     <Link to="/foods">Foods</Link>
                 </li>
                 <li>
                     <Link to="/drinks">Foods</Link>
                 </li>
             </ul>
        </div>
        </Router>
       
    )
}

export default FoodPages
