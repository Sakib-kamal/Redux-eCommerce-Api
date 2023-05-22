import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Header=()=> {
    const navigate = useNavigate();
    const select = useSelector((state)=>state);
    const user = select.cartData
    console.warn(select);

    const GotoAddedData =()=>{
        navigate('/added');

    }

    return (
        <div>
        <div className='header-style'>
           <div className="add-to-cart" onClick={GotoAddedData}>
            <span className='cart-count'>{user.length}</span>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU'/>
            </div>
            </div><br/>
     </div>
      
    )
}
export default Header
