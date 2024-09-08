import {Nav} from '../../components';
import headermob from '../../assets/img/header-mob.png';
import header from '../../assets/img/header.png';
import header1 from '../../assets/img/header1.png';

export default function Header() {
  return (
    <div className='sm:mb-section-mob mb-section'>
        <Nav />
        <h1 className="sm:h1-mob sm:mt-[20px] sm:leading-[38px] sm:mb-[20px] my-[40px] h1 max-w-[794px] leading-[86px]">Эксклюзивная и нестандартная мебель для дома</h1>
        <img className='sm:hidden float-right' src={header} alt="header" />
        <p className='sm:mb-[24px] sm:text-[16px] max-w-[445px] text-[20px]'>Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</p>
        <button className="secondbtn sm:mb-[26px]">ЗАКАЗАТЬ ПРОЕКТ</button>
        <img className='sm:block hidden' src={headermob} alt="headermob" />
        <img className='sm:hidden mt-[217px]' src={header1} alt="header1" />
    </div>
  )
}