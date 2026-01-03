import { motion } from "framer-motion";

const Toast = ({ message, onClose }) => {
  setTimeout(onClose, 3000);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center"
    >
      {message}
    </motion.div>
  );
};

export default Toast;
