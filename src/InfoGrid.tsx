import React, {useEffect, useRef, useState} from 'react';
import './App.css'
import { API_BASE_URL } from "./apiConfig.ts";
import type { Advantage } from "./App.tsx";



export default function InfoGrid() {
    const [items, setItems] = useState<Advantage[]>([]);
    const blocksRef = useRef<Array<HTMLDivElement | null>>([]);

    // обработчик мыши (лазерный эффект)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const block = blocksRef.current[index];
        if (!block) return;

        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const effect = block.querySelector('.info-block-effect') as HTMLElement | null;
        if (effect) {
            effect.style.left = x + 'px';
            effect.style.top = y + 'px';
        }
    };

    const setBlockRef = (el: HTMLDivElement | null, index: number) => {
        blocksRef.current[index] = el;
    };

    useEffect(() => {
        let mounted = true;
        async function load() {
            try {
                const res = await fetch(`${API_BASE_URL}/advantages/`);
                if (!res.ok) throw new Error(`Status ${res.status}`);
                const data = await res.json();
                if (mounted) setItems(data);
            } catch (err) {
                console.error("Failed to load advantages:", err);
            }
        }
        load();
        return () => { mounted = false; };
    }, []);

    // fallback: если API пустой, можно отрисовать статические блоки
    const fallback = [
        { id: 0, label: "мы", value: "1", description: "на рынке" },
        { id: 1, label: "гарантируем", value: "50%", description: "безопасность" },
        { id: 2, label: "календарик за", value: "2001", description: "в подарок" },
        { id: 3, label: "путешествие", value: "597", description: "дней" },
    ];

    const toRender = items.length ? items : fallback;

    return (
        <div className="info-grid">
            {toRender.map((item: Advantage, index) => (
                <div
                    key={item.id}
                    className="info-block"
                    ref={(el) => setBlockRef(el, index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                >
                    <div className="info-block-effect" />
                    {/* при наличии image_url показываем картинку */}
                    {/*{item.image_url ? (*/}
                    {/*    <div className="info-image-wrap">*/}
                    {/*        <img src={item.image_url} alt={item.label} className="info-image" />*/}
                    {/*    </div>*/}
                    {/*) : null}*/}
                    <p className="info-label">{item.label}</p>
                    <p className="info-value">{item.value}</p>
                    <p className="info-desc">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
