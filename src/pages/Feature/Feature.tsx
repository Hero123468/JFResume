// src/pages/Feature/Feature.tsx
import { useEffect, useState } from 'react';
import './Feature.css';

function Boxer({ name, isPlayer, isPunching }: { name: string; isPlayer?: boolean; isPunching: boolean }) {
  return (
    <div className={`boxer ${isPlayer ? 'player' : 'enemy'} ${isPunching ? 'punch' : ''}`}>
      🥊 <span>{name}</span>
    </div>
  );
}

function HealthBar({ health, label }: { health: number; label: string }) {
  return (
    <div className="health-bar">
      <span>{label}</span>
      <div className="bar-outer">
        <div className="bar-inner" style={{ width: `${health}%` }}></div>
      </div>
    </div>
  );
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
    if (enemyHealth <= 0) return;
    setPlayerPunching(true);
    setTimeout(() => setPlayerPunching(false), 200);
    setEnemyHealth(h => Math.max(0, h - 10));
};
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerHealth <= 0) return;
      setEnemyPunching(true);
      setTimeout(() => setEnemyPunching(false), 200);
      setPlayerHealth(h => Math.max(0, h - 10));
    }, 2000);
    return () => clearInterval(interval);
  }, [playerHealth]);

  return (
    <div className="arena">
      <h1>Feature</h1> {/* 👈 Your original heading stays here */}
      <h2>🥊 Boxing Game</h2>

      <div className="boxers">
        <Boxer name="You" isPlayer isPunching={isPlayerPunching} />
        <Boxer name="CPU" isPunching={isEnemyPunching} />
      </div>

      <div className="healthbars">
        <HealthBar label="Player" health={playerHealth} />
        <HealthBar label="CPU" health={enemyHealth} />
      </div>

      <button onClick={punch} disabled={enemyHealth <= 0 || playerHealth <= 0}>
        Punch!
      </button>

      {playerHealth <= 0 && <h2>You Lost 💀</h2>}
      {enemyHealth <= 0 && <h2>You Won! 🎉</h2>}
    </div>
  );
}


export default Feature;
