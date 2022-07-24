import React from 'react';
import Navbar from './Navbar';
import ArrowNavbar from './ArrowNavbar';
import ClassNavbar from './ClassNavbar';


const Mother = () => {
  return (
    <div>
      <Navbar/>
      <ArrowNavbar/>
      <ClassNavbar/>
      <Navbar name="Footer"/>
    </div>
  );
}

export default Mother;
