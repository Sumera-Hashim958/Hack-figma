import React from 'react'
import Image from 'next/image'

const myaccount = () => {
  return (
    <div className="h-[900px]">
    <div className="h-[316px] relative w-[100%] bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className="flex flex-col items-center justify-center">
        <Image src="./Meubel House_Logos-05.svg" alt="logo-image" width={77} height={77}/>
        <p className="text-[48px] leading-[50px] font-medium font-poppings text-sblack mb-4">My Account</p>
        <div className="flex justify-center items-center gap-4">
        <p className="text-[16px] leading-[24px] font-medium font-poppins">Home</p>
        <Image src="./Vector.svg" alt="logo-image" width={8} height={8}/>
        <p className="text-[16px] leading-[24px] font-[300px] font-poppins">My Account</p>
        </div>
      </div>
      </div>       
{/*form start*/}
    <div className="flex justify-center space-x-10">
  {/* Left Side: Login Form */}
  <form className="max-w-lg mt-10 space-y-6">
    <h2 className="text-[24px] font-semibold text-sblack font-poppins">Login</h2> {/* Title for Left Side */}

    {/* Username or Email Field */}
    <div className="space-y-2">
      <label
        htmlFor="username-left"
        className="text-[16px] leading-[24px] font-medium text-sblack font-poppins"
      >
        Username or Email Address
      </label>
      <input
        id="username-left"
        type="text"
        placeholder=""
        className="w-[423px] h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm"
      />
    </div>

    {/* Password Field */}
    <div className="space-y-2">
      <label
        htmlFor="password-left"
        className="block text-[16px] leading-[24px] font-medium text-sblack font-poppins"
      >
        Password
      </label>
      <input
        id="password-left"
        type="password"
        placeholder=""
        className="w-[423px] h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm"
      />
    </div>

    {/* Remember Me Checkbox */}
    <div className="flex items-center space-x-2">
      <input
        id="remember-left"
        type="checkbox"
        className="w-5 h-5 text-blue-500 border-greysame rounded focus:ring-2"
      />
      <label
        htmlFor="remember-left"
        className="text-[16px] leading-[24px] font-medium text-sblack font-poppins"
      >
        Remember Me
      </label>
    </div>

    {/* Buttons */}
    <div className="flex">
      <button className="w-[215px] h-[64px] border-2 rounded-[15px] border-sblack font-normal text-[20px] leading-[30px] font-poppins">
        Log In
      </button>
      <p className="text-[16px] leading-[24px] font-poppins text-greysame mt-6 ml-6">
        Lost Your Password?
      </p>
    </div>
  </form>

  {/* Right Side: Register Form */}
  <form className="max-w-lg mt-10 space-y-6">
    <h2 className="text-[24px] font-semibold text-sblack font-poppins">Register</h2> {/* Title for Right Side */}

    {/* Username or Email Field */}
    <div className="space-y-2">
      <label
        htmlFor="username-right"
        className="text-[16px] leading-[24px] font-medium text-sblack font-poppins"
      >
        Email Address
      </label>
      <input
        id="username-right"
        type="text"
        placeholder=""
        className="w-[423px] h-[75px] py-2 px-4 border border-gray-300 rounded-[10px] shadow-sm"
      />
    </div>
     <div className="text-justify">
    <p className="font-[300px] text-16px] leading-[24px] w-[453px] h-12 text-greysame">A link to set a new password will be sent to your email address.</p>
    <p className="font-[300px] text-16px] leading-[24px] w-[453px] h-12 text-greysame">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="text-sblack"><b>privacy policy</b></span></p>
     </div>
    

    {/* Buttons */}
    <div className="flex">
      <button className="w-[215px] h-[64px] border-2 rounded-[15px] border-sblack font-normal text-[20px] leading-[30px] font-poppins mt-16">Register</button>
    </div>
  </form>
</div>
    </div>
  )
}

export default myaccount
