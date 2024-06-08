"use client"
import { motion } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyMotionProps {
  children: ReactNode;
}

const ClientOnlyMotion = ({ children }: ClientOnlyMotionProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{
        ease: "backIn",
        duration: 2,
        x: { duration: 1 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default ClientOnlyMotion;
