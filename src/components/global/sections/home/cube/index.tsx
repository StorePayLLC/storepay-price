import { motion } from 'framer-motion';

import './index.css';

import { Face } from './Face';

export function Cube({ words }: { words: { word: string; color: string }[] }) {
  const size = 50;

  return (
    <div className="perspective-[1000px] h-[50px] w-[250px]">
      <motion.div
        animate={{ rotateX: [0, 360] }}
        initial={{ rotateX: 0 }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity, repeatDelay: 0 }}
        className="transform-style-3d relative h-full w-full text-xl"
        style={{ transformOrigin: 'center' }}
      >
        <Face translateZ={size / 2} className="bg-[#007BFF]">
          {words?.[0]?.word}
        </Face>
        <Face translateZ={-size / 2} rotateY={180} className="bg-[#28A745]">
          <div style={{ transform: 'rotateY(180deg) rotateX(180deg)' }}>{words?.[1]?.word}</div>
        </Face>
        <Face translateY={-size / 2} rotateX={90} className="bg-[#FF5733]">
          {words?.[2]?.word}
        </Face>
        <Face translateY={size / 2} rotateX={-90} className="bg-[#ff00c1]">
          {words?.[3]?.word}
        </Face>
      </motion.div>
    </div>
  );
}
