import React from 'react'
import Image from 'next/image'

const description = () => {
  return (
    <div className="h-[800px] bg-swhite">
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

export default description
