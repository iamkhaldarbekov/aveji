import {useState} from 'react';

import logo from '../../assets/icons/logo.svg';
import burger from '../../assets/icons/burger.svg';
import cancel from '../../assets/icons/cancel.svg';

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <div className='flex justify-between items-center'>
        <img className='sm:w-[26px]' src={logo} alt="logo" />
        <div className='sm:hidden flex justify-between w-[400px]'>
          <ul>
            <li><a className='text-[18px]' href="#about">О нас</a></li>
            <li><a className='text-[18px]' href="#projects">Проекты</a></li>
            <li><a className='text-[18px]' href="#">Материалы</a></li>
            <li><a className='text-[18px]' href="#reviews">Отзывы</a></li>
          </ul>
          <p className='text-[18px]'>+7 999 999 99 99</p>
        </div>
        <button className='sm:block hidden' onClick={() => setMenu(true)}><img src={burger} alt="burger" /></button>
        <div className='fixed top-0 left-0 bg-white h-[100vh] w-[100vw]' style={menu ? {display: "block"} : {display: "none"}}>
            <div className='relative p-[16px]'>
              <button className='absolute w-[24px] right-[16px]' onClick={() => setMenu(false)}><img src={cancel} alt="cancel" /></button>
              <ul>
                <li><a className='text-[18px]' href="#about">О нас</a></li>
                <li><a className='text-[18px]' href="#projects">Проекты</a></li>
                <li><a className='text-[18px]' href="#">Материалы</a></li>
                <li><a className='text-[18px]' href="#reviews">Отзывы</a></li>
              </ul>
            </div>
        </div>
    </div>
  )
}