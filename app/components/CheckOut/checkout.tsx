import React from 'react'
import Image from 'next/image'

const checkout = () => {
  return (
    <div className="h-[1600px]">
    <div className="h-[316px] relative w-[100%] bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className="flex flex-col justify-center items-center">
        <Image src="./Meubel House_Logos-05.svg" alt="logo-image" width={77} height={77} className="items-center"/>
        <p className="text-[48px] leading-[50px] font-medium font-poppings text-sblack mb-2">Checkout</p>
        <div className="flex justify-center items-center gap-4">
        <p className="text-[16px] leading-[24px] font-medium font-poppins">Home</p>
        <Image src="./Vector.svg" alt="logo-image" width={8} height={8}/>
        <p className="text-[16px] leading-[24px] font-[300px] font-poppins">Checkout</p>
        </div>
      </div>
      </div>       
{/* Form container start */}
<div className="flex space-x-10">
  {/* Left Section: Form */}
  <div className="w-1/2 ml-20">
    <form className="max-w-lg mt-10 space-y-6">
      <h2 className="text-[24px] font-semibold text-sblack font-poppins">Billing Detail</h2>

      {/* First Name and Last Name Fields */}
      <div className="flex space-x-4">
        <div className="space-y-2 w-full md:w-1/2">
          <label htmlFor="first-name" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">First Name</label>
          <input id="first-name" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
        </div>

        <div className="space-y-2 w-full md:w-1/2">
          <label htmlFor="last-name" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Last Name</label>
          <input id="last-name" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
        </div>
      </div>

      {/* Company Name Field */}
      <div className="space-y-2">
        <label htmlFor="company-name" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Company Name (Optional)</label>
        <input id="company-name" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Country / Region Field */}
      <div className="space-y-2">
        <label htmlFor="country-region" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Country / Region</label>
        <input id="country-region" type="text" placeholder="Sri Lanka" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Street Address Field */}
      <div className="space-y-2">
        <label htmlFor="street-address" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Street Address</label>
        <input id="street-address" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Town / City Field */}
      <div className="space-y-2">
        <label htmlFor="town-city" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Town / City</label>
        <input id="town-city" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Province Field */}
      <div className="space-y-2">
        <label htmlFor="province" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Province</label>
        <input id="province" type="text" placeholder="Western Province" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Zip Code Field */}
      <div className="space-y-2">
        <label htmlFor="zip-code" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Zip Code</label>
        <input id="zip-code" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Phone</label>
        <input id="phone" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Email Address</label>
        <input id="email" type="email" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>

      {/* Additional Information Field */}
      <div className="space-y-2">
        <label htmlFor="additional-info" className="text-[16px] leading-[24px] font-medium text-sblack font-poppins">Additional Information</label>
        <input id="additional-info" type="text" className="w-full h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm" />
      </div>
    </form>
  </div>

  {/* Right Section: Content */}
  <div className="w-1/2 md:mt-0">
  <div className="space-y-6">
    <div className="flex gap-52">
      {/* Product 1 */}
      <div className="mt-12 space-y-8">
        <h2 className="font-bold font-poppins text-[24px] leading-[36px] text-sblack">Product</h2>
        <p className="font-poppins text-[16px] text-greysame font-[300px]">Asgard Sofa <span className="sblack">X 1</span></p>
        <p className="font-poppins text-[16px] text-sbalck font-[300px]">Subtotal</p>
        <p className="font-poppins text-[16px] text-sblack font-[300px]">Total</p>
      </div>

      {/* Subtotal for Product 1 */}
      <div className="mt-12 space-y-8">
        <h2 className="font-bold font-poppins text-[24px] leading-[36px] text-sblack text-right">Subtotal</h2>
        <p className="font-poppins text-[16px] text-sblack text-right font-[300px]">Rs. 250,000.00</p>
        <p className="font-poppins text-[16px] text-sblack text-right font-[300px]">Rs. 250,000.00</p>
        <p className="font-poppins text-[24px] text-orange-500 font-bold text-right">Rs. 250,000.00</p>
      </div>
    </div>
    <div className="flex gap-4 font-poppins">
        <Image src="./black-dot-asg.svg" alt="black-image" width={14} height={14}/>
    <p className="text-[16px] leadding-[24px] text-sblack font-normal">Direct Bank Transfer</p>
</div>
<div>
<p className="text-[16px] leadding-[24px] text-greysame font-[300px] text-justify w-[528px] h-[72px]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
</div>
<div className="flex gap-4 font-poppins">
        <Image src="./black-dot-asg.svg" alt="black-image" width={14} height={14}/>
    <p className="text-[16px] leadding-[24px] text-greysame font-normal">Direct Bank Transfer</p>
</div>
<div className="flex gap-4 font-poppins">
        <Image src="./black-dot-asg.svg" alt="black-image" width={14} height={14}/>
    <p className="text-[16px] leadding-[24px] text-greysame font-normal">Cash On Delivery</p>
</div>
<div>
<p className="text-[16px] leadding-[24px] text-sblack font-[300px] text-justify w-[528px] h-[72px]">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
</div>
{/* Buttons */}
<div className="flex justify-center items-center">
      <button className="w-[215px] h-[64px] border-2 rounded-[15px] border-sblack font-normal text-[20px] leading-[30px] font-poppins mt-10">Place Order</button>
    </div>
  </div>
</div>

</div> 
{/* Form container end */}

    </div>
  )
}

export default checkout
