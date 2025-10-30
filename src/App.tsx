import spaceXlogo from '../src/assets/spaceXlogo.png'
import marsIcon from '../src/assets/mars.png'
import rocketIcon from '../src/assets/rocket.png'
import './App.css'
import InfoGrid from "./InfoGrid.tsx";

export default function App() {
    return (
        <div className="landing">
            {/* ====== Навигация ====== */}
            <header className="header">
                <a href="https://www.spacex.com" className="logo">
                    <div className="corner-top-right"></div>
                    <div className="corner-bottom-left"></div>
                    <img src={spaceXlogo} alt="SpaceX"/>
                </a>

                <nav className="menu">
                    <a href="#">Главная</a>
                    <a href="#">Технология</a>
                    <a href="#">График полетов</a>
                    <a href="#">Гарантии</a>
                    <a href="#">О компании</a>
                    <a href="#">Контакты</a>
                </nav>
            </header>
            <main className="all-content-block">
                <div className="planet-block">
                    <img src={rocketIcon} alt="Rocket" className="rocket"/>
                    <img src={marsIcon} alt="Mars" className="planet"/>
                    <div className="curved-line"/>
                    <button className="start-btn">Начать путешествие</button>
                    <div className="text-block">
                        <h1 className="title">Путешествие</h1>
                        <p className="subtitle">на красную планету</p>
                    </div>
                </div>
                <InfoGrid/>
            </main>
        </div>
    );
}
