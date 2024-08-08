// SideBar.js
import { useState } from "react";
import logo from '../assets/Logoxs.png';
import home from '../assets/Home.png';
import mail from '../assets/email.png';
import arrow from '../assets/Frame 23.png';
import list from '../assets/email (1).png';
import boxx from '../assets/Frame 19.png';
import bar from '../assets/bar_chart.png';

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState('/'); // Initialize with the default path

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img src={logo} className="h-8 w-8rounded-xl object-left overflow-visible" alt="Logo" />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-10">
        <div className={`cursor-pointer p-1 ${selectedItem === '/' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/')}>
          <img src={home} alt="home"/>
        </div>
        <div className={`cursor-pointer  p-1 ${selectedItem === '/search' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/search')}>
          <img src={mail} alt="mail"/>
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/mail' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/mail')}>
          <img src={arrow} alt="arrow"/>
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/send' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/send')}>
          <img src={list} alt="list"/>
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/inbox' ? 'bg-gray-600 rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/inbox')}>
        <img src={boxx} alt="box"/>
        </div>
        <div className={`cursor-pointer p-1 ${selectedItem === '/stack' ? 'bg-gray-600  rounded-lg' : ''}`} onClick={() => handleMenuItemClick('/stack')}>
        <img src={bar} alt="bar"/>
        </div>
      </div>
      <div className="text-white bg-green-900 p-3 w-8 h-8 rounded-full flex items-center justify-center">
        AR
      </div>
    </div>
  );
}

export default SideBar;
