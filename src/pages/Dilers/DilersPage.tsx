import { Link } from "react-router-dom";
import m from "./DilersPage.module.sass"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import Footer from "../../components/Header/Footer/Footer";
import PageNavigator from "../../components/Header/PageNavigator/PageNavigator";

function DilersPage() {
    return (
        <div className={m.DilersPageWrapper}>
            <PageNavigator
                title="Дилерам"
                paths={[{
                    value: "Главная",
                    active: false, 
                    href: "/"
                }, {
                    value: "Дилерам",
                    active: true, 
                    href: "/dilers"
                }]}
            />
            <div className={m.DilersContent}>
                <div className={m.DilersTitle}>
                    <h1>Выгодное партнерство</h1>
                </div>
                <p>Приглашаем к сотрудничеству посредников для реализации модульных зданий «под ключ» на выгодных условиях.</p>
                <p>Собственное производство даёт нам возможность вести гибкую ценовую политику относительно производимой продукции, удерживать контроль над качеством товара и обеспечивать своевременную доставку клиентам.</p>
                <p>Мы всегда ориентированы на развитие плодотворного сотрудничества с нашими партнерами.</p>
                <p>Принимая решение о работе с нами, Вы делаете правильный выбор!</p>
                <img src="https://i.ibb.co/5KyTdKf/image.png"/>
                <br></br>

            </div>
            <Footer/>
        </div>
    )
}

export default DilersPage