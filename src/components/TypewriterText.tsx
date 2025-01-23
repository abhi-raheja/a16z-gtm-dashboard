'use client';

import React, { useEffect, useState, useRef } from 'react';

interface TypewriterTextProps {
  wordList: string[];
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  wordList,
  onComplete
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [phase, setPhase] = useState<'waiting' | 'typing1' | 'typing2' | 'erasing' | 'typing-next'>('waiting');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  // Function to get random typing delay based on character context
  const getTypingDelay = (char: string, nextChar: string | null) => {
    // Base delay between 100-150ms
    let delay = Math.random() * 50 + 100;

    // Add occasional longer pauses (20% chance)
    if (Math.random() < 0.2) {
      delay += Math.random() * 200 + 100;
    }

    // Longer delay after punctuation
    if (char === ' ' || char === '-') {
      delay += 50;
    }

    // Slightly longer delay when transitioning between certain character types
    if (nextChar && 
        ((char.match(/[aeiou]/) && !nextChar.match(/[aeiou]/)) || 
         (char.match(/[bcdfghjklmnpqrstvwxyz]/) && nextChar.match(/[aeiou]/)))
    ) {
      delay += 30;
    }

    return delay;
  };

  // Initialize after a small delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
      setPhase('typing1');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const firstLine = "gtm resources for";
    const secondLinePrefix = "mission-driven ";
    const erasingDelay = 30;
    const wordPauseDelay = 1500;

    if (phase === 'typing1') {
      if (line1.length < firstLine.length) {
        const nextChar = firstLine[line1.length + 1] || null;
        const timeout = setTimeout(() => {
          setLine1(firstLine.substring(0, line1.length + 1));
        }, getTypingDelay(firstLine[line1.length], nextChar));
        return () => clearTimeout(timeout);
      } else {
        setPhase('typing2');
        return;
      }
    }

    if (phase === 'typing2' || phase === 'typing-next') {
      const fullSecondLine = secondLinePrefix + wordList[currentWordIndex];
      if (line2.length < fullSecondLine.length) {
        const nextChar = fullSecondLine[line2.length + 1] || null;
        const timeout = setTimeout(() => {
          setLine2(fullSecondLine.substring(0, line2.length + 1));
        }, getTypingDelay(fullSecondLine[line2.length], nextChar));
        return () => clearTimeout(timeout);
      } else {
        if (onComplete && currentWordIndex === 0) {
          onComplete();
        }
        const timeout = setTimeout(() => {
          setPhase('erasing');
        }, wordPauseDelay);
        return () => clearTimeout(timeout);
      }
    }

    if (phase === 'erasing') {
      const baseLength = secondLinePrefix.length;
      if (line2.length > baseLength) {
        const timeout = setTimeout(() => {
          setLine2(line2.substring(0, line2.length - 1));
        }, erasingDelay);
        return () => clearTimeout(timeout);
      } else {
        setPhase('typing-next');
        setCurrentWordIndex((prev) => (prev + 1) % wordList.length);
        return;
      }
    }
  }, [line1, line2, phase, currentWordIndex, wordList, onComplete, isInitialized]);

  // Don't render anything until initialized
  if (!isInitialized) {
    return <div className="flex flex-col" style={{ minHeight: '160px' }}></div>;
  }

  return (
    <div className="flex flex-col" style={{ minHeight: '160px' }}>
      <div className="relative inline-block mb-3">
        <span ref={line1Ref} className="invisible whitespace-pre">
          {line1}
          {phase === 'typing1' && '|'}
        </span>
        <span 
          className="absolute top-0 left-0 bg-[#90EE90] text-black px-5 py-2 rounded-sm transform hover:translate-x-1 transition-all duration-200"
          style={{ 
            width: line1Ref.current?.offsetWidth ? `${line1Ref.current.offsetWidth + 40}px` : 'auto',
            opacity: line1.length > 0 ? 1 : 0,
            transition: 'width 0.2s ease-out, opacity 0.2s ease-out'
          }}
        >
          {line1}
          {phase === 'typing1' && <span className="animate-pulse ml-0.5 -mr-1">|</span>}
        </span>
      </div>
      <div className="relative inline-block">
        <span ref={line2Ref} className="invisible whitespace-pre">
          {line2}
          {phase !== 'typing1' && '|'}
        </span>
        <span 
          className="absolute top-0 left-0 bg-[#90EE90] text-black px-5 py-2 rounded-sm transform hover:translate-x-1 transition-all duration-200 whitespace-nowrap"
          style={{ 
            width: line2Ref.current?.offsetWidth ? `${line2Ref.current.offsetWidth + 40}px` : 'auto',
            opacity: line2.length > 0 ? 1 : 0,
            transition: 'width 0.2s ease-out, opacity 0.2s ease-out'
          }}
        >
          {line2}
          {phase !== 'typing1' && <span className="animate-pulse ml-0.5 -mr-1">|</span>}
        </span>
      </div>
    </div>
  );
};

export default TypewriterText;
