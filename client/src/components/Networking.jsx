import React from 'react'
import NetworkAdd from './NetworkAdd';
import '../logreg.css'
import '../home.css'
import { useState } from 'react';
import NetworkingList from './NetworkingList';
import UserNav from './UserNav';
const Networking = () => {


  return (
    <div >
        <UserNav />
        <div lassName='homeHome flex-row flex p-1 justify-around flex-wrap rounded'>
            <NetworkAdd />
            <NetworkingList />
        </div>


    </div>
  )
}

export default Networking