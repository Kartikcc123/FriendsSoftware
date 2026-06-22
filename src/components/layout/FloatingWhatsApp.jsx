import { MessageCircle, PhoneForwarded } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const phoneNumber = '919116901749';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const callUrl = 'tel:9116901749';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <motion.a
        href={callUrl}
        onClick={(event) => {
          event.preventDefault();
          window.location.href = callUrl;
        }}
        className="relative p-4 bg-[linear-gradient(135deg,#FF8A4C_0%,#FF6B35_55%,#E85D2A_100%)] text-white rounded-full shadow-[0_14px_30px_rgba(255,107,53,0.38)] hover:brightness-105 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Call Friends Software"
        title="Call 9116901749"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full ring-4 ring-[#FF6B35]/20 animate-pulse"></span>
        <PhoneForwarded size={28} className="relative" strokeWidth={2.4} />
      </motion.a>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.08 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
