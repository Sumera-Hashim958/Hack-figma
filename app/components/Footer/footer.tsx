import React from 'react'
import Image from "next/image"

const footer = () => {
  return (
    <div className="h-[555px]">
      <div className="">
        <div className="flex"> 
        <p className="font-normal text-[20px] leading-6 text-greysame w-[285px] h-[72px] mt-56">400 University Drive Suite 200 Coral Gables,
        FL 33134 USA</p>
        
        <div className="grid grid-cols-5 gap-x-16 gap-y-4 mt-20 text-white ml-[135px]">
            {/*first column*/}
      <div className="mt-10">
      <div className="space-y-8">
      <div className="flex space-x-4 font-medium text-greysame text-[16px] leading-[24px]">Links</div>
      <div className="flex space-x-4 font-medium text-[16px] leading-[24px] text-sblack">Home</div>
      <div className="flex space-x-4 font-normal text-[16px] leading-[24px] text-sblack">Shop</div>
      <div className="flex space-x-4 font-normal text-[16px] leading-[24px] text-sblack">About</div>
      <div className="flex space-x-4 font-normal text-[16px] leading-[24px] text-sblack">Contact</div>
      </div>
      </div>
       {/*first column*/}
       <div className="mt-10">
      <div className="space-y-8">
      <div className="flex space-x-4 font-medium text-greysame text-[16px] leading-[24px]">Help</div>
      <div className="flex space-x-4 font-medium text-[16px] leading-[24px] text-sblack">Payment Options</div>
      <div className="flex space-x-4 font-normal text-[16px] leading-[24px] text-sblack">Return</div>
      <div className="flex space-x-4 font-normal text-[16px] leading-[24px] text-sblack">Privacy Policies</div>
      </div>
      </div>
       {/*third column*/}
       <div className="mt-10">
      <div className="space-y-8">
      <div className="flex space-x-4 font-medium text-greysame text-[16px] leading-[24px] font-poppins">Newsletter</div>
      <div className="flex space-x-4 font-medium text-[16px] leading-[24px] text-greysame font-poppins whitespace-nowrap">Enter Your Email Address</div>
      </div>
      </div>
      {/*fourth column*/}
      <div className="mt-24">
      <div className="space-y-8">
      
      <div className="flex font-medium text-[16px] leading-[24px] text-sblack font-poppins">Subscribe</div>
      </div>
      </div>
            </div>
           
      </div>
      </div>
      <div className="mt-10">
                <Image src="Line 4.svg" alt="line-image" width={1240} height={2}/>
                <p className="font-normal font-poppins text-[16px] leading-[24px] text-sblack mt-8 ml-2">2022 Meubel House. All rights reverved</p>
            </div> 
      </div>
  )
}

export default footer
