import React from "react";
import './baliexperience.css'
import {Link} from 'react-router-dom'
import { useProgressiveImage } from "../../customHooks/ProgressiveImages";
export default function BaliExperience() {


  const Component = (props) => {
    const loaded = useProgressiveImage(props.url)
    
    return (
      <div 
      style={{ backgroundImage: `url(${loaded || props.placeholder})` }} 
       className={`BaliExperience rounded-[20px] w-[1863px] h-[848px] bg-cover bg-no-repeat bg-[top] text-center text-xl font-lato`}

       >
        <h1>Bali Experience</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        expedita magnam modi autem perspiciatis dolores voluptas rerum quam
        assumenda architecto.
      </p>
      <div className="experience-buttons">
        {/* <span className="rounded-lg bg-darkorange flex flex-row py-4 px-10 items-center justify-center border-[1px] border-solid border-button-stroke">Book Now</span>
        <span className="rounded-lg bg-white flex flex-row py-4 px-10 items-center justify-center text-darkslategray-200 border-[1px] border-solid border-button-stroke">Show Detail</span> */}
        <div className="experience-buttons">
          <div className=" rounded-lg bg-darkorange flex flex-row py-4 px-10 items-center justify-center border-[1px] border-solid border-button-stroke">
            <b className="relative"><Link to='search?category=&location=&activity='>Book Now</Link></b>
          </div>
          <div className=" rounded-lg bg-white flex flex-row py-4 px-10 items-center justify-center text-darkslategray-200 border-[1px] border-solid border-button-stroke">
            <b className="relative"><Link to='search?category=&location=&activity='>Show Details</Link></b>
          </div>
        </div>
      </div>
       </div>
    )
  }


  return (
    <Component url="one-of-top-banner@3x.png" placeholder="bali experience">
      
      </Component>
  
  );
}
