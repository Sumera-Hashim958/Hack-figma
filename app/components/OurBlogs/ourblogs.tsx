import React from 'react'
import Image from 'next/image'

const ourBlogs = () => {
  return (
    <div className="h-[944px] bg-swhite">
        {/* TopPics Title*/}
        <div className="text-center mt-4">
          <p className="font-medium text-[36px] leading-[54px] font-poppins">
            Our Blogs 
          </p>
          <p className="font-medium text-[16px] leading-6 font-poppins text-greysame">
          Find a bright ideal to suit your taste with our great selection
          </p>
        {/* First Row */}
        {/* First image */}
      <div className="flex mt-20 gap-4">
        <div className="w-[393px] h-[555px] ml-10 border-2 border-black">
          <Image src="/keyboard-blog.svg" alt="course-image" width={393} height={393} />
          <div className="mt-6 text-center">
            <p className="font-normal text-[20px] leading-[30px] font-poppins text-sblack ">Going all-in with millennial design</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Read More</p>
            <div className="flex flex-col items-center">
            <Image src="/line-blog.svg" alt="course-image" width={115} height={2} />
            <Image src="/clock-blog.svg" alt="course-image" width={223} height={24} className="mt-2" />
            </div>
          </div>
        </div>
        {/* First Row */}
        {/* Second image */}
        <div className="flex gap-4">
        <div className="w-[393px] h-[555px] border-2 border-black">
          <Image src="/laptop-blog.svg" alt="course-image" width={393} height={393} />
          <div className="mt-6 text-center">
            <p className="font-normal text-[20px] leading-[30px] font-poppins text-sblack ">Going all-in with millennial design</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Read More</p>
            <div className="flex flex-col items-center">
            <Image src="/line-blog.svg" alt="course-image" width={115} height={2} />
            <Image src="/clock-blog.svg" alt="course-image" width={223} height={24} className="mt-2" />
            </div>
          </div>
        </div>
        {/* First Row */}
        {/* Third image */}
        <div className="flex gap-4">
        <div className="w-[393px] h-[555px] border-2 border-black">
          <Image src="/lcd-blog.svg" alt="course-image" width={393} height={393} />
          <div className="mt-6 text-center">
            <p className="font-normal text-[20px] leading-[30px] font-poppins text-sblack ">Going all-in with millennial design</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Read More</p>
            <div className="flex flex-col items-center">
            <Image src="/line-blog.svg" alt="course-image" width={115} height={2} />
            <Image src="/clock-blog.svg" alt="course-image" width={223} height={24} className="mt-2" />
            </div>
          </div>
        </div>
            </div>
              </div>
        </div>
      </div>
            <div className="text-center mt-28">
          <p className="font-medium text-[20px] leading-[36px] font-poppins text-sblack">View All Post</p>
        </div>
          <div className="flex flex-col items-center">
            <Image src="/line-blog.svg" alt="course-image" width={115} height={2} />
            </div>
</div>
  )
}

export default ourBlogs
