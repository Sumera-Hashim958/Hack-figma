import React from 'react'
import Image from 'next/image'

const productdetail = () => {
  return (
    <div className="h-[1600px] bg-swhite">
        <div className="flex ml-36 mt-8 gap-8">
      <p className="font-normal text-[16px] leading-[24px] text-greysame font-poppins">Home</p>
      <Image src="./Vector.svg" alt="vector-image" width={8} height={8}/>
      <p className="font-normal text-[16px] leading-[24px] text-greysame font-poppins">Shop</p>
      <p className="font-normal text-[16px] leading-[24px] text-greysame font-poppins">|</p>
      <p className="font-normal text-[16px] leading-[24px] text-sblack font-poppins">Asgard Sofa</p>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <div className="">
            <Image src="./asg-sofa1.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
            <Image src="./asg-sofa2.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
            <Image src="./asg-sofa3.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
            <Image src="./asg-sofa4.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
        </div>
        <div className="ml-0">
        <Image src="./big-sofa.svg" alt="big-sofa-image" width={500} height={600}/>
        </div>
        <div className="box">
        <p className="font-semibold text-[24px] leading-[24px] text-sblack">Asgard Sofa</p>
        <p className="font-medium text-[24px] leading-[36px] text-greysame font-poppins mt-4">Rs.250,000.00</p>
        <div className="flex">
        <Image src="/star-asg.svg" alt="big-gampad-image" width={124} height={20}/>
        <p className="font-medium text-[24px] leading-[36px] text-greysame font-poppins ml-4">|<span className="font-normal text-[13px] leading[19.5] ml-4">5 Customer Review</span></p>
        </div>
        <p className="font-normal text-[14px] leading-[21px] text-sblack mt-4 w-[373px] h-[63px] text-justify">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
        <p className="font-normal text-[14px] leading-[21px] text-greysame font-poppins mt-10">Size</p>
        <div className="flex gap-4 mt-4">
        <button className="w-8 h-8 rounded-[4px] border-sblack opacity-50 border-2 bg-biscuit">L</button>
        <button className="w-8 h-8 rounded-[4px] border-sblack opacity-50 border-2">XL</button>
        <button className="w-8 h-8 rounded-[4px] border-sblack opacity-50 border-2">XS</button>
        </div>
        <p className="font-normal text-[14px] leading-[21px] text-greysame font-poppins mt-4">Colors</p>
        <div className="flex gap-4 mt-4">
        <div className="w-[30px] h-[30px] rounded-full bg-blue"></div>
        <div className="w-[30px] h-[30px] rounded-full bg-sblack"></div>
        <div className="w-[30px] h-[30px] rounded-full bg-brown"></div>
        </div>
        <div className="flex gap-6 mt-6">
        <button className="w-[123px] h-[64px] rounded-[10px] border-greysame border-2 font-poppins text-[16px] leading-[24px] font-medium">-<span className="ml-8">1</span><span className="ml-8">+</span></button>
        <button className="w-[215px] h-[64px] rounded-[10px] border-sblack border-2 font-poppins text-[20px] leading-[30px] font-normal">Add To Cart</button>
        </div>
        <div className="flex gap-4">
        </div>
        </div>
    </div>
    <div className="font-normal text-greysame font-poppins text-[16px] leading-[24px] ml-[790px]">
        <p className="mb-4">SKU<span className="ml-8">:</span><span className="ml-8">SS001</span></p>
        <p className="mb-4">Category<span className="ml-8">:</span><span className="ml-8">Sofas</span></p>
        <p className="mb-4">Tags<span className="ml-8">:</span><span className="ml-8">Sofa, Chair, HOme, Shop</span></p>
        <p className="mb-4">Share<span className="ml-8">:</span></p>
    </div>
    {/*description */}
    <div className="flex justify-center items-center gap-8 font-normal text-[24px] leading-[36px]">
        <p className="text-sblack">Description</p>
        <p className="text-greysame">Additional Information</p>
        <p className="text-greysame">Reviews[5]</p>
    </div>
    <div className="ml-36 mt-10">
    <p className="font-normal text-[16px] leading-[24px] text-greysame w-[1026px] h-[48px]">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
    </div>
    <div className="ml-36 mt-4 text-justify">
    <p className="font-normal text-[16px] leading-[24px] text-greysame w-[1026px] h-[48px]">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    </div>
    <div className="flex gap-4 ml-10 mt-20">
    <Image src="./white-sofa-asg.svg" alt="white-asg-image" width={605} height={348}/>
    <Image src="./white-sofa-asg.svg" alt="white-asg-image" width={605} height={348}/>
    </div>
      </div>
    
  );
};

export default productdetail
