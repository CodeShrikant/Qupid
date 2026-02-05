import { useState, useRef } from 'react';
import '@/App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Heart, Sparkles, CheckCircle2, Download, Share2 } from 'lucide-react';
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
  const certificateRef = useRef(null);

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

  const handleDownloadCertificate = () => {
    // Create certificate HTML
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Nunito:wght@400;600&family=Caveat:wght@400;700&display=swap');
          
          body {
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #FFF0F5 0%, #E6E6FA 100%);
            font-family: 'Nunito', sans-serif;
          }
          
          .certificate {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 60px;
            border-radius: 30px;
            box-shadow: 0 20px 60px rgba(255,158,170,0.3);
            border: 8px solid #FF9EAA;
            position: relative;
          }
          
          .certificate::before {
            content: '💘';
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 60px;
          }
          
          h1 {
            font-family: 'Fraunces', serif;
            color: #FF5D8F;
            font-size: 48px;
            text-align: center;
            margin: 0 0 20px 0;
          }
          
          h2 {
            font-family: 'Fraunces', serif;
            color: #592E36;
            font-size: 36px;
            text-align: center;
            margin: 0 0 40px 0;
          }
          
          .subtitle {
            text-align: center;
            color: #8C5E69;
            font-size: 20px;
            margin-bottom: 40px;
          }
          
          .recipient {
            text-align: center;
            font-size: 32px;
            color: #FF5D8F;
            font-weight: bold;
            margin: 30px 0;
            font-family: 'Fraunces', serif;
          }
          
          .details {
            background: #FFF0F5;
            padding: 30px;
            border-radius: 20px;
            margin: 30px 0;
            border: 2px solid #FF9EAA;
          }
          
          .detail-item {
            margin: 15px 0;
            font-size: 18px;
            color: #592E36;
            display: flex;
            align-items: center;
          }
          
          .detail-label {
            font-weight: 600;
            color: #FF5D8F;
            margin-right: 10px;
          }
          
          .signature {
            margin-top: 50px;
            text-align: center;
          }
          
          .signature-line {
            border-top: 2px solid #592E36;
            width: 300px;
            margin: 20px auto 10px;
          }
          
          .signature-name {
            font-family: 'Caveat', cursive;
            font-size: 32px;
            color: #FF5D8F;
            font-weight: 700;
          }
          
          .date {
            text-align: center;
            color: #8C5E69;
            margin-top: 30px;
            font-size: 16px;
          }
          
          .seal {
            position: absolute;
            bottom: 40px;
            right: 60px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #FF5D8F;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Fraunces', serif;
            font-size: 12px;
            text-align: center;
            border: 4px solid #FF9EAA;
            transform: rotate(-15deg);
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <h1>🎊 Official Certificate 🎊</h1>
          <h2>Valentine Application Approved</h2>
          <div class="subtitle">This certifies that</div>
          <div class="recipient">Sona</div>
          <div class="subtitle">has been officially selected and approved for the prestigious position of</div>
          <div class="recipient" style="font-size: 28px;">Shri Kant Pandey's Valentine (2026 Edition)</div>
          
          <div class="details">
            <div class="detail-item">
              <span class="detail-label">Identity Confirmed:</span>
              <span>${answers.q1}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Relationship Status:</span>
              <span>${answers.q2}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Cuteness Level:</span>
              <span>${answers.q3}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Preferred Date:</span>
              <span>${answers.q4}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Romance Mode:</span>
              <span>${answers.q5}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Snack Choice:</span>
              <span>${answers.q6}</span>
            </div>
          </div>
          
          <div class="subtitle" style="margin-top: 30px;">
            ✅ Authorized benefits include:<br/>
            • Date planning<br/>
            • Surprise arrangements<br/>
            • Unlimited kisses 😘
          </div>
          
          <div class="signature">
            <div class="signature-line"></div>
            <div class="signature-name">Shri Kant Pandey</div>
            <div style="color: #8C5E69;">Your Forever Valentine</div>
          </div>
          
          <div class="date">
            Issued on: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br/>
            Certificate No: VP-2026-${Math.random().toString(36).substr(2, 9).toUpperCase()}
          </div>
          
          <div class="seal">
            CERTIFIED<br/>LOVE<br/>2026
          </div>
        </div>
      </body>
      </html>
    `;

    // Create a blob and download
    const blob = new Blob([certificateHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sona_Valentine_Certificate_2026.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShareWhatsApp = () => {
    const message = `💘 *VALENTINE APPLICATION APPROVED* 💘

🎊 Sona's Official Valentine Certificate 🎊

I, Sona, have been officially approved as Shri Pandey's Valentine (2026 Edition)!

📋 *My Responses:*

*Round 1: Identity Verification*
Q1. My name: ${answers.q1}
Q2. Shri Pandey is my: ${answers.q2}
Q3. His cuteness level: ${answers.q3}

*Round 2: Romance Preferences*
Q4. Ideal Valentine plan: ${answers.q4}
Q5. Mood level: ${answers.q5}
Q6. Snack expectation: ${answers.q6}

✅ *Benefits Unlocked:*
• Date planning
• Surprise arrangements
• Unlimited kisses 😘

— Yours forever,
Shri Pandey 😌💘

Certificate No: VP-2026-${Math.random().toString(36).substr(2, 9).toUpperCase()}
Date: ${new Date().toLocaleDateString()}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const progress = ((step - 1) / 3) * 100;

  const pageVariants = {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-[#FFF9FA] relative flex flex-col items-center justify-start sm:justify-center py-4 sm:py-12 px-3 sm:px-4 overflow-x-hidden">
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
          numberOfPieces={300}
          colors={['#FF9EAA', '#C5A3FF', '#FF5D8F', '#88D498', '#FFF0F5']}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl my-auto">
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
              <FinalPage 
                onAccept={handleAccept} 
                showThankYou={showThankYou} 
                onDownloadCertificate={handleDownloadCertificate}
                onShareWhatsApp={handleShareWhatsApp}
              />
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
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden"
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

      <div className="relative text-center space-y-4 sm:space-y-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-2 sm:mb-4"
        >
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF5D8F] fill-[#FF5D8F]" />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#592E36] leading-tight"
          style={{ fontFamily: 'Fraunces, serif' }}
          data-testid="home-title"
        >
          💘 Sona's Valentine Verification Portal
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 sm:space-y-4"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Hello Sona,
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            You have been shortlisted for the prestigious position of:
          </p>
          <div className="bg-[#FFF0F5] border-2 border-[#FF9EAA] rounded-xl sm:rounded-2xl p-3 sm:p-4 inline-block">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF5D8F]" style={{ fontFamily: 'Fraunces, serif' }}>
              ✅ Shri Kant Pandey's Valentine (2026 Edition)
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Before proceeding, kindly complete this short questionnaire.
          </p>
          <p className="text-sm sm:text-base md:text-lg italic text-[#FF5D8F]" style={{ fontFamily: 'Caveat, cursive' }}>
            (Refusal is not an option 😌)
          </p>
        </motion.div>

        {/* Image Box for Personalization - Sona's Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="my-4 sm:my-6 mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 border-[#FF9EAA]"
        >
          <img 
            src="https://customer-assets.emergentagent.com/job_cupid-hq-sona/artifacts/rwi446tg_1000222571.png"
            alt="Sona"
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
          className="bg-[#FF5D8F] hover:bg-[#FF3B75] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 mx-auto mt-6 sm:mt-8 min-h-[48px]"
          style={{ fontFamily: 'Nunito, sans-serif' }}
          data-testid="start-questionnaire-btn"
        >
          <span>✅ Start Questionnaire</span>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xs sm:text-sm md:text-base font-medium text-[#8C5E69] mt-6 sm:mt-8"
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
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden"
      data-testid="round-one-page"
    >
      {/* Progress Bar */}
      <div className="mb-6 sm:mb-8">
        <Progress value={progress} className="h-2 bg-[#F0E6EF]" data-testid="progress-bar" />
        <p className="text-xs sm:text-sm text-center mt-2 text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>Round 1 of 3</p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#592E36] mb-2" style={{ fontFamily: 'Fraunces, serif' }} data-testid="round-one-title">
            🪪 Round 1: Identity Verification
          </h2>
          <p className="text-base sm:text-lg text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Please confirm the following details to continue:
          </p>
        </div>

        {/* Q1 */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q1. Your name is:</Label>
          <RadioGroup value={answers.q1} onValueChange={(val) => onAnswer('q1', val)} data-testid="q1-radio-group">
            <div className="space-y-2 sm:space-y-3">
              {['Sona', 'Sonaaa', 'The cutest human alive 😌'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q1 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3 sm:gap-4 min-h-[48px]`}
                  data-testid={`q1-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q1-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q1-${idx}`} className="text-base sm:text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q1 === option && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q2 */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q2. Shri Kant Pandey is your:</Label>
          <RadioGroup value={answers.q2} onValueChange={(val) => onAnswer('q2', val)} data-testid="q2-radio-group">
            <div className="space-y-2 sm:space-y-3">
              {['Husband ✅', 'Best Husband ✅', 'Full-time admirer ✅😂'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q2 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3 sm:gap-4 min-h-[48px]`}
                  data-testid={`q2-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q2-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q2-${idx}`} className="text-base sm:text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q2 === option && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q3 */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q3. How cute is Shri Kant Pandey today?</Label>
          <RadioGroup value={answers.q3} onValueChange={(val) => onAnswer('q3', val)} data-testid="q3-radio-group">
            <div className="space-y-2 sm:space-y-3">
              {['Cute', 'Very cute', 'Extremely cute (send him kisses) 😤❤️'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q3 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3 sm:gap-4 min-h-[48px]`}
                  data-testid={`q3-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q3-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q3-${idx}`} className="text-base sm:text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q3 === option && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
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
          className={`w-full font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 mt-6 sm:mt-8 min-h-[48px] ${
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
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden"
      data-testid="round-two-page"
    >
      {/* Progress Bar */}
      <div className="mb-6 sm:mb-8">
        <Progress value={progress} className="h-2 bg-[#F0E6EF]" />
        <p className="text-xs sm:text-sm text-center mt-2 text-[#8C5E69]" style={{ fontFamily: 'Nunito, sans-serif' }}>Round 2 of 3</p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#592E36] mb-2" style={{ fontFamily: 'Fraunces, serif' }} data-testid="round-two-title">
            💞 Round 2: Romance Readiness Test
          </h2>
          <p className="text-base sm:text-lg text-[#8C5E69] italic" style={{ fontFamily: 'Caveat, cursive' }}>
            Your preferences will be noted seriously (but not guaranteed 😌).
          </p>
        </div>

        {/* Q4 */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q4. Choose your ideal Valentine plan:</Label>
          <RadioGroup value={answers.q4} onValueChange={(val) => onAnswer('q4', val)} data-testid="q4-radio-group">
            <div className="space-y-2 sm:space-y-3">
              {['Candlelight dinner 🍽️', 'Movie + snacks 🍿', 'Long drive + music 🎶', 'Home date + cuddles 🛌'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q4 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3 sm:gap-4 min-h-[48px]`}
                  data-testid={`q4-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q4-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q4-${idx}`} className="text-base sm:text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q4 === option && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q5 */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q5. Valentine mood level:</Label>
          <RadioGroup value={answers.q5} onValueChange={(val) => onAnswer('q5', val)} data-testid="q5-radio-group">
            <div className="space-y-2 sm:space-y-3">
              {['Normal husband mode 😌', 'Extra romantic 🥰', 'Dangerous romance 😈💘'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q5 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3 sm:gap-4 min-h-[48px]`}
                  data-testid={`q5-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q5-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q5-${idx}`} className="text-base sm:text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q5 === option && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Q6 */}
        <div className="space-y-3">
          <Label className="text-base sm:text-lg font-semibold text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>Q6. Valentine snack expectation:</Label>
          <RadioGroup value={answers.q6} onValueChange={(val) => onAnswer('q6', val)} data-testid="q6-radio-group">
            <div className="space-y-2 sm:space-y-3">
              {['Chocolate 🍫', 'Dessert 🍰', 'Pizza 🍕', 'Anything if you feed me 😌'].map((option, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer border-2 ${answers.q6 === option ? 'border-[#FF5D8F] bg-[#FFF0F5]' : 'border-transparent hover:border-[#FF9EAA] hover:bg-[#FFF0F5]'} bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center gap-3 sm:gap-4 min-h-[48px]`}
                  data-testid={`q6-option-${idx}`}
                >
                  <RadioGroupItem value={option} id={`q6-${idx}`} className="text-[#FF5D8F]" />
                  <Label htmlFor={`q6-${idx}`} className="text-base sm:text-lg cursor-pointer flex-1" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {option}
                  </Label>
                  {answers.q6 === option && <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5D8F] fill-[#FF5D8F]" />}
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
          className={`w-full font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 mt-6 sm:mt-8 min-h-[48px] ${
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

const FinalPage = ({ onAccept, showThankYou, onDownloadCertificate, onShareWhatsApp }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_20px_50px_rgb(255,158,170,0.15)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden"
      data-testid="final-page"
    >
      {/* Background Image for Final Page */}
      <div 
        className="absolute inset-0 opacity-10 rounded-2xl sm:rounded-3xl"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1653151189412-c190a965ca4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxwaW5rJTIwaGVhcnQlMjBiYWxsb29uJTIwcGFzdGVsJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzAyMjY1NjZ8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative space-y-6 sm:space-y-8">
        {!showThankYou ? (
          <>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex justify-center mb-3 sm:mb-4"
              >
                <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-[#FF5D8F]" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#592E36] mb-4 sm:mb-6" style={{ fontFamily: 'Fraunces, serif' }} data-testid="final-title">
                🎉 Final Confirmation
              </h2>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#FFF0F5] border-2 border-[#FF9EAA] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Dear Sona,
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                After careful evaluation, emotional background checks, and love verification…
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF5D8F] my-4 sm:my-6" style={{ fontFamily: 'Fraunces, serif' }}>
                💘 Will you be my Valentine?
              </p>
            </motion.div>

            {/* Image Box - Couple Photo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto w-48 h-48 sm:w-64 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-[#C5A3FF]"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_cupid-hq-sona/artifacts/d4x6167q_1000238583.jpg"
                alt="Sona and Shri Kant Pandey"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAccept}
                className="bg-[#FF5D8F] hover:bg-[#FF3B75] text-white font-bold py-3 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg min-h-[48px]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="accept-yes-btn"
              >
                ✅ YES
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAccept}
                className="bg-[#C5A3FF] hover:bg-[#B18FFF] text-white font-bold py-3 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg min-h-[48px]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="accept-yes-chocolate-btn"
              >
                ✅ YES (with chocolate 🍫)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAccept}
                className="bg-[#88D498] hover:bg-[#6FC084] text-white font-bold py-3 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg min-h-[48px]"
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
            className="text-center space-y-4 sm:space-y-6"
            data-testid="thank-you-section"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="flex justify-center"
            >
              <CheckCircle2 className="w-20 h-20 sm:w-24 sm:h-24 text-[#88D498]" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#592E36]" style={{ fontFamily: 'Fraunces, serif' }}>
              🎊 Application Approved!
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FF5D8F]" style={{ fontFamily: 'Fraunces, serif' }}>
              Congratulations Sona ❤️
            </p>

            <div className="bg-[#FFF0F5] border-2 border-[#FF9EAA] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-left space-y-3">
              <p className="text-base sm:text-lg md:text-xl text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Your Valentine (Shri Kant Pandey) will now proceed with:
              </p>
              <div className="space-y-2 text-base sm:text-lg">
                <p className="flex items-center gap-3 text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#88D498] flex-shrink-0" />
                  date planning
                </p>
                <p className="flex items-center gap-3 text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#88D498] flex-shrink-0" />
                  surprise arrangements
                </p>
                <p className="flex items-center gap-3 text-[#592E36]" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#88D498] flex-shrink-0" />
                  unlimited kisses 😘
                </p>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t-2 border-[#FF9EAA]">
              <p className="text-lg sm:text-xl md:text-2xl italic text-[#592E36]" style={{ fontFamily: 'Caveat, cursive' }}>
                — Yours forever,
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF5D8F] mt-2" style={{ fontFamily: 'Fraunces, serif' }}>
                Shri Kant Pandey 😌💘
              </p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3 mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDownloadCertificate}
                className="w-full bg-[#FF5D8F] hover:bg-[#FF3B75] text-white font-bold py-3 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 min-h-[48px]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="download-certificate-btn"
              >
                <Download className="w-5 h-5" />
                <span>Download Certificate</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onShareWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 sm:py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2 min-h-[48px]"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                data-testid="share-whatsapp-btn"
              >
                <Share2 className="w-5 h-5" />
                <span>Share on WhatsApp</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default App;
