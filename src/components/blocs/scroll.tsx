import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type ScrollProps = {
  children?: React.ReactNode;
};

export function Scroll({ children }: ScrollProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }} // inizia da una posizione più bassa
      animate={{
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full" // Assicurati che prenda tutta la larghezza disponibile
      style={{ display: "inline-block" }} // Evita di introdurre un nuovo blocco di layout
    >
      {children}
    </motion.section>
  );
}
