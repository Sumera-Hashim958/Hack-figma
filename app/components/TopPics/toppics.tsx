import React from 'react'
import Image from 'next/image'

const topPics = () => {
  return (
    <div className="h-[700px] bg-swhite">
        {/* TopPics Title*/}
        <div className="text-center mt-8">
          <p className="font-medium text-[36px] leading-[56px] font-poppins">
            Top Pics For You
          </p>
          <p className="font-medium text-[16px] leading-6 font-poppins text-greysame">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        {/* First Row */}
        {/* First image */}
      <div className="flex mt-20 gap-4">
        <div className="w-[287px] h-[372px] ml-10">
          <Image src="/trent-sofa-third.svg" alt="course-image" width={287} height={287} />
          <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
        </div>
        {/* First Row */}
        {/* Second image */}
        <div className="flex gap-4">
        <div className="w-[287px] h-[372px]">
          <Image src="/2nd-pic-toppick.svg" alt="course-image" width={287} height={287} />
          <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack w-[212px] h-[48px] ">Granite dining table with dining chair</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
        </div>
        {/* First Row */}
        {/* Third image */}
        <div className="flex gap-4">
        <div className="w-[287px] h-[372px]">
          <Image src="/bar-table-third.svg" alt="course-image" width={287} height={287} />
          <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack w-[180px] h-[48px]">Outdoor bar table and stool</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
        </div>
        {/* First Row */}
        {/* Fourth image */}
        <div className="flex gap-4">
        <div className="w-[287px] h-[372px]">
          <Image src="/plain-mirror-third.svg" alt="course-image" width={287} height={287} />
          <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack w-[180px] h-[48px]">Plain console with teak mirror</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
        </div>
    </div>
    
</div>
</div>
</div>
</div>
<div className="text-center mt-16">
          <p className="font-medium text-[20px] leading-[36px] font-poppins text-sblack">View More</p>
        </div>
          <div className="flex flex-col items-center">
            <Image src="/line-blog.svg" alt="course-image" width={115} height={2} />
            </div>
</div>
  )
}

export default topPics
