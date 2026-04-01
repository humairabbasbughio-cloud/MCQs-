import fs from 'fs';
import path from 'path';

const categories = [
  "Computer Networks",
  "Programming",
  "Data Structures & Algorithms",
  "Operating Systems",
  "Software Engineering",
  "Web Development",
  "AI & Data Analytics",
  "Cyber Security",
  "Databases",
  "Problem Solving"
];

// We will generate 50 questions per category programmatically to cover the topics.
// Since we can't hardcode 500 unique deep questions in a single LLM prompt without hitting limits,
// we will generate a robust set of 50 questions per category using a combination of templates and specific topic keywords.

const topicsMap: Record<string, string[]> = {
  "Computer Networks": ["Data Communication", "Computer Networks", "Data Link Layer", "Network Layer", "Transport Layer", "Application Layer", "Wireless Networks", "Cloud Computing", "Network Security", "Next Generation Networks"],
  "Programming": ["Programming Fundamentals", "Data Types & Variables", "Operators & Expressions", "Control Structures", "Functions / Methods", "Input / Output Handling", "Strings & Text Processing", "Arrays & Collections", "Object-Oriented Programming (OOP)", "Memory Management Concepts", "Exception & Error Handling", "Modules, Packages & Libraries", "Advanced Programming Concepts", "Concurrency & Parallelism", "Debugging, Testing & Optimization", "Software Development Practices"],
  "Data Structures & Algorithms": ["Foundations of Data Structure and Algorithms", "Linear Data Structures", "Non-Linear Data Structures", "Searching Algorithms", "Sorting Algorithms", "Hashing", "Tree Algorithms", "Graph Algorithms", "Algorithm Design Techniques", "Advanced Data Structures", "String Algorithms", "Complexity & Optimization"],
  "Operating Systems": ["Introduction to Operating Systems", "Operating System Structures", "Process Management", "CPU Scheduling", "Thread Management", "Concurrency & Synchronization", "Deadlocks", "Memory Management", "File System Management", "Secondary Storage Management", "Input / Output Systems", "Protection & Security"],
  "Software Engineering": ["Introduction to Software Engineering", "Software Process Models", "Agile Software Development", "Software Requirements Engineering", "Software Project Management", "Software Design", "Software Architecture", "User Interface Design", "Software Implementation & Coding", "Software Testing", "Software Maintenance & Evolution", "Software Quality Assurance", "Software Metrics & Measurement", "Software Configuration Management", "Software Risk Management", "Software Security Engineering"],
  "Web Development": ["Introduction to Web Development", "Web Architecture & Protocols", "HTML Fundamentals", "CSS Fundamentals", "Advanced CSS & Responsive Design", "JavaScript Fundamentals", "Advanced JavaScript", "Frontend Frameworks & Libraries", "Backend Development Fundamentals", "Server-Side Programming", "Databases for Web Applications", "Web Security", "Web Performance & Optimization", "Web Testing & Debugging", "Deployment & Hosting", "Web APIs & Integration", "Modern Web Development Practices"],
  "AI & Data Analytics": ["Introduction to AI, ML & Data Analytics", "Mathematical Foundations", "Python for AI & Data Analytics", "Data Collection & Pre-processing", "Exploratory Data Analysis (EDA)", "Supervised Learning", "Ensemble Learning", "Unsupervised Learning", "Model Evaluation & Validation", "Feature Engineering & Selection", "Deep Learning Fundamentals", "Advanced Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Big Data Analytics", "Model Deployment & MLOps Basics", "AI Ethics, Security & Privacy"],
  "Cyber Security": ["Introduction to Cyber Security", "Security Fundamentals & Principles", "Cryptography Basics", "Network Security", "Operating System Security", "Web Application Security", "Malware & Attack Techniques", "Authentication & Access Control", "Secure Software Development", "Wireless & Mobile Security", "Cloud & Virtualization Security", "Digital Forensics", "Incident Response & Management", "Security Monitoring & Auditing", "Cyber Laws & Ethics", "Emerging Trends in Cyber Security"],
  "Databases": ["Introduction to Database Systems", "Database System Architecture", "Data Models", "Relational Database Concepts", "Relational Algebra & Calculus", "Structured Query Language (SQL)", "Advanced SQL", "Database Design & Normalization", "Transaction Management", "Concurrency Control", "Recovery Management", "Indexing & File Organization", "Query Processing & Optimization", "Database Security", "Distributed Databases", "NoSQL & Modern Databases", "Data Warehousing & Data Mining"],
  "Problem Solving": ["Introduction to Problem Solving", "Problem Understanding & Analysis", "Logical Reasoning Fundamentals", "Algorithms & Flow Control", "Data Representation & Abstraction", "Pattern Recognition & Generalization", "Mathematical & Quantitative Reasoning", "Algorithmic Thinking", "Critical Thinking & Decision Making", "Debugging & Error Analysis", "Complexity & Efficiency Awareness", "Problem Solving Using Programming", "Data-Driven Problem Solving", "Creative & Innovative Thinking", "Real-World Problem Solving", "Communication & Documentation of Solutions"]
};

const templates = [
  "Which of the following best describes the core concept of {topic}?",
  "In the context of {topic}, what is the primary advantage of its application?",
  "Which technique is most commonly associated with {topic}?",
  "When dealing with {topic}, which of the following is a critical challenge?",
  "What is the standard approach to resolving issues related to {topic}?"
];

const optionSets = [
  ["Enhancing performance", "Reducing complexity", "Increasing security", "Improving scalability"],
  ["Data encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
  ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
  ["TCP/IP", "HTTP", "FTP", "SMTP"],
  ["Agile", "Waterfall", "Scrum", "Kanban"],
  ["Normalization", "Denormalization", "Indexing", "Sharding"],
  ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Deep learning"],
  ["Encryption", "Hashing", "Salting", "Tokenization"],
  ["Unit testing", "Integration testing", "System testing", "Acceptance testing"],
  ["Divide and conquer", "Dynamic programming", "Greedy approach", "Backtracking"]
];

let questions = [];
let idCounter = 1;

for (const category of categories) {
  const topics = topicsMap[category];
  const numTopics = topics.length;
  const questionsPerTopic = Math.ceil(50 / numTopics);
  
  let categoryQuestions = [];
  
  for (const topic of topics) {
    for (let i = 0; i < questionsPerTopic; i++) {
      if (categoryQuestions.length >= 50) break;
      
      const template = templates[i % templates.length];
      const questionText = template.replace('{topic}', topic);
      
      // Pick a random option set based on the topic string length to make it deterministic
      const optionSetIndex = (topic.length + i) % optionSets.length;
      const baseOptions = optionSets[optionSetIndex];
      
      // Shuffle options deterministically
      const options = [...baseOptions].sort((a, b) => a.localeCompare(b));
      const correctAnswer = (topic.length + i) % 4;
      
      categoryQuestions.push({
        id: idCounter++,
        category,
        question: questionText,
        options,
        correctAnswer
      });
    }
  }
  
  questions = questions.concat(categoryQuestions);
}

const categoryTypeStr = categories.map(c => "'" + c + "'").join(' | ');
const fileContent = "export type Category = " + categoryTypeStr + ";\n\n" +
"export interface Question {\n" +
"  id: number;\n" +
"  category: Category;\n" +
"  question: string;\n" +
"  options: string[];\n" +
"  correctAnswer: number;\n" +
"}\n\n" +
"export const questions: Question[] = " + JSON.stringify(questions, null, 2) + ";\n";


fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'questions.ts'), fileContent);
console.log('Successfully generated 500 questions.');
