import quotes from '../../assets/icons/quotes.svg';

export default function Reviews() {
  return (
    <div id='reviews' className="sm:mb-section-mob mb-section">
        <h2 className="sm:h2-mob sm:mb-[20px] h2 mb-[32px]">Отзывы</h2>
        <div className='sm:block flex justify-between'>
            <div className="py-[37px] px-[32px] border-black border-[1px] text-center mb-[16px]">
                <img className='sm:w-[32px] block mx-auto mb-[35px]' src={quotes} alt="quotes" />
                <p className='text-[18px] text-dark font-helvetica font-bold mb-[20px]'>Игорь Антонов</p>
                <p>Обратилась к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу. Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне.</p>
            </div>
            <div className="py-[37px] px-[32px] border-black border-[1px] text-center mb-[16px]">
                <img className='sm:w-[32px] block mx-auto mb-[35px]' src={quotes} alt="quotes" />
                <p className='text-[18px] text-dark font-helvetica font-bold mb-[20px]'>Ольга Иванова</p>
                <p>После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним. Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!</p>
            </div>
            <div className="py-[37px] px-[32px] border-black border-[1px] text-center">
                <img className='sm:w-[32px] block mx-auto mb-[35px]' src={quotes} alt="quotes" />
                <p className='text-[18px] text-dark font-helvetica font-bold mb-[20px]'>Аркадий Макаров</p>
                <p>Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн, согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!</p>
            </div>
        </div>
    </div>
  )
}