import React from 'react'
import Image from 'next/image'

const shop = () => {
  return (
    <div className="h-[2500px]">
    <div className="h-[316px] relative w-[100%] bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className=" text-center">
        <Image src="./Meubel House_Logos-05.svg" alt="logo-image" width={77} height={77} className="items-center"/>
        <p className="text-[48px] leading-[72px] font-medium font-poppings text-sblack mb-2">Shop</p>
        <div className="flex justify-center items-center gap-4">
        <p className="text-[16px] leading-[24px] font-medium font-poppins">Home</p>
        <Image src="./Vector.svg" alt="logo-image" width={8} height={8}/>
        <p className="text-[16px] leading-[24px] font-[300px] font-poppins">Shop</p>
        </div>
      </div>
    </div> 
    <div className="h-[100px] bg-simsmokey mt-10 flex items-center justify-between px-8">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Image src="/vector-shop.svg" alt="logo-image" width={25} height={25} />
        <p className="text-[20px] leading-[30px] font-normal font-poppins">Filter</p>
        <Image src="/dots-shop.svg" alt="logo-image" width={25} height={25} />
        <Image src="/bi_view-list.svg" alt="logo-image" width={24} height={24} />
        <p className="text-[20px] leading-[30px] font-normal font-poppins">|</p>
        <p className="text-[16px] leading-[24px] font-normal font-poppins">
          Showing 1–16 of 32 results
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <p className="text-[20px] leading-[30px] font-normal font-poppins">Shop</p>
        <button className="w-[55px] h-[55px] bg-white text-[20px] leading-[30px] font-poppins text-black border border-gray-300">16</button>
        <p className="text-[20px] leading-[30px] font-normal font-poppins">Sort by</p>
        <button className="w-[188px] h-[55px] bg-white text-[20px] leading-[30px] font-poppins text-black border border-gray-300">Default</button>
      </div>
    </div> 
    {/*photo Gallery*/}
    {/*first Row*/}   
    {/*first image*/}   
    <div className="flex mt-4 ml-20">
    <div className="w-[287px] h-[372px]">
    <Image src="/trent-sofa-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*second image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/Mask group.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*third image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/bar-table-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*fourth image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/plain-mirror-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    </div>
    {/*photo Gallery*/}
    {/*Second Row*/}   
    {/*first image*/}   
    <div className="flex mt-4 ml-20">
    <div className="w-[287px] h-[372px]">
    <Image src="/grain-coffee-tab-shop.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Grain coffee table</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.15,000.00</p>
          </div>
    </div>
    {/*second Row*/}   
    {/*second image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/kent-coffee-tab-shop.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Kent coffee table</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.225,000.00</p>
          </div>
    </div>
    {/*second Row*/}   
    {/*third image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/round-tab-shop.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Round coffee table_color 2</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.251,000.00</p>
          </div>
    </div>
    {/*second Row*/}   
    {/*fourth image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/drawerd-tab-shop.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Reclaimed teak coffee table</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,200.00</p>
          </div>
    </div>
    </div>
    {/*photo Gallery*/}
    {/*first Row*/}   
    {/*first image*/}   
    <div className="flex mt-4 ml-20">
    <div className="w-[287px] h-[372px]">
    <Image src="/trent-sofa-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*second image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/Mask group.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*third image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/bar-table-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*fourth image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/plain-mirror-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    </div>
    {/*photo Gallery*/}
    {/*first Row*/}   
    {/*first image*/}   
    <div className="flex mt-4 ml-20">
    <div className="w-[287px] h-[372px]">
    <Image src="/trent-sofa-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*second image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/Mask group.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*third image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/bar-table-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    {/*first Row*/}   
    {/*fourth image*/}  
    <div className="w-[287px] h-[372px]">
    <Image src="/plain-mirror-third.svg" alt="course-image" width={287} height={287} />
    <div className="text-left">
            <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack ">Trenton modular sofa_3</p>
            <p className="font-medium text-[24px] leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
          </div>
    </div>
    </div>
    <div className="flex justify-center items-center gap-6 mt-10">
      <button className="w-[60px] h-[60px] bg-biscuit text-[20px] leading-[30px] font-poppins text-black border border-gray-300 rounded-[10px]">1</button>
      <button className="w-[60px] h-[60px] bg-biscuitsame text-[20px] leading-[30px] font-poppins text-black border border-gray-300 rounded-[10px]">2</button>
      <button className="w-[60px] h-[60px] bg-biscuitsame text-[20px] leading-[30px] font-poppins text-black border border-gray-300 rounded-[10px]">3</button>
      <button className="w-[98px] h-[60px] bg-biscuitsame text-[20px] leading-[30px] font-poppins text-black border border-gray-300 rounded-[10px]">Next</button>
      </div>

          </div>
    
  )
}

export default shop
