import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/pngwing.com.png';
import { GET_USER_BY_ID } from '../../types';
import './Header.scss'
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import { Container } from '../../StyledElements/Container/Container';
import { Li } from '../../StyledElements/Li/Li';

export default function Header() { 
  const {userDataLogin} = useSelector((state: any) => state.userLogin)
  const {orderListByUserId} = useSelector((state: any) => state?.order)
  const {cartList} = useSelector((state: any) => state.order)
  const userData = {...userDataLogin}
  const userId = userData?.id
  console.log({userDataLogin})
  console.log({userId})
  const orderNumber = orderListByUserId?.length
  const orderNumberNoLogin = cartList?.length

  console.log({userDataLogin});
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "GET_USER_DETAIL_BY_ID",
      payload: {
        userId
      }
    })
  }, [])
  useEffect(() => {
    dispatch({
      type: "GET_ORDERS_BY_USERID_SAGA",
      payload: {
       userId
      }
    })
   }, [])

    return (
        <header>
        <Container>
            <nav className="navbar header__navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to ="/homepage">
      <img src= {logo} alt="logo-sun-glasses" style={{width:"100px", height: "100px"}}/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse navbar-collapse-edit" id="navbarSupportedContent">
    <ul className="navbar-nav navBar__right">
      <Li className="nav-item active">
        <NavLink className="nav-link" to ="/homepage">Home</NavLink>
      </Li>
     
      <Li className="nav-item">
        <NavLink className="nav-link" to="/productlist"> Product List </NavLink>
      </Li>
      <Li className="nav-item">
        <NavLink className="nav-link" to="/tryingGlassesRoom"> Trying Sunglasses Room</NavLink>
      </Li>
    
  </ul>
       
     <ul className="navbar-nav navBar__left">   <li className="nav-item myNavBar__cart">
    <NavLink className="nav-link cart-link" to = "/orders"><i className="fa
                                  fa-shopping-cart" />
                                 <span className="badge badge-warning" id="lblCartCount">
                  {orderNumber}
                </span>
                                  </NavLink>
  </li> 
  </ul>
     <div>
</div>

  </div>
</nav>
            </Container>
 </header>
    )
}
