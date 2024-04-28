import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.5, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  };

export default PageTransition;