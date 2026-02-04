import { useState } from 'react';
import '@/App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleAnswer = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleAccept = () => {
    setShowConfetti(true);
    setShowThankYou(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const progress = ((step - 1) / 3) * 100;

  const pageVariants = {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFF9FA] relative flex flex-col items-center justify-center py-12 px-4 overflow-x-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1767552659473-9a541393de94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxzb2Z0JTIwcGFzdGVsJTIwZmxvd2VycyUyMHJvbWFudGljJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzAyMjY1NTZ8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          colors={['#FF9EAA', '#C5A3FF', '#FF5D8F', '#88D498', '#FFF0F5']}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <HomePage onNext={handleNext} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <RoundOne answers={answers} onAnswer={handleAnswer} onNext={handleNext} progress={progress} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <RoundTwo answers={answers} onAnswer={handleAnswer} onNext={handleNext} progress={progress} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <FinalPage onAccept={handleAccept} showThankYou={showThankYou} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const HomePage = ({ onNext }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
      data-testid="home-page"
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF9EAA] rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C5A3FF] rounded-full opacity-20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative text-center space-y-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <Heart className="w-16 h-16 text-[#FF5D8F] fill-[#FF5D8F]" />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#592E36]"
          style={{ fontFamily: 'Fraunces, serif' }}
          data-testid="home-title"
        >
          💘 Sona's Valentine Verification Portal
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Hello Sona,
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            You have been shortlisted for the prestigious position of:
          </p>
          <div className="bg-[#FFF0F5] border-2 border-[#FF9EAA] rounded-2xl p-4 inline-block">
            <p className="text-xl md:text-2xl font-bold text-[#FF5D8F]" style={{ fontFamily: 'Fraunces, serif' }}>
              ✅ Shri Pandey's Valentine (2026 Edition)
            </p>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Before proceeding, kindly complete this short questionnaire.
          </p>
          <p className="text-base md:text-lg italic text-[#FF5D8F]" style={{ fontFamily: 'Caveat, cursive' }}>
            (Refusal is not an option 😌)
          </p>
        </motion.div>

        {/* Image Box for Personalization */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="my-6 mx-auto w-48 h-48 rounded-3xl overflow-hidden shadow-lg border-4 border-[#FF9EAA]"
        >
          <img 
            src="https://images.unsplash.com/photo-1767552659473-9a541393de94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxzb2Z0JTIwcGFzdGVsJTIwZmxvd2VycyUyMHJvbWFudGljJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzAyMjY1NTZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Valentine decorative"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-[#FF5D8F] hover:bg-[#FF3B75] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-2 mx-auto mt-8"
          style={{ fontFamily: 'Nunito, sans-serif' }}
          data-testid="start-questionnaire-btn"
        >
          <span>✅ Start Questionnaire</span>
          <Sparkles className="w-5 h-5" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm md:text-base font-medium text-[#8C5E69] mt-8"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Powered by Cupid HQ • Romance Department • ISO Certified Love 😌❤️
        </motion.p>
      </div>
    </motion.div>
  );
};

const RoundOne = ({ answers, onAnswer, onNext, progress }) => {
  const canProceed = answers.q1 && answers.q2 && answers.q3;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
      data-testid="round-one-page"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <Progress value={progress} className="h-2 bg-[#F0E6EF]" data-testid="progress-bar" />
        <p className="text-sm text-center mt-2 text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>Round 1 of 3</p>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#592E36] mb-2" style={{ fontFamily: 'Fraunces, serif' }} data-testid="round-one-title">
            🪪 Round 1: Identity Verification
          </h2>
          <p className="text-lg text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Please confirm the following details to continue:
          </p>
        </div>

        {/* Q1 */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q1. Your name is:</Label>
          <RadioGroup value={answers.q1} onValueChange={(val) => onAnswer('q1', val)} data-testid="q1-radio-group">
            <div className="space-y-3">
              {['Sona', 'Sonaaa', 'The cutest human alive 😌'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q1 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-4 rounded-2xl transition-all duration-200 flex items-center gap-4`}
                  data-testid={`q1-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q1-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q1-${idx}`} className="text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q1 === option && <Heart className="w-5 h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q2 */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q2. Shri Pandey is your:</Label>
          <RadioGroup value={answers.q2} onValueChange={(val) => onAnswer('q2', val)} data-testid="q2-radio-group">
            <div className="space-y-3">
              {['Husband ✅', 'Best Husband ✅', 'Full-time admirer ✅😂'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q2 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-4 rounded-2xl transition-all duration-200 flex items-center gap-4`}
                  data-testid={`q2-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q2-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q2-${idx}`} className="text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q2 === option && <Heart className="w-5 h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q3 */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q3. How cute is Shri Pandey today?</Label>
          <RadioGroup value={answers.q3} onValueChange={(val) => onAnswer('q3', val)} data-testid="q3-radio-group">
            <div className="space-y-3">
              {['Cute', 'Very cute', 'Extremely cute (send him kisses) 😤❤️'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q3 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-4 rounded-2xl transition-all duration-200 flex items-center gap-4`}
                  data-testid={`q3-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q3-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q3-${idx}`} className="text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q3 === option && <Heart className="w-5 h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <motion.button
          whileHover={{ scale: canProceed ? 1.05 : 1 }}
          whileTap={{ scale: canProceed ? 0.95 : 1 }}
          onClick={onNext}
          disabled={!canProceed}
          className={`w-full font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-8 ${
            canProceed
              ? 'bg-[#FF5D8F] hover:bg-[#FF3B75] text-white hover:shadow-xl cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Nunito, sans-serif' }}
          data-testid="proceed-to-round-two-btn"
        >
          <span>➡️ Proceed to Round 2</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const RoundTwo = ({ answers, onAnswer, onNext, progress }) => {
  const canProceed = answers.q4 && answers.q5 && answers.q6;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
      data-testid="round-two-page"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <Progress value={progress} className="h-2 bg-[#F0E6EF]" />
        <p className="text-sm text-center mt-2 text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>Round 2 of 3</p>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#592E36] mb-2" style={{ fontFamily: 'Fraunces, serif' }} data-testid="round-two-title">
            💞 Round 2: Romance Readiness Test
          </h2>
          <p className="text-lg text-[#8C5E69] italic" style={{ fontFamily: 'Caveat, cursive' }}>
            Your preferences will be noted seriously (but not guaranteed 😌).
          </p>
        </div>

        {/* Q4 */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q4. Choose your ideal Valentine plan:</Label>
          <RadioGroup value={answers.q4} onValueChange={(val) => onAnswer('q4', val)} data-testid="q4-radio-group">
            <div className="space-y-3">
              {['Candlelight dinner 🍽️', 'Movie + snacks 🍿', 'Long drive + music 🎶', 'Home date + cuddles 🛌'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q4 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-4 rounded-2xl transition-all duration-200 flex items-center gap-4`}
                  data-testid={`q4-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q4-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q4-${idx}`} className="text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q4 === option && <Heart className="w-5 h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q5 */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q5. Valentine mood level:</Label>
          <RadioGroup value={answers.q5} onValueChange={(val) => onAnswer('q5', val)} data-testid="q5-radio-group">
            <div className="space-y-3">
              {['Normal husband mode 😌', 'Extra romantic 🥰', 'Dangerous romance 😈💘'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q5 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-4 rounded-2xl transition-all duration-200 flex items-center gap-4`}
                  data-testid={`q5-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q5-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q5-${idx}`} className="text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q5 === option && <Heart className="w-5 h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q6 */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q6. Valentine snack expectation:</Label>
          <RadioGroup value={answers.q6} onValueChange={(val) => onAnswer('q6', val)} data-testid="q6-radio-group">
            <div className="space-y-3">
              {['Chocolate 🍫', 'Dessert 🍰', 'Pizza 🍕', 'Anything if you feed me 😌'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q6 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-4 rounded-2xl transition-all duration-200 flex items-center gap-4`}
                  data-testid={`q6-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q6-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q6-${idx}`} className="text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q6 === option && <Heart className="w-5 h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <motion.button
          whileHover={{ scale: canProceed ? 1.05 : 1 }}
          whileTap={{ scale: canProceed ? 0.95 : 1 }}
          onClick={onNext}
          disabled={!canProceed}
          className={`w-full font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-8 ${
            canProceed
              ? 'bg-[#FF5D8F] hover:bg-[#FF3B75] text-white hover:shadow-xl cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Nunito, sans-serif' }}
          data-testid="proceed-to-final-btn"
        >
          <span>➡️ Final Round</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const FinalPage = ({ onAccept, showThankYou }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-3xl p-8 md:p-12 relative overflow-hidden"
      data-testid="final-page"
    >
      {/* Background Image for Final Page */}
      <div 
        className="absolute inset-0 opacity-10 rounded-3xl"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1653151189412-c190a965ca4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaGVhcnQlMjBiYWxsb29uJTIwcGFzdGVsJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzAyMjY1NjZ8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative space-y-8">
        {!showThankYou ? (
          <>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex justify-center mb-4"
              >
                <Sparkles className="w-20 h-20 text-[#FF5D8F]" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#592E36] mb-6" style={{ fontFamily: 'Fraunces, serif' }} data-testid="final-title">
                🎉 Final Confirmation
              </h2>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#FFF0F5] border-2 border-[#FF9EAA] rounded-3xl p-6 md:p-8 text-center space-y-4"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Dear Sona,
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                After careful evaluation, emotional background checks, and love verification…
              </p>
              <p className="text-3xl md:text-4xl font-bold text-[#FF5D8F] my-6" style={{ fontFamily: 'Fraunces, serif' }}>
                💘 Will you be my Valentine?
              </p>
            </motion.div>

            {/* Image Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto w-64 h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-[#C5A3FF]"
            >
              <img 
                src="https://images.unsplash.com/photo-1653151189412-c190a965ca4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaGVhcnQlMjBiYWxsb29uJTIwcGFzdGVsJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzAyMjY1NjZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Heart balloons"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAccept}
                className="bg-[#FF5D8F] hover:bg-[#FF3B75] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="accept-yes-btn"
              >
                ✅ YES
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAccept}
                className="bg-[#C5A3FF] hover:bg-[#B18FFF] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="accept-yes-chocolate-btn"
              >
                ✅ YES (with chocolate 🍫)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAccept}
                className="bg-[#88D498] hover:bg-[#6FC084] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="accept-yes-forever-btn"
              >
                ✅ YES FOREVER 😭❤️
              </motion.button>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring' }}
            className="text-center space-y-6"
            data-testid="thank-you-section"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="flex justify-center"
            >
              <CheckCircle2 className="w-24 h-24 text-[#88D498]" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#592E36]" style={{ fontFamily: 'Fraunces, serif' }}>
              🎊 Application Approved!
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-[#FF5D8F]" style={{ fontFamily: 'Fraunces, serif' }}>
              Congratulations Sona ❤️
            </p>

            <div className="bg-[#FFF0F5] border-2 border-[#FF9EAA] rounded-3xl p-6 md:p-8 text-left space-y-3">
              <p className="text-lg md:text-xl text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Your Valentine (Shri Pandey) will now proceed with:
              </p>
              <div className="space-y-2 text-lg">
                <p className="flex items-center gap-3 text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#88D498]" />
                  date planning
                </p>
                <p className="flex items-center gap-3 text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#88D498]" />
                  surprise arrangements
                </p>
                <p className="flex items-center gap-3 text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <CheckCircle2 className="w-6 h-6 text-[#88D498]" />
                  unlimited kisses 😘
                </p>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-[#FF9EAA]">
              <p className="text-xl md:text-2xl italic text-[#592E36]" style={{ fontFamily: 'Caveat, cursive' }}>
                — Yours forever,
              </p>
              <p className="text-2xl md:text-3xl font-bold text-[#FF5D8F] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>
                Shri Pandey 😌💘
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default App;
