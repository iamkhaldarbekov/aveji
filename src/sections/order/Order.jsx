import googleplay from '../../assets/icons/googleplay.svg';
import appstore from '../../assets/icons/appstore.svg';
import order from '../../assets/img/order.png';

export default function Order() {
  return (
    <div className="sm:mb-[60px] sm:flex-none flex justify-between">
      <img className='sm:hidden block' src={order} alt="order" />
      <div>
        <h2 className="sm:h2-mob sm:mb-[20px] mb-[32px] h2">Хотите заказать проект?</h2>
        <p>Оставьте заявку, и мы вам перезвоним</p>
        <div className="mt-[32px]">
          <input type="text" className="inp mb-[15px]" placeholder="Имя" />
          <input type="text" className="inp mb-[15px]" placeholder="E-mail" />
          <input type="text" className="inp mb-[20px]" placeholder="Телефон" />
          <button className="btn">Отправить заявку</button>
          <div className='mt-[28px] flex'>
            <img className='mr-[8px]' src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
    </div>
  )
}