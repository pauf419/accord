import { Link } from "react-router-dom";
import m from "./RootPage.module.sass"
import { useEffect, useState } from "react";

function RootPage() {

    

    return (
        <div className={`page-wrapper ${m.RootPageWrapper}`}>
            <div className={m.WelcomeContainer}>
                <div className={m.Context}>
                <svg width="470" height="100" viewBox="0 0 470 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66.5 0H470L400 100H0L66.5 0Z" fill="#131314"/>
                </svg>

                    <span>Мы <span className="primary">не участвуем в гонке</span> за самой низкой ценой, а постоянно улучшаем технологию и <span className="primary">культуру производства</span></span>
                    
                </div>
                <div className="btn-outline">
                    <button className={m.WelcomeBtn}>
                        Узнать больше
                    </button>
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
                    <h1> Кто <span className="primary">мы?</span></h1>
                </div>
                <div className={m.AboutContext}>
                    <h2><span className="logo">ACCORD<span className="primary">™</span></span> - профессиональная компания, специализирующаяся на проектировании и производстве современных торговых рядов, павильонов, киосков и остановок. Наша команда объединяет специалистов с многолетним опытом и высоким уровнем квалификации. Мы создаем функциональные и стильные объекты, адаптированные под любые нужды вашего бизнеса.</h2>
                    <h2>Мы заботимся о качестве на каждом этапе – от проектирования до установки – и стремимся к тому, чтобы каждый проект <span className="logo">ACCORD<span className="primary">™</span></span> был не только удобным и надежным, но и эстетичным.</h2>
                </div>
            </div>
            <div className={m.TechContainer}>
                <svg className={m.ImpulseSvg} width="961" height="416" viewBox="0 0 961 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L595 41.5L328 129.5L0 100V0Z" fill="#DAA721"/>
                    <path d="M328 129.5L595 41.5L393 286L151.314 416L328 129.5Z" fill="#DAA721"/>
                    <path d="M393 286L961 141L151.314 416L393 286Z" fill="#DAA721"/>
                </svg>

                <div className={m.TechContext}>
                    <h1>Специалисты <span className="logo">ACCORD<span className="primary">™</span></span> разработали <span className={m.Primary}>уникальную</span> технологию изготовления торговых павильонов, позволяющую обеспечить высокое качество, не выходя за рамки рыночной стоимости.</h1>
                    <div className="btn-outline">
                        <button className={m.WelcomeBtn}>
                            Ознакомиться
                        </button>
                    </div>
                </div>
            </div>
            <div className={m.AdvantagesContainer}>
                <div className={m.AdvantagesTitle}>
                    <h1>Преимущества технологии <span className="logo">ACCORD<span className="primary">™</span></span></h1>
                </div>
                <div className={m.AdvantagesContext}>
                    <div className={`${m.NumeratorHolder} ${m.Holder1}`}>
                        <div className={`${m.Numerator} ${m.Num1}`}>
                            <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L150 30V130L0 100V0Z" fill="#DAA721"/>
                            </svg>
                            <h1>1</h1>
                        </div>
                    </div>
                    <div className={m.ContextData}>
                        <h2><span className={m.Bold}>Прочный каркас:</span> Каждый павильон спроектирован с учетом снеговых и ветровых нагрузок, а также с расчетом на нагрузку витрин и стеллажей на основание и пол.</h2>
                    </div>
                    <div className={`${m.NumeratorHolder} ${m.Holder2}`}>
                        <div className={`${m.Numerator} ${m.Num2}`}>
                            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 50L150 0V100L0 150V50Z" fill="#DAA721"/>
                            </svg>

                            <h1>2</h1>
                        </div>
                    </div>
                    <div className={m.ContextData}>
                        <h2><span className={m.Bold}>Герметичная мембранная кровля:</span> Обеспечивает надежную защиту от протечек и долгосрочную эксплуатацию</h2>
                    </div>
                    <div className={`${m.NumeratorHolder} ${m.Holder1}`}>
                        <div className={`${m.Numerator} ${m.Num1}`}>
                            <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L150 30V130L0 100V0Z" fill="#DAA721"/>
                            </svg>
                            <h1>3</h1>
                        </div>
                    </div>
                    <div className={m.ContextData}>
                        <h2><span className={m.Bold}>Продуманные подъемные петли:</span> Устанавливаются через мембрану для максимальной надежности</h2>
                    </div>
                    <div className={`${m.NumeratorHolder} ${m.Holder2}`}>
                        <div className={`${m.Numerator} ${m.Num2}`}>
                            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 50L150 0V100L0 150V50Z" fill="#DAA721"/>
                            </svg>

                            <h1>4</h1>
                        </div>
                    </div>
                    <div className={m.ContextData}>
                        <h2><span className={m.Bold}>Надежные двери и защитные роллеты:</span> Гарантия безопасности и долговечности</h2>
                    </div>
                    <div className={`${m.NumeratorHolder} ${m.Holder1}`}>
                        <div className={`${m.Numerator} ${m.Num1}`}>
                            <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0L150 30V130L0 100V0Z" fill="#DAA721"/>
                            </svg>
                            <h1>5</h1>
                        </div>
                    </div>
                    <div className={m.ContextData}>
                        <h2><span className={m.Bold}>Энергосберегающие стеклопакеты:</span> Снижают теплопотери и повышают комфорт внутри</h2>
                    </div>
                </div>
            </div>
            <div className={m.AfterContainer}>
                <div className={m.Blurer}></div>
                <div className={m.AfterTitle}>
                    <h1><span className="logo">ACCORD<span className="primary">™</span></span> – Современные торговые павильоны на заказ</h1>
                </div>
                <div className={m.Spacer}></div>
                <div className={m.AfterContext}>
                    <p>Мы контролируем каждый этап производства и предоставляем гарантию на 2 года. Без лишних затрат вы получаете павильон с уникальными технологиями и световой рекламой в подарок.</p>
                    <p><a className="a-primary" href="">Познакомьтесь с нами!</a> Мы учтем все ваши пожелания, предложим подходящие решения и выполним заказ качественно и точно в срок.</p>
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
                    <h1>Свяжитесь с нами</h1>
                    <div className={m.InputOutline}>
                        <div className={m.Icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                            </svg>
                        </div>
                        <input placeholder="Ваше имя"/>
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
                    <div className="btn-outline">
                        <button className={m.WelcomeBtn}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
            <div className={m.FooterContainer}>
                <div className={m.FooterHead}>
                    <div className={m.FooterLogo}>
                        <h1 className="logo">ACCORD<span className="primary">™</span></h1>
                    </div>  
                    <div className={m.FooterHelp}>
                        <Link to="/">Главная</Link>/
                        <Link to="/">Каталог проектов</Link>/
                        <Link to="/">Цены</Link>/
                        <Link to="/">Фото</Link>/
                        <Link to="/">Как заказать</Link>/
                        <Link to="/">Контакты</Link>
                    </div>
                    <div className={m.FooterContacts}>
                        <span>+380 (66) 841-50-66</span>
                        <span>info@accord.com.ua</span>
                    </div>
                </div>
                <div className={m.Spacer}><div></div></div>
                <div className={m.FooterLast}>
                    <div className={m.Socials}>
                        <a className={m.CreditsBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>
                        </a>
                        <a className={m.CreditsBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </a>
                        <a className={m.CreditsBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                    </div>
                    <div className={m.Copy}>
                        Copyright © ACCORD
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default RootPage;
  