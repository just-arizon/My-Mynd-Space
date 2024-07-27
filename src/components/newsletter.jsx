import React from 'react';
import Polygon1 from '../assets/Polygon 1.svg'
import Polygon2 from '../assets/Polygon 2.svg'
import NewsletterImg from '../assets/Group 3706.png'
import Button from "@mui/material/Button";

const newsletter = () => {
  return (
    <div className='flex lg:flex-row flex-col  py-5'>
      <div className='flex-1 pt-16'>
          <div>
              <div>
                <div className='lg:px-16 px-2 lg:w-2/3 flex'>
                    <h4 className='font-semibold text-2xl mb-5'>Subscribe to our newsletter today !</h4>
                    <div className='px-5'>
                    <img src={Polygon2} alt="" className='w-5 absolute'/>
                </div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='px-5'>
                    <img src={Polygon1} alt="" className='w-5 absolute'/>
                </div>
                <div className='lg:px-16 px-2 lg:w-4/5'>
                    <p className='pr-5'>Don’t miss any information, stay updated always with our timely newsletters. Subscribe below</p>
                </div>
                <form action="" className='lg:px-16 px-2 lg:flex gap-5'>
                    <input 
                    type="text" 
                    placeholder='your email address'
                    className="w-48 bg-[#F2F6F9] py-2 pl-5 my-3"
                    />
                    <Button>Subscribe</Button>
                </form>
              </div>
          </div>
      </div>
      <div className="newsletter_img flex-1 flex justify-center">
        <img src={NewsletterImg} alt="" className='w-4/6'/>
      </div>
    </div>
  );
}

export default newsletter;
