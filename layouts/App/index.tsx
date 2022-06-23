import React from 'react';
import loadable from '@loadable/component'
import { Routes, Route, Navigate } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/workspace/:workspace/*" element={<Workspace/>} />
    </Routes>
  );
};

export default Index;