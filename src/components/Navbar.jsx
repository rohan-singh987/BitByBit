import React from 'react';

const Navbar = () => {
  return <div className=" bg-black">
      <div className="text-white p-4 flex justify-between">
        Bit By Bit

        <div className="flex">
            <ul className="flex px-3">
                <li className="px-3">
                    Home
                </li>
                <li className="px-3">
                    Blog
                </li>
                <li className="px-3">
                    about
                </li>
                <li className="px-3">
                    contact
                </li>
            </ul>
        </div>
      </div>
  </div>;
};

export default Navbar;
