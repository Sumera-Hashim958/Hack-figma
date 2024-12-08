import React from 'react'

const shop = () => {
  return (
    <div className="h-[316px] relative w-[100%] bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className="text-white text-center p-4 bg-black bg-opacity-50 rounded-md">
        <h1 className="text-[36px] font-bold mb-2">Welcome to My Blog</h1>
        <p className="text-[20px] font-normal">
          This is a beautiful card with a background image.
        </p>
      </div>
    </div>      
  )
}

export default shop
