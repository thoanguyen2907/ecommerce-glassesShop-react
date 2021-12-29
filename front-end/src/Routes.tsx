import React from 'react'
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import ProductManagement from './pages/ProductMangement/ProductManagement'
import UserManagement from './pages/UserManagement/UserManagement'
import OrderManagement from './pages/OrderManagement/OrderManagement'
import CategoryManagement from './pages/CategoryManagement/CategoryManagement'
import CreateProduct from './Components/Form/CreateProduct'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate'
import CreateCategory from './Components/Form/CreateCategory'
import EditProduct from './Components/Form/EditProduct'
import EditCategory from './Components/Form/EditCategory'
import DrawerHOC from './Components-HOC/Drawer/DrawerHOC'
import Loading from './Components/Loading/Loading'
import LoginTemplate from './templates/LoginTemplate/LoginTemplate'
import LoginUser from './pages/LoginUser/LoginUser'
import { history } from './utils/history/history'
import SignUpUser from './pages/SignUpUser/SignUpUser'
import HomePage from './pages/HomePage/HomePage'
import HeaderFooterTemplate from './templates/HeaderFooterTemplate/HeaderFooterTemplate'
import ProductItemList from './pages/ProductItemList/ProductItemList'
import Order from './pages/Order/Order'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import TryOnGlasses from './pages/TryOnGlasses/TryOnGlasses'
import OrderNoLogin from './pages/Order/OrderNoLogin'
import TryOnGlassesMenModel from './pages/TryOnGlasses/TryOnGlassesMenModel'
import Payment from './pages/Payment/Payment'
import SuccessPayment from './pages/SuccessPayment/SuccessPayment'
import CancelPayment from './pages/CancelPayment/CancelPayment'
import GoogleLoginDemo from './pages/GoogleLogin/GoogleLoginDemo'
import GlassesTrialRoom from './pages/GlassesTrialRoom/GlassesTrialRoom'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'

const Routes = () => (
    <Router history={history}>
    <DrawerHOC/>
    <Loading/>

  <Switch>
    <AdminTemplate exact path="/admin/productmanagement" Component={ProductManagement} />
    <AdminTemplate exact path="/admin/usermanagement" Component={UserManagement} />
    <AdminTemplate exact path="/admin/ordermanagement" Component={OrderManagement} />
    <AdminTemplate exact path="/admin/categorymanagement" Component={CategoryManagement} />
    <AdminTemplate exact path="/admin/createproduct" Component={CreateProduct} />
    <AdminTemplate exact path="/admin/createcategory" Component={CreateCategory} />
    <AdminTemplate exact path="/admin/editproduct/:id" Component={EditProduct} />
    <AdminTemplate exact path="/admin/editcategory/:id" Component={EditCategory} />
    <LoginTemplate exact path="/login/user" Component={LoginUser} />
    <LoginTemplate exact path="/signup/user" Component={SignUpUser} />
    <LoginTemplate exact path="/google-login" Component={GoogleLoginDemo} />

    <LoginTemplate exact path="/forgotPassword" Component={ForgotPassword} />

    <LoginTemplate exact path="/resetPassword/:tokenId" Component={ResetPassword} />

    <HeaderFooterTemplate exact path="/homepage" Component={HomePage} />
    <HeaderFooterTemplate exact path="/productlist" Component={ProductItemList} />
    <HeaderFooterTemplate exact path="/orders" Component={Order} />
    <HeaderFooterTemplate exact path="/orders/nologin" Component={OrderNoLogin} />
    
    <HeaderFooterTemplate exact path="/products/:productId" Component={ProductDetail} />
    <HeaderFooterTemplate exact path="/" Component={HomePage} />
    <HeaderFooterTemplate exact path="/tryingGlassesRoom" Component={GlassesTrialRoom} />
    <HeaderFooterTemplate exact path="/payment" Component={Payment} />
    <HeaderFooterTemplate exact path="/success" Component={SuccessPayment} />
    <HeaderFooterTemplate exact path="/cancel" Component={CancelPayment} />
  </Switch>
  </Router>
)

export default Routes
