import React from 'react'
import Image from 'next/image'

const checkout = () => {
  return (
    <div className="h-[300px]">
{/* Form container end */}

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

export default checkout
