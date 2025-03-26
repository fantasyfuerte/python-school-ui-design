import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"

// Define the valid categories
const validCategories = ["easy", "medium", "advanced"]

// Mock data for challenges
const challengesByCategory = {
  easy: [
    { id: 1, title: "Hello World", description: "Write your first Python program", slug: "hello-world" },
    {
      id: 2,
      title: "Sum of Two Numbers",
      description: "Calculate the sum of two input numbers",
      slug: "sum-two-numbers",
    },
    { id: 3, title: "Even or Odd", description: "Determine if a number is even or odd", slug: "even-odd" },
    { id: 4, title: "Reverse a String", description: "Reverse the characters in a string", slug: "reverse-string" },
    { id: 5, title: "Count Vowels", description: "Count the number of vowels in a string", slug: "count-vowels" },
  ],
  medium: [
    {
      id: 1,
      title: "Fibonacci Sequence",
      description: "Generate the Fibonacci sequence up to n terms",
      slug: "fibonacci",
    },
    { id: 2, title: "Prime Number Checker", description: "Check if a number is prime", slug: "prime-checker" },
    { id: 3, title: "Palindrome Checker", description: "Check if a string is a palindrome", slug: "palindrome" },
    {
      id: 4,
      title: "List Comprehension",
      description: "Use list comprehension to filter even numbers",
      slug: "list-comprehension",
    },
    {
      id: 5,
      title: "Dictionary Manipulation",
      description: "Perform operations on a dictionary",
      slug: "dictionary-ops",
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
    {
      id: 3,
      title: "Multithreading",
      description: "Solve a problem using Python's threading module",
      slug: "multithreading",
    },
    {
      id: 4,
      title: "Decorator Pattern",
      description: "Implement the decorator pattern in Python",
      slug: "decorator-pattern",
    },
    {
      id: 5,
      title: "Web Scraping",
      description: "Extract data from a website using BeautifulSoup",
      slug: "web-scraping",
    },
  ],
}

type CategoryParams = {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryParams) {
  const { category } = params

  // Check if the category is valid
  if (!validCategories.includes(category)) {
    notFound()
  }

  // Get challenges for the category
  const challenges = challengesByCategory[category as keyof typeof challengesByCategory]

  // Title case the category name
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#d6ceaa]">{categoryTitle} Challenges</h1>
          <p className="text-[#a69a90]">
            {category === "easy" && "Perfect for beginners. Build your Python foundation with these simple problems."}
            {category === "medium" &&
              "For intermediate programmers. These challenges require deeper thinking and problem-solving skills."}
            {category === "advanced" &&
              "Complex problems for experienced Python developers. Test your advanced programming knowledge."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="bg-white/10 backdrop-blur-sm border-none text-[#d6ceaa]">
              <CardHeader>
                <CardTitle>{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#a69a90]">{challenge.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#ecba09] hover:bg-[#ecba09]/90 text-black" asChild>
                  <Link href={`/challenges/${category}/${challenge.slug}`}>Solve Challenge</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

