export const validCategories = ["easy", "medium", "advanced"];

export const challengesByCategory = {
  easy: [
    {
      id: 1,
      title: "Hello World",
      description: "Write your first Python program",
      slug: "hello-world",
    },
    {
      id: 2,
      title: "Sum of Two Numbers",
      description: "Calculate the sum of two input numbers",
      slug: "sum-two-numbers",
    },
    {
      id: 3,
      title: "Even or Odd",
      description: "Determine if a number is even or odd",
      slug: "even-odd",
    },
    {
      id: 4,
      title: "Reverse a String",
      description: "Reverse the characters in a string",
      slug: "reverse-string",
    },
    {
      id: 5,
      title: "Count Vowels",
      description: "Count the number of vowels in a string",
      slug: "count-vowels",
    },
  ],
  medium: [
    {
      id: 1,
      title: "Fibonacci Sequence",
      description: "Generate the Fibonacci sequence up to n terms",
      slug: "fibonacci",
    },
    {
      id: 2,
      title: "Prime Number Checker",
      description: "Check if a number is prime",
      slug: "prime-checker",
    },
    {
      id: 3,
      title: "Palindrome Checker",
      description: "Check if a string is a palindrome",
      slug: "palindrome",
    },
  ],
  advanced: [
    {
      id: 1,
      title: "Binary Search Tree",
      description: "Implement a binary search tree in Python",
      slug: "binary-search-tree",
    },
    {
      id: 2,
      title: "Dijkstra's Algorithm",
      description: "Implement Dijkstra's shortest path algorithm",
      slug: "dijkstra",
    },
  ],
};

export const categories = [
  {
    title: "Easy",
    description:
      "Perfect for beginners. Simple problems to build your foundation.",
    count: challengesByCategory.easy.length,
    slug: "easy",
  },
  {
    title: "Medium",
    description:
      "For intermediate programmers. Challenges that require deeper thinking.",
    count: challengesByCategory.medium.length,
    slug: "medium",
  },
  {
    title: "Advanced",
    description: "Complex problems for experienced Python developers.",
    count: challengesByCategory.advanced.length,
    slug: "advanced",
  },
];
