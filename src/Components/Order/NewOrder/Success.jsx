import { CheckCircle } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
import Confetti from "react-confetti";
function Success({  setStep,step}) {
    return (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
              className="relative w-full mx-auto h-full mt-10 p-8 flex flex-col items-center justify-center "
            >
              {/* Confetti Animation */}
              <Confetti numberOfPieces={150} recycle={false} gravity={0.2} />
        
              <CheckCircle size={80} className="text-success mb-4 animate-bounce" />
              <h2 className="text-4xl font-bold mb-4 animate-pulse">Order Successful!</h2>
              <p className="text-lg mb-6 text-center">Your order has been placed! You'll receive a confirmation email shortly.</p>
              
              <div className="flex gap-4">
                <button className="btn btn-outline btn-light">Back to Home</button>
                <button className="btn btn-primary">View Order Details</button>
              </div>
            </motion.div>
    )
}

export default Success