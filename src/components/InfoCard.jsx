import { motion } from 'framer-motion';
import './InfoCard.css';

export default function InfoCard({ icon: Icon, title, children, delay = 0 }) {
  return (
    <motion.div
      className="info-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      {Icon && (
        <div className="info-card-icon">
          <Icon size={24} />
        </div>
      )}
      <h3 className="info-card-title">{title}</h3>
      <div className="info-card-body">{children}</div>
    </motion.div>
  );
}
