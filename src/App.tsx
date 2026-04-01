import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Server, Play, CheckCircle2, XCircle, RotateCcw, ArrowRight,
  Globe, Code, Network, Cpu, Settings, Layout, Brain, Shield, Database, Lightbulb
} from 'lucide-react';
import { questions, Category, Question } from './data/questions';

type GameState = 'start' | 'playing' | 'result';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'All') return questions;
    return questions.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleStart = (category: Category | 'All') => {
    setSelectedCategory(category);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
  };

  const handleAnswer = (optionIndex: number) => {
    if (userAnswers[currentQuestion.id] !== undefined) return;
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) setScore(s => s + 1);
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      setGameState('result');
    }
  };

  const handleRestart = () => {
    setGameState('start');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600">
            <Code2 className="w-6 h-6" />
            <span>National IT Competency Quiz</span>
          </div>
          {gameState === 'playing' && (
            <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {currentQuestionIndex + 1} / {filteredQuestions.length}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <StartScreen key="start" onStart={handleStart} />
          )}
          {gameState === 'playing' && currentQuestion && (
            <QuizScreen 
              key="playing"
              question={currentQuestion}
              userAnswer={userAnswers[currentQuestion.id]}
              onAnswer={handleAnswer}
              onNext={handleNext}
              isLast={currentQuestionIndex === filteredQuestions.length - 1}
            />
          )}
          {gameState === 'result' && (
            <ResultScreen 
              key="result"
              score={score}
              total={filteredQuestions.length}
              questions={filteredQuestions}
              userAnswers={userAnswers}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function StartScreen({ onStart }: { onStart: (category: Category | 'All') => void }) {
  const categories: { id: Category | 'All', label: string, icon: React.ReactNode, color: string, count: number }[] = [
    { id: 'All', label: 'Comprehensive Exam (All Topics)', icon: <Play className="w-6 h-6" />, color: 'bg-indigo-600', count: questions.length },
    { id: 'Computer Networks', label: 'Networks & Cloud', icon: <Globe className="w-5 h-5" />, color: 'bg-blue-500', count: questions.filter(q => q.category === 'Computer Networks').length },
    { id: 'Programming', label: 'Programming (C++/Java/Py)', icon: <Code className="w-5 h-5" />, color: 'bg-green-600', count: questions.filter(q => q.category === 'Programming').length },
    { id: 'Data Structures & Algorithms', label: 'Data Structures & Algorithms', icon: <Network className="w-5 h-5" />, color: 'bg-purple-500', count: questions.filter(q => q.category === 'Data Structures & Algorithms').length },
    { id: 'Operating Systems', label: 'Operating Systems', icon: <Cpu className="w-5 h-5" />, color: 'bg-gray-600', count: questions.filter(q => q.category === 'Operating Systems').length },
    { id: 'Software Engineering', label: 'Software Engineering', icon: <Settings className="w-5 h-5" />, color: 'bg-pink-500', count: questions.filter(q => q.category === 'Software Engineering').length },
    { id: 'Web Development', label: 'Web Development', icon: <Layout className="w-5 h-5" />, color: 'bg-orange-500', count: questions.filter(q => q.category === 'Web Development').length },
    { id: 'AI & Data Analytics', label: 'AI & Data Analytics', icon: <Brain className="w-5 h-5" />, color: 'bg-teal-500', count: questions.filter(q => q.category === 'AI & Data Analytics').length },
    { id: 'Cyber Security', label: 'Cyber Security', icon: <Shield className="w-5 h-5" />, color: 'bg-red-500', count: questions.filter(q => q.category === 'Cyber Security').length },
    { id: 'Databases', label: 'Databases', icon: <Database className="w-5 h-5" />, color: 'bg-yellow-500', count: questions.filter(q => q.category === 'Databases').length },
    { id: 'Problem Solving', label: 'Problem Solving & Analytical', icon: <Lightbulb className="w-5 h-5" />, color: 'bg-cyan-500', count: questions.filter(q => q.category === 'Problem Solving').length },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
        National IT Competency Test Prep
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
        Deep-dive MCQs covering every topic from the official syllabus. Select a subject to begin your practice.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onStart(cat.id)}
            className={`group relative flex flex-col items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left ${cat.id === 'All' ? 'sm:col-span-2 lg:col-span-3 bg-indigo-50/50' : ''}`}
          >
            <div className={`p-3 rounded-xl text-white mb-4 ${cat.color}`}>
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">{cat.label}</h3>
            <p className="text-slate-500 text-sm">{cat.count} Questions</p>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function QuizScreen({ question, userAnswer, onAnswer, onNext, isLast }: any) {
  const isAnswered = userAnswer !== undefined;
  return (
    <motion.div key={question.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-6">
        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          {question.category}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((option: string, idx: number) => {
            let stateClass = "bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700";
            let icon = null;
            if (isAnswered) {
              if (idx === question.correctAnswer) {
                stateClass = "bg-green-50 border-green-500 text-green-900";
                icon = <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />;
              } else if (idx === userAnswer) {
                stateClass = "bg-red-50 border-red-500 text-red-900";
                icon = <XCircle className="w-5 h-5 text-red-500 shrink-0" />;
              } else {
                stateClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
              }
            }
            return (
              <button key={idx} disabled={isAnswered} onClick={() => onAnswer(idx)} className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left font-medium text-lg ${stateClass}`}>
                <span className="pr-4">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>
      {isAnswered && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
          <button onClick={onNext} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
            {isLast ? 'See Results' : 'Next Question'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

function ResultScreen({ score, total, questions, userAnswers, onRestart }: any) {
  const percentage = Math.round((score / total) * 100);
  let message = "Good effort!";
  if (percentage >= 90) message = "Outstanding!";
  else if (percentage >= 70) message = "Great job!";
  else if (percentage < 50) message = "Keep practicing!";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{message}</h2>
        <p className="text-slate-500 mb-8">You completed the quiz.</p>
        <div className="flex justify-center items-center gap-8 mb-10">
          <div className="text-center">
            <div className="text-5xl font-black text-indigo-600 mb-1">{score}</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Correct</div>
          </div>
          <div className="w-px h-16 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-slate-800 mb-1">{total}</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Total</div>
          </div>
          <div className="w-px h-16 bg-slate-200"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-indigo-600 mb-1">{percentage}%</div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Score</div>
          </div>
        </div>
        <button onClick={onRestart} className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-colors">
          <RotateCcw className="w-5 h-5" />
          Take Another Quiz
        </button>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-6 px-2">Review Answers</h3>
        {questions.map((q: any, i: number) => {
          const userAnswer = userAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          return (
            <div key={q.id} className={`p-6 rounded-2xl border ${isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                  {isCorrect ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-500" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-500 mb-1">Question {i + 1} • {q.category}</div>
                  <h4 className="font-bold text-lg mb-3">{q.question}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-bold text-slate-400 w-16 shrink-0">Your Answer:</span>
                      <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {userAnswer !== undefined ? q.options[userAnswer] : 'Skipped'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-bold text-slate-400 w-16 shrink-0">Correct:</span>
                        <span className="font-medium text-green-700">{q.options[q.correctAnswer]}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
