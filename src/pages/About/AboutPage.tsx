import { Link } from "react-router-dom";
import m from "./AboutPage.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Footer from "../../components/Header/Footer/Footer";
import PageNavigator from "../../components/Header/PageNavigator/PageNavigator";
import { useState } from "react";

function AboutPage() {

    const [activeDropdown, setActiveDropdown] = useState<number>(0)

    return (
        <div className={m.AboutPageWrapper}>
            <PageNavigator
                title="О компании"
                paths={[{
                    value: "Главная",
                    active: false, 
                    href: "/"
                }, {
                    value: "О компании",
                    active: true, 
                    href: "/about"
                }]}
            />
            <div className={m.AboutContent}>
                <div className={m.AboutTitle}>
                    <h1>ООО "АККОРД"</h1>
                </div>
                <div className={m.Prefix}>
                    Наша компания оказывает широкий спектр услуг по строительству модульных зданий и смежному производству.
                </div>
                <div className={m.Text}>
                    ООО «АККОРД» является производственно-строительной компанией, специализирующейся на изготовлении модульных зданий «под ключ». Торговый киоск или павильон, учебный корпус или офис продаж, садовый или жилой дом – у нас Вы можете заказать мобильный модуль под любые задачи.
                    <br/><br/>
                    Наше основное преимущество – комплектация объектов строительства «под ключ».
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
                            <img src="https://i.ibb.co/WF6R0Cm/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/CQdNtqX/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/x5VC2yS/image.png"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={m.Text}>
                    Мы организуем весь процесс производства полностью – от постановки задачи для дизайнера и архитектора до закупки стройматериалов и организации работы строителей.
                    <br/><br/>
                    Вы избавляете себя от необходимости всесторонне контролировать процесс и вести бесконечные переговоры с подрядчиками – отчеты о продвижении дел Вы получаете от менеджера нашей компании.
                    <br/><br/>
                    Комплектация строительных объектов «под ключ» — простое решение сложных проблем.
                </div>
                <div className={m.Prefix}>
                    ООО «АККОРД» — это профессиональный инструмент для достижения Ваших целей!
                </div>
                <div className={m.Text}>
                    Мы изготавливаем конструкции на заказ, учитывая все пожелания клиента. Наша команда готова взяться за проекты любой сложности, реализовать нестандартную идею и стать опытным консультантом в тематике строительства модульных зданий.
                </div>
                <div className={m.Prefix}>
                    Полная комплектация модуля и широкий спектр дополнительных услуг сэкономят Вам не только время, но и более 10% бюджета.
                </div>
                <div className={m.Text}>
                    Собственное производство, применение современного оборудования, оптимизация процессов и использование только надежных комплектующих, позволяют нам гарантировать качество продукции ООО «АККОРД».
                </div>
            </div>
            <div className={m.HowWeWork}>
                <span className={`dots ${m.Dots} ${m.DotLeftTop}`}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </svg>
                </span>
                <span className={`dots ${m.Dots} ${m.DotLeftBottom}`}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </svg>
                </span>
                <span className={`dots ${m.Dots} ${m.DotRightTop}`}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </svg>
                </span>
                <span className={`dots ${m.Dots} ${m.DotRightBottom}`}>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="#D9D9D9"/>
                    </svg>
                </span>
                <div className={m.Title}>
                    <h1>Как мы работаем</h1>
                </div>
                <div className={m.Content}>
                    <div className={m.Priv}>
                        <h1 className={m.Title}>
                            <span>0</span>
                            <span>1</span>
                        </h1>
                        <h1>Выявляем потребности</h1>
                        <p>
                            Наши специалисты рассчитают
                            <br></br>
                            смету на строительство оптимально подходящую
                            <br></br> 
                            под Ваши задачи.
                        </p>
                    </div>
                    <div className={m.Priv}>
                        <h1 className={m.Title}>
                            <span>0</span>
                            <span>2</span>
                        </h1>
                        <h1>Разрабатываем проект</h1>
                        <p>
                            Мы успешно подбираем решения, которые наилучшим образом соответствуют желаниям и бюджету наших клиентов.
                        </p>
                    </div>
                    <div className={m.Priv}>
                        <h1 className={m.Title}>
                            <span>0</span>
                            <span>3</span>
                        </h1>
                        <h1>Строим мечту</h1>
                        <p>
                            Мы дорожим своей репутацией, поэтому ответственно относимся к каждому заказу и добиваемся результатов.
                        </p>
                    </div>
                </div>
            </div>
            <div className={m.Questions}>
                <h1 className={m.Title}>Частые Вопросы</h1>
                <div className={m.Content}>
                    <div className={`${m.Dropdown} ${activeDropdown === 1 && m.Active}`}>
                        <button className={m.DropdownInnitiator} onClick={() => activeDropdown === 1 ? setActiveDropdown(0) : setActiveDropdown(1)}>
                            <div className={m.InnitiatorContent}>
                                Как осуществляется доставка? Стоимость доставки?
                            </div>
                            <div className={m.InnitiatorIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.708" height="7.274" viewBox="0 0 6.708 7.274">
                                    <path d="M4.092,6.969,6.708,4.353,6,3.646l-2.147,2.1V0h-1V5.793L.707,3.647,0,4.354,2.616,6.969a1.045,1.045,0,0,0,1.476,0" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                        <div className={m.DropdownContent}>
                            Доставка модуля в разборном виде осуществляется тралом. Монтаж конструкции производится на месте установки модуля. Стоимость доставки зависит от километража, от 55 руб./км.
                        </div>
                    </div>
                    <div className={`${m.Dropdown} ${activeDropdown === 2 && m.Active}`}>
                        <button className={m.DropdownInnitiator} onClick={() => activeDropdown === 2 ? setActiveDropdown(0) : setActiveDropdown(2)}>
                            <div className={m.InnitiatorContent}>
                                Нужен ли фундамент? Какой?
                            </div>
                            <div className={m.InnitiatorIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.708" height="7.274" viewBox="0 0 6.708 7.274">
                                    <path d="M4.092,6.969,6.708,4.353,6,3.646l-2.147,2.1V0h-1V5.793L.707,3.647,0,4.354,2.616,6.969a1.045,1.045,0,0,0,1.476,0" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                        <div className={m.DropdownContent}>
                            Так как каркас наших модулей достаточно жёсткий, то установку можно произвести на твёрдую поверхность, такую как асфальт, бетон, а также ЖБ сваи. Подъем от грунта должен составлять минимум 5-10 см.
                        </div>
                    </div>
                    <div className={`${m.Dropdown} ${activeDropdown === 3 && m.Active}`}>
                        <button className={m.DropdownInnitiator} onClick={() => activeDropdown === 3 ? setActiveDropdown(0) : setActiveDropdown(3)}>
                            <div className={m.InnitiatorContent}>
                                Толщина устанавливаемого стеклопакета?
                            </div>
                            <div className={m.InnitiatorIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.708" height="7.274" viewBox="0 0 6.708 7.274">
                                    <path d="M4.092,6.969,6.708,4.353,6,3.646l-2.147,2.1V0h-1V5.793L.707,3.647,0,4.354,2.616,6.969a1.045,1.045,0,0,0,1.476,0" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                        <div className={m.DropdownContent}>
                            Толщина двухкамерного стеклопакета 32 мм. Окна и двери мы изготавливаем из теплого алюминиевого профиля с возможностью покраски в любой цвет по таблице RAL.
                        </div>
                    </div>
                    <div className={`${m.Dropdown} ${activeDropdown === 4 && m.Active}`}>
                        <button className={m.DropdownInnitiator} onClick={() => activeDropdown === 4 ? setActiveDropdown(0) : setActiveDropdown(4)}>
                            <div className={m.InnitiatorContent}>
                                Где находится производство? Есть ли офис в других городах?
                            </div>
                            <div className={m.InnitiatorIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6.708" height="7.274" viewBox="0 0 6.708 7.274">
                                    <path d="M4.092,6.969,6.708,4.353,6,3.646l-2.147,2.1V0h-1V5.793L.707,3.647,0,4.354,2.616,6.969a1.045,1.045,0,0,0,1.476,0" fill="currentColor"></path>
                                </svg>
                            </div>
                        </button>
                        <div className={m.DropdownContent}>
                            Производство находится по адресу: Тверская область, г. Тверь, ул. Коняевская, д. 11. Офисов в других городах нет.
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage