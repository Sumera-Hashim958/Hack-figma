import React from 'react'
import Navbar from "./components/Navbar/navbar";
import HeroSection from "./components/HeroSectiton/herosection";
import ThirdSection from "./components/ThirdSection/thirdsection";
import TopPics from "./components/TopPics/toppics";
import NewArrival from "./components/NewArrival/newarrival";
import OurBlogs from "./components/OurBlogs/ourblogs";
import Ourinsta from './components/OurInsta/ourinsta';
import Footer from "./components/Footer/footer";
import Shop from "./components/Shop/shop";
import AsgardSofa from "./components/AsgardSofa/asgardsofa";
import MyAccount from "./components/MyAccount/myaccount";
import Blog from "./components/Blog/blog";
import CheckOut from "./components/CheckOut/checkout";
import Cart from "./components/Cart/cart";
import Contact from "./components/Contact/contact";

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ThirdSection/>
      <TopPics/>
      <NewArrival/>
      <OurBlogs/>
      <Ourinsta/>
      <Shop/>
      <AsgardSofa/>
      <MyAccount/>
      <CheckOut/>
      <Cart/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default page
