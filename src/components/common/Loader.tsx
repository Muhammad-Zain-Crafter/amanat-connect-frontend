import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex space-x-2">
        {[0, 0.3, 0.6].map((delay, index) => (
          <motion.div
            key={index}
            className="h-3 w-3 rounded-full bg-emerald-600"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;