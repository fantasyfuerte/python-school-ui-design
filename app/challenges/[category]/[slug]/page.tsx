"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, Code } from "lucide-react";

// Mock data for challenges and solutions
const challenges = {
  easy: {
    "hello-world": {
      title: "Hello World",
      difficulty: "Easy",
      description:
        "Write a Python program that prints 'Hello, World!' to the console.",
      hints: [
        "Use the print() function to output text to the console.",
        "Remember that strings in Python can be enclosed in single or double quotes.",
      ],
      solution: `# Simple Hello World program in Python

print("Hello, World!")

# You can also use single quotes
# print('Hello, World!')

# Or use a variable
# message = "Hello, World!"
# print(message)
`,
    },
    "sum-two-numbers": {
      title: "Sum of Two Numbers",
      difficulty: "Easy",
      description:
        "Write a Python program that takes two numbers as input and prints their sum.",
      hints: [
        "Use the input() function to get user input.",
        "Convert the input strings to integers using int().",
        "Add the numbers and print the result.",
      ],
      solution: `# Program to add two numbers

# Get input from the user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Calculate the sum
sum = num1 + num2

# Print the result
print(f"The sum of {num1} and {num2} is {sum}")

# Alternative way using string formatting
# print("The sum of {} and {} is {}".format(num1, num2, sum))
`,
    },
    "even-odd": {
      title: "Even or Odd",
      difficulty: "Easy",
      description:
        "Write a Python program that determines whether a given number is even or odd.",
      hints: [
        "Use the modulo operator (%) to find the remainder when dividing by 2.",
        "If the remainder is 0, the number is even; otherwise, it's odd.",
      ],
      solution: `# Program to check if a number is even or odd

# Get input from the user
num = int(input("Enter a number: "))

# Check if the number is even or odd
if num % 2 == 0:
    print(f"{num} is an even number")
else:
    print(f"{num} is an odd number")
`,
    },
    "reverse-string": {
      title: "Reverse a String",
      difficulty: "Easy",
      description:
        "Write a Python program that takes a string as input and returns the reverse of that string.",
      hints: [
        "You can use string slicing with a negative step to reverse a string.",
        "Alternatively, you can convert the string to a list, reverse it, and join it back.",
      ],
      solution: `# Program to reverse a string

# Get input from the user
text = input("Enter a string: ")

# Method 1: Using string slicing
reversed_text = text[::-1]
print(f"Reversed string (using slicing): {reversed_text}")

# Method 2: Using reversed() function and join()
reversed_text2 = ''.join(reversed(text))
print(f"Reversed string (using reversed()): {reversed_text2}")

# Method 3: Using a loop (more explicit)
reversed_text3 = ""
for char in text:
    reversed_text3 = char + reversed_text3
print(f"Reversed string (using loop): {reversed_text3}")
`,
    },
    "count-vowels": {
      title: "Count Vowels",
      difficulty: "Easy",
      description:
        "Write a Python program that counts the number of vowels in a given string.",
      hints: [
        "Create a list or string containing all vowels (a, e, i, o, u).",
        "Iterate through each character in the input string and check if it's a vowel.",
        "Remember to handle both uppercase and lowercase vowels.",
      ],
      solution: `# Program to count vowels in a string

# Get input from the user
text = input("Enter a string: ")

# Convert to lowercase to handle both upper and lowercase vowels
text = text.lower()

# Define vowels
vowels = "aeiou"

# Initialize counter
count = 0

# Count vowels
for char in text:
    if char in vowels:
        count += 1

# Print result
print(f"Number of vowels in '{text}': {count}")

# Alternative using list comprehension
# count = sum(1 for char in text if char in vowels)
# print(f"Number of vowels in '{text}': {count}")
`,
    },
  },
  medium: {
    fibonacci: {
      title: "Fibonacci Sequence",
      difficulty: "Medium",
      description:
        "Write a Python program to generate the Fibonacci sequence up to n terms. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.",
      hints: [
        "Start with the first two terms: 0 and 1.",
        "To generate the next term, add the previous two terms.",
        "Use a loop to generate n terms of the sequence.",
      ],
      solution: `# Program to generate Fibonacci sequence

# Get the number of terms from the user
n = int(input("Enter the number of terms: "))

# Initialize the first two terms
a, b = 0, 1
count = 0

# Check if the number of terms is valid
if n <= 0:
    print("Please enter a positive integer")
elif n == 1:
    print("Fibonacci sequence up to", n, "term:")
    print(a)
else:
    print("Fibonacci sequence:")
    while count < n:
        print(a, end=" ")
        # Update values
        c = a + b
        a = b
        b = c
        count += 1

# Alternative using recursion
def fibonacci_recursive(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        fib = fibonacci_recursive(n - 1)
        fib.append(fib[-1] + fib[-2])
        return fib

# Uncomment to use recursive approach
# print("\\nUsing recursion:", fibonacci_recursive(n))
`,
    },
    "prime-checker": {
      title: "Prime Number Checker",
      difficulty: "Medium",
      description:
        "Write a Python program that checks whether a given number is prime or not. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.",
      hints: [
        "A number is prime if it's only divisible by 1 and itself.",
        "You only need to check divisibility up to the square root of the number.",
        "Special cases: 0 and 1 are not prime numbers.",
      ],
      solution: `# Program to check if a number is prime

import math

# Get input from the user
num = int(input("Enter a number: "))

# Check if the number is less than 2
if num < 2:
    print(f"{num} is not a prime number")
else:
    # Check for factors up to the square root of the number
    is_prime = True
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            is_prime = False
            break
    
    # Print the result
    if is_prime:
        print(f"{num} is a prime number")
    else:
        print(f"{num} is not a prime number")

# Alternative implementation using a function
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# Uncomment to use the function
# print(f"Using function: {num} is {'a prime' if is_prime(num) else 'not a prime'} number")
`,
    },
    palindrome: {
      title: "Palindrome Checker",
      difficulty: "Medium",
      description:
        "Write a Python program that checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.",
      hints: [
        "Remove all non-alphanumeric characters and convert to lowercase.",
        "Compare the processed string with its reverse.",
        "You can use string slicing with a negative step to reverse a string.",
      ],
      solution: `# Program to check if a string is a palindrome

import re

# Get input from the user
text = input("Enter a string: ")

# Remove non-alphanumeric characters and convert to lowercase
processed_text = re.sub(r'[^a-zA-Z0-9]', '', text.lower())

# Check if the string is a palindrome
is_palindrome = processed_text == processed_text[::-1]

# Print the result
if is_palindrome:
    print(f'"{text}" is a palindrome')
else:
    print(f'"{text}" is not a palindrome')

# Alternative implementation without using regex
def is_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    s = ''.join(char.lower() for char in s if char.isalnum())
    # Check if the string equals its reverse
    return s == s[::-1]

# Uncomment to use the function
# print(f'Using function: "{text}" is {"a palindrome" if is_palindrome(text) else "not a palindrome"}')
`,
    },
  },
  advanced: {
    "binary-search-tree": {
      title: "Binary Search Tree",
      difficulty: "Advanced",
      description:
        "Implement a binary search tree in Python with methods for insertion, deletion, and traversal (in-order, pre-order, and post-order).",
      hints: [
        "Create a Node class to represent each node in the tree.",
        "Implement recursive methods for insertion and traversal.",
        "For deletion, handle the three cases: node with no children, one child, or two children.",
      ],
      solution: `# Binary Search Tree Implementation in Python

class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None
    
    # Insert a new node
    def insert(self, key):
        self.root = self._insert_recursive(self.root, key)
    
    def _insert_recursive(self, root, key):
        # If the tree is empty, return a new node
        if root is None:
            return Node(key)
        
        # Otherwise, recur down the tree
        if key < root.key:
            root.left = self._insert_recursive(root.left, key)
        else:
            root.right = self._insert_recursive(root.right, key)
        
        # Return the unchanged node pointer
        return root
    
    # In-order traversal
    def inorder_traversal(self):
        result = []
        self._inorder_recursive(self.root, result)
        return result
    
    def _inorder_recursive(self, root, result):
        if root:
            self._inorder_recursive(root.left, result)
            result.append(root.key)
            self._inorder_recursive(root.right, result)
    
    # Pre-order traversal
    def preorder_traversal(self):
        result = []
        self._preorder_recursive(self.root, result)
        return result
    
    def _preorder_recursive(self, root, result):
        if root:
            result.append(root.key)
            self._preorder_recursive(root.left, result)
            self._preorder_recursive(root.right, result)
    
    # Post-order traversal
    def postorder_traversal(self):
        result = []
        self._postorder_recursive(self.root, result)
        return result
    
    def _postorder_recursive(self, root, result):
        if root:
            self._postorder_recursive(root.left, result)
            self._postorder_recursive(root.right, result)
            result.append(root.key)
    
    # Delete a node
    def delete(self, key):
        self.root = self._delete_recursive(self.root, key)
    
    def _delete_recursive(self, root, key):
        # Base case: If the tree is empty
        if root is None:
            return root
        
        # Recursive calls for ancestors of the node to be deleted
        if key < root.key:
            root.left = self._delete_recursive(root.left, key)
        elif key > root.key:
            root.right = self._delete_recursive(root.right, key)
        else:
            # Node with only one child or no child
            if root.left is None:
                return root.right
            elif root.right is None:
                return root.left
            
            # Node with two children: Get the inorder successor
            # (smallest in the right subtree)
            root.key = self._min_value_node(root.right)
            
            # Delete the inorder successor
            root.right = self._delete_recursive(root.right, root.key)
        
        return root
    
    def _min_value_node(self, node):
        current = node
        
        # Find the leftmost leaf
        while current.left is not None:
            current = current.left
        
        return current.key

# Example usage
bst = BinarySearchTree()
bst.insert(50)
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(70)
bst.insert(60)
bst.insert(80)

print("In-order traversal:", bst.inorder_traversal())
print("Pre-order traversal:", bst.preorder_traversal())
print("Post-order traversal:", bst.postorder_traversal())

bst.delete(20)
print("In-order traversal after deleting 20:", bst.inorder_traversal())

bst.delete(30)
print("In-order traversal after deleting 30:", bst.inorder_traversal())

bst.delete(50)
print("In-order traversal after deleting 50:", bst.inorder_traversal())
`,
    },
    dijkstra: {
      title: "Dijkstra's Algorithm",
      difficulty: "Advanced",
      description:
        "Implement Dijkstra's algorithm to find the shortest path between nodes in a graph. The algorithm should work with weighted edges and handle disconnected graphs.",
      hints: [
        "Use a priority queue to select the vertex with the minimum distance.",
        "Maintain a dictionary to store the shortest distance to each vertex.",
        "Update distances when a shorter path is found.",
      ],
      solution: `# Dijkstra's Algorithm Implementation in Python

import heapq
import math

def dijkstra(graph, start):
    """
    Implements Dijkstra's algorithm for finding the shortest path from a start node
    to all other nodes in a weighted graph.
    
    Args:
        graph: A dictionary where keys are nodes and values are dictionaries of neighbors and their edge weights
               {node: {neighbor1: weight1, neighbor2: weight2, ...}, ...}
        start: The starting node
        
    Returns:
        A tuple containing:
        - distances: Dictionary of shortest distances from start to each node
        - predecessors: Dictionary of predecessors in the shortest path
    """
    # Initialize distances with infinity for all nodes except the start node
    distances = {node: math.inf for node in graph}
    distances[start] = 0
    
    # Initialize predecessors dictionary
    predecessors = {node: None for node in graph}
    
    # Priority queue to store vertices that need to be processed
    # Each entry is (distance, node)
    priority_queue = [(0, start)]
    
    # Set to keep track of nodes that have been fully processed
    visited = set()
    
    while priority_queue:
        # Get the node with the smallest distance
        current_distance, current_node = heapq.heappop(priority_queue)
        
        # If we've already processed this node, skip it
        if current_node in visited:
            continue
        
        # Mark the node as visited
        visited.add(current_node)
        
        # If the current distance is greater than the known distance, skip
        if current_distance > distances[current_node]:
            continue
        
        # Check all neighbors of the current node
        for neighbor, weight in graph[current_node].items():
            # Calculate the distance to the neighbor through the current node
            distance = current_distance + weight
            
            # If we found a shorter path to the neighbor, update it
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                predecessors[neighbor] = current_node
                heapq.heappush(priority_queue, (distance, neighbor))
    
    return distances, predecessors

def reconstruct_path(predecessors, start, end):
    """
    Reconstructs the shortest path from start to end using the predecessors dictionary.
    
    Args:
        predecessors: Dictionary of predecessors in the shortest path
        start: The starting node
        end: The ending node
        
    Returns:
        A list representing the shortest path from start to end
    """
    path = []
    current = end
    
    # If there's no path, return an empty list
    if predecessors[end] is None and end != start:
        return path
    
    # Reconstruct the path by following predecessors from end to start
    while current is not None:
        path.append(current)
        current = predecessors[current]
    
    # Reverse the path to get it from start to end
    return path[::-1]

# Example usage
if __name__ == "__main__":
    # Example graph represented as an adjacency list with weights
    graph = {
        'A': {'B': 4, 'C': 2},
        'B': {'A': 4, 'C': 1, 'D': 5},
        'C': {'A': 2, 'B': 1, 'D': 8, 'E': 10},
        'D': {'B': 5, 'C': 8, 'E': 2, 'F': 6},
        'E': {'C': 10, 'D': 2, 'F': 3},
        'F': {'D': 6, 'E': 3},
    }
    
    start_node = 'A'
    end_node = 'F'
    
    # Run Dijkstra's algorithm
    distances, predecessors = dijkstra(graph, start_node)
    
    # Print the shortest distances from the start node to all other nodes
    print(f"Shortest distances from {start_node}:")
    for node, distance in distances.items():
        print(f"  To {node}: {distance}")
    
    # Reconstruct and print the shortest path to the end node
    path = reconstruct_path(predecessors, start_node, end_node)
    if path:
        print(f"Shortest path from {start_node} to {end_node}: {' -> '.join(path)}")
        print(f"Total distance: {distances[end_node]}")
    else:
        print(f"No path exists from {start_node} to {end_node}")
`,
    },
  },
};

