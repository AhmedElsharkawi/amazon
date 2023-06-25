import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signin from './components/Signin';
import Orders from './components/Orders';

import { useEffect } from 'react';
import { auth } from './firebase/FirebaseConfig';
import { useAuth } from './components/Context/GlobalContext';
import Home from './components/Home';
import Cart from './components/Cart';
import CheckoutPayment from './components/stripe_payment/CheckoutPayment';

function App() {

  const {dispatch} = useAuth();
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:"SET_USER",
        user: authUser,
      });
    }else{
      dispatch({
        type:"SET_USER",
        user:null,
      })
    }  })

},[])

  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={
    <> 
    <Header/>
    <Home />
    
   </>} />
    <Route path='/signin' element={<Signin/>}  />
    <Route path='/orders' element={
    
    <>
    <Header />
      <Orders/>
    </>}  />


  

    <Route path='/cart' element=
    {<>
    <Header/>
    <Cart />
    </>}  />

    <Route path='/payment' element=
    {<>
    <Header/>
    <CheckoutPayment />
    </>}  />

    <Route path='*' element={<h1>page is not found</h1>}  />
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
