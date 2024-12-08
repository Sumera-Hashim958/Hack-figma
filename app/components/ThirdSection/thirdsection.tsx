import React from 'react'
import Image from 'next/image'

const homePage = () => {
  return (
    <div className="h-[800px] bg-simsmokey">
      <div className="flex">
      <div className="w-1/2 flex flex-col justify-center items-start mt-40">
      <Image src={"/side-table-third.svg"} alt="next-image" width={605} height={562}/>
      </div>
      <div className="w-1/2 mt-40">
      <Image src={"/side-sofa-third.svg"} alt="next-image" width={605} height={562}/>
      </div>
      </div>
    </div>
  )
}

export default homePage
