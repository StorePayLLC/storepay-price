import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FaceProps {
  children: ReactNode;
  rotateX?: number;
  rotateY?: number;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  className?: string;
}

export function Face({
  children,
  rotateX = 0,
  rotateY = 0,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  className = '',
}: FaceProps) {
  return (
    <motion.div
      className={`backface-hidden absolute flex h-full w-full items-center justify-center font-bold text-white shadow-lg ${className}`}
      style={{
        transform: `
          translateX(${translateX}px)
          translateY(${translateY}px)
          translateZ(${translateZ}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `,
      }}
    >
      {children}
    </motion.div>
  );
}
