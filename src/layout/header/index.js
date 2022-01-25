import React, { useState } from "react";
import MenuItem from "../../components/item/menuitem";
import { menuList } from "./menu";
import Logo from '../../assets/images/logo.png'
import IcoMenu from '../../assets/icons/ic_menu.svg'


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="absolute h-36 md:h-52 lg:h-60 flex justify-between items-center w-full px-10 lg:px-20">
      <img src={Logo} alt="logo" className="w-36 md:w-52 lg:w-73" />
      <div className="md:flex gap-4 hidden">
        <div className="flex gap-8">
          {menuList.map((menu, idx) => (
            <MenuItem menu={menu} key={idx} />
          ))}
        </div>
        <button className="border-app-primary border-2 text-app-primary px-4 py-1 lg:px-8 lg:py-3 rounded-full">Connect Wallet</button>
      </div>
      <div className="flex md:hidden " onClick={() => setOpenMenu(!openMenu)}>
        <img src={IcoMenu} alt="menu" />
      </div>
      <div className={` fixed top-0 right-0 w-screen z-50 min-h-screen bg-black bg-opacity-70 transform shadow-lg shadow-white ${openMenu ? " -trasnlate-x-0" : " translate-x-full"} duration-200`}>
        <div className="h-36 flex bg-black items-center pr-10 justify-end" onClick={() => setOpenMenu(!openMenu)}>
          <p className="text-5xl cursor-pointer text-white">×</p>
        </div>
        <div className="w-full flex justify-center flex-col items-center gap-8 pt-10">
          <div className="flex gap-8 flex-col">
            {menuList.map((menu, idx) => (
              <MenuItem menu={menu} key={idx} className="text-2xl"/>
            ))}
          </div>
          <button className="border-app-primary border-2 text-app-primary px-4 py-1 lg:px-8 lg:py-3 rounded-full w-max text-2xl">Connect Wallet</button>
        </div>
      </div>
    </div>
  )
}



export default Header