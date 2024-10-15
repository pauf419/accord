import { Link } from "react-router-dom";
import m from "./RootPage.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Footer from "../../components/Header/Footer/Footer";

function RootPage() {

    return (
        <div className={`page-wrapper ${m.RootPageWrapper}`}>
            <div className={m.WelcomeContainer}>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    modules={[EffectFade, Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={`${m.Slide} ${m.Slide0}`}>
                            <div className={m.Blurer}></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${m.Slide} ${m.Slide1}`}>
                            <div className={m.Blurer}></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${m.Slide} ${m.Slide2}`}>
                        <div className={m.Blurer}></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${m.Slide} ${m.Slide3}`}>
                        <div className={m.Blurer}></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`${m.Slide} ${m.Slide4}`}>
                        <div className={m.Blurer}></div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <svg width="792" height="676"className={m.ImpulseSvg} viewBox="0 0 792 676" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L353.679 15.5088L173.313 196.14L0 182.456V0Z" fill="#DAA721"/>
                    <path d="M173.313 196.14L353.679 15.5088L293.221 382.246L152.153 676L173.313 196.14Z" fill="#DAA721"/>
                    <path d="M293.221 382.246L792 114.035L152.153 676L293.221 382.246Z" fill="#DAA721"/>
                    <path d="M131 94.5303L354 15L281.348 196H173.38L131 94.5303Z" fill="#DAA721"/>
                    <path d="M170.129 495.217L293 382L248.686 568.261L152 676L170.129 495.217Z" fill="#DAA721"/>
                </svg>
                <div className={m.Content}>
                    <h1>Строим павильоны, киоски, маф ангар, рынок и реконструкция рынка</h1>
                    <p>Компания «Аккорд» предлагает квалифицированные услуги по строительству удобных и надежных зданий, которые сегодня активно используются в сфере торговли.</p>
                    <div className="btn-outline">
                        <button className={m.WelcomeBtn}>
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </div>
            <div className={m.ProductsContainer}>
                <div className={m.Products}>
                    <div className={m.ProductLink}>
                        <svg className={m.Edge} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" width="2" height="30" fill="#DAA721"/>
                            <rect y="0" width="30" height="2" fill="#DAA721"/>
                        </svg>

                        <div className={m.ProductTitle}>
                            Модульное здание под ключ
                        </div>
                        <div className={m.ProductDescription}>
                            Уличные торговые киоски и павильоны, модульные здания и жилые дома
                        </div>
                        <div className={m.ProductCont}>
                            <span>Далее...</span><svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none"><path d="M0 4.5H30M30 4.5L26 0.5M30 4.5L26 8.5" stroke="#1A1A1A"></path></svg>
                        </div>
                    </div>
                    <div className={m.ProductLink}>
                        <svg className={m.Edge} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" width="2" height="30" fill="#DAA721"/>
                            <rect y="0" width="30" height="2" fill="#DAA721"/>
                        </svg>

                        <div className={m.ProductTitle}>
                            Мангальная зона 
                            <br/>
                            Уличная кухня
                        </div>
                        <div className={m.ProductDescription}>
                            Многофункциональная беседка модульного типа.
                            <br/>
                            Зона отдыха
                        </div>
                        <div className={m.ProductCont}>
                            <span>Далее...</span><svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none"><path d="M0 4.5H30M30 4.5L26 0.5M30 4.5L26 8.5" stroke="#1A1A1A"></path></svg>
                        </div>
                    </div>
                    <div className={m.ProductLink}>
                        <svg className={m.Edge} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" width="2" height="30" fill="#DAA721"/>
                            <rect y="0" width="30" height="2" fill="#DAA721"/>
                        </svg>

                        <div className={m.ProductTitle}>
                            Быстровозводимое здание
                        </div>
                        <div className={m.ProductDescription}>
                            Промышленные здания, склады и ангары из металлоконструкций
                        </div>
                        <div className={m.ProductCont}>
                            <span>Далее...</span><svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none"><path d="M0 4.5H30M30 4.5L26 0.5M30 4.5L26 8.5" stroke="#1A1A1A"></path></svg>
                        </div>
                    </div>
                    <div className={m.ProductLink}>
                        <svg className={m.Edge} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" width="2" height="30" fill="#DAA721"/>
                            <rect y="0" width="30" height="2" fill="#DAA721"/>
                        </svg>

                        <div className={m.ProductTitle}>
                            Барнхаус дом BarnHouse
                        </div>
                        <div className={m.ProductDescription}>
                            Амбарные дома
                            в стиле «Барнхаус» 
                            <br/>
                            под ключ
                        </div>
                        <div className={m.ProductCont}>
                            <span>Далее...</span><svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none"><path d="M0 4.5H30M30 4.5L26 0.5M30 4.5L26 8.5" stroke="#1A1A1A"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={m.AboutContainer}>
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
                <div className={m.AboutTitle}>
                    <h1> Мы <span className="primary">эксперты</span></h1>
                </div>
                <div className={m.AboutContext}>
                    <h2>Наша компания оказывает широкий спектр услуг по некапитальному строительству модульных зданий и смежному производству.</h2>
                    <p>Мы заботимся о качестве на каждом этапе – от проектирования до установки – и стремимся к тому, чтобы каждый проект был не только удобным и надежным, но и эстетичным.</p>
                    <div className="btn-outline">
                        <button className={m.Btn}>
                            О компании
                        </button>
                    </div>
                </div>
            </div>
            <div className={m.PurposesContainer}>
                <div className={m.PurposesInfo}>
                    <svg className={`${m.Border} ${m.B0}`} width="267" height="226" viewBox="0 0 267 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="62.716" y="0.522461" width="230.588" height="132.408" transform="rotate(28.07 62.716 0.522461)" fill="#DAA721"/>
                    </svg>

                    <div className={m.PurposesTitle}>
                        <h1>Услуги</h1>
                    </div>
                    <div className={m.PurposesDesc}>
                        Мы постоянно расширяем спектр услуг, чтобы сделать сотрудничество с нами более комфортным для Вас.
                    </div>
                </div>
                <div className={m.PurposesContent}>
                    <div className={`${m.PurposeContainer} ${m.Purposenth0}`}>
                        <div className={m.PurposeContent}>
                            <div className={m.PurposeTitle}>
                                <h2>Выезд специалиста</h2>
                            </div>
                            <div className={m.PurposeDesc}>
                                Оценка участка и помощь
                            </div>
                            <ul className={m.PurposeSub}>
                                <li>Консультация</li>
                                <li>Осмотр</li>
                                <li>Замер</li>
                            </ul>
                        </div>
                        <div className={m.PurposeNext}>
                            <span>Далее...</span><svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none"><path d="M0 4.5H30M30 4.5L26 0.5M30 4.5L26 8.5" stroke="#1A1A1A"></path></svg>
                        </div>
                    </div>
                    <div className={`${m.PurposeContainer} ${m.Purposenth1}`}>
                        <div className={m.PurposeContent}>
                            <div className={m.PurposeTitle}>
                                <h2>Бизнес под ключ</h2>
                            </div>
                            <div className={m.PurposeDesc}>
                                Услуги открытия бизнеса с нуля и масштабирование
                            </div>
                            <ul className={m.PurposeSub}>
                                <li>Модуль «под ключ»</li>
                                <li>Упаковка и запуск бизнеса</li>
                                <li>Масштабирование</li>
                            </ul>
                        </div>
                        <div className={m.PurposeNext}>
                            <span>Далее...</span><svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none"><path d="M0 4.5H30M30 4.5L26 0.5M30 4.5L26 8.5" stroke="#1A1A1A"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={m.PrepContainer}>
                <div className={m.PrepTitle}>
                    <h1>Готовые решения</h1>
                </div>
                <div className={m.PrepContent}>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/QDcqStJ/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Торговый киоск</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Кофе с собой</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/sPYZzb8/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Торговый павильон</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Пункт выдачи ОЗОН</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/Dgg8pQb/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Торговый павильон</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Шиномонтаж</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/YyryrBc/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Коммерческий павильон</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Мини-кафе</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/b5w9Kkt/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Жилой модуль</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Дачный дом</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/0QyN6Km/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Жилой модуль</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Садовый домик</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/nBnsS45/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Модульное здание</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Летнее кафе</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.Prep}>
                        <div className={m.ImgBg}>
                            <img src="https://i.ibb.co/yq076cX/image.png"/>
                        </div>
                        <div className={m.PrepInfo}>
                            <div className={m.Title}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> 
                                <span>Модульное здание</span>
                            </div>
                            <div className={m.Desc}>
                                <h2>Учебный кампус</h2>
                            </div>
                        </div>
                    </div>
                    <div className={m.dd}></div>
                    <div className="btn-outline">
                        <button className={m.Btn}>
                            Все Предложения
                        </button>
                    </div>
                </div>
            </div>
            <div className={m.OrdContainer}>
                <div className={m.OrdTitle}>
                    <h1>Закажи свой модуль</h1>
                </div>
                <div className={m.OrdContent}>
                    <div className={m.PrivContainer}>
                        <div className={m.PrivIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="cap" viewBox="0 0 512 512"><title>support_icn</title><circle cx="366" cy="406" r="7"></circle><path d="M389.7,366.5l-47.6-15.8-1.1-.4-.6-1.1L323.3,315l-.9-1.9,1.5-1.5a106.3,106.3,0,0,0,28.8-56.3l2.1-12.8.5-2.5H376a27,27,0,0,0,27-27V150C403,68.9,337.1,3,256,3A146.8,146.8,0,0,0,109,150v63a27.2,27.2,0,0,0,18,25.5l2,.7V253a27,27,0,0,0,27,27h10.7l.8,1.8A104.6,104.6,0,0,0,183.8,307c1.3,1.5,2.7,3,4.3,4.6l1.5,1.5-.9,2-17.1,34.1-.6,1.1-1.1.4-47.6,15.8c-54,18-93.3,75-93.3,135.5a7,7,0,0,0,7,7H476a7,7,0,0,0,7-7C483,441.5,443.8,384.5,389.7,366.5Zm-61.9-11.1.6,1.1-.4,1.2A383.8,383.8,0,0,1,305.4,410l-1.9,3.7-2.8-2.9-34-34-2-2,2-2.2,42.7-45.2,2.9-3.1,2,3.9Zm-70.9,7.2-2.2,2.2-2.1-2.1L233,343.1l-7.1-7.1,9.9,2.1a99,99,0,0,0,20.2,2.1,94.7,94.7,0,0,0,15.9-1.3l8.7-1.4-6.1,6.4ZM389,213a13,13,0,0,1-13,13H357.3l.5-3.4c2.5-19.6,4.2-40.7,4.9-61V157H389ZM123.4,139.8C128.6,70.9,186.8,17,256,17S383.3,70.9,388.6,139.8l.3,3.2H363v-3a98.3,98.3,0,0,0-98-97H247a98.3,98.3,0,0,0-98,97v3H123.1ZM136,226a13,13,0,0,1-13-13V157h26.2v2.9c0,1,.1,2.1.1,3.1v.2h0c.7,19.7,2.4,40.3,4.8,59.4l.5,3.4Zm20,40a13,13,0,0,1-13-13V240h13.7l.5,2.5,2.1,12.8c.4,2.2.9,4.6,1.4,7l.9,3.7Zm7.5-133.4A83.8,83.8,0,0,1,247,57h18a84.3,84.3,0,0,1,84,84.4c0,3.2,0,5.9-.1,8.4h0v3.4l-3.4-.4L333,151.1A163.6,163.6,0,0,1,241,105a7.2,7.2,0,0,0-5-2,87.8,87.8,0,0,0-67.2,31.8l-6.4,7.7Zm21.3,151.9L182,280h27.8l.7,2A27.2,27.2,0,0,0,236,300h20a27,27,0,0,0,0-54H236a27.1,27.1,0,0,0-25.5,18l-.7,2H176.3l-.6-2.1c-5.3-17.4-10.9-67.8-12.2-97.8V165l.6-.8,13.5-18a73.2,73.2,0,0,1,54.3-29.1h1.3l.9.9a177.7,177.7,0,0,0,96.9,47l14.7,2.1,2.7.4v2.7c-1,21-3,42.2-5.9,61.5h0c-.6,4.3-1.2,7.6-2.1,12.9-.4,2.4-.8,5.1-1.4,8.5-5.6,33.8-31.4,62.9-62.5,70.7a84.5,84.5,0,0,1-40.8,0C215.1,318.5,196.5,304.3,184.8,284.5ZM223,273a13,13,0,0,1,13-13h20a13,13,0,0,1,0,26H236A13,13,0,0,1,223,273Zm-38.9,82.4,12-23.9,1.8-3.7L245.1,375l-2,2.1-31.7,33.6-2.9,3-1.9-3.7A383.8,383.8,0,0,1,184,357.7l-.4-1.2ZM43.2,495l.2-3.2c4.1-51,38.4-97,83.4-112l42-14,2.8-1,1,2.8a396.4,396.4,0,0,0,28.1,61l.6.6v.5a397.8,397.8,0,0,0,26.8,40.8h.1l12.3,19.7,2.9,4.6ZM256,488.8l-2.5-4.1-13.6-21.8-.4-.5a392.4,392.4,0,0,1-22.7-33.9l-1.1-2,1.5-1.6,35.7-37.7,2.1-2.3,39.8,39.8,1.6,1.6-1.2,2a380.8,380.8,0,0,1-22.7,34.1h-.1c-.2.2-.3.3-2.9,4.7l-11,17.5Zm12.6,6.2,2.9-4.6,12.3-19.7h.1a386.6,386.6,0,0,0,27.4-41.9h.1a398.2,398.2,0,0,0,28-60.8l1-2.8,2.8,1,42.1,14c44.9,15,79.2,61,83.3,112l.2,3.2Z"></path><path d="M429.7,462.3a6.7,6.7,0,0,1-3.1.7,7,7,0,0,1-6.3-3.9,82.8,82.8,0,0,0-23.4-28.5,6.9,6.9,0,0,1-1.3-9.8,7.1,7.1,0,0,1,9.8-1.3,97.7,97.7,0,0,1,27.5,33.4A7.1,7.1,0,0,1,429.7,462.3Z"></path></svg>
                        </div>
                        <div className={m.PrivTitle}>
                            <h2>Бесплатная консультация</h2>
                        </div>
                        <div className={m.PrivDesc}>
                            Наши специалисты рассчитают для Вас стоимость выбранных работ, а также ответят на дополнительные вопросы.
                        </div>
                    </div>  
                    <div className={m.Separator}></div>
                    <div className={m.PrivContainer}>
                        <div className={m.PrivIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512"><title>wood-icn</title><path d="M434.8,434.9A252.9,252.9,0,1,1,77.1,77.2,252.7,252.7,0,0,1,399.3,47.6a6.9,6.9,0,0,1,1.8,9.7,7,7,0,0,1-5.8,3,7.2,7.2,0,0,1-4-1.2A238.6,238.6,0,0,0,87,87.1l-2.5,2.5-.4.4-1.4,1.5.8,1.9A52.9,52.9,0,0,0,127.1,124a6.8,6.8,0,0,1,4.8,2.4,7.2,7.2,0,0,1,1.7,5.1,7.1,7.1,0,0,1-7,6.4h-.5a66.4,66.4,0,0,1-51.4-31.4l-2.2-3.6-2.7,3.3A238.8,238.8,0,0,0,198.2,487.8l1.9.5,1.2-1.6a52.8,52.8,0,0,0,4.7-53,7.2,7.2,0,0,1-.3-5.4,7.6,7.6,0,0,1,3.5-4,8.2,8.2,0,0,1,3.1-.7,7.1,7.1,0,0,1,6.3,4,66.3,66.3,0,0,1-1.5,60.1l-2,3.7,4.2.7a249.8,249.8,0,0,0,36.7,2.8A239,239,0,0,0,485.8,190.2l-.6-1.9-2-.2a45.8,45.8,0,0,0-5.3-.3,52,52,0,0,0-43.1,22.7,7.1,7.1,0,0,1-5.8,3.1,7,7,0,0,1-5.8-11,66.6,66.6,0,0,1,53-28.8h4.2l-1.5-3.9a235.6,235.6,0,0,0-26-49.1,7.1,7.1,0,0,1,1.8-9.8,7,7,0,0,1,4-1.2,6.8,6.8,0,0,1,5.7,3C533.6,213.1,521.1,348.6,434.8,434.9Z"></path><path d="M263,212a7,7,0,0,1-7,7,37,37,0,0,0-37,37,7,7,0,0,1-14,0,50.9,50.9,0,0,1,51-50.9A7,7,0,0,1,263,212Z"></path><path d="M306.9,256A50.9,50.9,0,0,1,256,307a7,7,0,0,1,0-14,37.1,37.1,0,0,0,37-37,7,7,0,1,1,13.9,0Z"></path><path d="M263,368a7,7,0,0,1-7,7A119,119,0,0,1,137,256a7,7,0,0,1,14,0A105.1,105.1,0,0,0,256,361,7.1,7.1,0,0,1,263,368Z"></path><path d="M374.9,256a119,119,0,0,1-14.8,57.6,7,7,0,0,1-6.1,3.6,6.7,6.7,0,0,1-3.4-.9,7,7,0,0,1-3.3-4.2,6.6,6.6,0,0,1,.6-5.3,105.2,105.2,0,0,0-39.5-141.7A7,7,0,0,1,312,152a7.4,7.4,0,0,1,3.5,1A119.5,119.5,0,0,1,374.9,256Z"></path><path d="M263,144.1a7.1,7.1,0,0,1-7,7,104.4,104.4,0,0,0-74.3,30.7,7,7,0,1,1-9.9-9.9A118.2,118.2,0,0,1,256,137.1,7,7,0,0,1,263,144.1Z"></path><path d="M175.3,417.1a7.2,7.2,0,0,1-6.2,3.6,6.6,6.6,0,0,1-3.3-.9A187.1,187.1,0,0,1,85.9,178.2a7.2,7.2,0,0,1,6.4-4.1,5.9,5.9,0,0,1,2.9.7,6.8,6.8,0,0,1,3.4,9.2,173.4,173.4,0,0,0,73.9,223.6,7.1,7.1,0,0,1,3.4,4.2A7,7,0,0,1,175.3,417.1Z"></path><path d="M327,347.9a6.8,6.8,0,0,1-2,4.9,6.9,6.9,0,0,1-5,2.1,7.2,7.2,0,0,1-7-7,7.2,7.2,0,0,1,7-7,7.3,7.3,0,0,1,5,2.1A7,7,0,0,1,327,347.9Z"></path><path d="M436.9,82.1a7.1,7.1,0,0,1-2.1,5,7,7,0,0,1-9.9-9.9,7.1,7.1,0,0,1,12,4.9Z"></path><path d="M442.9,256A187,187,0,0,1,269.5,442.5h-.6a7,7,0,0,1-.4-13.9c89.9-6.4,160.4-82.2,160.4-172.6a7,7,0,0,1,14,0Z"></path><path d="M413.1,168a6.8,6.8,0,0,1-3.6,1,6.9,6.9,0,0,1-6-3.3C371.7,114,316.6,83.1,256,83.1A172.9,172.9,0,0,0,166.4,108a6.5,6.5,0,0,1-3.6,1,6.9,6.9,0,0,1-3.6-12.9,186.9,186.9,0,0,1,256.2,62.3A7,7,0,0,1,413.1,168Z"></path></svg>
                        </div>
                        <div className={m.PrivTitle}>
                            <h2>Высокое качество</h2>
                        </div>
                        <div className={m.PrivDesc}>
                            Мы дорожим своей репутацией, поэтому ответственно относимся к каждому заказу и добиваемся максимально высоких результатов
                        </div>
                    </div>  
                    <div className={m.Separator}></div>
                    <div className={m.PrivContainer}>
                        <div className={m.PrivIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>money-icn</title><path d="M381,367.4c0,16.6-12.2,31-29.7,35l-2.3.5v6.7a7,7,0,0,1-14,0v-6.7l-2.4-.5c-17.4-4-29.6-18.4-29.6-35a7,7,0,0,1,14,0c0,12.1,11.2,22,25,22s25-9.9,25-22-11.3-22-25-22c-21.5,0-39-16.2-39-36.1,0-16.6,12.2-31,29.6-35l2.4-.5v-7.6a7,7,0,0,1,14,0v7.6l2.3.5c17.5,4,29.7,18.4,29.7,35a7,7,0,0,1-14,0c0-12.1-11.3-22-25-22s-25,9.9-25,22,11.2,22.1,25,22.1C363.5,331.4,381,347.5,381,367.4Z"></path><path d="M469,339a127.1,127.1,0,0,1-14.8,59.6,7,7,0,0,1-6.2,3.7,7.3,7.3,0,0,1-3.3-.8,7.1,7.1,0,0,1-2.9-9.5A112.2,112.2,0,0,0,455,339a113.7,113.7,0,0,0-64.1-101.9,6.8,6.8,0,0,1-3.6-4,6.9,6.9,0,0,1,.3-5.3,7,7,0,0,1,6.3-4,6.7,6.7,0,0,1,3.1.7A126.8,126.8,0,0,1,469,339Z"></path><path d="M364.6,219a7,7,0,0,1-7,7H357a7,7,0,0,1,0-14h.7A7,7,0,0,1,364.6,219Z"></path><path d="M296.4,450.3a7,7,0,0,1-6.3,3.9,6.7,6.7,0,0,1-3.1-.7,127.1,127.1,0,0,1-57.2-174.1,7,7,0,0,1,6.2-3.7,7.3,7.3,0,0,1,3.3.8,7.1,7.1,0,0,1,2.9,9.5,113,113,0,0,0,50.9,154.9A7,7,0,0,1,296.4,450.3Z"></path><path d="M326.4,452h.6a7,7,0,0,1,0,14h-.7a7,7,0,0,1,.1-14"></path><path d="M499.8,284.3a165.2,165.2,0,0,0-25.6-47.2,167.8,167.8,0,0,0-87.6-59l-1.4-.4-.6-1.4a42.8,42.8,0,0,0-4.1-7.6l-3.2-4.7H409a43,43,0,0,0,0-86H323.2l3.3-4.7A43,43,0,0,0,291,6H46a43,43,0,0,0,0,86h85.8l-3.3,4.7a43.1,43.1,0,0,0,0,48.6l3.3,4.7H100a43,43,0,0,0-26.7,76.7l2.9,2.3-2.9,2.3a43,43,0,0,0,0,67.4l2.9,2.3-2.9,2.3a43,43,0,0,0,0,67.4l2.9,2.3-2.9,2.3A43,43,0,0,0,100,452H219.2l.8,1a168.5,168.5,0,0,0,54.4,38.7A165.4,165.4,0,0,0,342,506c92.1,0,167-74.9,167-167A166.2,166.2,0,0,0,499.8,284.3ZM409,92a29,29,0,0,1,0,58H164a29,29,0,0,1,0-58ZM46,78a29,29,0,0,1,0-58H291a29,29,0,0,1,0,58ZM71,193a29,29,0,0,1,29-29H345a29.5,29.5,0,0,1,12.7,2.9l14.5,7.1-16.1-1.4q-7.2-.6-14.1-.6a164.6,164.6,0,0,0-65,13.2,166.6,166.6,0,0,0-53.2,35.9l-.8.9H100A29,29,0,0,1,71,193Zm0,72a29,29,0,0,1,29-29H210.5l-3.5,4.8a166.4,166.4,0,0,0-25.2,51l-.6,2.2H100A29,29,0,0,1,71,265Zm0,72a29,29,0,0,1,29-29h77.9l-.6,3.5a165.1,165.1,0,0,0-.6,51.1l.5,3.4H100A29,29,0,0,1,71,337Zm29,101a29,29,0,0,1,0-58h80.1l.6,2.2a164,164,0,0,0,23.6,51.1l3.2,4.7Zm242,54c-84.4,0-153-68.6-153-153s68.6-153,153-153,153,68.6,153,153S426.4,492,342,492Z"></path></svg>
                        </div>
                        <div className={m.PrivTitle}>
                            <h2>Комплексное решение</h2>
                        </div>
                        <div className={m.PrivDesc}>
                            Покупка и ввод в эксплуатацию модульного здания «под ключ» экономит до 20% бюджета
                        </div>
                    </div>  
                    <div className={m.Separator}></div>
                    <div className={m.PrivContainer}>
                        <div className={m.PrivIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>patent-icn</title><path d="M502,40.1H147.5a7,7,0,0,0-5.1,2.2,6.9,6.9,0,0,0-1.9,5.1h0a6.9,6.9,0,0,0,7,6.5H495v334H430l6.6-5.3a100,100,0,0,0,11-10.6,87.8,87.8,0,0,0,20.5-44.8A86.2,86.2,0,0,0,469,315a87.1,87.1,0,1,0-169.8,27.4l.6,1.7,1.4,4H92.2l-.5-2.3a42.9,42.9,0,0,0-32.4-32.3l-2.3-.6V129.3l2.3-.5A42.9,42.9,0,0,0,91.7,96.5l.5-2.4H419.8l.5,2.4a43.1,43.1,0,0,0,32.4,32.3l2.3.5V229.9a7,7,0,0,0,14,0V122.8a7,7,0,0,0-7-7,28.8,28.8,0,0,1-28.7-28.7,7,7,0,0,0-7-7H85.7a7,7,0,0,0-7,7A28.8,28.8,0,0,1,50,115.8a7,7,0,0,0-7,7V319.4a7,7,0,0,0,7,7,28.8,28.8,0,0,1,28.7,28.7,7,7,0,0,0,7,7H308.6l.9,1.4a87.8,87.8,0,0,0,17.7,19.3l6.6,5.3H17V54.1H57.8a6.9,6.9,0,0,0,6.7-7v-.3a7,7,0,0,0-7-6.7H10a7,7,0,0,0-7,7v348a7,7,0,0,0,7,7H330.5v62.8a6.9,6.9,0,0,0,3.8,6.2,6.6,6.6,0,0,0,3.2.8,7.3,7.3,0,0,0,4-1.3l38.7-27.5,1.7-1.3,1.7,1.3,38.7,27.5a7.3,7.3,0,0,0,4,1.3,6.6,6.6,0,0,0,3.2-.8,6.9,6.9,0,0,0,3.8-6.2V402.1H502a7,7,0,0,0,7-7V47.1A7,7,0,0,0,502,40.1ZM419.3,451.3l-4.7-3.4L386,427.5a7.6,7.6,0,0,0-8.2,0l-28.6,20.4-4.7,3.4V393.8l4.1,1.7.6.3.6.2a88.1,88.1,0,0,0,32.2,6.1,84.3,84.3,0,0,0,18.1-1.9A82.6,82.6,0,0,0,414,396l.6-.2.6-.3,4.1-1.7Zm-2.6-72a70.7,70.7,0,0,1-20.3,7.4,76.4,76.4,0,0,1-14.4,1.4,73,73,0,0,1-35.5-9.1,74.2,74.2,0,0,1-32.3-36.3,75,75,0,0,1-5.4-27.7A73.1,73.1,0,0,1,455,315,74,74,0,0,1,416.7,379.3Z"></path><path d="M424.3,303.4a21.6,21.6,0,0,0-17.4-14.6,7.6,7.6,0,0,1-5.7-4.1,21.5,21.5,0,0,0-38.6,0,7.6,7.6,0,0,1-5.7,4.1A21.5,21.5,0,0,0,345,325.5a7.6,7.6,0,0,1,2.2,6.7,21.2,21.2,0,0,0,8.5,21,21,21,0,0,0,12.6,4.2,22.2,22.2,0,0,0,10.1-2.5,7.3,7.3,0,0,1,7,0,22.2,22.2,0,0,0,10.1,2.5,21,21,0,0,0,12.6-4.2,21.2,21.2,0,0,0,8.5-21,7.6,7.6,0,0,1,2.2-6.7A21.5,21.5,0,0,0,424.3,303.4ZM409,315.5a21.9,21.9,0,0,0-6.2,19,7.7,7.7,0,0,1-7.4,8.9,7.6,7.6,0,0,1-3.5-.9,21.3,21.3,0,0,0-20,0,7.7,7.7,0,0,1-3.6.9,7.7,7.7,0,0,1-7.3-8.9,21.7,21.7,0,0,0-6.2-19,7.5,7.5,0,0,1,4.1-12.8,22,22,0,0,0,16.3-11.8,7.1,7.1,0,0,1,6.7-4.2,7.4,7.4,0,0,1,6.8,4.2,21.6,21.6,0,0,0,16.2,11.8,7.4,7.4,0,0,1,4.1,12.8Z"></path><path d="M106,53.6a7.4,7.4,0,0,1-2.5.5,7.1,7.1,0,0,1-6.6-4.3,7,7,0,0,1,0-5.3,7.1,7.1,0,0,1,3.8-3.8,5.8,5.8,0,0,1,2.6-.6,7,7,0,0,1,6.5,4.3A7.1,7.1,0,0,1,106,53.6Z"></path><path d="M286.7,239.6a7,7,0,0,1-7,7H186.6a7,7,0,0,1,0-14h93.1A7,7,0,0,1,286.7,239.6Z"></path><path d="M260.5,288.1a7,7,0,0,1-7,7H110.6a7,7,0,0,1,0-14H253.5A7.1,7.1,0,0,1,260.5,288.1Z"></path><path d="M152.6,239.6a7,7,0,0,1-7,7h-35a7,7,0,0,1,0-14h35A7,7,0,0,1,152.6,239.6Z"></path><path d="M399.9,136.6H112.3a7,7,0,0,0-7,7v42.7a7,7,0,0,0,7,7H399.9a7,7,0,0,0,7-7V143.6A7,7,0,0,0,399.9,136.6Zm-7,42.7H119.3V150.6H392.9Z"></path></svg>
                        </div>
                        <div className={m.PrivTitle}>
                            <h2>Гарантия</h2>
                        </div>
                        <div className={m.PrivDesc}>
                        На все виды работ предоставляются долгосрочные гарантии, потому что мы уверены в их качестве
                        </div>
                    </div>  
                    <div className={m.Separator}></div>
                    <div className={m.PrivContainer}>
                        <div className={m.PrivIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>drawing-icn</title><path d="M498.7,13.3A35,35,0,0,0,438.9,38V98.7H309a7,7,0,0,0,0,14H438.9V318.2a7.4,7.4,0,0,0,.5,2.5l28,75.7a6.9,6.9,0,0,0,6.5,4.6,7,7,0,0,0,6.6-4.6l8.6-23.3,5.8-15.7V495H82.1a65.1,65.1,0,0,1-65-64.7c-.2-34.6,29.6-64.6,65.1-65.3a7.1,7.1,0,0,0,6.9-7V112.7H219a7,7,0,0,0,0-14H89.1V10a7,7,0,0,0-7-7,79,79,0,0,0-79,79V430.4h0a79.1,79.1,0,0,0,79,78.6H501.9a7,7,0,0,0,7-7V38A34.7,34.7,0,0,0,498.7,13.3ZM17.1,82A64.8,64.8,0,0,1,71.6,17.8l3.5-.5V351.4l-2.6.4a80.2,80.2,0,0,0-46.1,23.1l-4.1,4.4-5.2,6ZM490.4,329.3l-13.6,36.9-2.9,7.6-2.8-7.6-13.6-36.9-1.5-4.1h35.9Zm4.5-18.1h-42V71.4h42Zm0-253.8h-42V38a21,21,0,0,1,42,0Z"></path><path d="M364,204.8H164a7,7,0,0,0-7,7v184a7,7,0,0,0,7,7h48a7,7,0,0,0,7-7V323h90v72.8a7,7,0,0,0,7,7h48a7,7,0,0,0,7-7v-184A7,7,0,0,0,364,204.8Zm-159,184H171v-114h34ZM309,309H219V274.8h90Zm48,79.8H323v-114h34Zm0-128H171v-42H357Z"></path><path d="M271,105.7a7,7,0,0,1-2,4.9,7,7,0,0,1-10,0,7.1,7.1,0,0,1,0-9.9,7.2,7.2,0,0,1,5-2,6.8,6.8,0,0,1,4.9,2A6.7,6.7,0,0,1,271,105.7Z"></path></svg>
                        </div>
                        <div className={m.PrivTitle}>
                            <h2>Индивидуальный подход</h2>
                        </div>
                        <div className={m.PrivDesc}>
                            Мы успешно подбираем решения для наших клиентов, которые наилучшим образом соответствуют их бюджету и  пожеланиям
                        </div>
                    </div>  
                    <div className={m.Separator}></div>
                    <div className={m.PrivContainer}>
                        <div className={m.PrivIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>bill-icn</title><path d="M176.5,305.3a6.5,6.5,0,0,1-6.5,6.5H132.5a6.5,6.5,0,1,1,0-12.9H170A6.5,6.5,0,0,1,176.5,305.3Z"></path><path d="M386,305.3a6.5,6.5,0,0,1-6.5,6.5H206.6a6.5,6.5,0,1,1,0-12.9H379.5A6.5,6.5,0,0,1,386,305.3Z"></path><path d="M176.5,354.4a6.5,6.5,0,0,1-6.5,6.4H132.5a6.5,6.5,0,1,1,0-12.9H170A6.5,6.5,0,0,1,176.5,354.4Z"></path><path d="M386,354.4a6.5,6.5,0,0,1-6.5,6.4H206.6a6.5,6.5,0,1,1,0-12.9H379.5A6.5,6.5,0,0,1,386,354.4Z"></path><path d="M176.5,403.4a6.5,6.5,0,0,1-6.5,6.5H132.5a6.5,6.5,0,0,1,0-13H170A6.5,6.5,0,0,1,176.5,403.4Z"></path><path d="M386,403.4a6.5,6.5,0,0,1-6.5,6.5H206.6a6.5,6.5,0,0,1,0-13H379.5A6.5,6.5,0,0,1,386,403.4Z"></path><path d="M262.1,155.1l-.9-.2V128l1.3.3a43.3,43.3,0,0,1,18.2,9.3l7.7-10.3A47.3,47.3,0,0,0,262.2,116h-1v-8h-9.8v7.9h-.9c-15.6,1.9-26.1,12.3-26.1,25.9s10.1,20.2,26.2,24.4l.8.2v27.7l-1.3-.3a45.2,45.2,0,0,1-20.7-10.7l-8.1,10a53.8,53.8,0,0,0,29.2,13.1h.9v8.6h9.8v-8.3h1c17.8-1.2,28.9-11.3,28.9-26.3S279.5,159,262.1,155.1Zm-23-16.6a13.2,13.2,0,0,1,11.1-10.4l1.3-.2v24.5l-1.5-.5c-6.7-2.4-11.2-5.3-11.2-11.5A10.5,10.5,0,0,1,239.1,138.5Zm23.3,56.2h-1.2v-26l1.4.4c9,2.7,14.3,5.6,14.3,12.6S271.2,193.7,262.4,194.7Z"></path><path d="M256,65.5a95.9,95.9,0,1,0,95.9,95.9A96,96,0,0,0,256,65.5Zm0,178.9a83,83,0,1,1,82.9-83A83,83,0,0,1,256,244.4Z"></path><path d="M438.9,1H73.1a6.5,6.5,0,0,0-6.5,6.5v497a6.4,6.4,0,0,0,1.9,4.6,6.8,6.8,0,0,0,4.6,1.9,6.6,6.6,0,0,0,4.6-1.9l31.2-31.2.8-.8.7.8,31.3,31.2a6.4,6.4,0,0,0,9.1,0l31.3-31.2.7-.8.8.8,31.3,31.2a6.4,6.4,0,0,0,4.5,1.9,6.6,6.6,0,0,0,4.6-1.9l31.2-31.2.8-.8.8.8L288,509.1a6.6,6.6,0,0,0,4.6,1.9,6.8,6.8,0,0,0,4.6-1.9l31.2-31.2.8-.8.7.8,31.3,31.2a6.4,6.4,0,0,0,9.1,0l31.3-31.2.7-.8.8.8,31.2,31.2a6.6,6.6,0,0,0,4.6,1.9,6.8,6.8,0,0,0,4.6-1.9,6.4,6.4,0,0,0,1.9-4.6V7.5A6.5,6.5,0,0,0,438.9,1Zm-6.4,14V488.9l-1.8-1.8-23.7-23.7a6.4,6.4,0,0,0-9.1,0l-31.3,31.3-.7.7-.8-.7-31.3-31.3a6.4,6.4,0,0,0-9.1,0l-31.2,31.3-.8.7-.8-.7-31.2-31.3a6.6,6.6,0,0,0-4.6-1.9,6.8,6.8,0,0,0-4.6,1.9l-31.2,31.3-.8.7-.7-.7-31.3-31.3a6.4,6.4,0,0,0-9.1,0L147,494.7l-.7.7-32-32a6.6,6.6,0,0,0-4.6-1.9,6.8,6.8,0,0,0-4.6,1.9L79.6,488.9V13.9H432.5Z"></path></svg>
                        </div>
                        <div className={m.PrivTitle}>
                            <h2>Прозрачные цены</h2>
                        </div>
                        <div className={m.PrivDesc}>
                            Вы всегда знаете, за что платите: в смете указана стоимость всех работ без скрытых платежей
                        </div>
                    </div>  
                </div>
            </div>
            <div className={m.IndividualContainer}>
                <div className={m.Title}>
                    <h1> Индивидуальная планировка</h1>
                </div>
                <div className={m.Ind}>
                    <div className={m.Info}><div className={m.Square}></div><span>Для каждого модуля мы разрабатываем индивидуальную планировку помещения под конкретные потребности заказчика.</span></div>
                    <div className={m.Info}><div className={m.Square}></div><span>Вы можете выбрать любую площадь, количество комнат, санузлов и иных пространств по Вашему желанию.</span></div>
                    <div className={m.Info}><div className={m.Square}></div><span>Вы также можете заказать дополнительную укомплектацию модуля специальным оборудованием, мебелью или элементами декора.</span></div>
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
                            <img src="https://i.ibb.co/GcWS2GT/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/sgVHz2X/image.png"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={m.ExSlide}>
                            <img src="https://i.ibb.co/D49SWpy/image.png"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={m.ContactsContainer}>
                <div className={m.Title}>
                    <h1>Контакты</h1>
                </div>
                <div className={m.ContactsContent}>
                    <h1 className="logo">ACCORD<span className="primary">™</span></h1>
                    <div className={m.Light}>
                        170017, г. Тверь, 
                        <br></br>
                        пос. Керамического завода, д. 20.
                        <br></br>
                        Время работы: пн. – пт. 9:00 – 18:00
                        <br></br>
                        <br></br>
                        Адрес для корреспонденции: 170100, г. Тверь, ул. Вагжанова, д.6, оф. 63.
                        <br></br>
                        ООО "АККОРД"
                    </div>
                    <div className={m.Contact}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                        </div>
                        <strong>Тел.: +380668415066</strong>
                    </div>
                    <div className={m.Contact}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                            </svg>
                        </div>
                        <strong>accord@gmail.com</strong>
                    </div>

                </div>
            </div>
            <div className={m.ContactContainer}>
                <svg className={m.Arrow}width="593" height="370" viewBox="0 0 593 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M298.5 0L593 269.5V369.5L325 113L298.5 0Z" fill="#DAA721"/>
                    <path d="M298.5 0L325 113L291 336.5L233 272L298.5 0Z" fill="#DAA721"/>
                    <path d="M0.5 209L233 272L291 336.5L0.5 209Z" fill="#DAA721"/>
                    <path d="M298.5 0L344 42.5L325 113L279 85L298.5 0Z" fill="#DAA721"/>
                    <path d="M233 272L305 244L291 336.5L223 306.5L233 272Z" fill="#DAA721"/>
                </svg>

                <div className={m.ContactContext}>
                    <h2>Оставить заявку: </h2>
                    <div className={m.InputOutline}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                            </svg>
                        </div>
                        <input placeholder="ФИО"/>
                    </div>
                    <div className={m.InputOutline}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                            </svg>
                        </div>
                        <input placeholder="E-Mail"/>
                    </div>
                    <div className={m.InputOutline}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
                            </svg>
                        </div>
                        <input placeholder="Контактный телефон"/>
                    </div>
                    <div className={m.InputOutline}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                            </svg>
                        </div>
                        <input placeholder="Сообщение"/>
                    </div>
                    <div className="btn-outline">
                        <button className={m.WelcomeBtn}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
  
export default RootPage;
  