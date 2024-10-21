import React from 'react';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/pages/Home';
import Explore from './_root/pages/Explore';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"
import Saved from './_root/pages/Saved';
import AllUsers from './_root/pages/AllUsers';
import CreatePost from './_root/pages/CreatePost';
import EditPost from './_root/pages/EditPost';
import PostDetails from './_root/pages/PostDetails';
import Profile from './_root/pages/Profile';
import UpdateProfile from './_root/pages/UpdateProfile';
import PrivateRoute from './_auth/PrivateRoute';
import LogoutForm from './_auth/forms/LogoutForm';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public route  */}
        <Route  element={<AuthLayout />} >
          <Route  path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
          <Route path='/log-out' element={<LogoutForm />} />

        </Route>
        {/* private route  */}
        <Route element={<RootLayout />}>
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/all-users' element={<AllUsers />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/post/:id' element={<PostDetails />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Route>
      </Routes>
      <Toaster />

    </main>

  )
}

export default App
