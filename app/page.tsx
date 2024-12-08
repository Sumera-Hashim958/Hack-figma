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
      <Footer/>
    </div>
  )
}

export default page
