import React from 'react'
import Image from 'next/image'

const homePage = () => {
  return (
    <div className="h-[900px] bg-biscuit">
      <div className="flex">
      <div className="w-1/3 flex flex-col justify-center items-start ml-[150px] mt-40">
      <p className="text-[64px] leading-[96px] font-medium font-poppins w-[440px] h-[192px]">Rocket Single Seater</p>
      <p className="text-[24px] leading-[36px] font-medium font-poppins">Shop Now</p>
      <Image src="Line 1.svg" alt="line image" width={121} height={70}/>
      </div>
      <div className="h-[465px]">
      <Image src={"/Rocket single seater 1.svg"} alt="next-image" width={863} height={900}/>
      </div>
      </div>
    </div>
  )
}

export default homePage
