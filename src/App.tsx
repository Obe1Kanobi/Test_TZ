import spaceXlogo from '../src/assets/spaceXlogo.png'
import marsIcon from '../src/assets/mars.png'
import rocketIcon from '../src/assets/rocket.png'
import './App.css'
import InfoGrid from "./InfoGrid.tsx";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "./apiConfig.ts";

export type Advantage = {
    id: number;
    label: string;
    value: string;
    description: string;
    order?: number;
    image_url?: string | null;
};

type MenuItem = {
    id: number;
    title: string;
    url?: string;
    order?: number;
    is_active?: boolean;
};

export default function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        let mounted = true;

        async function loadMenu() {
            try {
                const res = await fetch(`${API_BASE_URL}/menu/`);
                if (!res.ok) throw new Error(`Status ${res.status}`);
                const data: MenuItem[] = await res.json();
                if (mounted) setMenuItems(data);
            } catch (err) {
                console.error("Failed to load menu:", err);
            }
        }

        loadMenu();
        return () => { mounted = false; };
    }, []);

    const menuFallback: MenuItem[] = [
        { id: 0, title: 'Главная', url: '#' },
        { id: 1, title: 'Технология', url: '#' },
        { id: 2, title: 'График полетов', url: '#' },
        { id: 3, title: 'Гарантии', url: '#' },
        { id: 4, title: 'О компании', url: '#' },
        { id: 5, title: 'Контакты', url: '#' }
    ];

    const toRender = menuItems.length ? menuItems : menuFallback;

    return (
        <div className="landing">
            <header className="header">
                <a href="https://www.spacex.com" className="logo">
                    <div className="corner-top-right" />
                    <div className="corner-bottom-left" />
                    <img src={spaceXlogo} alt="SpaceX" />
                </a>

                {/* Один nav, внутри — map по элементам */}
                <nav className="menu">
                    {toRender.map((item, idx) => (
                        <a key={item.id ?? `menu-${idx}`} href={item.url ?? '#'}>
                            {item.title}
                        </a>
                    ))}
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
