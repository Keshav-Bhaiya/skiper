"use client";
import { motion } from "framer-motion";

export default function ScrollSection() {
  return (
    <div className=""> 
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // 0.3 matlab 30% dikhte hi animate
      >
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >

      </motion.div>

      {/* Section 3 */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
      </motion.div>
    </div>
  );
}
