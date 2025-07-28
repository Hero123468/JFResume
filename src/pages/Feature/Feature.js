import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Feature/Feature.tsx
import { useEffect, useState } from 'react';
import './Feature.css';
function Boxer({ name, isPlayer, isPunching }) {
    return (_jsxs("div", { className: `boxer ${isPlayer ? 'player' : 'enemy'} ${isPunching ? 'punch' : ''}`, children: ["\uD83E\uDD4A ", _jsx("span", { children: name })] }));
}
function HealthBar({ health, label }) {
    return (_jsxs("div", { className: "health-bar", children: [_jsx("span", { children: label }), _jsx("div", { className: "bar-outer", children: _jsx("div", { className: "bar-inner", style: { width: `${health}%` } }) })] }));
}
function Feature() {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [isPlayerPunching, setPlayerPunching] = useState(false);
    const [isEnemyPunching, setEnemyPunching] = useState(false);
    // 🔊 Play sound
    const audio = new Audio(`${import.meta.env.BASE_URL}sounds/773737__qubodup__punch-1.wav`);
    audio.play().catch(err => console.error('Audio failed to play:', err));
    const punch = () => {
        if (enemyHealth <= 0)
            return;
        setPlayerPunching(true);
        setTimeout(() => setPlayerPunching(false), 200);
        setEnemyHealth(h => Math.max(0, h - 10));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (playerHealth <= 0)
                return;
            setEnemyPunching(true);
            setTimeout(() => setEnemyPunching(false), 200);
            setPlayerHealth(h => Math.max(0, h - 10));
        }, 2000);
        return () => clearInterval(interval);
    }, [playerHealth]);
    return (_jsxs("div", { className: "arena", children: [_jsx("h1", { children: "Feature" }), " ", _jsx("h2", { children: "\uD83E\uDD4A Boxing Game" }), _jsxs("div", { className: "boxers", children: [_jsx(Boxer, { name: "You", isPlayer: true, isPunching: isPlayerPunching }), _jsx(Boxer, { name: "CPU", isPunching: isEnemyPunching })] }), _jsxs("div", { className: "healthbars", children: [_jsx(HealthBar, { label: "Player", health: playerHealth }), _jsx(HealthBar, { label: "CPU", health: enemyHealth })] }), _jsx("button", { onClick: punch, disabled: enemyHealth <= 0 || playerHealth <= 0, children: "Punch!" }), playerHealth <= 0 && _jsx("h2", { children: "You Lost \uD83D\uDC80" }), enemyHealth <= 0 && _jsx("h2", { children: "You Won! \uD83C\uDF89" })] }));
}
export default Feature;
