import React, { useRef } from 'react';
import './App.css'

const InfoGrid = () => {
    const blocksRef = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const block = blocksRef.current[index];
        if (!block) return;

        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const effect = block.querySelector('.info-block-effect') as HTMLElement;
        if (effect) {
            effect.style.left = x + 'px';
            effect.style.top = y + 'px';
        }
    };

    const setBlockRef = (el: HTMLDivElement | null, index: number) => {
        blocksRef.current[index] = el;
    };

    const infoData = [
        { label: "мы", value: "1", desc: "на рынке" },
        { label: "гарантируем", value: "50%", desc: "безопасность" },
        { label: "календарик за", value: "2001", desc: "в подарок" },
        { label: "путешествие", value: "597", desc: "дней" }
    ];

    return (
        <div className="info-grid">
            {infoData.map((item, index) => (
                <div
                    key={index}
                    className="info-block"
                    ref={(el) => setBlockRef(el, index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                >
                    <div className="info-block-effect"></div>
                    <p className="info-label">{item.label}</p>
                    <p className="info-value">{item.value}</p>
                    <p className="info-desc">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoGrid;
