import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize';
import './BirthdayReveal.css';

export default function BirthdayReveal() {
  const { width, height } = useWindowSize();

  const steps = [
    { title: "Happy Birthday, Feranmi 🎉", subtitle: "Tap to Begin", image: null, letter: null },
    { title: "Chapter 1: Baby Fera 👶", image: "/images/img1.jpg", letter: `Let’s start from the genesis before the revelation, 
the baby before the man, the David before the Fera 😂, 
the beginning of the first chapter of your life.

Before the world could shape you,
before words could define you,
before chaos began and all your nightmares came true, there was just you, innocent, naive and gentle.
You were yet to be seen, yet to be heard.
Now your voice is heard, but it remains misunderstood;
now your name rings a bell, but it is the sound of doom.
Oh Fera, my Fera, what have you done with little you?` },
    { title: "Chapter 2: Cutie Patootie 🧸", image: "/images/img2.jpg", letter: `Cute boy, pink lips, hasn’t understood what reality really means…
Exploring life on your own terms, you remain steadfast amidst all the storm,
Discovering your own voice, beginning to understand how the world really works,
learning what softness feels like, understanding what pain tastes like,
and how even the slightest hint of weakness can bring a grown man down.

Your heart was simple, open, trusting.
The world had not yet touched you with its sharp edges,
it had not yet carved doubt into your heart
or caution into your steps,
you were just a cute innocent boy, the dark was all you feared.` },

    { 
  title: "Chapter 3: Hot boy 🤩", 
  image: "/images/img3.jpg", 
  letter: `Baddoski, ahan fine boy, no filter 😏😂...
Here you started figuring out what it meant to live life on your own terms, you started to understand who you are, what you like, what you want, and who you refuse to be.
The world was confusing, full of rules that didn’t make sense, but you walked through it with your head high, and mind sharp.
Every mistake, every triumph, every unforgettable moment shaped the person you were becoming.

You were learning to speak your mind, to feel without fear,
to laugh when it hurt, to stand tall, to speak even when everybody else was afraid to talk.
And even when no one noticed, when the quiet moments went unseen, you were growing,
becoming someone strong, someone unshakable, someone real.` 
},

    { title: "Chapter 4: Let him cook 👨🏽‍🍳", image: "/images/img4.jpg", letter: "Look at you now… a whole ass public figure! That small boy of yesterday is now a public figure that millions recognize, thousands follow, and everyone has an opinion about. You turned what you love into something real, and fame didn’t break you, it made you. Behind all the TikTok chaos, you’re still… you. I see the walls you’ve built to protect yourself, the little defense system you’ve created so no one ever gets close enough to notice your hurt or catch you in a vulnerable moment. You try so hard to look strong, to make it seem like none of the hate gets to you. But even when the world gets loud, even when the noise rises and you feel your voice is not heard, when you feel yourself blending in with the crowd, I still see you, because I’m always watching. I still hear you, because I’m always listening. Even though I’m keeping my distance, you still have a place in my heart. So remember this, Fera: the world is yours to explore, and the sky is not your limit, it is your starting point. I’ll always be rooting for you 😘" },
    { title: "The Big Day 🎉🤎", image: "/images/img5.jpg", letter: "Long story short, it's your day... Happy Birthday Feranmi ❤. I really hope you enjoy today, I know your birthdays have not always been kind, and yes you're not a perfect person but you have a good and gentle heart, even you deserve to be happy at least 1 day in a your life. And before you ask, yes i'm still atheist but I pray whatever brings you joy will not turn into pain, and whatever makes you smile will never fade away. I pray whatever your hand touches will not turn into ashes, and i pray you succeed in whatever you put your hand in. I hope you find peace for yourself and fera, don't forget it's still your story and you're the main character, don't let anyone define you or how your story is supposed to end, you're the author and finisher of your book, the plot is in your hands." },
  ];

  const [step, setStep] = useState(0);

const handleNext = () => {
  if (step < steps.length - 1) {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scrolls to top smoothly
  }
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
                🎉 Enjoy your day ml and i hope you finally have a good birthday without me ruining it 😊 Omi loves you ❤
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
