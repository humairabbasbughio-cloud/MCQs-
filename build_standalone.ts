import fs from 'fs';
import path from 'path';

// 1. Read questions.ts
const questionsTs = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'questions.ts'), 'utf-8');

// 2. Extract JSON
const jsonMatch = questionsTs.match(/export const questions: Question\[\] = (\[[\s\S]*\]);/);
if (!jsonMatch) {
  console.error("Could not find questions JSON");
  process.exit(1);
}
const questionsJson = jsonMatch[1];

// 3. HTML Template
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>National IT Competency Quiz</title>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>
<style>
  .hidden { display: none !important; }
</style>
</head>
<body class="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
  <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600">
        <i data-lucide="code-2" class="w-6 h-6"></i>
        <span>National IT Competency Quiz</span>
      </div>
      <div id="progress-container" class="hidden text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
        <span id="current-question-num">1</span> / <span id="total-questions-num">50</span>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8 md:py-12" id="app-container">
    <!-- Start Screen -->
    <div id="start-screen" class="max-w-5xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">National IT Competency Test Prep</h1>
      <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Deep-dive MCQs covering every topic from the official syllabus. Select a subject to begin your practice.</p>
      <div id="categories-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Categories injected here -->
      </div>
    </div>

    <!-- Quiz Screen -->
    <div id="quiz-screen" class="max-w-3xl mx-auto hidden">
      <div class="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 mb-6">
        <div id="question-category" class="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full mb-6">Category</div>
        <h2 id="question-text" class="text-2xl md:text-3xl font-bold mb-8 leading-tight">Question text</h2>
        <div id="options-container" class="space-y-3">
          <!-- Options injected here -->
        </div>
      </div>
      <div id="next-container" class="flex justify-end hidden">
        <button id="next-btn" class="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
          <span id="next-btn-text">Next Question</span>
          <i data-lucide="arrow-right" class="w-5 h-5"></i>
        </button>
      </div>
    </div>

    <!-- Result Screen -->
    <div id="result-screen" class="max-w-4xl mx-auto hidden">
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 text-center mb-8">
        <h2 id="result-message" class="text-3xl font-bold mb-2">Good effort!</h2>
        <p class="text-slate-500 mb-8">You completed the quiz.</p>
        <div class="flex justify-center items-center gap-8 mb-10">
          <div class="text-center">
            <div id="score-correct" class="text-5xl font-black text-indigo-600 mb-1">0</div>
            <div class="text-sm font-medium text-slate-400 uppercase tracking-wider">Correct</div>
          </div>
          <div class="w-px h-16 bg-slate-200"></div>
          <div class="text-center">
            <div id="score-total" class="text-5xl font-black text-slate-800 mb-1">0</div>
            <div class="text-sm font-medium text-slate-400 uppercase tracking-wider">Total</div>
          </div>
          <div class="w-px h-16 bg-slate-200"></div>
          <div class="text-center">
            <div id="score-percentage" class="text-5xl font-black text-indigo-600 mb-1">0%</div>
            <div class="text-sm font-medium text-slate-400 uppercase tracking-wider">Score</div>
          </div>
        </div>
        <button id="restart-btn" class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-colors">
          <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
          Take Another Quiz
        </button>
      </div>
      <div class="space-y-4">
        <h3 class="text-xl font-bold mb-6 px-2">Review Answers</h3>
        <div id="review-container" class="space-y-4">
          <!-- Reviews injected here -->
        </div>
      </div>
    </div>
  </main>

  <script>
    const allQuestions = ${questionsJson};
    
    // App State
    let currentCategory = 'All';
    let filteredQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = {};
    let score = 0;

    const categories = [
      { id: 'All', label: 'Comprehensive Exam (All Topics)', icon: 'play', color: 'bg-indigo-600', count: allQuestions.length },
      { id: 'Computer Networks', label: 'Networks & Cloud', icon: 'globe', color: 'bg-blue-500', count: allQuestions.filter(q => q.category === 'Computer Networks').length },
      { id: 'Programming', label: 'Programming (C++/Java/Py)', icon: 'code', color: 'bg-green-600', count: allQuestions.filter(q => q.category === 'Programming').length },
      { id: 'Data Structures & Algorithms', label: 'Data Structures & Algorithms', icon: 'network', color: 'bg-purple-500', count: allQuestions.filter(q => q.category === 'Data Structures & Algorithms').length },
      { id: 'Operating Systems', label: 'Operating Systems', icon: 'cpu', color: 'bg-gray-600', count: allQuestions.filter(q => q.category === 'Operating Systems').length },
      { id: 'Software Engineering', label: 'Software Engineering', icon: 'settings', color: 'bg-pink-500', count: allQuestions.filter(q => q.category === 'Software Engineering').length },
      { id: 'Web Development', label: 'Web Development', icon: 'layout', color: 'bg-orange-500', count: allQuestions.filter(q => q.category === 'Web Development').length },
      { id: 'AI & Data Analytics', label: 'AI & Data Analytics', icon: 'brain', color: 'bg-teal-500', count: allQuestions.filter(q => q.category === 'AI & Data Analytics').length },
      { id: 'Cyber Security', label: 'Cyber Security', icon: 'shield', color: 'bg-red-500', count: allQuestions.filter(q => q.category === 'Cyber Security').length },
      { id: 'Databases', label: 'Databases', icon: 'database', color: 'bg-yellow-500', count: allQuestions.filter(q => q.category === 'Databases').length },
      { id: 'Problem Solving', label: 'Problem Solving & Analytical', icon: 'lightbulb', color: 'bg-cyan-500', count: allQuestions.filter(q => q.category === 'Problem Solving').length },
    ];

    // DOM Elements
    const screens = {
      start: document.getElementById('start-screen'),
      quiz: document.getElementById('quiz-screen'),
      result: document.getElementById('result-screen')
    };
    const progressContainer = document.getElementById('progress-container');
    const currentQuestionNum = document.getElementById('current-question-num');
    const totalQuestionsNum = document.getElementById('total-questions-num');
    const categoriesGrid = document.getElementById('categories-grid');
    
    // Quiz Elements
    const questionCategory = document.getElementById('question-category');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextContainer = document.getElementById('next-container');
    const nextBtn = document.getElementById('next-btn');
    const nextBtnText = document.getElementById('next-btn-text');

    // Result Elements
    const resultMessage = document.getElementById('result-message');
    const scoreCorrect = document.getElementById('score-correct');
    const scoreTotal = document.getElementById('score-total');
    const scorePercentage = document.getElementById('score-percentage');
    const reviewContainer = document.getElementById('review-container');
    const restartBtn = document.getElementById('restart-btn');

    function showScreen(screenName) {
      Object.values(screens).forEach(s => s.classList.add('hidden'));
      screens[screenName].classList.remove('hidden');
      if (screenName === 'quiz') {
        progressContainer.classList.remove('hidden');
      } else {
        progressContainer.classList.add('hidden');
      }
    }

    function initStartScreen() {
      categoriesGrid.innerHTML = '';
      categories.forEach(cat => {
        const btn = document.createElement('button');
        const extraClasses = cat.id === 'All' ? 'sm:col-span-2 lg:col-span-3 bg-indigo-50/50' : '';
        btn.className = \`group relative flex flex-col items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left \${extraClasses}\`;
        btn.innerHTML = \`
          <div class="p-3 rounded-xl text-white mb-4 \${cat.color}">
            <i data-lucide="\${cat.icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="text-xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">\${cat.label}</h3>
          <p class="text-slate-500 text-sm">\${cat.count} Questions</p>
        \`;
        btn.onclick = () => startQuiz(cat.id);
        categoriesGrid.appendChild(btn);
      });
      lucide.createIcons();
    }

    function startQuiz(categoryId) {
      currentCategory = categoryId;
      filteredQuestions = categoryId === 'All' ? allQuestions : allQuestions.filter(q => q.category === categoryId);
      currentQuestionIndex = 0;
      userAnswers = {};
      score = 0;
      totalQuestionsNum.textContent = filteredQuestions.length;
      renderQuestion();
      showScreen('quiz');
    }

    function renderQuestion() {
      const q = filteredQuestions[currentQuestionIndex];
      currentQuestionNum.textContent = currentQuestionIndex + 1;
      questionCategory.textContent = q.category;
      questionText.textContent = q.question;
      
      optionsContainer.innerHTML = '';
      nextContainer.classList.add('hidden');

      const isAnswered = userAnswers[q.id] !== undefined;

      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        
        let stateClass = "bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700";
        let iconHtml = '';

        if (isAnswered) {
          if (idx === q.correctAnswer) {
            stateClass = "bg-green-50 border-green-500 text-green-900";
            iconHtml = '<i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 shrink-0"></i>';
          } else if (idx === userAnswers[q.id]) {
            stateClass = "bg-red-50 border-red-500 text-red-900";
            iconHtml = '<i data-lucide="x-circle" class="w-5 h-5 text-red-500 shrink-0"></i>';
          } else {
            stateClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50";
          }
        }

        btn.className = \`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left font-medium text-lg \${stateClass}\`;
        btn.innerHTML = \`<span class="pr-4">\${opt}</span>\${iconHtml}\`;
        
        if (!isAnswered) {
          btn.onclick = () => handleAnswer(idx);
        } else {
          btn.disabled = true;
        }
        
        optionsContainer.appendChild(btn);
      });

      if (isAnswered) {
        nextContainer.classList.remove('hidden');
        nextBtnText.textContent = currentQuestionIndex === filteredQuestions.length - 1 ? 'See Results' : 'Next Question';
      }

      lucide.createIcons();
    }

    function handleAnswer(idx) {
      const q = filteredQuestions[currentQuestionIndex];
      if (userAnswers[q.id] !== undefined) return;

      userAnswers[q.id] = idx;
      if (idx === q.correctAnswer) score++;

      renderQuestion();
    }

    nextBtn.onclick = () => {
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
      } else {
        showResults();
      }
    };

    function showResults() {
      const total = filteredQuestions.length;
      const percentage = Math.round((score / total) * 100);
      
      let message = "Good effort!";
      if (percentage >= 90) message = "Outstanding!";
      else if (percentage >= 70) message = "Great job!";
      else if (percentage < 50) message = "Keep practicing!";

      resultMessage.textContent = message;
      scoreCorrect.textContent = score;
      scoreTotal.textContent = total;
      scorePercentage.textContent = percentage + '%';

      reviewContainer.innerHTML = '';
      filteredQuestions.forEach((q, i) => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;
        
        const div = document.createElement('div');
        div.className = \`p-6 rounded-2xl border \${isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}\`;
        
        const iconHtml = isCorrect 
          ? '<i data-lucide="check-circle-2" class="w-6 h-6 text-green-500"></i>'
          : '<i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>';

        let reviewHtml = \`
          <div class="flex gap-4">
            <div class="mt-1 shrink-0">\${iconHtml}</div>
            <div class="flex-1">
              <div class="text-sm font-medium text-slate-500 mb-1">Question \${i + 1} • \${q.category}</div>
              <h4 class="font-bold text-lg mb-3">\${q.question}</h4>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="text-sm font-bold text-slate-400 w-16 shrink-0">Your Answer:</span>
                  <span class="font-medium \${isCorrect ? 'text-green-700' : 'text-red-700'}">
                    \${userAnswer !== undefined ? q.options[userAnswer] : 'Skipped'}
                  </span>
                </div>
        \`;

        if (!isCorrect) {
          reviewHtml += \`
                <div class="flex items-start gap-2">
                  <span class="text-sm font-bold text-slate-400 w-16 shrink-0">Correct:</span>
                  <span class="font-medium text-green-700">\${q.options[q.correctAnswer]}</span>
                </div>
          \`;
        }

        reviewHtml += \`
              </div>
            </div>
          </div>
        \`;
        div.innerHTML = reviewHtml;
        reviewContainer.appendChild(div);
      });

      showScreen('result');
      lucide.createIcons();
    }

    restartBtn.onclick = () => {
      showScreen('start');
    };

    // Initialize
    initStartScreen();
    showScreen('start');

  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(process.cwd(), 'index.html'), htmlTemplate);
console.log("Standalone index.html generated successfully!");
