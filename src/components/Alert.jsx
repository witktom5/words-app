import { useContext } from 'react';
import AlertContext from '../context/Alert/AlertContext';
import { motion, AnimatePresence } from 'framer-motion';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    <AnimatePresence>
      {alert !== null && (
        <motion.div
          key='questionAnimation'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={`custom-alert shadow fw-bold fs-1 custom-alert-${alert.type}`}
          >
            {alert.msg}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default Alert;
