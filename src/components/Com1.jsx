import React from 'react';
import github from '../assets/github.gif'
import './Com1.css'

const Com1 = () => {
  return <div className="flex justify-evenly mx-5 my-16 content-center">

    <div className="com1">

      <h1 className=" font-bold text-6xl ">
        Lorem Ipsum
      </h1>

      <p className="py-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam deserunt, molestiae asperiores explicabo, dolore libero placeat numquam eveniet necessitatibus quis dignissimos cum dolorem itaque id ipsa ratione. Aperiam, illo!
      </p>

      <div className="">
        <button>
            Learn More
        </button>
    </div>
    </div>

      
      
      <div>
        <img src={github} alt="" className=" w-96" />
      </div>


    


  </div>;
};

export default Com1;
