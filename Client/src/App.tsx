import React from 'react';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/pages/Home';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"
import PrivateRoute from './_auth/PrivateRoute';
import LogoutForm from './_auth/forms/LogoutForm';
import Products from './_root/pages/Products';
import ProductDetails from './_root/pages/ProductDetails';
import MyBags from './_root/pages/MyBags';
import Checkout from './_root/pages/Checkout';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public route  */}
        <Route element={<AuthLayout />} >
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
          <Route path='/log-out' element={<LogoutForm />} />

        </Route>
        {/* private route  */}
        <Route element={<RootLayout />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path='/product' element={<Products />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<MyBags />} />
            <Route path='/checkout' element={<Checkout />} />

          </Route>
        </Route>
      </Routes>
      <Toaster />

    </main>

  )
}

export default App