type ChallengeParams = {
  params: {
    category: string;
    slug: string;
  };
};

export default function ChallengePage({ params }: ChallengeParams) {
  const { category, slug } = params;
  const [showSolution, setShowSolution] = useState(false);

  // Check if the category and challenge exist
  if (!challenges[category] || !challenges[category][slug]) {
    notFound();
  }

  const challenge = challenges[category][slug];

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href={`/challenges/${category}`}
            className="inline-flex items-center text-text2 hover:text-text1 mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
            Challenges
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text1">
                {challenge.title}
              </h1>
              <div className="mt-2 inline-block px-2 py-1 rounded-md bg-white/10 text-sm text-text2">
                {challenge.difficulty}
              </div>
            </div>

            <Button
              className="mt-4 md:mt-0 bg-cta1 hover:bg-cta1/90 text-black"
              onClick={() => setShowSolution(!showSolution)}
            >
              <Code className="h-4 w-4 mr-2" />
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
          </div>
        </div>

        <Card className="mb-8 bg-white/10 backdrop-blur-sm border-none">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-text1">
              Problem Description
            </h2>
            <p className="text-text2 mb-6">{challenge.description}</p>

            {challenge.hints && (
              <div>
                <h3 className="text-lg font-semibold mb-2 text-text1">
                  Hints
                </h3>
                <ul className="list-disc pl-5 text-text2">
                  {challenge.hints.map((hint, index) => (
                    <li key={index} className="mb-1">
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>

        {showSolution && (
          <Card className="mb-8 bg-white/10 backdrop-blur-sm border-none">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-text1">
                Solution
              </h2>
              <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                <pre className="text-text1 whitespace-pre-wrap">
                  <code>{challenge.solution}</code>
                </pre>
              </div>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
