import React from 'react'
import Image from 'next/image'

const newArrival = () => {
  return (
    <div className="h-[800px] bg-biscuitsame">
      <div className="flex">
      <div className="box">
      <Image src={"/Asgaard sofa 1.svg"} alt="next-image" width={983} height={799}/>
      </div>

      <div className="w-1/3 flex flex-col justify-center items-center">
      <p className="text-[24px] leading-[36px] font-medium font-poppins">New Arrival</p>
      <p className="text-[48px] leading-[72px] font-bold font-poppins">Asgaard Sofa</p>
     <button className="w-[255px] h-[64px] border-[1px] border-sblack font-normal font-poppins text-[20px] leading-[30px] mt-8">Order Now</button>
      </div>
      
      </div>
    </div>
  )
}

export default newArrival
