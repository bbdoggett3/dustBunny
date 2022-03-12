import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import SignIn from './components/SignIn';

export default(
    <Routes>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/booking" component={Booking}/>
        <Route path="/signIn" component={SignIn}/>
    </Routes>
);