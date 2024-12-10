import React from 'react'
import Image from 'next/image'

const cart = () => {
  return (
    <div className="h-[860px] mt-40">
    <div className="h-[316px] relative w-[100%] bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className=" text-center">
        <Image src="./Meubel House_Logos-05.svg" alt="logo-image" width={77} height={77} className="items-center"/>
        <p className="text-[48px] leading-[72px] font-medium font-poppings text-sblack mb-2">Cart</p>
        <div className="flex justify-center items-center gap-4">
        <p className="text-[16px] leading-[24px] font-medium font-poppins">Home</p>
        <Image src="./Vector.svg" alt="logo-image" width={8} height={8}/>
        <p className="text-[16px] leading-[24px] font-[300px] font-poppins">Cart</p>
        </div>
      </div>
      </div>       

      {/* Main Layout */}
      <div className="flex justify-between mt-10 ml-10">
        {/* Left Section */}
        <div className="w-2/3">
          {/* Table Header */}
          <div className="grid grid-cols-4 mt-10 w-full h-[72px] items-center bg-biscuitsame">
            <p className="font-normal text-[16px] leading-[24px] text-left">Product</p> 
            <p className="font-normal text-[16px] leading-[24px] text-center">Price</p>
            <p className="font-normal text-[16px] leading-[24-px] text-center">Quantity</p>
            <p className="font-normal text-[16px] leading-[24px] text-right">Subtotal</p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-4 items-center h-[72px] mt-4 border-gray-300">
            <div className="flex items-center gap-2">
              <Image src="./asg-sofa-cart.svg" alt="monitor-image" width={80} height={80} />
              <p className="font-normal text-[16px] leading-[24px] text-greysame">Asgard Sofa</p>
            </div>
            <p className="font-normal text-[16px] leading-[24px] justify-self-center text-greysame">Rs.250,000.00</p>
            <Image src="./button cart.svg" alt="quantity-image" width={32} height={32}
              className="justify-self-center"
            />
            <p className="font-normal text-[16px] leading-[24px] justify-self-end">Rs.250,000.00</p>
          </div>
</div>
        {/* Right Section */}
        <div className="w-1/3">
          <Image src="./box-cart.svg" alt="table-cart-image" width={393} height={390} className="ml-10"/>
        </div>
      </div>
      {/*footer Section*/}
<div className="h-[300px] bg-simsmokey">
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-20 text-white ml-[135px]">
  {/*first column*/}
      <div className="mt-20">
      <div className="space-y-2">
      <div className="flex space-x-4 font-medium text-[32px] leading-[48px] font-poppins text-sblack">Free Delivery</div>
      <div className="flex space-x-4 font-normal text-[20px] leading-[30px] font-poppins text-greysame">For all oders over $50, consectetur adipim scing elit.</div>
      </div>
      </div>
       {/*second column*/}
       <div className="mt-20">
      <div className="space-y-2">
      <div className="flex space-x-4 font-medium text-[32px] leading-[48px] font-poppins text-sblack">90 Days Return</div>
      <div className="flex space-x-4 font-normal text-[20px] leading-[30px] font-poppins text-greysame">If goods have problems, consectetur adipim scing elit.</div>
      </div>
      </div>
            {/*third column*/}
            <div className="mt-20">
      <div className="space-y-2">
      <div className="flex space-x-4 font-medium text-[32px] leading-[48px] font-poppins text-sblack">Secure Payment</div>
      <div className="flex space-x-4 font-normal text-[20px] leading-[30px] font-poppins text-greysame">100% secure payment, consectetur adipim scing elit.</div>
      </div>
      </div>

      </div>
    </div>

    </div>
  )
}

export default cart
