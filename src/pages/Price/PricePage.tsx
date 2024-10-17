import { Link } from "react-router-dom";
import m from "./PricePage.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Footer from "../../components/Header/Footer/Footer";
import PageNavigator from "../../components/Header/PageNavigator/PageNavigator";

function PricePage() {
    return (
        <div className={m.PricePageWrapper}>
            <PageNavigator
                title="Цены"
                paths={[{
                    value: "Главная",
                    active: false, 
                    href: "/"
                }, {
                    value: "Цены",
                    active: true, 
                    href: "/price"
                }]}
            />
            <div className={m.PriceContent}>
                <div className={m.PriceTitle}>
                    <h1>Цена за модуль</h1>
                </div>
                <p>
                    Первичная цена за 1 квадратный метр объекта формируется из расчета базовой комплектации модуля размером 2,45х6 м и высотой 2,8 м.
                </p>
                <div className="list">
                    <div className="list-title">
                        Базовая комплектация включает в себя:
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Каркас из металлического профиля различного сечения с антикоррозийным покрытием
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Стены с утеплителем 100 мм
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Утеплитель — пенополиуретан / минеральная вата
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Наружная и внутренняя облицовка стен – оцинкованный окрашенный профлист
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Дверь из теплого алюминиевого профиля 900х2100 мм
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Окно из теплого алюминиевого профиля 1200х1500 мм
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Пол — оцинкованный лист, утеплитель 60 мм, ДСП, линолеум
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Электропроводка
                            </div>
                        </div>
                    </div>
                </div>
                <strong>Торговые киоски и павильоны – от 22 000 руб. за 1 м2</strong>
                <p>Конечная цена модульной конструкции рассчитывается индивидуально и зависит от габаритов модуля, материалов отделки, объектов укомплектации и выбора дополнительных услуг.</p>
                <strong>Для расчета точной цены интересующего Вас модуля заполните заявку на сайте, и наш менеджер свяжется с Вами в ближайшее время.</strong>

                <br></br><br></br>
                <div className={m.PriceTitle}>
                    <h1>Способы оплаты</h1>
                </div>

                <div className="list">
                    <div className="list-title">
                        Для Вас доступна любая форма оплаты:
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Наличный расчет
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Безналичный расчет
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="list">
                    <div className="list-title">
                        Оплата выставленного счета по реквизитам компании ООО «АККОРД».
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Рассрочка
                            </div>
                        </div>
                    </div>
                </div>

                <p>Вы можете приобрести желаемый товар в рассрочку. Компания «АККОРД» предлагает доступный и быстрый способ оформления кредита через наш офис продаж.</p>   
                <p>Решение по кредиту поступает в течение 10 минут.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default PricePage