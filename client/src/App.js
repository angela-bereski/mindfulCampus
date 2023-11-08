import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Log from './components/Log';
import UserDashboard from './components/UserDashboard';
import Yoga from './components/Yoga';
import BrainBreaks from './components/BrainBreaks';
import Meditation from './components/Meditation';
import MoreIdeas from './components/MoreIdeas';
import ThankYouReg from './components/ThankYouReg';
import Networking from './components/Networking';
import JobBoard from './components/JobBoard';
import Resources from './components/Resources';
import ProtectedRoute from './components/ProtectedRoute';
import Todoform from './components/Todoform';
import JobAdd from './components/JobAdd';
import CountdownAdd from './components/CountdownAdd';
import NetworkAdd from './components/NetworkAdd';
import EditNetwork from './components/EditNetwork';
import Reg from './components/Reg';
import EditJob from './components/EditJob';

function App() {

  const localUser = localStorage.getItem('loggedUser')
  const loggedUser1 = JSON.parse(localUser)
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Log />} path="/login" />
          <Route element={<Reg />} path="/register" />
          <Route element={<ThankYouReg/>} path="/thankyou" />
          <Route path="/" element={<ProtectedRoute />}>
            <Route element={<UserDashboard  />} path="/dashboard" />
            <Route element={<Todoform  />} path="/addToDo" />
            <Route element={<CountdownAdd  />} path="/addCountdown" />
            <Route element={<Yoga/>} path="/yoga" />
            <Route element={<BrainBreaks/>} path="/brainbreaks" />
            <Route element={<Meditation/>} path="/meditation" />
            <Route element={<MoreIdeas/>} path="/brainbreaks/more" />
            <Route element={<Networking/>} path="/networking" />
            <Route element={<NetworkAdd/>} path="/addnewnetwork" />
            <Route element={<EditNetwork/>} path="/editNetwork/:id" />
            <Route element={<JobBoard/>} path="/jobboard" />
            <Route element={<JobAdd/>} path="/addnewjob" />
            <Route element={<EditJob/>} path="/editJob/:id" />
            <Route element={<Resources/>} path="/resources" />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
