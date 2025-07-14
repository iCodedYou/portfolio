import React, { useState, useEffect, useCallback, useRef } from 'react';
import './GameSection.css';

const GameSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'gameOver'
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15, type: 'variable' });
  const [direction, setDirection] = useState({ x: 0, y: 1 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('codeSnakeHighScore') || 0);
  const [speed, setSpeed] = useState(200);
  const gameLoopRef = useRef();

  const codeItems = [
    { type: 'variable', symbol: 'var', color: '#79c0ff', points: 10 },
    { type: 'function', symbol: 'fn()', color: '#ff7b72', points: 20 },
    { type: 'class', symbol: 'class', color: '#56d364', points: 30 },
    { type: 'object', symbol: '{}', color: '#ffa657', points: 15 },
    { type: 'array', symbol: '[]', color: '#f85149', points: 15 },
    { type: 'string', symbol: '""', color: '#a5d6ff', points: 10 },
    { type: 'number', symbol: '123', color: '#79c0ff', points: 10 },
    { type: 'boolean', symbol: 'bool', color: '#56d364', points: 10 }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const generateFood = useCallback(() => {
    const randomItem = codeItems[Math.floor(Math.random() * codeItems.length)];
    return {
      x: Math.floor(Math.random() * 28) + 1,
      y: Math.floor(Math.random() * 18) + 1,
      ...randomItem
    };
  }, []);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: 1 });
    setFood(generateFood());
    setScore(0);
    setSpeed(200);
  }, [generateFood]);

  const gameLoop = useCallback(() => {
    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Wall collision
      if (head.x < 0 || head.x >= 30 || head.y < 0 || head.y >= 20) {
        setGameState('gameOver');
        return currentSnake;
      }

      // Self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameState('gameOver');
        return currentSnake;
      }

      newSnake.unshift(head);

      // Food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => {
          const newScore = prev + food.points;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('codeSnakeHighScore', newScore);
          }
          return newScore;
        });
        setFood(generateFood());
        setSpeed(prev => Math.max(100, prev - 5)); // Increase speed
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, highScore, generateFood]);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(gameLoop, speed);
      return () => clearInterval(gameLoopRef.current);
    }
  }, [gameState, gameLoop, speed]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameState !== 'playing') return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, direction]);

  const startGame = () => {
    resetGame();
    setGameState('playing');
  };

  return (
    <div className={`game-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="code-content">
          <div className="floating-particles">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="particle" style={{ 
                animationDelay: `${i * 0.5}s`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}>
                {codeItems[i % codeItems.length].symbol}
              </div>
            ))}
          </div>
          
          <div className="code-line">
            <span className="keyword">import</span>
            <span className="variable"> React, { useState, useEffect } </span>
            <span className="keyword">from</span>
            <span className="string"> 'react'</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// 🎮 Code Snake Game - A Developer's Twist on Classic Snake</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">class</span>
            <span className="variable"> CodeSnakeGame </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="keyword">constructor</span>
            <span className="punctuation">(</span>
            <span className="parameter">canvas</span>
            <span className="punctuation">) {'{'}</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="keyword">super</span>
            <span className="punctuation">(</span>
            <span className="parameter">canvas</span>
            <span className="punctuation">);</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="keyword">this</span>
            <span className="punctuation">.</span>
            <span className="property">snake</span>
            <span className="operator"> = </span>
            <span className="punctuation">[{'{'}</span>
            <span className="property"> x</span>
            <span className="punctuation">:</span>
            <span className="number"> 10</span>
            <span className="punctuation">,</span>
            <span className="property"> y</span>
            <span className="punctuation">:</span>
            <span className="number"> 10 </span>
            <span className="punctuation">{"}"}</span>
            <span className="punctuation">];</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="keyword">this</span>
            <span className="punctuation">.</span>
            <span className="property">codeItems</span>
            <span className="operator"> = </span>
            <span className="punctuation">[</span>
          </div>
          
          {codeItems.slice(0, 4).map((item, index) => (
            <div key={item.type} className="code-line indent-3" style={{ animationDelay: `${1 + index * 0.2}s` }}>
              <span className="punctuation">{'{'}</span>
              <span className="property"> type</span>
              <span className="punctuation">:</span>
              <span className="string"> '{item.type}'</span>
              <span className="punctuation">,</span>
              <span className="property"> symbol</span>
              <span className="punctuation">:</span>
              <span className="string"> '{item.symbol}'</span>
              <span className="punctuation">,</span>
              <span className="property"> points</span>
              <span className="punctuation">:</span>
              <span className="number"> {item.points}</span>
              <span className="punctuation"> {'}'}</span>
              {index < 3 && <span className="punctuation">,</span>}
            </div>
          ))}
          
          <div className="code-line indent-2">
            <span className="punctuation">];</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line indent-1">
            <span className="property">update</span>
            <span className="punctuation">() {'{'}</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="comment">// Game logic: Move snake, check collisions, eat code items</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="keyword">this</span>
            <span className="punctuation">.</span>
            <span className="property">moveSnake</span>
            <span className="punctuation">();</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="keyword">this</span>
            <span className="punctuation">.</span>
            <span className="property">checkCollisions</span>
            <span className="punctuation">();</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="keyword">this</span>
            <span className="punctuation">.</span>
            <span className="property">render</span>
            <span className="punctuation">();</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// Ready to play? Use arrow keys to control! 🕹️</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">export default</span>
            <span className="variable"> CodeSnakeGame</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>
      
      <div className="game-panel">
        <div className="panel-header">
          <h3>🎮 Code Snake Game</h3>
          <span className="high-score">High: {highScore}</span>
        </div>
        
        <div className="game-container">
          {gameState === 'menu' && (
            <div className="game-menu">
              <div className="game-title">
                <h2>🐍 CODE SNAKE</h2>
                <p>Eat programming symbols to grow your code snake!</p>
              </div>
              
              <div className="game-instructions">
                <h4>🎯 How to Play:</h4>
                <ul>
                  <li>🎮 Use arrow keys to control the snake</li>
                  <li>🍎 Eat code symbols to grow and score points</li>
                  <li>⚡ Speed increases as you score more</li>
                  <li>💀 Don't hit walls or yourself!</li>
                </ul>
              </div>
              
              <div className="code-items-legend">
                <h4>📦 Code Items:</h4>
                <div className="items-grid">
                  {codeItems.slice(0, 6).map(item => (
                    <div key={item.type} className="legend-item">
                      <span className="item-symbol" style={{ color: item.color }}>
                        {item.symbol}
                      </span>
                      <span className="item-points">{item.points}pts</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="start-button" onClick={startGame}>
                <span className="button-icon">🚀</span>
                Start Game
              </button>
            </div>
          )}
          
          {(gameState === 'playing' || gameState === 'gameOver') && (
            <div className="game-area">
              <div className="game-stats">
                <div className="stat">
                  <span className="stat-label">Score:</span>
                  <span className="stat-value">{score}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Length:</span>
                  <span className="stat-value">{snake.length}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Speed:</span>
                  <span className="stat-value">{Math.round((220 - speed) / 2)}%</span>
                </div>
              </div>
              
              <div className="game-board">
                {Array.from({ length: 600 }, (_, i) => {
                  const x = i % 30;
                  const y = Math.floor(i / 30);
                  const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                  const isHead = snake[0].x === x && snake[0].y === y;
                  const isFood = food.x === x && food.y === y;
                  
                  return (
                    <div
                      key={i}
                      className={`game-cell ${isSnake ? 'snake' : ''} ${isHead ? 'head' : ''} ${isFood ? 'food' : ''}`}
                      style={isFood ? { color: food.color } : {}}
                    >
                      {isFood && food.symbol}
                    </div>
                  );
                })}
              </div>
              
              {gameState === 'gameOver' && (
                <div className="game-over">
                  <h3>💀 Game Over!</h3>
                  <p>Final Score: <strong>{score}</strong></p>
                  {score === highScore && <p className="new-record">🎉 New High Score!</p>}
                  <button className="restart-button" onClick={startGame}>
                    🔄 Play Again
                  </button>
                  <button className="menu-button" onClick={() => setGameState('menu')}>
                    📋 Main Menu
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSection;