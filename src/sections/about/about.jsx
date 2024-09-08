export default function About() {
    return (
        <div id="about" className="sm:mb-section-mob mb-section sm:block flex justify-between">
            <h2 className="sm:h2-mob sm:mb-[20px] sm:block hidden">О компании</h2>
            <h2 className="sm:hidden h2 leading-[66px]">Более 5 лет создаем мебель для вашего комфорта</h2>
            <div>
                <div className="sm:mb-[32px] mb-[44px]">
                    <p className="max-w-[446px]">Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.</p>
                    <br />
                    <p className="max-w-[446px]">Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.</p>
                    <br />
                    <p className="max-w-[446px]">В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.</p>
                </div>
                <div className="max-w-[161px]">
                    <div className="sm:mb-[20px] mb-[24px]">
                        <h3 className="sm:h3-mob h3">1 год</h3>
                        <p>гарантии на всю продукцию</p>
                    </div>
                    <div className="sm:mb-[20px] mb-[24px]">
                        <h3 className="sm:h3-mob h3">300+</h3>
                        <p>выполненных проектов</p>
                    </div>
                    <div className="sm:mb-[20px] mb-[24px]">
                        <h3 className="sm:h3-mob h3">15 дней</h3>
                        <p>срок производства</p>
                    </div>
                </div>
            </div>
        </div>
    )
}