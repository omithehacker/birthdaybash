import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';
import './BirthdayReveal.css';

export default function BirthdayReveal() {
  const { width, height } = useWindowSize();

  const steps = [
    { title: "Happy Birthday, Feranmi! 🎉", subtitle: "Tap to Begin", image: null, letter: null },
    { title: "Baby Fera 👶", image: "/images/img1.jpg", letter: `Let’s start from the genesis before the revelation, 
the baby before the man, the David before the Fera 😂, 
the beginning of the first chapter of your life.

Before the world could shape you,
before words could define you,
before chaos began and all your nightmares came true, there was just you, innocent, naive and gentle.
You were yet to be seen, yet to be heard.
Now your voice is heard, but it remains misunderstood;
now your name rings a bell, but it is the sound of doom.
Oh Fera, my Fera, what have you done with little you?` },
    { title: "Cutie 🧸", image: "/images/img2.jpg", letter: `I wasn’t there to see your tiny feet wobble across the floor, to laugh at your little triumphs, or to catch the tears no one noticed. But even from afar, I feel it—the spark of curiosity in your eyes, the quiet courage in your small hands reaching for a world too big for you. Each moment you discovered, each wonder you embraced, laid the first stones of who you were becoming. I may have missed the sound of your laughter echoing through rooms you called yours, but I carry it in my mind now, imagining every stumble, every playful shout, every quiet gaze. You were learning, growing, becoming more than the world could see, and even in my absence, I witness the beauty of those beginnings.` },
    { title: "Hot boy 🤩", image: "/images/img3.jpg", letter: "Epistle 3 here" },
    { title: "Let him cook 👨🏽‍🍳", image: "/images/img4.jpg", letter: "Epistle 4 here" },
    { title: "Today 🤎", image: "/images/img5.jpg", letter: "Epistle 5 here" },
  ];

  const [step, setStep] = useState(0);

  const handleNext = () => {
    if(step < steps.length - 1) setStep(step + 1);
  };

  return (
    <div className="birthday-page min-h-screen flex items-center justify-center p-4 sm:p-6 font-handwritten relative overflow-hidden">
      
      {/* Birthday Card */}
      <div className="birthday-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            {/* Title */}
            <h1 className="birthday-title">{steps[step].title}</h1>

            {/* Image */}
            {steps[step].image && (
              <motion.img
                src={steps[step].image}
                alt="Photo"
                className="image-square mb-6"
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
              />
            )}

            {/* Epistle */}
            {steps[step].letter ? (
              <motion.p
                className="epistle-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {steps[step].letter}
              </motion.p>
            ) : (
              <p className="epistle-text">🎂 A king was born 😂... And it's time for your trip down memory lane 🛫, welcome aboard, our captain 👩🏽‍✈️today is none other than 🎉 OMI THE ORACLE 🎉</p>
            )}

            {/* Next Button */}
            {step < steps.length - 1 && (
              <motion.button
                onClick={handleNext}
                className="birthday-btn"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                Next ➜
              </motion.button>
            )}

            {/* Final Message */}
            {step === steps.length - 1 && (
              <motion.p
                className="final-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                🎉 Enjoy your day ml and i hope you finally have a good birthday without me ruining it 😊
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Confetti on top */}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={step === 0 ? 200 : 50}
        recycle={false}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 50 }}
      />
    </div>
  );
}
