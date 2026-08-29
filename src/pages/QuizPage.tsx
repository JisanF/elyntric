import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Brain, CheckCircle, Star } from 'lucide-react';
import { Link } from '../router';
import AnimatedSection from '../components/AnimatedSection';

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: 'What is your current experience level?',
    options: ['Complete beginner', 'Some experience', 'I know the basics', 'I have a business already'],
  },
  {
    question: 'What is your main goal?',
    options: ['Start an online business', 'Build a personal brand', 'Learn new skills', 'Make money online'],
  },
  {
    question: 'How much time can you dedicate per week?',
    options: ['Less than 5 hours', '5-10 hours', '10-20 hours', '20+ hours'],
  },
  {
    question: 'What is your budget to get started?',
    options: ['$0 - Free only', 'Under $50', '$50-$200', '$200+'],
  },
  {
    question: 'What interests you most?',
    options: ['Content creation', 'E-commerce', 'Freelancing', 'Affiliate marketing'],
  },
];

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-20 px-4">
      <div className="max-w-2xl mx-auto py-12">
        <AnimatedSection animation="fade-up">
          <Link to="/" className="inline-flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </AnimatedSection>

        <AnimatedSection animation="scale-up">
          <div className="flex items-center justify-center mb-8 group">
            <Brain className="w-10 h-10 text-cyan-500 dark:text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Smart Quiz
            </h1>
          </div>
        </AnimatedSection>

        {!showResult ? (
          <AnimatedSection key={currentQuestion} animation="fade-up">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i <= currentQuestion ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">{questions[currentQuestion].question}</h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-500 dark:hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700/50 transition-all duration-300 group flex items-center justify-between"
                  >
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {option}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection animation="scale-up">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-800 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                Your Path is Ready!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Based on your answers, here is your personalized recommendation:</p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 my-6 border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-200">
                  Start with free resources and build foundational skills in your area of interest.
                  Focus on consistency over intensity — even 30 minutes a day compounds into real progress.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/ai"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Ask elynAI for Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button
                  onClick={handleRestart}
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
