export type Category = 'Computer Networks' | 'Programming' | 'Data Structures & Algorithms' | 'Operating Systems' | 'Software Engineering' | 'Web Development' | 'AI & Data Analytics' | 'Cyber Security' | 'Databases' | 'Problem Solving';

export interface Question {
  id: number;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    "id": 1,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Data Communication?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 2,
    "category": "Computer Networks",
    "question": "In the context of Data Communication, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 3,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Data Communication?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 4,
    "category": "Computer Networks",
    "question": "When dealing with Data Communication, which of the following is a critical challenge?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 5,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Data Communication?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 6,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Computer Networks?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "category": "Computer Networks",
    "question": "In the context of Computer Networks, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 8,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Computer Networks?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 9,
    "category": "Computer Networks",
    "question": "When dealing with Computer Networks, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 10,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Computer Networks?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Data Link Layer?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 12,
    "category": "Computer Networks",
    "question": "In the context of Data Link Layer, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 13,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Data Link Layer?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 14,
    "category": "Computer Networks",
    "question": "When dealing with Data Link Layer, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 15,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Data Link Layer?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 16,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Network Layer?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 17,
    "category": "Computer Networks",
    "question": "In the context of Network Layer, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 18,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Network Layer?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 19,
    "category": "Computer Networks",
    "question": "When dealing with Network Layer, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 20,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Network Layer?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 21,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Transport Layer?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 22,
    "category": "Computer Networks",
    "question": "In the context of Transport Layer, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 23,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Transport Layer?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 24,
    "category": "Computer Networks",
    "question": "When dealing with Transport Layer, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 25,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Transport Layer?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 26,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Application Layer?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "category": "Computer Networks",
    "question": "In the context of Application Layer, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 28,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Application Layer?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 29,
    "category": "Computer Networks",
    "question": "When dealing with Application Layer, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 30,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Application Layer?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Wireless Networks?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 32,
    "category": "Computer Networks",
    "question": "In the context of Wireless Networks, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 33,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Wireless Networks?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 34,
    "category": "Computer Networks",
    "question": "When dealing with Wireless Networks, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 35,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Wireless Networks?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 36,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Cloud Computing?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 37,
    "category": "Computer Networks",
    "question": "In the context of Cloud Computing, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 38,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Cloud Computing?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 39,
    "category": "Computer Networks",
    "question": "When dealing with Cloud Computing, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 40,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Cloud Computing?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 41,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Network Security?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 42,
    "category": "Computer Networks",
    "question": "In the context of Network Security, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Network Security?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "category": "Computer Networks",
    "question": "When dealing with Network Security, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 45,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Network Security?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 46,
    "category": "Computer Networks",
    "question": "Which of the following best describes the core concept of Next Generation Networks?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 47,
    "category": "Computer Networks",
    "question": "In the context of Next Generation Networks, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 48,
    "category": "Computer Networks",
    "question": "Which technique is most commonly associated with Next Generation Networks?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 49,
    "category": "Computer Networks",
    "question": "When dealing with Next Generation Networks, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 50,
    "category": "Computer Networks",
    "question": "What is the standard approach to resolving issues related to Next Generation Networks?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 51,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Programming Fundamentals?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 52,
    "category": "Programming",
    "question": "In the context of Programming Fundamentals, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 53,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Programming Fundamentals?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 54,
    "category": "Programming",
    "question": "When dealing with Programming Fundamentals, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 55,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Data Types & Variables?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 56,
    "category": "Programming",
    "question": "In the context of Data Types & Variables, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 57,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Data Types & Variables?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 58,
    "category": "Programming",
    "question": "When dealing with Data Types & Variables, which of the following is a critical challenge?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 59,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Operators & Expressions?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 60,
    "category": "Programming",
    "question": "In the context of Operators & Expressions, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 61,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Operators & Expressions?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 62,
    "category": "Programming",
    "question": "When dealing with Operators & Expressions, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 63,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Control Structures?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 64,
    "category": "Programming",
    "question": "In the context of Control Structures, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 65,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Control Structures?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 66,
    "category": "Programming",
    "question": "When dealing with Control Structures, which of the following is a critical challenge?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Functions / Methods?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 68,
    "category": "Programming",
    "question": "In the context of Functions / Methods, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 69,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Functions / Methods?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 70,
    "category": "Programming",
    "question": "When dealing with Functions / Methods, which of the following is a critical challenge?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 71,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Input / Output Handling?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 72,
    "category": "Programming",
    "question": "In the context of Input / Output Handling, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 73,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Input / Output Handling?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 74,
    "category": "Programming",
    "question": "When dealing with Input / Output Handling, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 75,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Strings & Text Processing?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 76,
    "category": "Programming",
    "question": "In the context of Strings & Text Processing, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 77,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Strings & Text Processing?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 78,
    "category": "Programming",
    "question": "When dealing with Strings & Text Processing, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 79,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Arrays & Collections?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 80,
    "category": "Programming",
    "question": "In the context of Arrays & Collections, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 81,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Arrays & Collections?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 82,
    "category": "Programming",
    "question": "When dealing with Arrays & Collections, which of the following is a critical challenge?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 83,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Object-Oriented Programming (OOP)?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 84,
    "category": "Programming",
    "question": "In the context of Object-Oriented Programming (OOP), what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 85,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Object-Oriented Programming (OOP)?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 86,
    "category": "Programming",
    "question": "When dealing with Object-Oriented Programming (OOP), which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 87,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Memory Management Concepts?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 88,
    "category": "Programming",
    "question": "In the context of Memory Management Concepts, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 89,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Memory Management Concepts?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 90,
    "category": "Programming",
    "question": "When dealing with Memory Management Concepts, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 91,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Exception & Error Handling?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 92,
    "category": "Programming",
    "question": "In the context of Exception & Error Handling, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 93,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Exception & Error Handling?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 94,
    "category": "Programming",
    "question": "When dealing with Exception & Error Handling, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 95,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Modules, Packages & Libraries?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 96,
    "category": "Programming",
    "question": "In the context of Modules, Packages & Libraries, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 97,
    "category": "Programming",
    "question": "Which technique is most commonly associated with Modules, Packages & Libraries?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 98,
    "category": "Programming",
    "question": "When dealing with Modules, Packages & Libraries, which of the following is a critical challenge?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 99,
    "category": "Programming",
    "question": "Which of the following best describes the core concept of Advanced Programming Concepts?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 100,
    "category": "Programming",
    "question": "In the context of Advanced Programming Concepts, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 101,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Foundations of Data Structure and Algorithms?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 102,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Foundations of Data Structure and Algorithms, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 103,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Foundations of Data Structure and Algorithms?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 104,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Foundations of Data Structure and Algorithms, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 105,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Foundations of Data Structure and Algorithms?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 106,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Linear Data Structures?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 107,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Linear Data Structures, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 108,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Linear Data Structures?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 109,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Linear Data Structures, which of the following is a critical challenge?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 110,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Linear Data Structures?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 111,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Non-Linear Data Structures?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 112,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Non-Linear Data Structures, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 113,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Non-Linear Data Structures?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 114,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Non-Linear Data Structures, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 115,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Non-Linear Data Structures?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 116,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Searching Algorithms?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 117,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Searching Algorithms, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 118,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Searching Algorithms?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 119,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Searching Algorithms, which of the following is a critical challenge?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 120,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Searching Algorithms?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 121,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Sorting Algorithms?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 122,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Sorting Algorithms, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 123,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Sorting Algorithms?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 124,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Sorting Algorithms, which of the following is a critical challenge?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 125,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Sorting Algorithms?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 126,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Hashing?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 127,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Hashing, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 128,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Hashing?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 129,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Hashing, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 130,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Hashing?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 131,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Tree Algorithms?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 132,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Tree Algorithms, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 133,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Tree Algorithms?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 134,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Tree Algorithms, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 135,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Tree Algorithms?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 136,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Graph Algorithms?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 137,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Graph Algorithms, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 138,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Graph Algorithms?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 139,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Graph Algorithms, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 140,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Graph Algorithms?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 141,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Algorithm Design Techniques?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 142,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Algorithm Design Techniques, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 143,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Algorithm Design Techniques?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 144,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Algorithm Design Techniques, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 145,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Algorithm Design Techniques?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 146,
    "category": "Data Structures & Algorithms",
    "question": "Which of the following best describes the core concept of Advanced Data Structures?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 147,
    "category": "Data Structures & Algorithms",
    "question": "In the context of Advanced Data Structures, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 148,
    "category": "Data Structures & Algorithms",
    "question": "Which technique is most commonly associated with Advanced Data Structures?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 149,
    "category": "Data Structures & Algorithms",
    "question": "When dealing with Advanced Data Structures, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 150,
    "category": "Data Structures & Algorithms",
    "question": "What is the standard approach to resolving issues related to Advanced Data Structures?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 151,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Introduction to Operating Systems?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 152,
    "category": "Operating Systems",
    "question": "In the context of Introduction to Operating Systems, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 153,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Introduction to Operating Systems?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 154,
    "category": "Operating Systems",
    "question": "When dealing with Introduction to Operating Systems, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 155,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Introduction to Operating Systems?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 156,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Operating System Structures?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 157,
    "category": "Operating Systems",
    "question": "In the context of Operating System Structures, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 158,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Operating System Structures?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 159,
    "category": "Operating Systems",
    "question": "When dealing with Operating System Structures, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 160,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Operating System Structures?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 161,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Process Management?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 162,
    "category": "Operating Systems",
    "question": "In the context of Process Management, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 163,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Process Management?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 164,
    "category": "Operating Systems",
    "question": "When dealing with Process Management, which of the following is a critical challenge?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 165,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Process Management?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 166,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of CPU Scheduling?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 167,
    "category": "Operating Systems",
    "question": "In the context of CPU Scheduling, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 168,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with CPU Scheduling?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 169,
    "category": "Operating Systems",
    "question": "When dealing with CPU Scheduling, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 170,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to CPU Scheduling?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 171,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Thread Management?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 172,
    "category": "Operating Systems",
    "question": "In the context of Thread Management, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 173,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Thread Management?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 174,
    "category": "Operating Systems",
    "question": "When dealing with Thread Management, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 175,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Thread Management?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 176,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Concurrency & Synchronization?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 177,
    "category": "Operating Systems",
    "question": "In the context of Concurrency & Synchronization, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 178,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Concurrency & Synchronization?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 179,
    "category": "Operating Systems",
    "question": "When dealing with Concurrency & Synchronization, which of the following is a critical challenge?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 180,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Concurrency & Synchronization?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 181,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Deadlocks?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 182,
    "category": "Operating Systems",
    "question": "In the context of Deadlocks, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 183,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Deadlocks?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 184,
    "category": "Operating Systems",
    "question": "When dealing with Deadlocks, which of the following is a critical challenge?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 185,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Deadlocks?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 186,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Memory Management?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 187,
    "category": "Operating Systems",
    "question": "In the context of Memory Management, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 188,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Memory Management?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 189,
    "category": "Operating Systems",
    "question": "When dealing with Memory Management, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 190,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Memory Management?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 191,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of File System Management?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 192,
    "category": "Operating Systems",
    "question": "In the context of File System Management, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 193,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with File System Management?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 194,
    "category": "Operating Systems",
    "question": "When dealing with File System Management, which of the following is a critical challenge?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 195,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to File System Management?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 196,
    "category": "Operating Systems",
    "question": "Which of the following best describes the core concept of Secondary Storage Management?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 197,
    "category": "Operating Systems",
    "question": "In the context of Secondary Storage Management, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 198,
    "category": "Operating Systems",
    "question": "Which technique is most commonly associated with Secondary Storage Management?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 199,
    "category": "Operating Systems",
    "question": "When dealing with Secondary Storage Management, which of the following is a critical challenge?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 200,
    "category": "Operating Systems",
    "question": "What is the standard approach to resolving issues related to Secondary Storage Management?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 201,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Introduction to Software Engineering?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 202,
    "category": "Software Engineering",
    "question": "In the context of Introduction to Software Engineering, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 203,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Introduction to Software Engineering?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 204,
    "category": "Software Engineering",
    "question": "When dealing with Introduction to Software Engineering, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 205,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Process Models?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 206,
    "category": "Software Engineering",
    "question": "In the context of Software Process Models, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 207,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Process Models?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 208,
    "category": "Software Engineering",
    "question": "When dealing with Software Process Models, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 209,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Agile Software Development?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 210,
    "category": "Software Engineering",
    "question": "In the context of Agile Software Development, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 211,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Agile Software Development?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 212,
    "category": "Software Engineering",
    "question": "When dealing with Agile Software Development, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 213,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Requirements Engineering?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 214,
    "category": "Software Engineering",
    "question": "In the context of Software Requirements Engineering, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 215,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Requirements Engineering?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 216,
    "category": "Software Engineering",
    "question": "When dealing with Software Requirements Engineering, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 217,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Project Management?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 218,
    "category": "Software Engineering",
    "question": "In the context of Software Project Management, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 219,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Project Management?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 220,
    "category": "Software Engineering",
    "question": "When dealing with Software Project Management, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 221,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Design?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 222,
    "category": "Software Engineering",
    "question": "In the context of Software Design, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 223,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Design?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 224,
    "category": "Software Engineering",
    "question": "When dealing with Software Design, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 225,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Architecture?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 226,
    "category": "Software Engineering",
    "question": "In the context of Software Architecture, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 227,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Architecture?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 228,
    "category": "Software Engineering",
    "question": "When dealing with Software Architecture, which of the following is a critical challenge?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 229,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of User Interface Design?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 230,
    "category": "Software Engineering",
    "question": "In the context of User Interface Design, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 231,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with User Interface Design?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 232,
    "category": "Software Engineering",
    "question": "When dealing with User Interface Design, which of the following is a critical challenge?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 233,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Implementation & Coding?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 234,
    "category": "Software Engineering",
    "question": "In the context of Software Implementation & Coding, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 235,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Implementation & Coding?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 236,
    "category": "Software Engineering",
    "question": "When dealing with Software Implementation & Coding, which of the following is a critical challenge?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 237,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Testing?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 238,
    "category": "Software Engineering",
    "question": "In the context of Software Testing, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 239,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Testing?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 240,
    "category": "Software Engineering",
    "question": "When dealing with Software Testing, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 241,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Maintenance & Evolution?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 242,
    "category": "Software Engineering",
    "question": "In the context of Software Maintenance & Evolution, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 243,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Maintenance & Evolution?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 244,
    "category": "Software Engineering",
    "question": "When dealing with Software Maintenance & Evolution, which of the following is a critical challenge?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 245,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Quality Assurance?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 246,
    "category": "Software Engineering",
    "question": "In the context of Software Quality Assurance, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 247,
    "category": "Software Engineering",
    "question": "Which technique is most commonly associated with Software Quality Assurance?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 248,
    "category": "Software Engineering",
    "question": "When dealing with Software Quality Assurance, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 249,
    "category": "Software Engineering",
    "question": "Which of the following best describes the core concept of Software Metrics & Measurement?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 250,
    "category": "Software Engineering",
    "question": "In the context of Software Metrics & Measurement, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 251,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Introduction to Web Development?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 252,
    "category": "Web Development",
    "question": "In the context of Introduction to Web Development, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 253,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Introduction to Web Development?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 254,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Web Architecture & Protocols?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 255,
    "category": "Web Development",
    "question": "In the context of Web Architecture & Protocols, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 256,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Web Architecture & Protocols?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 257,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of HTML Fundamentals?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 258,
    "category": "Web Development",
    "question": "In the context of HTML Fundamentals, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 259,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with HTML Fundamentals?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 260,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of CSS Fundamentals?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 261,
    "category": "Web Development",
    "question": "In the context of CSS Fundamentals, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 262,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with CSS Fundamentals?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 263,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Advanced CSS & Responsive Design?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 264,
    "category": "Web Development",
    "question": "In the context of Advanced CSS & Responsive Design, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 265,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Advanced CSS & Responsive Design?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 266,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of JavaScript Fundamentals?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 267,
    "category": "Web Development",
    "question": "In the context of JavaScript Fundamentals, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 268,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with JavaScript Fundamentals?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 269,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Advanced JavaScript?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 270,
    "category": "Web Development",
    "question": "In the context of Advanced JavaScript, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 271,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Advanced JavaScript?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 272,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Frontend Frameworks & Libraries?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 273,
    "category": "Web Development",
    "question": "In the context of Frontend Frameworks & Libraries, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 274,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Frontend Frameworks & Libraries?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 275,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Backend Development Fundamentals?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 276,
    "category": "Web Development",
    "question": "In the context of Backend Development Fundamentals, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 277,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Backend Development Fundamentals?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 278,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Server-Side Programming?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 279,
    "category": "Web Development",
    "question": "In the context of Server-Side Programming, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 280,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Server-Side Programming?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 281,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Databases for Web Applications?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 282,
    "category": "Web Development",
    "question": "In the context of Databases for Web Applications, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 283,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Databases for Web Applications?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 284,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Web Security?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 285,
    "category": "Web Development",
    "question": "In the context of Web Security, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 286,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Web Security?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 287,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Web Performance & Optimization?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 288,
    "category": "Web Development",
    "question": "In the context of Web Performance & Optimization, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 289,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Web Performance & Optimization?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 290,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Web Testing & Debugging?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 291,
    "category": "Web Development",
    "question": "In the context of Web Testing & Debugging, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 292,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Web Testing & Debugging?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 293,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Deployment & Hosting?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 294,
    "category": "Web Development",
    "question": "In the context of Deployment & Hosting, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 295,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Deployment & Hosting?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 296,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Web APIs & Integration?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 297,
    "category": "Web Development",
    "question": "In the context of Web APIs & Integration, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 298,
    "category": "Web Development",
    "question": "Which technique is most commonly associated with Web APIs & Integration?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 299,
    "category": "Web Development",
    "question": "Which of the following best describes the core concept of Modern Web Development Practices?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 300,
    "category": "Web Development",
    "question": "In the context of Modern Web Development Practices, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 301,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Introduction to AI, ML & Data Analytics?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 302,
    "category": "AI & Data Analytics",
    "question": "In the context of Introduction to AI, ML & Data Analytics, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 303,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Introduction to AI, ML & Data Analytics?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 304,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Mathematical Foundations?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 305,
    "category": "AI & Data Analytics",
    "question": "In the context of Mathematical Foundations, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 306,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Mathematical Foundations?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 307,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Python for AI & Data Analytics?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 308,
    "category": "AI & Data Analytics",
    "question": "In the context of Python for AI & Data Analytics, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 309,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Python for AI & Data Analytics?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 310,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Data Collection & Pre-processing?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 311,
    "category": "AI & Data Analytics",
    "question": "In the context of Data Collection & Pre-processing, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 312,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Data Collection & Pre-processing?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 313,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Exploratory Data Analysis (EDA)?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 314,
    "category": "AI & Data Analytics",
    "question": "In the context of Exploratory Data Analysis (EDA), what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 315,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Exploratory Data Analysis (EDA)?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 316,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Supervised Learning?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 317,
    "category": "AI & Data Analytics",
    "question": "In the context of Supervised Learning, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 318,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Supervised Learning?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 319,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Ensemble Learning?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 320,
    "category": "AI & Data Analytics",
    "question": "In the context of Ensemble Learning, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 321,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Ensemble Learning?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 322,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Unsupervised Learning?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 323,
    "category": "AI & Data Analytics",
    "question": "In the context of Unsupervised Learning, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 324,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Unsupervised Learning?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 325,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Model Evaluation & Validation?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 326,
    "category": "AI & Data Analytics",
    "question": "In the context of Model Evaluation & Validation, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 327,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Model Evaluation & Validation?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 328,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Feature Engineering & Selection?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 329,
    "category": "AI & Data Analytics",
    "question": "In the context of Feature Engineering & Selection, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 330,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Feature Engineering & Selection?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 331,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Deep Learning Fundamentals?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 332,
    "category": "AI & Data Analytics",
    "question": "In the context of Deep Learning Fundamentals, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 333,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Deep Learning Fundamentals?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 334,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Advanced Deep Learning?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 335,
    "category": "AI & Data Analytics",
    "question": "In the context of Advanced Deep Learning, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 336,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Advanced Deep Learning?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 337,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Natural Language Processing (NLP)?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 338,
    "category": "AI & Data Analytics",
    "question": "In the context of Natural Language Processing (NLP), what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 339,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Natural Language Processing (NLP)?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 340,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Computer Vision?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 341,
    "category": "AI & Data Analytics",
    "question": "In the context of Computer Vision, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 342,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Computer Vision?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 343,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Big Data Analytics?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 344,
    "category": "AI & Data Analytics",
    "question": "In the context of Big Data Analytics, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 345,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Big Data Analytics?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 346,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of Model Deployment & MLOps Basics?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 347,
    "category": "AI & Data Analytics",
    "question": "In the context of Model Deployment & MLOps Basics, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 348,
    "category": "AI & Data Analytics",
    "question": "Which technique is most commonly associated with Model Deployment & MLOps Basics?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 349,
    "category": "AI & Data Analytics",
    "question": "Which of the following best describes the core concept of AI Ethics, Security & Privacy?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 350,
    "category": "AI & Data Analytics",
    "question": "In the context of AI Ethics, Security & Privacy, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 351,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Introduction to Cyber Security?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 352,
    "category": "Cyber Security",
    "question": "In the context of Introduction to Cyber Security, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 353,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Introduction to Cyber Security?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 354,
    "category": "Cyber Security",
    "question": "When dealing with Introduction to Cyber Security, which of the following is a critical challenge?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 355,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Security Fundamentals & Principles?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 356,
    "category": "Cyber Security",
    "question": "In the context of Security Fundamentals & Principles, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 357,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Security Fundamentals & Principles?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 358,
    "category": "Cyber Security",
    "question": "When dealing with Security Fundamentals & Principles, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 359,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Cryptography Basics?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 360,
    "category": "Cyber Security",
    "question": "In the context of Cryptography Basics, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 361,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Cryptography Basics?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 362,
    "category": "Cyber Security",
    "question": "When dealing with Cryptography Basics, which of the following is a critical challenge?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 363,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Network Security?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 364,
    "category": "Cyber Security",
    "question": "In the context of Network Security, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 365,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Network Security?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 366,
    "category": "Cyber Security",
    "question": "When dealing with Network Security, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 367,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Operating System Security?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 368,
    "category": "Cyber Security",
    "question": "In the context of Operating System Security, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 369,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Operating System Security?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 370,
    "category": "Cyber Security",
    "question": "When dealing with Operating System Security, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 371,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Web Application Security?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 372,
    "category": "Cyber Security",
    "question": "In the context of Web Application Security, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 373,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Web Application Security?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 374,
    "category": "Cyber Security",
    "question": "When dealing with Web Application Security, which of the following is a critical challenge?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 375,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Malware & Attack Techniques?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 376,
    "category": "Cyber Security",
    "question": "In the context of Malware & Attack Techniques, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 377,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Malware & Attack Techniques?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 378,
    "category": "Cyber Security",
    "question": "When dealing with Malware & Attack Techniques, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 379,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Authentication & Access Control?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 380,
    "category": "Cyber Security",
    "question": "In the context of Authentication & Access Control, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 381,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Authentication & Access Control?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 382,
    "category": "Cyber Security",
    "question": "When dealing with Authentication & Access Control, which of the following is a critical challenge?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 383,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Secure Software Development?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 384,
    "category": "Cyber Security",
    "question": "In the context of Secure Software Development, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 385,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Secure Software Development?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 386,
    "category": "Cyber Security",
    "question": "When dealing with Secure Software Development, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 387,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Wireless & Mobile Security?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 388,
    "category": "Cyber Security",
    "question": "In the context of Wireless & Mobile Security, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 389,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Wireless & Mobile Security?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 390,
    "category": "Cyber Security",
    "question": "When dealing with Wireless & Mobile Security, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 391,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Cloud & Virtualization Security?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 392,
    "category": "Cyber Security",
    "question": "In the context of Cloud & Virtualization Security, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 393,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Cloud & Virtualization Security?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 394,
    "category": "Cyber Security",
    "question": "When dealing with Cloud & Virtualization Security, which of the following is a critical challenge?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 395,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Digital Forensics?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 396,
    "category": "Cyber Security",
    "question": "In the context of Digital Forensics, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 397,
    "category": "Cyber Security",
    "question": "Which technique is most commonly associated with Digital Forensics?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 398,
    "category": "Cyber Security",
    "question": "When dealing with Digital Forensics, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 399,
    "category": "Cyber Security",
    "question": "Which of the following best describes the core concept of Incident Response & Management?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 400,
    "category": "Cyber Security",
    "question": "In the context of Incident Response & Management, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 401,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Introduction to Database Systems?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 402,
    "category": "Databases",
    "question": "In the context of Introduction to Database Systems, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 403,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Introduction to Database Systems?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 404,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Database System Architecture?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 405,
    "category": "Databases",
    "question": "In the context of Database System Architecture, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 406,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Database System Architecture?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 407,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Data Models?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 408,
    "category": "Databases",
    "question": "In the context of Data Models, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 409,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Data Models?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 410,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Relational Database Concepts?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 411,
    "category": "Databases",
    "question": "In the context of Relational Database Concepts, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 412,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Relational Database Concepts?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 413,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Relational Algebra & Calculus?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 414,
    "category": "Databases",
    "question": "In the context of Relational Algebra & Calculus, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 415,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Relational Algebra & Calculus?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 416,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Structured Query Language (SQL)?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 417,
    "category": "Databases",
    "question": "In the context of Structured Query Language (SQL), what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 418,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Structured Query Language (SQL)?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 419,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Advanced SQL?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 420,
    "category": "Databases",
    "question": "In the context of Advanced SQL, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 421,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Advanced SQL?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 422,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Database Design & Normalization?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 423,
    "category": "Databases",
    "question": "In the context of Database Design & Normalization, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 424,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Database Design & Normalization?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 425,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Transaction Management?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 426,
    "category": "Databases",
    "question": "In the context of Transaction Management, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 427,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Transaction Management?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 428,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Concurrency Control?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 429,
    "category": "Databases",
    "question": "In the context of Concurrency Control, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 430,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Concurrency Control?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 431,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Recovery Management?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 432,
    "category": "Databases",
    "question": "In the context of Recovery Management, what is the primary advantage of its application?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 433,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Recovery Management?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 434,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Indexing & File Organization?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 435,
    "category": "Databases",
    "question": "In the context of Indexing & File Organization, what is the primary advantage of its application?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 436,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Indexing & File Organization?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 437,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Query Processing & Optimization?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 438,
    "category": "Databases",
    "question": "In the context of Query Processing & Optimization, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 439,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Query Processing & Optimization?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 440,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Database Security?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 441,
    "category": "Databases",
    "question": "In the context of Database Security, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 442,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Database Security?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 443,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Distributed Databases?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 444,
    "category": "Databases",
    "question": "In the context of Distributed Databases, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 445,
    "category": "Databases",
    "question": "Which technique is most commonly associated with Distributed Databases?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 446,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of NoSQL & Modern Databases?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 0
  },
  {
    "id": 447,
    "category": "Databases",
    "question": "In the context of NoSQL & Modern Databases, what is the primary advantage of its application?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 448,
    "category": "Databases",
    "question": "Which technique is most commonly associated with NoSQL & Modern Databases?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 449,
    "category": "Databases",
    "question": "Which of the following best describes the core concept of Data Warehousing & Data Mining?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 450,
    "category": "Databases",
    "question": "In the context of Data Warehousing & Data Mining, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 451,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Introduction to Problem Solving?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 452,
    "category": "Problem Solving",
    "question": "In the context of Introduction to Problem Solving, what is the primary advantage of its application?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 453,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Introduction to Problem Solving?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 454,
    "category": "Problem Solving",
    "question": "When dealing with Introduction to Problem Solving, which of the following is a critical challenge?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 455,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Problem Understanding & Analysis?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 456,
    "category": "Problem Solving",
    "question": "In the context of Problem Understanding & Analysis, what is the primary advantage of its application?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 457,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Problem Understanding & Analysis?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 458,
    "category": "Problem Solving",
    "question": "When dealing with Problem Understanding & Analysis, which of the following is a critical challenge?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 459,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Logical Reasoning Fundamentals?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 2
  },
  {
    "id": 460,
    "category": "Problem Solving",
    "question": "In the context of Logical Reasoning Fundamentals, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 3
  },
  {
    "id": 461,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Logical Reasoning Fundamentals?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 462,
    "category": "Problem Solving",
    "question": "When dealing with Logical Reasoning Fundamentals, which of the following is a critical challenge?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 463,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Algorithms & Flow Control?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 1
  },
  {
    "id": 464,
    "category": "Problem Solving",
    "question": "In the context of Algorithms & Flow Control, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 465,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Algorithms & Flow Control?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 466,
    "category": "Problem Solving",
    "question": "When dealing with Algorithms & Flow Control, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 467,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Data Representation & Abstraction?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 468,
    "category": "Problem Solving",
    "question": "In the context of Data Representation & Abstraction, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 469,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Data Representation & Abstraction?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 470,
    "category": "Problem Solving",
    "question": "When dealing with Data Representation & Abstraction, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 471,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Pattern Recognition & Generalization?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 472,
    "category": "Problem Solving",
    "question": "In the context of Pattern Recognition & Generalization, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 473,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Pattern Recognition & Generalization?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 474,
    "category": "Problem Solving",
    "question": "When dealing with Pattern Recognition & Generalization, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 475,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Mathematical & Quantitative Reasoning?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 476,
    "category": "Problem Solving",
    "question": "In the context of Mathematical & Quantitative Reasoning, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 477,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Mathematical & Quantitative Reasoning?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 3
  },
  {
    "id": 478,
    "category": "Problem Solving",
    "question": "When dealing with Mathematical & Quantitative Reasoning, which of the following is a critical challenge?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 479,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Algorithmic Thinking?",
    "options": [
      "Enhancing performance",
      "Improving scalability",
      "Increasing security",
      "Reducing complexity"
    ],
    "correctAnswer": 0
  },
  {
    "id": 480,
    "category": "Problem Solving",
    "question": "In the context of Algorithmic Thinking, what is the primary advantage of its application?",
    "options": [
      "Abstraction",
      "Data encapsulation",
      "Inheritance",
      "Polymorphism"
    ],
    "correctAnswer": 1
  },
  {
    "id": 481,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Algorithmic Thinking?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 482,
    "category": "Problem Solving",
    "question": "When dealing with Algorithmic Thinking, which of the following is a critical challenge?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 3
  },
  {
    "id": 483,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Critical Thinking & Decision Making?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 484,
    "category": "Problem Solving",
    "question": "In the context of Critical Thinking & Decision Making, what is the primary advantage of its application?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 485,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Critical Thinking & Decision Making?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 1
  },
  {
    "id": 486,
    "category": "Problem Solving",
    "question": "When dealing with Critical Thinking & Decision Making, which of the following is a critical challenge?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 2
  },
  {
    "id": 487,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Debugging & Error Analysis?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 2
  },
  {
    "id": 488,
    "category": "Problem Solving",
    "question": "In the context of Debugging & Error Analysis, what is the primary advantage of its application?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 489,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Debugging & Error Analysis?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  },
  {
    "id": 490,
    "category": "Problem Solving",
    "question": "When dealing with Debugging & Error Analysis, which of the following is a critical challenge?",
    "options": [
      "Backtracking",
      "Divide and conquer",
      "Dynamic programming",
      "Greedy approach"
    ],
    "correctAnswer": 1
  },
  {
    "id": 491,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Complexity & Efficiency Awareness?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 492,
    "category": "Problem Solving",
    "question": "In the context of Complexity & Efficiency Awareness, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 493,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Complexity & Efficiency Awareness?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 494,
    "category": "Problem Solving",
    "question": "When dealing with Complexity & Efficiency Awareness, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 495,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Problem Solving Using Programming?",
    "options": [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP/IP"
    ],
    "correctAnswer": 1
  },
  {
    "id": 496,
    "category": "Problem Solving",
    "question": "In the context of Problem Solving Using Programming, what is the primary advantage of its application?",
    "options": [
      "Agile",
      "Kanban",
      "Scrum",
      "Waterfall"
    ],
    "correctAnswer": 2
  },
  {
    "id": 497,
    "category": "Problem Solving",
    "question": "Which technique is most commonly associated with Problem Solving Using Programming?",
    "options": [
      "Denormalization",
      "Indexing",
      "Normalization",
      "Sharding"
    ],
    "correctAnswer": 3
  },
  {
    "id": 498,
    "category": "Problem Solving",
    "question": "When dealing with Problem Solving Using Programming, which of the following is a critical challenge?",
    "options": [
      "Deep learning",
      "Reinforcement learning",
      "Supervised learning",
      "Unsupervised learning"
    ],
    "correctAnswer": 0
  },
  {
    "id": 499,
    "category": "Problem Solving",
    "question": "Which of the following best describes the core concept of Data-Driven Problem Solving?",
    "options": [
      "Encryption",
      "Hashing",
      "Salting",
      "Tokenization"
    ],
    "correctAnswer": 3
  },
  {
    "id": 500,
    "category": "Problem Solving",
    "question": "In the context of Data-Driven Problem Solving, what is the primary advantage of its application?",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System testing",
      "Unit testing"
    ],
    "correctAnswer": 0
  }
];
