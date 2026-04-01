export type Category = 'HTML' | 'CSS' | 'JavaScript' | 'Backend + General';

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  { id: 1, category: 'HTML', question: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Hyper Text Marketing Language', 'Hyper Tool Multi Language'], correctAnswer: 1 },
  { id: 2, category: 'HTML', question: 'Which tag is used for the largest heading?', options: ['<h6>', '<head>', '<h1>', '<heading>'], correctAnswer: 2 },
  { id: 3, category: 'HTML', question: 'Which element is semantic?', options: ['<div>', '<span>', '<section>', '<b>'], correctAnswer: 2 },
  { id: 4, category: 'HTML', question: 'Which tag is used to insert an image?', options: ['<img>', '<image>', '<src>', '<pic>'], correctAnswer: 0 },
  { id: 5, category: 'HTML', question: 'Which attribute specifies image path?', options: ['link', 'src', 'href', 'path'], correctAnswer: 1 },
  { id: 6, category: 'HTML', question: 'HTML is:', options: ['Programming Language', 'Styling Language', 'Markup Language', 'Database'], correctAnswer: 2 },
  { id: 7, category: 'HTML', question: 'Which tag creates a hyperlink?', options: ['<a>', '<link>', '<href>', '<hyper>'], correctAnswer: 0 },
  { id: 8, category: 'HTML', question: 'Which tag is used for forms?', options: ['<input>', '<form>', '<submit>', '<button>'], correctAnswer: 1 },
  { id: 9, category: 'HTML', question: 'What does <br> do?', options: ['Bold', 'Break line', 'Border', 'Background'], correctAnswer: 1 },
  { id: 10, category: 'HTML', question: 'Which tag is used for tables?', options: ['<table>', '<tr>', '<td>', 'All'], correctAnswer: 3 },
  { id: 11, category: 'HTML', question: 'Which tag defines list items?', options: ['<li>', '<ul>', '<ol>', '<list>'], correctAnswer: 0 },
  { id: 12, category: 'HTML', question: 'Inline element?', options: ['<div>', '<p>', '<span>', '<section>'], correctAnswer: 2 },
  { id: 13, category: 'HTML', question: 'Which tag is used for metadata?', options: ['<meta>', '<data>', '<info>', '<head>'], correctAnswer: 0 },
  { id: 14, category: 'HTML', question: 'HTML file extension?', options: ['.ht', '.html', '.web', '.doc'], correctAnswer: 1 },
  { id: 15, category: 'HTML', question: 'Which tag defines navigation?', options: ['<nav>', '<menu>', '<navigate>', '<link>'], correctAnswer: 0 },

  { id: 16, category: 'CSS', question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], correctAnswer: 1 },
  { id: 17, category: 'CSS', question: 'Which property changes text color?', options: ['text-color', 'color', 'font-color', 'text-style'], correctAnswer: 1 },
  { id: 18, category: 'CSS', question: 'Box model includes?', options: ['Margin', 'Padding', 'Border', 'All'], correctAnswer: 3 },
  { id: 19, category: 'CSS', question: 'Flexbox direction property?', options: ['flex-dir', 'flex-direction', 'direction', 'flex'], correctAnswer: 1 },
  { id: 20, category: 'CSS', question: 'Grid layout uses?', options: ['grid-template', 'flex', 'float', 'display:inline'], correctAnswer: 0 },
  { id: 21, category: 'CSS', question: 'Which selector targets class?', options: ['#', '.', '*', '@'], correctAnswer: 1 },
  { id: 22, category: 'CSS', question: 'Which is ID selector?', options: ['.id', '#id', 'id', '*id'], correctAnswer: 1 },
  { id: 23, category: 'CSS', question: 'Responsive design uses?', options: ['Media queries', 'Tables', 'Inline CSS', 'Fonts'], correctAnswer: 0 },
  { id: 24, category: 'CSS', question: 'CSS file extension?', options: ['.style', '.css', '.design', '.web'], correctAnswer: 1 },
  { id: 25, category: 'CSS', question: 'Which property controls spacing inside element?', options: ['margin', 'padding', 'border', 'space'], correctAnswer: 1 },
  { id: 26, category: 'CSS', question: 'Position absolute relates to?', options: ['Parent', 'Screen', 'Nearest positioned ancestor', 'None'], correctAnswer: 2 },
  { id: 27, category: 'CSS', question: 'z-index controls?', options: ['Size', 'Stack order', 'Color', 'Position'], correctAnswer: 1 },
  { id: 28, category: 'CSS', question: 'display:flex does?', options: ['Grid', 'Layout alignment', 'Animation', 'Color'], correctAnswer: 1 },
  { id: 29, category: 'CSS', question: 'Which property creates animation?', options: ['animate', 'keyframes', 'animation', 'motion'], correctAnswer: 2 },
  { id: 30, category: 'CSS', question: 'Inline CSS applied using?', options: ['<style>', 'style attribute', 'CSS file', 'class'], correctAnswer: 1 },

  { id: 31, category: 'JavaScript', question: 'JS is:', options: ['Compiled', 'Interpreted', 'Markup', 'Styling'], correctAnswer: 1 },
  { id: 32, category: 'JavaScript', question: 'Which keyword declares variable?', options: ['var', 'let', 'const', 'All'], correctAnswer: 3 },
  { id: 33, category: 'JavaScript', question: 'Function syntax?', options: ['function()', 'func()', 'define()', 'method()'], correctAnswer: 0 },
  { id: 34, category: 'JavaScript', question: 'DOM stands for?', options: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'None'], correctAnswer: 0 },
  { id: 35, category: 'JavaScript', question: 'Event listener method?', options: ['addEvent', 'onClick', 'addEventListener', 'eventAdd'], correctAnswer: 2 },
  { id: 36, category: 'JavaScript', question: 'JSON stands for?', options: ['JavaScript Object Notation', 'Java Syntax Object', 'JavaScript Output Name', 'None'], correctAnswer: 0 },
  { id: 37, category: 'JavaScript', question: 'Which loop exists?', options: ['for', 'while', 'do-while', 'All'], correctAnswer: 3 },
  { id: 38, category: 'JavaScript', question: 'Closure means?', options: ['Function inside function', 'Loop', 'Object', 'Array'], correctAnswer: 0 },
  { id: 39, category: 'JavaScript', question: 'AJAX used for?', options: ['Styling', 'Async requests', 'HTML', 'Database'], correctAnswer: 1 },
  { id: 40, category: 'JavaScript', question: 'Which method selects ID?', options: ['getElement', 'getElementById', 'selectId', 'queryId'], correctAnswer: 1 },
  { id: 41, category: 'JavaScript', question: 'Arrow function uses?', options: ['=>', '->', ':=', '=='], correctAnswer: 0 },
  { id: 42, category: 'JavaScript', question: 'Promise handles?', options: ['Sync', 'Async', 'CSS', 'HTML'], correctAnswer: 1 },
  { id: 43, category: 'JavaScript', question: 'Which is array method?', options: ['push', 'pop', 'map', 'All'], correctAnswer: 3 },
  { id: 44, category: 'JavaScript', question: 'typeof returns?', options: ['Value', 'Type', 'Function', 'Object'], correctAnswer: 1 },
  { id: 45, category: 'JavaScript', question: '== vs === difference?', options: ['Type check', 'Value check', 'Strict comparison', 'Both'], correctAnswer: 2 },
  { id: 46, category: 'JavaScript', question: 'setTimeout does?', options: ['Loop', 'Delay', 'Event', 'Animation'], correctAnswer: 1 },
  { id: 47, category: 'JavaScript', question: 'Which keyword for object?', options: ['obj', 'new', 'create', 'object'], correctAnswer: 1 },
  { id: 48, category: 'JavaScript', question: 'Local storage stores?', options: ['Temporary', 'Permanent', 'Server', 'Cache'], correctAnswer: 1 },
  { id: 49, category: 'JavaScript', question: 'Which handles errors?', options: ['try-catch', 'error', 'catch-only', 'debug'], correctAnswer: 0 },
  { id: 50, category: 'JavaScript', question: 'Fetch API used for?', options: ['Styling', 'Data request', 'Loop', 'DOM'], correctAnswer: 1 },

  { id: 51, category: 'Backend + General', question: 'Node.js runs on?', options: ['Browser', 'Server', 'Both', 'None'], correctAnswer: 1 },
  { id: 52, category: 'Backend + General', question: 'SQL used for?', options: ['Styling', 'Database', 'Frontend', 'Animation'], correctAnswer: 1 },
  { id: 53, category: 'Backend + General', question: 'REST API uses?', options: ['HTTP', 'FTP', 'SMTP', 'TCP'], correctAnswer: 0 },
  { id: 54, category: 'Backend + General', question: 'CRUD stands for?', options: ['Create Read Update Delete', 'Copy Run Update Delete', 'Create Run Upload Delete', 'None'], correctAnswer: 0 },
  { id: 55, category: 'Backend + General', question: 'MongoDB is?', options: ['SQL', 'NoSQL', 'Language', 'Tool'], correctAnswer: 1 },
  { id: 56, category: 'Backend + General', question: 'Git used for?', options: ['Design', 'Version control', 'Testing', 'Hosting'], correctAnswer: 1 },
  { id: 57, category: 'Backend + General', question: 'GitHub is?', options: ['Database', 'Hosting repo', 'Language', 'API'], correctAnswer: 1 },
  { id: 58, category: 'Backend + General', question: 'Authentication means?', options: ['Login', 'Styling', 'Server', 'Code'], correctAnswer: 0 },
  { id: 59, category: 'Backend + General', question: 'Authorization means?', options: ['Access control', 'Login', 'Server', 'API'], correctAnswer: 0 },
  { id: 60, category: 'Backend + General', question: 'CI/CD stands for?', options: ['Continuous Integration Deployment', 'Code Integration', 'Continuous Design', 'None'], correctAnswer: 0 },
];
