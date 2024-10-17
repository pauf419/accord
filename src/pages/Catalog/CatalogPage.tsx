import { Link } from "react-router-dom";
import m from "./CatalogPage.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Footer from "../../components/Header/Footer/Footer";
import PageNavigator from "../../components/Header/PageNavigator/PageNavigator";
import { useState } from "react";

function CatalogPage() {

    const [imgActive, setImgActive] = useState<boolean>(false)

    return (
        <div className={m.CatalogPageWrapper}>
            <PageNavigator
                title="Каталог"
                paths={[{
                    value: "Главная",
                    active: false, 
                    href: "/"
                }, {
                    value: "Каталог",
                    active: true, 
                    href: "/catalog"
                }]}
            />
            <div className={m.CatalogContent}>
                <div className={m.CatalogTitle}>
                    <h1>Как выбрать модуль</h1>
                </div>
                <div className={m.Text}>
                    При выборе киоска, павильона или быстровозводимого модульного здания покупатель, как правило, оценивает изделие по его внешнему виду, не задумываясь о многих факторах, влияющих на <strong>срок и качество эксплуатации.</strong>
                    <br/><br/>
                    Для начала, нужно определиться, какой вид модуля наиболее подойдет Вашим целям. От этого стоит отталкиваться при выборе длины, ширины, отделки и дополнительной комплектации будущей постройки.
                </div>
                <img src="https://i.ibb.co/vJ2yrzK/image.png" className={`${m.Img1} ${imgActive && m.Active}`}/>
                <div className={m.Text}>
                    Высота стандартной конструкции 2,8 м, ширина от 2,5 м и более. Длина и ширина постройки не ограничены и зависят от потребностей покупателя.
                </div>
                <div className="list">
                    <div className="list-title">
                        Преимущества модульных зданий:
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                экономичность и функциональность
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                            простой монтаж и быстрая сборка
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                комфортные условия для проживания и работы
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                эстетичный внешний вид
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                надежность и долговечность
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                            мобильность
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className={m.Title}>Облицовка:</h2>
                <div className={m.Text}>
                    Немаловажным шагом является выбор <span className="primary-color">наружной облицовки модуля.</span> Мы производим эстетичные вентилируемые фасады из металлокассет. Такие фасады практичны в эксплуатации, дополнительно <strong>сберегают тепло и усиливают шумоизоляцию в помещении.</strong>
                </div>
                <div className={m.Prefix}>
                    Металл не подвержен коррозии и гниению, а прочная порошковая покраска оберегает изделие от  повреждений.
                </div>
                <div className={m.Text}>
                    Благодаря собственному производству, стоимость такого фасада практически не отличается от цены облицовки простым профлистом, а преимущества колоссальны. 
                </div>
                <div className={m.Prefix}>
                    Вы можете выбрать любой цвет и размер металлокассеты и даже придумать свой собственный, неповторимый дизайн модуля.
                </div>
                <div className={m.Text}>
                    Внутренняя отделка окрашенным оцинкованным листом или ЛГКЛ панелями обеспечивает аккуратный вид и простоту ухода за помещением.
                </div>
                <h2 className={m.Title}>Каркас:</h2>
                <div>
                    Большинство каркасов киосков и павильонов, представленных на рынке, изготовлены из металлической трубы или металлического профиля при помощи банальной горячей сварки. Но такое изделие может быстро потерять первозданный вид из-за ржавчины, которая часто появляется на сварочных швах, где под воздействием высокой температуры разрушен защитный антикоррозийный слой.
                </div>
                <p>В <strong>сборной конструкции</strong> наших модулей мы используем оцинкованный профиль и <strong>болтовое крепление</strong> элементов, с помощью которого металл каркаса не теряет своих первоначальных свойств. Такие модули надежны, долговечны и просты в установке.</p>
                <div className={m.Prefix}>
                    Отсутствие температурных мостов в конструкции модуля значительно повышает эффективность теплозащиты и избавляет от образования конденсата и плесени.
                </div>
                <p>
                    Несущие стойки каркаса располагаются внутри, между внешним вентилируемым фасадом и внутренней облицовкой, что решает не только проблему «мостиков холода», но и экономит пространство внутри модуля.
                </p>
                <h2 className={m.Title}>Утепление:</h2>
                <p>
                В качестве утеплителя мы используем <span className="primary-color">пенополиуретан</span>, который обладает одним из самых низких коэффициентов теплопроводности и способностью не впитывать влагу.
                </p>
                <div className={m.Prefix}>
                    Мы производим собственные заливные сэндвич-панели из пенополиуретана, которые не имеют пустых полостей, не деформируются со временем и по своим качествам превосходят утепление минеральной ватой толщиной 200 мм.
                </div>
                <p>
                    В отличие от минеральной ваты, это универсальное тепло -, паро -, и гидроизолирующее средство, которое не требует использования крепежных элементов и значительно утепляет конструкцию.
                </p>
                <div className="list">
                    <div className="list-title">
                        Преимущества пенополиуретана:
                    </div>
                    <div className="list-content">
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                кратчайшие сроки работ
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                заполнение всего пространства полости однородным материалом
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                срок эксплуатации не менее 30-40 лет (при отсутствии механических повреждений)
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                возможность применения в широком температурном диапазоне (от - 60 0С до +150 0С)
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                низкий коэффициент теплопроводности (0,019-0,027 Вт/мК)
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                низкое водопоглощение (0,04% за 24 часа или 2 г/м2 при влажности 98%)
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                биологическая нейтральность (устойчивость к микроорганизмам, гниению, плесени)
                            </div>
                        </div>
                        <div className="list-item">
                            <svg className="list-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="100" fill="#D9D9D9"/>
                            </svg>
                            <div className="list-item-content">
                                пожаробезопасен (не поддерживает горение)
                            </div>
                        </div>
                    </div>
                </div>
                <p>
                    Использование пенополиуретана в качестве утеплителя более чем в 2 раза повышает сохранение тепла в наших модулях по сравнению с другими производителями.  Тем не мене, Вы также можете выбрать вариант утепления модуля минеральной ватой 100 мм.
                </p>
                <h2 className={m.Title}>Остекление:</h2>
                <p>Вы можете заказать входную группу, витражное остекление фасада, навес, крытую веранду или «зимний сад» для своего дома.</p>
                <div className={m.Prefix}>
                    Собственное производство светопрозрачных конструкций из теплого алюминиевого профиля позволяет нам делать остекление любой сложности и цветового решения.
                </div>
                <p>
                Также обратите внимание на <strong>функционал модуля</strong> (двери, окна, перегородки, электропроводку, вентиляцию) и дополнительную комплектацию (лестницу, крыльцо, встроенные коммуникации, вывеску и т.д.).
                </p>
                <h2 className={m.Title}>Фундамент и установка:</h2>
                <p>После того, как Вы подготовили землю или фундамент, пришло время установки. Если у вас ровный участок, то можно обойтись без фундамента.</p>
                <div className={m.Prefix}>
                    Наши модули имеют регулируемую по уровню основу металлокаркаса, что обеспечивает корректировку конструкции по высоте и ровную установку объекта на участке.
                </div>
                <p>Также можно воспользоваться услугой возведения свайного фундамента от нашей компании.</p>
                <p>Многих пугают сложности, связанные с самостоятельной доставкой, сборкой и установкой модуля. Поэтому мы подготовили для вас специальное предложение.</p>
                <div className={m.Prefix}>ООО «АККОРД» производит модули под ключ, а это значит, что Вам не нужно искать дополнительных исполнителей на монтаж модуля и ввод его в эксплуатацию.</div>
                <p>Наши специалисты спроектируют, построят, укомплектуют, доставят, установят и окажут Вам все дополнительные услуги, от оснащения помещения специальными системами и оборудованием до упаковки и запуска готового бизнеса.</p>
                <p>Гарантия и обслуживание модуля от ООО «АККОРД» – 1 год</p>
            </div>
            <Footer/>
        </div>
    )
}

export default CatalogPage