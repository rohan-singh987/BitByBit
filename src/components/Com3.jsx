import React from 'react';
import img from '../assets/images.png'

const Com3 = () => {
  return <div className="flex justify-evenly py-20">
      <div class="flex-wrap -m-3"> 
  <div class=" w-96  flex flex-col p-3">
    <div class=" bg-slate-600 text-white drop-shadow-2xl rounded-lg shadow-2xl  flex-1 flex flex-col">
        <img src={img} alt="" />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="mb-4 text-2xl">Lorem Ipsum</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <a href="#" class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" />
      </div>
    </div>  
  </div>
  </div>
      <div class=" flex-wrap -m-3"> 
  <div class=" w-96  flex flex-col p-3">
    <div class=" bg-slate-600 text-white drop-shadow-2xl rounded-lg shadow-2xl  flex-1 flex flex-col">
      <div class="bg-cover h-72" >
      <img src={img} alt="" className="p-9 mx-7" />
      </div>
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="mb-4 text-2xl">Lorem Ipsum</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <a href="#" class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" />
      </div>
    </div>  
  </div>
  </div>
      <div class="flex-wrap -m-3"> 
  <div class=" w-96  flex flex-col p-3">
    <div class=" bg-slate-600 text-white drop-shadow-2xl rounded-lg shadow-2xl  flex-1 flex flex-col">
      <div class="bg-cover h-48" >
      <img src={img} alt="" className="p-2 rounded-full mx-auto w-1/2" />
      </div>
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="mb-4 text-2xl">Lorem Ipsum</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <a href="#" class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" />
      </div>
    </div>  
  </div>
  </div>
  </div>;
};

export default Com3;
