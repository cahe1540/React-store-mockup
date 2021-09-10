import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import './components/UI/Nav'
import { Nav } from './components/UI/Nav'
import { ForestBG } from './components/display/ForestBG'
import { FeaturedItems } from './components/Products/FeaturedItems' 
import { Footer } from './components/UI/Footer'
import { About } from './components/display/About'
import {AboutBG} from './components/display/AboutBG'
import { ContactBG } from './components/display/ContactBG'
import { Contact } from './components/display/Contact' 
import { ProductsGrid } from './components/Products/ProductsGrid'
import { ProductsBG } from './components/display/ProductsBG'
import { Login } from './components/UI/authentication/Login'
import { Signup } from './components/UI/authentication/Signup'
import { RecoverPassword } from './components/UI/authentication/RecoverPassword'
import { ResetPassword } from './components/UI/authentication/ResetPassword'
import { SecurityCode } from './components/UI/authentication/SecurityCode'
import { CartList } from './components/UI/shoppingCart/CartList'
import { Dashboard } from './components/UI/authentication/dashboard/Dashboard'
import { ProtectedRoute } from './components/UI/authentication/ProtectedRoute'
import json from './data/data'
import initializeFeatured from './utils/initializeFeatured'
import { CheckOutForm } from './components/UI/shoppingCart/CheckOutForm'


function App() {
  //generate an array of featured items
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]); 
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    cart: [],
    history: [],
    jwtToken: ''
  });

  const signOut = () => {
    setUser({
      name: '',
      email: '',
      cart: [],
      history: [],
      jwtToken: ''
    });
  }

  const sortProducts = (data, sortBy) => {
    let temp = [...data];
    if(sortBy === 'none') return;
    else if(sortBy === 'name_asc'){
      return temp.sort((a,b) => a.name - b.name);
    }else if(sortBy === 'name_desc'){
      return temp.sort((a,b) => b.name - a.name);
    }else if(sortBy === 'price_asc'){
      return temp.sort((a,b) => a.price - b.price);
    }else if(sortBy === 'price_desc'){
      return temp.sort((a,b) => b.price - a.price);
    }else if(sortBy === 'most_pop'){
      return temp.sort((a,b) => a.rating - b.rating);
    }
  } 

  useEffect(() => {
    const fetchProductData = async () => {
      const data = json;
      setProducts(data.sort((a,b) => {return a.id - b.id})); //sort the data by id incrementing *important*
      setFeatured(initializeFeatured(data, 7));
    }
    fetchProductData();
  }, []);

  return (
    <Router>
    <div className="App">
      <Route path = {['', '/', '/home']} exact render = {(props) =>
      (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <ForestBG/>
          <FeaturedItems featured = {featured}/>
        </>
      )} />
      <Route path = {['/products']} exact render = {(props) =>
      (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <ProductsBG/>
          <ProductsGrid products = {products} sortProducts= {sortProducts} setProducts = {setProducts} />
        </>
      )} />
      <Route path = {['/login']} exact render = {(props) =>
      (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <Login />
        </>
      )} />
      <Route path = '/dashboard' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <ProtectedRoute user = {user} component = {Dashboard} />
        </>
       )}/>
      <Route path = {['/signup']} exact render = {(props) =>
      (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <Signup />
        </>
      )} />
      <Route path = '/about' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <AboutBG/>
          <About/>
        </>
       )}/>
       <Route path = '/recoverpassword' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <RecoverPassword/>
        </>
       )}/>
       <Route path = '/resetpassword' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <ResetPassword/>
        </>
       )}/>
       <Route path = '/securitycode' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <SecurityCode/>
        </>
       )}/>
       <Route path = '/shoppingcart' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <CartList cartItems = {cartItems} />
        </>
       )}/>
       <Route path = '/checkout' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <CheckOutForm cartItems = {cartItems} />
        </>
       )}/>
      <Route path = '/contact' exact render = {(props) => (
        <>
          <Nav curPage = {props.match.path} user={user} signOut = {signOut}/>
          <ContactBG/>
          <Contact/>
        </>
       )}/>
     <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
