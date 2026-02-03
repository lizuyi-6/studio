import React, { useState, useEffect } from 'react';

// --- 文本乱码解密效果 ---
const ScrambleText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 15; // 乱码迭代次数
    let interval;

    const startScramble = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text.split('').map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2; // 控制解密速度
      }, 30);
    }, delay);

    return () => {
      clearTimeout(startScramble);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
