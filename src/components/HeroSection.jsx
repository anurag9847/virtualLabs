import React from 'react'
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";


export default function HeroSection() {
    return (
        <div className="flex flex-col item-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                    {" "}for developers
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4-xl'>
                Empower  your creativity and bring your VR app ideas to life with our intutive development tools
                Get started today and turn your imagination to immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className=' flex bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md items-center'>
                    Start for free
                </a>
                <a href="#" className='py-4 px-4 mx-3  rounded-md border'>Documentation</a>
            </div>
            <div className='flex mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={Video1} type='video/mp4'/>
                    Your browser does not support video tag.
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={Video2} type='video/mp4'/>
                    Your browser does not support video tag.
                </video>

            </div>
        </div>
    )
}
