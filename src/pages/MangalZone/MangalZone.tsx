import { Link } from "react-router-dom"
import m from "./MangalZonePage.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import Footer from "../../components/Header/Footer/Footer"
import PageNavigator from "../../components/Header/PageNavigator/PageNavigator"
import { useState } from "react";

function MangalZonePage() {

    const [tab1Active, setTab1Active] = useState<boolean>(false)
    const [tab2Active, setTab2Active] = useState<boolean>(false)

    return (
        <div className={m.MangalZonePageWrapper}>
            <PageNavigator
                title="Мангальная зона / Уличная кухня"
                paths={[{
                    value: "Главная",
                    active: false, 
                    href: "/"
                }, {
                    value: "Каталог",
                    active: false, 
                    href: "/catalog"
                },{
                    value: "Мангальная зона / Уличная кухня",
                    active: true,
                    href: "/catalog/mangal-zone"
                }]}
            />
            <div className={m.MangalZoneContent}>
                <div className={m.MangalZoneTitle}>
                    <h1>Мангальная зона / Уличная кухня</h1>
                </div>
                <div className={m.Prefix}>
                    Многофункциональная беседка в стиле БарнХаус
                    <br></br>
                    (Мангальная зона / Летняя кухня / Зона отдыха /  Хозблок)
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className="SwiperBottom"
                >
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/BwNJRmb/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/R3vf1R8/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/H2MfLn3/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/4fB53pn/image.png"/>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                <div className={m.TabsContainer}>
                    <div onClick={() => setTab1Active(false)} className={`${m.Tab} ${!tab1Active ? m.Active : m.Inactive}`}>
                        Описание
                    </div>
                    <div onClick={() => setTab1Active(true)}  className={`${m.Tab} ${tab1Active ? m.Active : m.Inactive}`}>
                        Характеристики
                    </div>
                </div>
                {
                    !tab1Active
                        ?
                        <div className={m.TabDesc}>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Наружная отделка / Внутренняя отделка:
                                </strong> сайдинг металлический, имитация бруса
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Напольное покрытие:
                                </strong> террасная доска
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Каркас:
                                </strong> выполнен из профильной трубы разного сечения 80*80, 60*60 (покрыт антикоррозийным грунтом)
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Цвет фасада:
                                </strong> RAL 7024 (любой цвет по палитре Ral classic)
                            </div>
                        </div>
                        :
                        <div className={m.TabDesc}>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Площадь застройки: 
                                </strong> 9,6 м<sup>2</sup>
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Ширина*Длина*Высота:
                                </strong> 2,4*4*2,8 м
                            </div>
                        </div>
                }
                <p>
                    Мангальная зона может состоять из совокупности элементов под Ваш выбор.
                </p>
                <div className="list">
                    <div className="list-title">
                        Базовая комплектация: 
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Каркас 2400х4000 мм с внешней и внутренней отделкой стен, пола и кровли
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-title">
                        Базовая комплектация: 
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Откидная терраса с ручным приводом
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Откидная терраса с электроприводом
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Перегородка
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                ХозБлок
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Электрика
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Мебель
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                Сантехника.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={m.Prefix}>
                    Летняя кухня модульного типа:
                    (Мангальная зона / Уличная кухня)
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className="SwiperBottom"
                >
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/LRjcytk/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/GHz6xZb/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/gFgpdnv/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/R4nQtch/image.png"/>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                <div className={m.TabsContainer}>
                    <div onClick={() => setTab2Active(false)} className={`${m.Tab} ${!tab2Active ? m.Active : m.Inactive}`}>
                        Описание
                    </div>
                    <div onClick={() => setTab2Active(true)}  className={`${m.Tab} ${tab2Active ? m.Active : m.Inactive}`}>
                        Характеристики
                    </div>
                </div>
                {
                    !tab2Active
                        ?
                        <div className={m.TabDesc}>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Наружная отделка / Внутренняя отделка:
                                </strong> сайдинг металлический, имитация бруса
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Напольное покрытие:
                                </strong> террасная доска
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Каркас:
                                </strong> выполнен из профильной трубы разного сечения 80*80, 60*60 (покрыт антикоррозийным грунтом)
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Цвет фасада:
                                </strong> RAL 7024 (любой цвет по палитре Ral classic)
                            </div>
                            <div className={m.Desc}>
                                <strong>Кухонный гарнитур</strong>
                            </div>
                        </div>
                        :
                        <div className={m.TabDesc}>
                            <div className={m.Desc}>
                                Бокс 1:
                                <br></br><br/>
                                <strong className={m.DescV}>
                                    Площадь застройки: 
                                </strong> 2,85 м<sup>2</sup>
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Ширина*Длина*Высота:
                                </strong> 0,76*3,76*2,8 м
                            </div>
                            <span></span>
                            <div className={m.Desc}>
                                Бокс 2:
                                <br></br><br/>
                                <strong className={m.DescV}>
                                    Площадь застройки: 
                                </strong> 1,95 м<sup>2</sup>
                            </div>
                            <div className={m.Desc}>
                                <strong className={m.DescV}>
                                    Ширина*Длина*Высота:
                                </strong> 0,76*2,56*2,8 м
                            </div>
                        </div>
                }
                <div className={m.Prefix}>
                    Вы выбираете то, что Вам нужно, и получаете полностью готовый к эксплуатации объект.
                </div>
                <strong>Монтаж на участке за один час.
                Доставка по всей России!</strong>
                <br></br>
            </div>
            <Footer/>
        </div>
    )
}

export default MangalZonePage