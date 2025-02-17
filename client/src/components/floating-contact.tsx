import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "support@financeflow.com"
};

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4"
          >
            <Card className="w-[300px]">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Contact Us</h3>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Phone className={`h-6 w-6 ${isOpen ? '' : 'animate-ring'}`} />
        </Button>
      </motion.div>
    </div>
  );
}
