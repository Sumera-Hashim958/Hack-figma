import React from 'react'
import Image from 'next/image'

const blog = () => {
  return (
    <div className="h-[1100px]">
    <div className="h-[316px] relative w-[100%] bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className="flex flex-col justify-center items-center">
        <Image src="./Meubel House_Logos-05.svg" alt="logo-image" width={77} height={77} className="items-center"/>
        <p className="text-[48px] leading-[50px] font-medium font-poppings text-sblack mb-2">Blog</p>
        <div className="flex justify-center items-center gap-4">
        <p className="text-[16px] leading-[24px] font-medium font-poppins">Home</p>
        <Image src="./Vector.svg" alt="logo-image" width={8} height={8}/>
        <p className="text-[16px] leading-[24px] font-[300px] font-poppins">Blog</p>
        </div>
      </div>
      </div>
      {/*start main container*/}
      <div className="text-center mt-10">
        <p className="font-poppins font-bold text-[36px] leading-[54px] text-sblack">Get In Touch With Us</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-greysame w-[544px] h-[48px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      {/*left section*/}
      <div className="flex justify-between mt-10 ml-10">
      <div className="w-1/3 ml-52">
      <div className="flex gap-2">
        <Image src="./location-cont.svg" alt="loc-image" width={22} height={28}/>
      <p className="font-poppins font-semibold text-[24px] leading-[36px]">Address</p>
      </div>
      <div>
      <p className="font-poppins font-normal text-[14px] leading-[24px] ml-8 w-[180px] h-20">236 5th SE Avenue, New York NY10000, United States</p>
      </div>
 {/*phone*/}
 <div className="flex gap-2">
        <Image src="./bxs_phone.svg" alt="loc-image" width={22} height={28}/>
      <p className="font-poppins font-semibold text-[24px] leading-[36px]">Phone</p>
      </div>
      <div>
      <p className="font-poppins font-normal text-[14px] leading-[24px] ml-8 w-[180px] h-20">Mobile: +(84) 546-6789
      Hotline: +(84) 456-6789</p>
      </div>
      {/*clock*/}
 <div className="flex gap-2">
        <Image src="./bi_clock-fill.svg" alt="loc-image" width={22} height={28}/>
      <p className="font-poppins font-semibold text-[24px] leading-[36px]">Working Time</p>
      </div>
      <div>
      <p className="font-poppins font-normal text-[14px] leading-[24px] ml-8 w-[180px] h-20">Monday-Friday: 9:00 - 22:00
      Saturday-Sunday: 9:00 - 21:00</p>
      </div>
</div>
<div className="w-1/2 ml-20">
    <form className="max-w-lg space-y-6">
      {/* First Name and Last Name Fields */}
       {/* Company Name Field */}
      <div className="space-y-2">
        <label htmlFor="company-name" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Your Name</label>
        <input id="company-name" type="text" placeholder="abc"className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Country / Region Field */}
      <div className="space-y-2">
        <label htmlFor="country-region" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Email Address</label>
        <input id="country-region" type="text" placeholder="Abc@def.com" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Street Address Field */}
      <div className="space-y-2">
        <label htmlFor="street-address" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Subject</label>
        <input id="street-address" type="text" placeholder="This is an optional" className="w-[528px] h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Town / City Field */}
      <div className="space-y-2">
        <label htmlFor="town-city" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Message</label>
        <input id="town-city" type="text" placeholder="Hi! i’d like to ask about" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>
{/* Buttons */}
<div className="flex">
      <button className="w-[237px] h-[48px] border-2 rounded-[15px] border-greysame font-normal text-[16px] leading-[24px] font-poppins mt-8">Register</button>
    </div>
    </form>
  </div>
    </div>
    </div>
  )
}

export default blog
