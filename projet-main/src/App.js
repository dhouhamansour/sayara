import React from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
// import Footer from './Footer/Footer';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import OurCars from './pages/OurCars';
import Home from './pages/Home';
// import SlideTop from './components/SlideTop'
// import CardCar from './components/CardCar'

function App(){
  return(
    // <div>
    //   <Navbar/>
    //   <SlideTop/>
    //   <CardCar/>
    //   <Footer/>
    // </div>
      <BrowserRouter>
      <Navbar/>
   <Route exact path="/home" component={Home}/>
   <Route path="/contactUs" component={ContactUs}/>
   {/* <Route path="/login" component={Login}/> */}
   <Route path="/aboutus" component={AboutUs}/>
   <Route path="/ourcars" component={OurCars}/>
      </BrowserRouter>
  );
}
export default App;
